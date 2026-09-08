import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Shield, ArrowUpRight } from 'lucide-react';

export default function ProjectInquiry({ t }) {
  const [selectedScope, setSelectedScope] = useState('web');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const currentScope = t.inquiry.scopes.find(s => s.id === selectedScope) || t.inquiry.scopes[0];

  const handleSendTelegram = () => {
    const message = encodeURIComponent(
      `Здравствуйте! Хочу обсудить проект с Synapse Studio:\n` +
      `• Направление: ${currentScope.name}\n` +
      (name ? `• Заказчик: ${name}\n` : '') +
      (contact ? `• Контакт: ${contact}\n` : '') +
      (details ? `• Детали: ${details}\n` : '') +
      `\nБуду рад обсудить детали реализации.`
    );

    window.open(`https://t.me/anvarelecant?text=${message}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="container" style={{ position: 'relative' }}>
      
      {/* Section Header */}
      <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
        <h2 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)', fontWeight: 700, marginBottom: '18px' }}>
          {t.inquiry.title_pre}{' '}
          <span className="text-gradient">
            {t.inquiry.title_highlight}
          </span>
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
          {t.inquiry.subtitle}
        </p>
      </div>

      {/* Main Inquiry Card */}
      <div className="glass-panel" style={{
        maxWidth: '980px',
        margin: '0 auto',
        padding: '48px 40px',
        background: 'rgba(12, 16, 26, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.09)'
      }}>
        
        {/* Step 1: Direction / Scope Selector */}
        <div style={{ marginBottom: '36px' }}>
          <label style={{
            display: 'block',
            fontSize: '0.9rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: 'var(--accent-cyan)',
            marginBottom: '16px',
            fontFamily: 'var(--font-heading)'
          }}>
            {t.inquiry.scope_title}
          </label>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '12px'
          }}>
            {t.inquiry.scopes.map((scope) => {
              const isSelected = selectedScope === scope.id;
              return (
                <div
                  key={scope.id}
                  onClick={() => setSelectedScope(scope.id)}
                  style={{
                    padding: '16px 18px',
                    borderRadius: '14px',
                    cursor: 'pointer',
                    background: isSelected ? 'rgba(56, 189, 248, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                    border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.08)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                    marginBottom: '4px'
                  }}>
                    {scope.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                    {scope.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 2: Clean Form Fields */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 500 }}>
              {t.inquiry.form_name}
            </label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Анвар / Tech Startup"
              style={{
                width: '100%',
                padding: '14px 18px',
                borderRadius: '12px',
                background: 'rgba(0, 0, 0, 0.35)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                fontSize: '0.92rem',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 500 }}>
              {t.inquiry.form_contact}
            </label>
            <input
              type="text"
              value={contact}
              onChange={e => setContact(e.target.value)}
              placeholder="@username или телефон"
              style={{
                width: '100%',
                padding: '14px 18px',
                borderRadius: '12px',
                background: 'rgba(0, 0, 0, 0.35)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                fontSize: '0.92rem',
                outline: 'none'
              }}
            />
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 500 }}>
            {t.inquiry.form_details}
          </label>
          <textarea
            rows="3"
            value={details}
            onChange={e => setDetails(e.target.value)}
            placeholder="Опишите ваши цели, пожелания по визуалу или приложите ссылку на текущий сайт..."
            style={{
              width: '100%',
              padding: '14px 18px',
              borderRadius: '12px',
              background: 'rgba(0, 0, 0, 0.35)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#ffffff',
              fontSize: '0.92rem',
              outline: 'none',
              resize: 'vertical'
            }}
          />
        </div>

        {/* Action Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
            <Shield size={16} color="var(--accent-cyan)" />
            <span>{t.inquiry.note}</span>
          </div>

          <button
            onClick={handleSendTelegram}
            className="btn-primary"
            style={{
              padding: '15px 34px',
              fontSize: '0.95rem'
            }}
          >
            <Send size={16} />
            <span>{t.inquiry.btn_tg}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
