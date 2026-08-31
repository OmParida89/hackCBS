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

    // Devfolio script integration
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
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
            <img
              loading="eager"
              decoding="async"
              src="/assets/img/9.0_assets/hackCBS9.0-banner.svg"
              alt="hackCBS 9.0 Banner"
              className="hackcbs_landing"
            />
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
          {/* Devfolio button container */}
          <div 
            className="apply-button" 
            data-hackathon-slug="hackcbs-8" 
            data-button-theme="dark-inverted"
            style={{ height: '48px', width: '312px' }}
          ></div>

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
