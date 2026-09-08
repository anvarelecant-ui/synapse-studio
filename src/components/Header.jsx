import React, { useState, useEffect } from 'react';
import { Workflow, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header({ lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      padding: scrolled ? '12px 24px' : '20px 24px',
      zIndex: 100,
      transition: 'all 0.3s ease',
      pointerEvents: 'none'
    }}>
      <div style={{
        maxWidth: '1360px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px'
      }}>
        {/* Brand Logo */}
        <a href="#" style={{
          textDecoration: 'none',
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div className="glass-card" style={{
            padding: '8px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            borderRadius: '100px',
            background: '#ffffff',
            border: '1px solid rgba(25, 24, 22, 0.08)'
          }}>
            <div style={{
              width: '26px',
              height: '26px',
              borderRadius: '7px',
              background: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Workflow size={15} color="#ffffff" />
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '0.88rem',
                letterSpacing: '-0.01em',
                color: 'var(--text-primary)'
              }}>
                SYNAPSE<span style={{ color: 'var(--accent-blue)' }}>STUDIO</span>
              </div>
            </div>
          </div>

          {/* Desktop Status Pill */}
          <div className="glass-card status-desktop-pill" style={{
            padding: '6px 14px',
            borderRadius: '100px',
            display: 'none',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.78rem',
            background: '#ffffff',
            color: 'var(--text-secondary)',
            border: '1px solid rgba(25, 24, 22, 0.08)'
          }}>
            <span className="pulse-dot" />
            <span>{t.nav.status}</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="glass-card desktop-nav" style={{
          padding: '8px 24px',
          borderRadius: '100px',
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          pointerEvents: 'auto',
          background: '#ffffff',
          border: '1px solid rgba(25, 24, 22, 0.08)'
        }}>
          <a href="#services" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.86rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#191816'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
            {t.nav.services}
          </a>
          <a href="#showcase" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.86rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#191816'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
            {t.nav.showcase}
          </a>
          <a href="#pipeline" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.86rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#191816'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
            {t.nav.pipeline}
          </a>
          <a href="#contact" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontSize: '0.86rem', fontWeight: 600, transition: 'color 0.2s' }}>
            {t.nav.contact}
          </a>
        </nav>

        {/* Right Controls: Language Switcher & Direct CTA */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          pointerEvents: 'auto'
        }}>
          {/* Language Switcher */}
          <div className="glass-card" style={{
            padding: '4px',
            borderRadius: '100px',
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
            background: '#ffffff',
            border: '1px solid rgba(25, 24, 22, 0.08)'
          }}>
            {['ru', 'en', 'uz'].map((item) => (
              <button
                key={item}
                onClick={() => setLang(item)}
                style={{
                  background: lang === item ? 'var(--text-primary)' : 'transparent',
                  color: lang === item ? '#ffffff' : 'var(--text-muted)',
                  border: 'none',
                  padding: '4px 10px',
                  borderRadius: '100px',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Direct CTA */}
          <a
            href="#contact"
            className="btn-primary desktop-cta"
            style={{
              padding: '10px 20px',
              fontSize: '0.84rem'
            }}
          >
            <span>{t.nav.cta}</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle-btn glass-card"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: '#ffffff',
              border: '1px solid rgba(25, 24, 22, 0.08)',
              borderRadius: '10px',
              padding: '8px',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="glass-panel" style={{
          marginTop: '12px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          pointerEvents: 'auto',
          background: '#ffffff',
          border: '1px solid rgba(25, 24, 22, 0.1)'
        }}>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 500 }}>
            {t.nav.services}
          </a>
          <a href="#showcase" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 500 }}>
            {t.nav.showcase}
          </a>
          <a href="#pipeline" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 500 }}>
            {t.nav.pipeline}
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 600 }}>
            {t.nav.contact}
          </a>
          <div style={{ height: '1px', background: 'rgba(25, 24, 22, 0.08)', margin: '4px 0' }} />
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary"
            style={{ width: '100%', textAlign: 'center', marginTop: '6px' }}
          >
            {t.nav.cta}
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .status-desktop-pill {
            display: flex !important;
          }
        }
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-cta {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
