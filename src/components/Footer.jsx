import React from 'react';
import { Layers, Send, MessageCircle, Mail, MapPin } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './BrandIcons';

export default function Footer({ t }) {
  return (
    <footer style={{
      position: 'relative',
      paddingTop: '80px',
      paddingBottom: '50px',
      marginTop: '80px',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      background: 'rgba(5, 7, 12, 0.95)',
      backdropFilter: 'blur(20px)'
    }}>
      <div className="container">
        
        {/* Pre-footer Callout Banner */}
        <div className="glass-panel" style={{
          padding: '50px 40px',
          marginBottom: '60px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.12) 0%, rgba(99, 102, 241, 0.15) 50%, rgba(168, 85, 247, 0.12) 100%)',
          border: '1px solid rgba(99, 102, 241, 0.3)'
        }}>
          <h3 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, maxWidth: '780px' }}>
            {t.footer.ready_title}
          </h3>

          <a
            href="https://t.me/share/url?url=https://digitalflow.studio&text=Здравствуйте!%20Хочу%20обсудить%20проект%20сайта/бота."
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{
              padding: '16px 36px',
              fontSize: '1.05rem'
            }}
          >
            <Send size={18} />
            <span>{t.footer.ready_btn}</span>
          </a>
        </div>

        {/* Footer Navigation & Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'var(--accent-gradient)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Layers size={18} color="#ffffff" />
              </div>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.15rem',
                color: '#ffffff'
              }}>
                DIGITAL<span style={{ color: 'var(--accent-cyan)' }}>FLOW</span>
              </span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>
              {t.footer.brand_sub}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              <MapPin size={15} color="var(--accent-cyan)" />
              <span>Tashkent, Uzbekistan / Global Remote</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '18px' }}>
              {t.nav.services}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <a href="#services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Interactive 3D Web</a>
              <a href="#services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Telegram Ecosystems</a>
              <a href="#showcase" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{t.nav.showcase}</a>
              <a href="#inquiry" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', fontWeight: 500 }}>{t.nav.inquiry}</a>
            </div>
          </div>

          {/* Direct Channels */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '18px' }}>
              {t.footer.contact_direct}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <a
                href="https://t.me/share/url?url=https://digitalflow.studio&text=Здравствуйте!"
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', textDecoration: 'none' }}
              >
                <Send size={16} color="var(--accent-cyan)" />
                <span>Telegram Direct</span>
              </a>

              <a
                href="https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B2%D0%B0%D1%80-undefined-110b48417/"
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', textDecoration: 'none' }}
              >
                <LinkedInIcon size={16} color="#0a66c2" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href="https://github.com/anvarelecant-ui"
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', textDecoration: 'none' }}
              >
                <GitHubIcon size={16} color="#ffffff" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.82rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} Synapse Studio. {t.footer?.rights || "Все права защищены."}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
            <span>AI-Native Orchestrated Development</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
