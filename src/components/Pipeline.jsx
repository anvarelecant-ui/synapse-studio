import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Pipeline({ t }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const steps = containerRef.current.querySelectorAll('.pipeline-step');
    steps.forEach((step, i) => {
      gsap.fromTo(
        step,
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 85%'
          }
        }
      );
    });
  }, [t]);

  return (
    <section id="pipeline" ref={containerRef} className="container" style={{ position: 'relative' }}>
      
      {/* Section Header */}
      <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
        <h2 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)', fontWeight: 700, marginBottom: '16px' }}>
          {t.pipeline.title_pre}{' '}
          <span className="text-gradient">
            {t.pipeline.title_highlight}
          </span>
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
          {t.pipeline.subtitle}
        </p>
      </div>

      {/* Steps Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px',
        position: 'relative'
      }}>
        {t.pipeline.steps.map((step, idx) => (
          <div
            key={idx}
            className="glass-card pipeline-step"
            style={{
              padding: '30px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              borderRadius: '18px',
              background: '#ffffff',
              border: '1px solid rgba(25, 24, 22, 0.08)',
              position: 'relative'
            }}
          >
            {/* Step Number */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{
                fontSize: '1.8rem',
                fontWeight: 800,
                fontFamily: 'var(--font-display)',
                color: 'var(--text-primary)'
              }}>
                {step.num}
              </span>
            </div>

            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.35 }}>
              {step.title}
            </h3>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
