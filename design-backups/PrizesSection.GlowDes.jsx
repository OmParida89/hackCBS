import React from 'react';
import {
  overallPrizes,
  specialHacks,
  base44Prizes,
  qyrusPrizes
} from '../data/prizesData';

// revealDelay/revealEasing stagger the entrance so 2nd & 3rd rise first and
// gold rises last with a bounce; countDelay staggers the cash count-up to match.
const PODIUM_THEME = [
  { key: 'first', label: '1ST', number: '1', color: '#FFC93C', revealDelay: 450, revealEasing: 'ease-out-back', countDelay: 500 },
  { key: 'second', label: '2ND', number: '2', color: '#D8E1E8', revealDelay: 0, revealEasing: 'ease-out-sine', countDelay: 150 },
  { key: 'third', label: '3RD', number: '3', color: '#FF9C4A', revealDelay: 120, revealEasing: 'ease-out-sine', countDelay: 250 }
];

// Visual podium order: 2nd on the left, 1st centered, 3rd on the right.
const PODIUM_ORDER = [1, 0, 2];

function PodiumAmount({ amount, start, delay = 0, duration = 1200 }) {
  const match = amount.match(/^(\D*)([\d,]+)(\D*)$/);
  const target = match ? parseInt(match[2].replace(/,/g, ''), 10) : 0;
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (!start || !match) return undefined;
    let raf;
    const startTime = performance.now() + delay;
    const tick = (now) => {
      if (now < startTime) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start]);

  if (!match) return amount;
  const formatted = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `${match[1]}${formatted}${match[3]}`;
}

