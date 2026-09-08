import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Check, ArrowUpRight } from 'lucide-react';

export default function Services({ t }) {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%'
          }
        }
      );
    });
  }, [t]);

  return (
    <section id="services" className="container" style={{ position: 'relative' }}>
      
      {/* Section Header */}
      <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
        <h2 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)', fontWeight: 700, marginBottom: '16px' }}>
          {t.services.title_pre}{' '}
          <span className="text-gradient">
            {t.services.title_highlight}
          </span>
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
          {t.services.subtitle}
        </p>
      </div>

      {/* 4 Cards strictly in 1 ROW on desktop! */}
      <div className="services-4-grid">
        {t.services.items.map((svc, index) => (
          <div
            key={index}
            ref={el => cardsRef.current[index] = el}
            className="glass-card"
            style={{
              padding: '28px 22px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '20px',
              borderRadius: '18px',
              background: '#ffffff',
              border: '1px solid rgba(25, 24, 22, 0.08)',
              boxShadow: '0 4px 20px -2px rgba(25, 24, 22, 0.03)'
            }}
          >
            <div>
              {/* Top Header: Monospace 01-04 Number & Category Tag */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '0.05em'
                }}>
                  {svc.num}
                </span>

                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  padding: '3px 10px',
                  borderRadius: '100px',
                  background: 'rgba(25, 24, 22, 0.04)',
                  color: 'var(--text-secondary)',
                  border: '1px solid rgba(25, 24, 22, 0.08)'
                }}>
                  {svc.tag}
                </span>
              </div>

              {/* Title & Description */}
              <h3 style={{ fontSize: '1.18rem', fontWeight: 700, marginBottom: '10px', lineHeight: 1.35, color: 'var(--text-primary)' }}>
                {svc.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.55, marginBottom: '16px' }}>
                {svc.desc}
              </p>

              {/* Target Audience Badge */}
              {svc.audience && (
                <div style={{
                  marginBottom: '18px',
                  padding: '9px 12px',
                  borderRadius: '10px',
                  background: 'rgba(2, 132, 199, 0.04)',
                  border: '1px solid rgba(2, 132, 199, 0.12)',
                  fontSize: '0.78rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.45
                }}>
                  <strong style={{
                    color: 'var(--accent-blue)',
                    display: 'block',
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '3px'
                  }}>
                    {t.services.for_whom_label || 'Для кого:'}
                  </strong>
                  <span>{svc.audience}</span>
                </div>
              )}

              {/* Features List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {svc.features.map((feat, fIdx) => (
                  <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.81rem', color: 'var(--text-secondary)' }}>
                    <Check size={13} color="#0284c7" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ lineHeight: 1.4 }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct 1-Click Order Button via Telegram */}
            <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(25, 24, 22, 0.06)' }}>
              <a
                href={`https://t.me/anvarelecant?text=${encodeURIComponent(svc.orderMsg || '')}`}
                target="_blank"
                rel="noreferrer"
                className="service-cta-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: 'rgba(25, 24, 22, 0.03)',
                  border: '1px solid rgba(25, 24, 22, 0.08)',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>{svc.btnText || t.nav.contact}</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .services-4-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          width: 100%;
        }
        .service-cta-btn:hover {
          background: #191816 !important;
          color: #ffffff !important;
          border-color: #191816 !important;
        }
        @media (max-width: 1100px) {
          .services-4-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .services-4-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
