import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero({ t }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll('.animate-hero');
    gsap.fromTo(
      elements,
      { y: 25, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.15
      }
    );
  }, [t]);

  return (
    <section
      ref={containerRef}
      style={{
        minHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: '130px',
        paddingBottom: '60px',
        position: 'relative'
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '22px', maxWidth: '980px' }}>
        
        {/* Minimal Studio Pill */}
        <div className="animate-hero badge-neon">
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            {t.hero.tag}
          </span>
        </div>

        {/* Big Bold Minimal Brand Name (Only 2 words!) */}
        <h1
          className="animate-hero"
          style={{
            fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)'
          }}
        >
          {t.hero.title}
        </h1>

        {/* Short, Restrained 1-line Subtitle */}
        <p
          className="animate-hero"
          style={{
            fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
            color: 'var(--text-secondary)',
            maxWidth: '620px',
            lineHeight: 1.6,
            fontWeight: 400
          }}
        >
          {t.hero.subtitle}
        </p>

        {/* Clean Buttons */}
        <div
          className="animate-hero"
          style={{
            display: 'flex',
            gap: '14px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '8px'
          }}
        >
          <a
            href="#showcase"
            className="btn-primary"
            style={{
              padding: '14px 30px',
              fontSize: '0.92rem'
            }}
          >
            <span>{t.hero.btn_work}</span>
            <ArrowDown size={16} />
          </a>

          <a
            href="#contact"
            className="btn-secondary"
            style={{
              padding: '14px 28px',
              fontSize: '0.92rem'
            }}
          >
            <span>{t.hero.btn_contact}</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