export default function PrizesSection() {
  const podiumRef = React.useRef(null);
  const [podiumInView, setPodiumInView] = React.useState(false);

  React.useEffect(() => {
    const node = podiumRef.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPodiumInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="prizes" className="pb100 pt100">
      <style>{`
        .podium-grid {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 36px;
          flex-wrap: wrap;
          padding: 70px 0 30px;
        }

        .podium-card {
          position: relative;
          width: 280px;
          max-width: 85vw;
          min-height: 380px;
          border-radius: 22px;
          overflow: hidden;
          text-align: center;
          display: flex;
          flex-direction: column;
          background:
            linear-gradient(165deg, color-mix(in srgb, var(--rank-color) 16%, transparent) 0%, transparent 55%),
            linear-gradient(165deg, #26262b 0%, #0a0a0c 72%);
          border: 2px solid var(--rank-color);
          box-shadow:
            0 0 0 1px color-mix(in srgb, var(--rank-color) 70%, transparent),
            0 0 22px 2px color-mix(in srgb, var(--rank-color) 45%, transparent),
            0 0 50px 8px color-mix(in srgb, var(--rank-color) 22%, transparent);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        /* !important: AOS's own [data-aos].aos-animate reset rule otherwise
           clobbers our hover transform once the entrance animation settles. */
        .podium-card:hover {
          transform: translateY(-10px) !important;
          box-shadow:
            0 0 0 1px color-mix(in srgb, var(--rank-color) 95%, transparent),
            0 0 34px 4px color-mix(in srgb, var(--rank-color) 65%, transparent),
            0 24px 60px 10px color-mix(in srgb, var(--rank-color) 40%, transparent);
        }

        /* All three cards share the same base (bottom edge, via align-items:
           flex-end) at rest -- only on hover does gold rise dramatically higher
           than silver/bronze. */
        .podium-card.podium-first {
          order: 2;
          min-height: 440px;
          z-index: 2;
        }
        .podium-card.podium-first:hover { transform: translateY(-40px) !important; }

        .podium-card.podium-second { order: 1; }
        .podium-card.podium-third { order: 3; }

        @keyframes podium-watermark-pulse {
          0%, 100% { opacity: 0.07; }
          50% { opacity: 0.18; }
        }

        .podium-rank-chip {
          position: absolute;
          top: 16px;
          right: 18px;
          font-family: 'F1Font', sans-serif;
          font-size: 15px;
          letter-spacing: 1.5px;
          color: #000;
          background: var(--rank-color);
          box-shadow: 0 0 14px color-mix(in srgb, var(--rank-color) 70%, transparent);
          padding: 4px 12px;
          border-radius: 4px;
          z-index: 2;
        }

        .podium-watermark {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'F1Font', sans-serif;
          font-size: 220px;
          line-height: 1;
          color: var(--rank-color);
          opacity: 0.07;
          z-index: 0;
          pointer-events: none;
          user-select: none;
          animation: podium-watermark-pulse 3s ease-in-out infinite;
        }

        .podium-content {
          position: relative;
          z-index: 1;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 26px 30px;
        }

        .podium-logo {
          width: 66px;
          height: 66px;
          object-fit: contain;
          margin: 0 auto 18px;
          filter: drop-shadow(0 0 14px color-mix(in srgb, var(--rank-color) 60%, transparent));
        }

        .podium-amount {
          font-size: 2.6rem;
          font-weight: 800;
          color: #fff;
          text-shadow: 0 0 22px color-mix(in srgb, var(--rank-color) 75%, transparent);
          margin: 0 0 10px;
        }

        .podium-first .podium-amount { font-size: 3.2rem; }

        .podium-desc {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.65);
          margin: 0;
        }

        .podium-base {
          position: relative;
          z-index: 1;
          background: color-mix(in srgb, var(--rank-color) 14%, #050506);
          border-top: 1px solid color-mix(in srgb, var(--rank-color) 45%, transparent);
          padding: 16px 12px;
          font-family: 'F1Font', sans-serif;
          letter-spacing: 1.5px;
          color: var(--rank-color);
          font-size: 1.1rem;
        }

        @media (max-width: 992px) {
          .podium-grid {
            flex-direction: column;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: flex-start;
            gap: 24px;
            padding: 40px 0 20px;
          }
          .podium-card:hover {
            transform: translateY(-6px) !important;
          }
          .podium-card.podium-first:hover {
            transform: translateY(-18px) !important;
          }
        }
      `}</style>

      {/* Overall Prizes */}
      <div className="container">
        <div className="section_title">
          <h3 className="title-dark" data-aos="fade-right" data-aos-duration="1000">
            PRIZES
          </h3>
        </div>

        <div className="podium-grid" ref={podiumRef}>
          {PODIUM_ORDER.map((dataIdx) => {
            const prize = overallPrizes[dataIdx];
            const theme = PODIUM_THEME[dataIdx];
            return (
              <div
                className={`podium-card podium-${theme.key}`}
                key={dataIdx}
                style={{ '--rank-color': theme.color }}
                data-aos="fade-up"
                data-aos-duration={theme.key === 'first' ? 900 : 700}
                data-aos-delay={theme.revealDelay}
                data-aos-easing={theme.revealEasing}
                data-aos-anchor-placement="top-bottom"
              >
                <span className="podium-rank-chip">{theme.label}</span>
                <span className="podium-watermark" aria-hidden="true">{theme.number}</span>
                <div className="podium-content">
                  <img className="podium-logo" loading="lazy" decoding="async" src={prize.logo} alt={prize.rank} />
                  <h4 className="podium-amount">
                    <PodiumAmount amount={prize.amount} start={podiumInView} delay={theme.countDelay} />
                  </h4>
                  <p className="podium-desc">{prize.desc}</p>
                </div>
                <div className="podium-base">{prize.rank}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Special Hack Category Cards */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          {specialHacks.map((hack, i) => (
            <div className="col-md-3 prize-card hack-card" key={i} data-aos="fade-up" data-aos-duration="1000">
              <div className="main">
                <div className="service">
                  <div className="service-logo best-hack-logo">
                    <img loading="lazy" decoding="async" src={hack.logo} alt={hack.title} />
                  </div>
                  <h4 className="hack-prize-heading" style={{ lineHeight: '1.1em' }}>{hack.title}</h4>
                  <p><b>{hack.prize}</b></p>
                  <span className="hover-underline-animation">{hack.extra}</span>
                </div>
                <div className="hack-shadowOne"></div>
                <div className="hack-shadowTwo"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Base44 Track */}
      <div className="container mt-5">
        <div className="section_title">
          <h3 className="title-dark" data-aos="fade-right" data-aos-duration="1000">
            Base44 TRACK PRIZES
          </h3>
        </div>
        <div className="row">
          {base44Prizes.map((item, idx) => (
            <div className="col-md-4 prize-card hack-card" key={idx} data-aos="fade-up" data-aos-duration="1000">
              <div className="main">
                <div className="service">
                  <div className="service-logo best-hack-logo">
                    <img loading="lazy" decoding="async" src={item.logo} alt={item.rank} />
                  </div>
                  <h4 className="hack-prize-heading">{item.rank}</h4>
                  <p><b>{item.prize}</b></p>
                  <span className="hover-underline-animation">{item.extra}</span>
                  <p style={{ fontSize: '0.7rem', marginTop: '15px', color: '#9c9c9c', opacity: 0.8, lineHeight: 1.1 }}>
                    <i>{item.note}</i>
                  </p>
                </div>
                <div className="hack-shadowOne"></div>
                <div className="hack-shadowTwo"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AWS Track */}
      <div className="container mt-5">
        <div className="section_title">
          <h3 className="title-dark" data-aos="fade-right" data-aos-duration="1000">
            Powered by Devfolio In association with AWS
          </h3>
          <h4 className="title-dark" style={{ color: '#efefef' }}>
            REMARKABLE INTEGRATION OF AWS
          </h4>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 prize-card hack-card" data-aos="fade-up">
            <div className="main">
              <div className="service">
                <div className="service-logo best-hack-logo">
                  <img src="/assets/img/themes_new/first.png" alt="1st AWS" />
                </div>
                <h4 className="hack-prize-heading">1st Prize</h4>
                <p>Cash prize of <b>$100</b></p>
              </div>
              <div className="hack-shadowOne"></div>
              <div className="hack-shadowTwo"></div>
            </div>
          </div>
          <div className="col-md-4 prize-card hack-card" data-aos="fade-up">
            <div className="main">
              <div className="service">
                <div className="service-logo best-hack-logo">
                  <img src="/assets/img/themes_new/second.png" alt="2nd AWS" />
                </div>
                <h4 className="hack-prize-heading">2nd Prize</h4>
                <p>Cash prize of <b>$75</b></p>
              </div>
              <div className="hack-shadowOne"></div>
              <div className="hack-shadowTwo"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Qyrus Track */}
      <div className="container mt-5">
        <div className="section_title">
          <h3 className="title-dark" data-aos="fade-right" data-aos-duration="1000">
            Qyrus TRACK PRIZES
          </h3>
        </div>
        <div className="row">
          {qyrusPrizes.slice(0, 3).map((item, idx) => (
            <div className="col-md-4 prize-card hack-card" key={idx} data-aos="fade-up">
              <div className="main">
                <div className="service">
                  <div className="service-logo best-hack-logo">
                    <img src={item.logo} alt={item.rank} />
                  </div>
                  <h4 className="hack-prize-heading">{item.rank}</h4>
                  <p><b>{item.prize}</b></p>
                  <span className="hover-underline-animation">{item.extra}</span>
                </div>
                <div className="hack-shadowOne"></div>
                <div className="hack-shadowTwo"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center mt-3">
          {qyrusPrizes.slice(3).map((item, idx) => (
            <div className="col-md-4 prize-card hack-card" key={idx} data-aos="fade-up">
              <div className="main">
                <div className="service">
                  <div className="service-logo best-hack-logo">
                    <img src={item.logo} alt={item.rank} />
                  </div>
                  <h4 className="hack-prize-heading">{item.rank}</h4>
                  <p><b>{item.prize}</b></p>
                  <span className="hover-underline-animation">{item.extra}</span>
                </div>
                <div className="hack-shadowOne"></div>
                <div className="hack-shadowTwo"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Card Banner */}
      <div className="benefits style-card mt-5" style={{ width: '100%' }}>
        <div className="benefits-card" style={{ textAlign: 'center', padding: '30px' }}>
          <h1 style={{ color: '#fff', fontSize: '2.5rem' }}>Benefits Worth $220,000</h1>
          <h4 style={{ color: '#ccc', margin: '15px 0' }}>
            All participants of hackCBS 9.0 will receive digital credits, vouchers, and other benefits worth $220,000
          </h4>
          <span className="button banner-button-style" style={{ display: 'inline-block', marginTop: '15px' }}>
            All Participants Eligible
          </span>
        </div>
      </div>
    </section>
  );
}
