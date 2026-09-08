import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ExternalLink, Lock, Send } from 'lucide-react';

export default function PortfolioShowcase({ t }) {
  const showcaseRef = useRef(null);

  useEffect(() => {
    const cards = showcaseRef.current?.querySelectorAll('.project-card');
    if (!cards) return;
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
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
    <section id="showcase" ref={showcaseRef} className="container" style={{ position: 'relative' }}>
      
      {/* Section Title */}
      <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
        <h2 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)', fontWeight: 700, marginBottom: '16px' }}>
          {t.showcase.title_pre}{' '}
          <span className="text-gradient">
            {t.showcase.title_highlight}
          </span>
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
          {t.showcase.subtitle}
        </p>
      </div>

      {/* Grid of Projects (2 columns on desktop for cinematic presentation) */}
      <div className="showcase-grid">
        {t.showcase.items.map((project, idx) => (
          <div
            key={idx}
            className="glass-card project-card"
            style={{
              padding: '0',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '20px',
              background: '#ffffff',
              border: '1px solid rgba(25, 24, 22, 0.09)',
              boxShadow: '0 4px 20px -2px rgba(25, 24, 22, 0.04)'
            }}
          >
            {/* macOS Browser Window Frame */}
            <div style={{
              background: '#1c1b18',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '11px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              userSelect: 'none'
            }}>
              {/* Traffic Light Window Controls */}
              <div style={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
              </div>

              {/* URL Address Bar */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  padding: '4px 14px',
                  borderRadius: '100px',
                  fontSize: '0.74rem',
                  fontFamily: 'monospace',
                  color: '#d4d0c8',
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  letterSpacing: '0.01em',
                  transition: 'background 0.2s, color 0.2s'
                }}
                className="browser-url-pill"
                title={`Open ${project.browserUrl}`}
              >
                <Lock size={10} color="#10b981" />
                <span>{project.browserUrl}</span>
              </a>

              {/* Placeholder to keep address bar centered */}
              <div style={{ width: '44px' }} />
            </div>

            {/* Visual Screenshot / Mockup Preview */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="project-preview-wrap"
              style={{
                display: 'block',
                position: 'relative',
                aspectRatio: '16 / 10',
                overflow: 'hidden',
                background: '#0e0d0b',
                textDecoration: 'none'
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="project-preview-img"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                  transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
              <div
                className="preview-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(25, 24, 22, 0.25)',
                  opacity: 0,
                  transition: 'opacity 0.25s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span style={{
                  background: '#ffffff',
                  color: '#191816',
                  padding: '8px 16px',
                  borderRadius: '100px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)'
                }}>
                  <span>{project.isExternal ? (t.showcase.btn_view_site || 'View Site') : (t.showcase.btn_view_demo || 'View Demo')}</span>
                  <ExternalLink size={13} />
                </span>
              </div>
            </a>

            {/* Project Details Content */}
            <div style={{
              padding: '26px 28px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flex: 1,
              gap: '20px'
            }}>
              <div>
                {/* Meta Header: Category & Production Status */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--accent-blue)',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {project.category}
                  </span>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.72rem',
                    color: '#059669',
                    background: 'rgba(16, 185, 129, 0.08)',
                    padding: '3px 9px',
                    borderRadius: '100px',
                    border: '1px solid rgba(16, 185, 129, 0.2)'
                  }}>
                    <span className="pulse-dot" style={{ width: '5px', height: '5px' }} />
                    <span>{t.showcase.status_live || 'Production Live'}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  marginBottom: '10px',
                  lineHeight: 1.3,
                  color: 'var(--text-primary)'
                }}>
                  {project.title}
                </h3>
                
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  marginBottom: '16px'
                }}>
                  {project.desc}
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.74rem',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: 'rgba(25, 24, 22, 0.04)',
                        color: 'var(--text-secondary)',
                        border: '1px solid rgba(25, 24, 22, 0.06)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dual Action Buttons */}
              <div style={{
                marginTop: '4px',
                paddingTop: '18px',
                borderTop: '1px solid rgba(25, 24, 22, 0.06)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '12px'
              }}>
                {/* 1) View Site / Demo */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    fontSize: '0.84rem',
                    padding: '10px 16px'
                  }}
                >
                  <span>{project.isExternal ? (t.showcase.btn_view_site || 'Смотреть сайт') : (t.showcase.btn_view_demo || 'Демо в Telegram')}</span>
                  <ExternalLink size={14} />
                </a>

                {/* 2) 1-Click Order Similar Project via Telegram */}
                <a
                  href={`https://t.me/anvarelecant?text=${encodeURIComponent(project.orderMsg)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    fontSize: '0.84rem',
                    padding: '10px 16px',
                    background: '#191816',
                    color: '#ffffff',
                    border: '1px solid #191816'
                  }}
                >
                  <span>{t.showcase.btn_order_similar || 'Хочу похожий проект'}</span>
                  <Send size={13} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .showcase-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          width: 100%;
        }
        .project-preview-wrap:hover .project-preview-img {
          transform: scale(1.035);
        }
        .project-preview-wrap:hover .preview-overlay {
          opacity: 1;
        }
        .browser-url-pill:hover {
          background: rgba(255, 255, 255, 0.14) !important;
          color: #ffffff !important;
        }
        @media (max-width: 980px) {
          .showcase-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
}
