import React from 'react';
import { themesData } from '../data/themesData';

export default function ThemesSection() {
  return (
    <section id="themes" className="themes-section">
      <style>{`
        .themes-section {
          padding: 100px 0;
          position: relative;
        }

        .themes-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        @media (max-width: 992px) {
          .themes-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .themes-grid { grid-template-columns: 1fr; }
        }

        .theme-card {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          line-height: 0;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 0 0 1px color-mix(in srgb, var(--team-color) 40%, transparent);
        }

        .theme-card:hover {
          transform: translateY(-6px);
          box-shadow:
            0 0 0 1px color-mix(in srgb, var(--team-color) 95%, transparent),
            0 0 26px 4px color-mix(in srgb, var(--team-color) 70%, transparent),
            0 18px 54px 8px color-mix(in srgb, var(--team-color) 45%, transparent);
        }

        .theme-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>

      <div className="container">
        <div className="section_title">
          <h2 className="title-dark" data-aos="fade-right" data-aos-duration="1000">
            Hackathon Themes
          </h2>
        </div>

        <div className="themes-grid">
          {themesData.map((theme, idx) => (
            <div
              className="theme-card"
              key={idx}
              style={{ '--team-color': theme.color }}
              data-aos="zoom-in-up"
              data-aos-duration="800"
              data-aos-delay={idx * 60}
              data-aos-anchor-placement="top-bottom"
            >
              <img
                loading="eager"
                decoding="async"
                src={theme.card}
                alt={theme.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
