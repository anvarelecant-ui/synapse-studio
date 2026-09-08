import React from 'react';
import { Send, ArrowUpRight } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './BrandIcons';

export default function Contact({ t }) {
  const tgUrl = "https://t.me/anvarelecant";
  const linkedinUrl = "https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B2%D0%B0%D1%80-undefined-110b48417/";
  const githubUrl = "https://github.com/anvarelecant-ui";

  return (
    <footer id="contact" style={{
      position: 'relative',
      paddingTop: '80px',
      paddingBottom: '50px',
      marginTop: '50px',
      borderTop: '1px solid rgba(25, 24, 22, 0.08)',
      background: 'rgba(255, 255, 255, 0.5)',
      backdropFilter: 'blur(16px)'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 45px' }}>
          <h2 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)', fontWeight: 700, marginBottom: '16px' }}>
            {t.contact.title_pre}{' '}
            <span className="text-gradient">
              {t.contact.title_highlight}
            </span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            {t.contact.subtitle}
          </p>
        </div>

        {/* Central Contact Card */}
        <div className="glass-panel" style={{
          maxWidth: '780px',
          margin: '0 auto 50px',
          padding: '40px 32px',
          background: '#ffffff',
          border: '1px solid rgba(25, 24, 22, 0.08)',
          boxShadow: '0 8px 30px rgba(25, 24, 22, 0.04)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '26px'
        }}>
          
          {/* Primary CTA Button */}
          <a
            href={tgUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{
              padding: '16px 42px',
              fontSize: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <Send size={18} />
            <span>{t.contact.cta_btn || t.contact.tg_btn}</span>
            <ArrowUpRight size={16} />
          </a>

          <div style={{ width: '100%', height: '1px', background: 'rgba(25, 24, 22, 0.06)' }} />

          {/* Direct Channels Links Grid (No raw usernames exposed) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            width: '100%'
          }}>
            {/* Telegram */}
            <a
              href={tgUrl}
              target="_blank"
              rel="noreferrer"
              className="glass-card"
              style={{
                padding: '16px 20px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: 'var(--text-primary)',
                border: '1px solid rgba(25, 24, 22, 0.08)'
              }}
            >
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(2, 132, 199, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Send size={16} color="#0284c7" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: 600 }}>{t.contact.tg_label}</div>
                <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>{t.contact.tg_action}</div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="glass-card"
              style={{
                padding: '16px 20px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: 'var(--text-primary)',
                border: '1px solid rgba(25, 24, 22, 0.08)'
              }}
            >
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(10, 102, 194, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <LinkedInIcon size={16} color="#0a66c2" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: 600 }}>{t.contact.linkedin_label}</div>
                <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>{t.contact.linkedin_action}</div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="glass-card"
              style={{
                padding: '16px 20px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: 'var(--text-primary)',
                border: '1px solid rgba(25, 24, 22, 0.08)'
              }}
            >
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(25, 24, 22, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <GitHubIcon size={16} color="#191816" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: 600 }}>{t.contact.github_label}</div>
                <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>{t.contact.github_action}</div>
              </div>
            </a>
          </div>

        </div>

        {/* Bottom Rights */}
        <div style={{
          paddingTop: '20px',
          borderTop: '1px solid rgba(25, 24, 22, 0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.82rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} {t.contact.rights}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="pulse-dot" />
            <span>{t.nav.status}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
