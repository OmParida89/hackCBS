import React from 'react';

const primaryImgs = [
  '/assets/img/glimpses/1-min.webp',
  '/assets/img/glimpses/2-min.webp',
  '/assets/img/glimpses/3-min.webp',
  '/assets/img/glimpses/10-min.webp',
  '/assets/img/glimpses/5-min.webp',
  '/assets/img/glimpses/13-min.webp',
  '/assets/img/glimpses/7-min.webp',
];

const secondaryImgs = [
  '/assets/img/glimpses/8-min.webp',
  '/assets/img/glimpses/9-min.webp',
  '/assets/img/glimpses/4-min.webp',
  '/assets/img/glimpses/11-min.webp',
  '/assets/img/glimpses/6-min.webp',
  '/assets/img/glimpses/14-min.webp',
  '/assets/img/glimpses/12-min.webp',
];

export default function GlimpsesSection() {
  return (
    <section id="glimpses-new">
      <div className="glimpses-new-container">
        <div className="container">
          <div className="section_title">
            <h3
              className="title-dark"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
            >
              Glimpses <span>OF <span className="text-lowercase">hack</span></span><span>CBS</span>
            </h3>
          </div>
        </div>

        <div className="new-scroll-container">
          <div className="new-carousel-primary">
            {[...primaryImgs, ...primaryImgs].map((src, i) => (
              <img key={i} loading="lazy" decoding="async" src={src} alt={`glimpse-${i}`} />
            ))}
          </div>

          <div className="new-carousel-secondary">
            {[...secondaryImgs, ...secondaryImgs].map((src, i) => (
              <img key={i} loading="lazy" decoding="async" src={src} alt={`glimpse-sec-${i}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
