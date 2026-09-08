import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Check, Send, Zap, Calculator, Clock, DollarSign, ShieldCheck } from 'lucide-react';

export default function CostCalculator({ t }) {
  const [selectedType, setSelectedType] = useState('bundle');
  const [selectedAddons, setSelectedAddons] = useState(['three_custom', 'i18n']);
  const [customPhone, setCustomPhone] = useState('');

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(item => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const currentTypeObj = t.calculator.types.find(item => item.id === selectedType) || t.calculator.types[0];
  
  // Calculate total price and days
  const basePrice = currentTypeObj.basePrice;
  const addonsPrice = selectedAddons.reduce((acc, addonId) => {
    const addon = t.calculator.addons.find(a => a.id === addonId);
    return acc + (addon ? addon.price : 0);
  }, 0);
  const totalPriceUSD = basePrice + addonsPrice;
  const totalPriceUZS = (totalPriceUSD * 12850).toLocaleString('ru-RU');

  const baseDays = currentTypeObj.days;
  const addonsDays = selectedAddons.reduce((acc, addonId) => {
    const addon = t.calculator.addons.find(a => a.id === addonId);
    return acc + (addon ? addon.days : 0);
  }, 0);
  const totalDays = Math.max(2, baseDays + addonsDays);

  const handleStartProject = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }

    const addonNames = selectedAddons
      .map(id => t.calculator.addons.find(a => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const messageText = encodeURIComponent(
      `Здравствуйте! Хочу заказать разработку в Synapse Studio:\n` +
      `• Продукт: ${currentTypeObj.name} ($${currentTypeObj.basePrice})\n` +
      `• Опции: ${addonNames || 'Без доп. опций'}\n` +
      `• Расчетный бюджет: $${totalPriceUSD} (~${totalPriceUZS} сум)\n` +
      `• Срок: ~${totalDays} дней\n` +
      (customPhone ? `• Мой контакт: ${customPhone}\n` : '') +
      `\nГотов обсудить детали!`
    );

    // Direct Telegram link
    window.open(`https://t.me/anvarelecant?text=${messageText}`, '_blank');
  };

  return (
    <section id="calculator" className="container" style={{ position: 'relative' }}>
      
      {/* Section Header */}
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
        <div className="badge-neon" style={{ marginBottom: '16px' }}>
          <Calculator size={14} color="#06b6d4" />
          <span>Interactive Project Estimator</span>
        </div>
        <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 800, marginBottom: '20px' }}>
          {t.calculator.title_pre}{' '}
          <span className="text-gradient">
            {t.calculator.title_highlight}
          </span>
        </h2>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          {t.calculator.subtitle}
        </p>
      </div>

      {/* Main Calculator Layout: Configurator on left, Summary on right */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '32px',
        alignItems: 'start'
      }}>
        
        {/* Left Side: Choices */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          {/* Step 1: Base Type */}
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '16px', color: '#cbd5e1' }}>
              {t.calculator.types_title}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {t.calculator.types.map((type) => {
                const isSelected = selectedType === type.id;
                return (
                  <div
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className="glass-card"
                    style={{
                      padding: '20px 24px',
                      cursor: 'pointer',
                      borderRadius: '16px',
                      border: isSelected ? '1.5px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.08)',
                      background: isSelected ? 'rgba(6, 182, 212, 0.08)' : 'rgba(12, 16, 28, 0.7)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontWeight: 700, fontSize: '1.05rem', color: isSelected ? '#ffffff' : 'var(--text-primary)' }}>
                          {type.name}
                        </span>
                        {type.best && (
                          <span style={{
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            padding: '2px 8px',
                            borderRadius: '100px',
                            background: 'var(--accent-gradient)',
                            color: '#ffffff'
                          }}>
                            BEST VALUE
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                        {type.desc}
                      </div>
                    </div>

                    <div style={{ textAlign: 'right', flexShrink: 0, paddingLeft: '16px' }}>
                      <div style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--accent-cyan)' }}>
                        от ${type.basePrice}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        ~{type.days} {t.calculator.est_days}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 2: Add-ons */}
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '16px', color: '#cbd5e1' }}>
              {t.calculator.addons_title}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {t.calculator.addons.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className="glass-card"
                    style={{
                      padding: '16px 20px',
                      cursor: 'pointer',
                      borderRadius: '14px',
                      border: isChecked ? '1px solid rgba(168, 85, 247, 0.5)' : '1px solid rgba(255, 255, 255, 0.06)',
                      background: isChecked ? 'rgba(168, 85, 247, 0.08)' : 'rgba(12, 16, 28, 0.5)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '6px',
                        border: isChecked ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
                        background: isChecked ? 'var(--accent-violet)' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s ease'
                      }}>
                        {isChecked && <Check size={14} color="#ffffff" strokeWidth={3} />}
                      </div>
                      <span style={{ fontSize: '0.92rem', fontWeight: 500, color: isChecked ? '#ffffff' : 'var(--text-secondary)' }}>
                        {addon.name}
                      </span>
                    </div>

                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#cbd5e1' }}>
                      +${addon.price}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Side: Calculation Summary Card */}
        <div className="glass-panel" style={{
          padding: '36px',
          position: 'sticky',
          top: '100px',
          background: 'rgba(14, 18, 32, 0.85)',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(99, 102, 241, 0.15)'
        }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <Zap size={22} color="#06b6d4" />
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff' }}>
              {t.calculator.result_title}
            </h3>
          </div>

          <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.08)', marginBottom: '24px' }} />

          {/* Budget Display */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {t.calculator.est_price}
            </div>
            <div style={{
              fontSize: 'clamp(2.4rem, 4vw, 3.2rem)',
              fontWeight: 900,
              fontFamily: 'var(--font-display)',
              color: '#ffffff',
              margin: '6px 0'
            }}>
              <span style={{ color: 'var(--accent-cyan)' }}>$</span>{totalPriceUSD}
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              ≈ {totalPriceUZS} UZS
            </div>
          </div>

          {/* Timeline Display */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '14px 18px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '28px'
          }}>
            <Clock size={20} color="#a855f7" />
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{t.calculator.est_time}</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
                ~{totalDays} {t.calculator.est_days}
              </div>
            </div>
          </div>

          {/* Contact Input */}
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="Ваш Telegram @username или телефон"
              value={customPhone}
              onChange={e => setCustomPhone(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 18px',
                borderRadius: '12px',
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                fontSize: '0.92rem',
                outline: 'none'
              }}
            />
          </div>

          {/* Action Button */}
          <button
            onClick={handleStartProject}
            className="btn-primary"
            style={{
              width: '100%',
              padding: '16px',
              fontSize: '1.05rem',
              display: 'flex',
              justifyContent: 'center',
              gap: '10px'
            }}
          >
            <Send size={18} />
            <span>{t.calculator.cta_tg}</span>
          </button>

          <p style={{
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            textAlign: 'center',
            marginTop: '12px',
            lineHeight: 1.4
          }}>
            {t.calculator.cta_hint}
          </p>

          <div style={{
            marginTop: '20px',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.78rem',
            color: '#10b981'
          }}>
            <ShieldCheck size={16} />
            <span>Фиксированный договор, гарантия и поэтапная оплата</span>
          </div>

        </div>

      </div>
    </section>
  );
}
