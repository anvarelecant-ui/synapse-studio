import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Integration() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(sectionRef.current,
      { scale: 0.9, opacity: 0 },
      { 
        scale: 1, opacity: 1, duration: 1, ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section id="integration" className="container" style={{ alignItems: 'center' }}>
      <div ref={sectionRef} className="glass-panel" style={{ padding: '80px', width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 700 }}>
          Бесшовная <span className="text-gradient">Интеграция</span>
        </h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', lineHeight: 1.6 }}>
          Мы не ломаем ваши текущие процессы. Наши AI-агенты мягко встраиваются в вашу экосистему, работая совместно с вашими сотрудниками и системами.
        </p>
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div className="glass-card" style={{ padding: '20px 40px', fontWeight: 600 }}>1. Аудит</div>
          <div className="glass-card" style={{ padding: '20px 40px', fontWeight: 600 }}>2. Пилотный запуск</div>
          <div className="glass-card" style={{ padding: '20px 40px', fontWeight: 600 }}>3. Масштабирование</div>
        </div>
      </div>
    </section>
  );
}
