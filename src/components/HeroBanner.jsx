import React, { useEffect, useRef } from 'react';

export default function HeroBanner() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.warn('Autoplay prevented by browser:', err);
      });
    }

  }, []);

  return (
    <section className="banner-parallax">
      <div className="video-container">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline 
          id="background-video"
        >
          <source src="/assets/videos/f1_theme_video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="home_container" id="home-section">
        <div className="home_date-container">
          <div className="banner-video-overlay" style={{ width: '100vw', marginTop: '3rem', backgroundColor: 'transparent' }}>
            <h1 style={{ margin: 0 }}>
              <img
                loading="eager"
                decoding="async"
                src="/assets/img/9.0_assets/hackCBS9.0-banner.svg"
                alt="hackCBS 9.0 | India's Largest Student-run Hackathon"
                className="hackcbs_landing"
              />
            </h1>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'center', fontSize: '80px' }}>
              <span className="date landing-date">31st October - 1st November 2026</span>
            </div>
          </div>
        </div>

        <div 
          className="home_button-container" 
          style={{
            position: 'relative',
            zIndex: 5,
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '2rem',
            padding: '1.3rem 3rem'
          }}
        >
          <a
            className="button-register"
            href="https://hackculture.io/hackathons/hackcbs-9-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
          </a>

          {/* Discord Server Link */}
          <a href="https://discord.gg/hackcbs-745636507263696928" target="_blank" rel="noopener noreferrer">
            <button className="button-discord banner-button-style">
              <i className="fa-brands fa-discord"></i>&nbsp;Discord Server
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
