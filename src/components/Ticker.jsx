import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Ticker({ items }) {
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div style={{
      width: '100%',
      overflow: 'hidden',
      padding: '20px 0',
      background: 'rgba(255, 255, 255, 0.65)',
      borderTop: '1px solid rgba(25, 24, 22, 0.08)',
      borderBottom: '1px solid rgba(25, 24, 22, 0.08)',
      backdropFilter: 'blur(12px)',
      WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, transparent 100%)',
      maskImage: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, transparent 100%)',
      position: 'relative',
      zIndex: 15
    }}>
      <div className="ticker-track">
        {repeatedItems.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '0 28px',
              whiteSpace: 'nowrap',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.95rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              color: 'var(--text-secondary)'
            }}
          >
            <Sparkles size={14} color="#06b6d4" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <style>{`
        .ticker-track {
          display: flex;
          width: max-content;
          animation: tickerScroll 35s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
        @keyframes tickerScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
}
