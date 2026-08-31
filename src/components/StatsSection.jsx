import React, { useEffect, useRef, useState } from 'react';
import { statsData } from '../data/statsData';

function easeOutQuad(t) {
  return t * (2 - t);
}

export default function StatsSection() {
  const [values, setValues] = useState(() => statsData.map(() => 0));
  const [started, setStarted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const target = containerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 2000;
    const startTime = performance.now();
    let frameId;

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuad(progress);

      setValues(statsData.map((stat) => Math.round(stat.count * eased)));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [started]);

  return (
    <div className="container stat_icons pb100" ref={containerRef}>
      <style>{`
        .stats-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 40px;
        }

        .stats-row .stats {
          flex: 1 1 140px;
          max-width: 180px;
        }
      `}</style>

      <div className="stats-row clr-dark">
        {statsData.map((stat, idx) => (
          <div className="stats" key={idx}>
            <lord-icon
              part="box"
              src={stat.iconSrc}
              trigger="loop"
              colors="primary:#e10600,secondary:#ff5a66"
              style={{ width: '60px', height: '60px' }}
            ></lord-icon>
            <div className="counting">
              {values[idx].toLocaleString()}
            </div>
            <h5 className="clr-dark">{stat.label}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
