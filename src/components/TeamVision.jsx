import React from 'react';
import { Sparkles, UserCheck, Shield, Rocket } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './BrandIcons';

export default function TeamVision({ t }) {
  return (
    <section id="team" className="container" style={{ position: 'relative' }}>
      
      {/* Section Header */}
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
        <div className="badge-neon" style={{ marginBottom: '16px' }}>
          <Shield size={14} color="#06b6d4" />
          <span>Studio Values & Craft</span>
        </div>
        <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 800, marginBottom: '20px' }}>
          {t.team.title_pre}{' '}
          <span className="text-gradient">
            {t.team.title_highlight}
          </span>
        </h2>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          {t.team.subtitle}
        </p>
      </div>

      {/* Studio Manifesto Box */}
      <div className="glass-panel" style={{
        padding: '40px 48px',
        marginBottom: '50px',
        background: 'rgba(14, 19, 34, 0.75)',
        border: '1px solid rgba(99, 102, 241, 0.25)',
        position: 'relative'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <Sparkles size={20} color="#a855f7" />
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff' }}>
            {t.team.manifesto_title}
          </h3>
        </div>
        <p style={{
          fontSize: '1.05rem',
          color: '#cbd5e1',
          lineHeight: 1.75,
          fontWeight: 400
        }}>
          {t.team.manifesto_text}
        </p>
      </div>

      {/* Founders Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px'
      }}>
        {t.team.members.map((member, idx) => (
          <div
            key={idx}
            className="glass-card"
            style={{
              padding: '36px',
              borderRadius: '24px',
              background: 'rgba(12, 16, 28, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '20px'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: idx === 0 ? 'var(--accent-gradient)' : 'linear-gradient(135deg, #3b82f6, #10b981)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 900,
                  fontSize: '1.4rem',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
                }}>
                  {member.name.charAt(0)}
                </div>

                <div>
                  <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
                    {member.name}
                  </h4>
                  <div style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                    {member.role}
                  </div>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.65 }}>
                {member.bio}
              </p>
            </div>

            {/* Social Links for Anvar */}
            {member.linkedin && (
              <div style={{ display: 'flex', gap: '12px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{
                    padding: '8px 16px',
                    fontSize: '0.82rem',
                    gap: '8px'
                  }}
                >
                  <LinkedInIcon size={15} color="#0a66c2" />
                  <span>LinkedIn</span>
                </a>

                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                    style={{
                      padding: '8px 16px',
                      fontSize: '0.82rem',
                      gap: '8px'
                    }}
                  >
                    <GitHubIcon size={15} color="#ffffff" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
