import React from 'react';
import { sponsorsData } from '../data/sponsorsData';

export default function SponsorsSection() {
  return (
    <section className="pt100 pb100" id="sponsors">
      <div className="container">
        <div className="section_title">
          <h3 
            className="title-dark" 
            data-aos="fade-right" 
            data-aos-duration="1000" 
            data-aos-anchor-placement="top-bottom"
          >
            Our Sponsors
          </h3>
        </div>
      </div>

      <div className="sponsor-container container">
        {/* Title / Performance Sponsors */}
        {sponsorsData.titleSponsors.map((sponsor, idx) => (
          <div className="section title-section" key={idx}>
            <div className="heading" data-aos="fade-up" data-aos-duration="1000">
              {sponsor.title}
            </div>
            <a 
              href={sponsor.url} 
              className="img" 
              target="_blank" 
              rel="noopener noreferrer" 
              data-aos="fade-up" 
              data-aos-duration="1000"
            >
              <img src={sponsor.img} alt={sponsor.name} loading="lazy" decoding="async" />
            </a>
          </div>
        ))}

        {/* Category Partners (Privacy, Hiring) */}
        {sponsorsData.categoryPartners.map((sponsor, idx) => (
          <div className="section web3-section" key={idx}>
            <div className="heading" data-aos="fade-up" data-aos-duration="1000">
              {sponsor.title}
            </div>
            <a 
              href={sponsor.url} 
              className="img" 
              target="_blank" 
              rel="noopener noreferrer" 
              data-aos="fade-up" 
              data-aos-duration="1000"
            >
              <img src={sponsor.img} alt={sponsor.name} loading="lazy" decoding="async" />
            </a>
          </div>
        ))}

        {/* Event & Platform Partners */}
        <div className="section partner-section">
          {sponsorsData.eventPartners.map((partner, idx) => (
            <div className={idx === 0 ? "left" : "right"} key={idx}>
              <div className="heading" data-aos="fade-up" data-aos-duration="1000">
                {partner.title}
              </div>
              <a 
                href={partner.url} 
                className="img" 
                target="_blank" 
                rel="noopener noreferrer" 
                data-aos="fade-up" 
                data-aos-duration="1000"
              >
                <img src={partner.img} alt={partner.name} loading="lazy" decoding="async" />
              </a>
            </div>
          ))}
        </div>

        {/* General Sponsors */}
        <div className="section general-section">
          <div className="heading" data-aos="fade-up" data-aos-duration="1000">
            GENERAL SPONSORS
          </div>
          <div className="img-grid">
            {sponsorsData.generalSponsors.map((sponsor, idx) => (
              <a 
                href={sponsor.url} 
                className="img" 
                target="_blank" 
                rel="noopener noreferrer" 
                key={idx}
                data-aos="fade-up" 
                data-aos-duration="1000"
              >
                <img src={sponsor.img} alt={sponsor.name} loading="lazy" decoding="async" />
              </a>
            ))}
          </div>
        </div>

        {/* Community Partners */}
        <div className="section community-section">
          <div className="heading" data-aos="fade-up" data-aos-duration="1000">
            COMMUNITY PARTNER
          </div>
          <div className="img-grid">
            {sponsorsData.communityPartners.map((partner, idx) => (
              <a 
                href={partner.url} 
                className="img" 
                target="_blank" 
                rel="noopener noreferrer" 
                key={idx}
                data-aos="fade-up" 
                data-aos-duration="1000"
              >
                <img src={partner.img} alt={partner.name} loading="lazy" decoding="async" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <br />
      <center>
        <div className="row">
          <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000">
            <a href="mailto:sponsorships@hackcbs.tech">
              <button className="cta sponsor_us_btn">
                <span className="hover-underline-animation" style={{ fontSize: '17px' }}>
                  Sponsor Us
                </span>
              </button>
            </a>
          </div>
        </div>
      </center>
    </section>
  );
}
