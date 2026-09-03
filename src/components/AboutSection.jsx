import React, { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const [imageRevealed, setImageRevealed] = useState(false);
  const [statsRevealed, setStatsRevealed] = useState(false);
  const [textRevealed, setTextRevealed] = useState(false);
  const imageWrapRef = useRef(null);
  const statsRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const target = imageWrapRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const target = statsRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const target = textRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const wrap = imageWrapRef.current;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    wrap.style.transform = `perspective(800px) rotateX(${y * -8}deg) rotateY(${x * 8}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const wrap = imageWrapRef.current;
    if (!wrap) return;
    wrap.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <section className="pb100 pt100" id="about">
      <div className="about-container container">
        <div className="row">
          {/* Text Section */}
          <div className={`col-lg-7 about-text-col ${textRevealed ? 'revealed' : ''}`} ref={textRef}>
            <div className="section_title">
              <h2 className="title-dark">About the event</h2>
            </div>
            <div id="about-div">
              <p style={{ textAlign: 'justify', marginRight: '20px' }}>
                Embarking on the next chapter of an exhilarating legacy, we present <b>hackCBS 9.0</b>! This ultimate blend of coders, innovators, designers, and tech-connoisseurs is a celebration of expertise and creativity that promises an unparalleled experience. Get ready to embark on an exciting journey, overcoming challenges with innovative solutions!
              </p>
              <br />
              <p style={{ textAlign: 'justify', marginRight: '20px' }}>
                The event is a mega-fest of hackers racing against time for intensive development. This edition promises to redefine the boundaries of what is possible in hacking, where grandeur meets innovation.
              </p>
              <br />
              <div className={`about-stats ${statsRevealed ? 'revealed' : ''}`} ref={statsRef}>
                <div className="stat-chip">
                  <span className="stat-chip-label">Venue [In-Person]</span>
                  <span className="stat-chip-value">Shaheed Sukhdev College of Business Studies</span>
                </div>
                <div className="stat-chip stat-chip-delayed">
                  <span className="stat-chip-label">Dates</span>
                  <span className="stat-chip-value">31 October - 1 November 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Building Image Section */}
          <div className="col-lg-5 text-center">
            <div
              className="about-image-wrap"
              ref={imageWrapRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`about-image-frame ${imageRevealed ? 'revealed' : ''}`}>
                <span className="hud-corner hud-corner-tl"></span>
                <span className="hud-corner hud-corner-tr"></span>
                <span className="hud-corner hud-corner-bl"></span>
                <span className="hud-corner hud-corner-br"></span>
                <span className="camera-rec">
                  <span className="rec-dot"></span>
                  REC
                </span>
                <img
                  loading="lazy"
                  decoding="async"
                  src="/assets/img/9.0_assets/building.webp"
                  alt="Building"
                  className="img-fluid medium-ship"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
