import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Background3D from './components/Background3D';
import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Services from './components/Services';
import PortfolioShowcase from './components/PortfolioShowcase';
import Pipeline from './components/Pipeline';
import Contact from './components/Contact';
import { translations } from './data/translations';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [lang, setLang] = useState('ru');
  const t = translations[lang] || translations.ru;

  useEffect(() => {
    // Butter-smooth momentum inertia scroll (Lenis)
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth deceleration curve
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    // Sync Lenis scroll events with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Smooth anchor navigation
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        const hash = target.getAttribute('href');
        if (hash && hash !== '#') {
          const el = document.querySelector(hash);
          if (el) {
            e.preventDefault();
            lenis.scrollTo(el, { offset: -60, duration: 1.1 });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [lang]);

  return (
    <div className="app-container" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* 3D WebGL Background Scene */}
      <div id="canvas-container">
        <Background3D />
      </div>

      {/* Floating Navigation Header */}
      <Header lang={lang} setLang={setLang} t={t} />

      {/* Main Content Presentation */}
      <main className="content-layer">
        <Hero t={t} />
        <Ticker items={t.ticker} />
        <Services t={t} />
        <PortfolioShowcase t={t} />
        <Pipeline t={t} />
        <Contact t={t} />
      </main>
    </div>
  );
}

export default App;
