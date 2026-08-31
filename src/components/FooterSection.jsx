import React, { useEffect, useState } from 'react';

// Order matters: phone / email / phone, so email lands in the middle column.
const CONTACT_ITEMS = [
  {
    icon: 'fas fa-phone-volume',
    name: 'Ronak Choudhary',
    value: '+91 807 6831 757',
    href: 'tel:+918076831757',
    color: '#3C9DFF'
  },
  {
    icon: 'fas fa-envelope-open-text',
    name: 'Email Us',
    value: 'hackcbssupport@gmail.com',
    href: 'mailto:hackcbssupport@gmail.com',
    color: '#FF2800'
  },
  {
    icon: 'fas fa-phone-volume',
    name: 'Gaurav Singh',
    value: '+91 93369 49712',
    href: 'tel:+919336949712',
    color: '#FF9C4A'
  }
];

export default function FooterSection() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="pb100 pt25" style={{ background: '#000000' }}>
        <style>{`
          /* f1c- prefix: this codebase's global style-v8.css already defines
             .contact, .contact-card, .contact-icon etc (with !important on
             some), so plain names here would silently collide with those. */
          .f1c-card {
            position: relative;
            max-width: 980px;
            margin: 0 auto;
            padding: 48px 40px;
            border-radius: 28px;
            background: #1c1c20;
            box-shadow:
              14px 14px 28px rgba(0, 0, 0, 0.55),
              -14px -14px 28px rgba(255, 255, 255, 0.035);
          }

          .f1c-columns {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 32px;
          }

          .f1c-item {
            flex: 1 1 0;
            min-width: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            text-decoration: none;
          }

          .f1c-divider {
            width: 4px;
            height: 120px;
            align-self: center;
            flex-shrink: 0;
            border-radius: 4px;
            background: #1c1c20;
            box-shadow:
              inset 3px 3px 6px rgba(0, 0, 0, 0.55),
              inset -3px -3px 6px rgba(255, 255, 255, 0.03);
          }

          .f1c-icon {
            width: 64px;
            height: 64px;
            margin: 0 0 20px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: var(--ci-color);
            background: #1c1c20;
            box-shadow:
              inset 5px 5px 10px rgba(0, 0, 0, 0.55),
              inset -5px -5px 10px rgba(255, 255, 255, 0.035);
            transition: box-shadow 0.2s ease, transform 0.2s ease;
          }

          .f1c-item:hover .f1c-icon {
            transform: scale(1.04);
            box-shadow:
              5px 5px 10px rgba(0, 0, 0, 0.55),
              -5px -5px 10px rgba(255, 255, 255, 0.035);
          }

          .f1c-name {
            font-size: 19px;
            font-weight: 700;
            color: rgba(255, 255, 255, 0.85);
            white-space: nowrap;
            margin: 0 0 10px;
          }

          .f1c-value {
            font-size: 16px;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.6);
            white-space: nowrap;
            transition: color 0.2s ease;
          }

          .f1c-item:hover .f1c-value {
            color: var(--ci-color);
          }

          @media (max-width: 700px) {
            .f1c-card { padding: 32px 20px; }
            .f1c-columns {
              flex-direction: column;
              align-items: center;
              gap: 30px;
            }
            .f1c-divider {
              width: 70%;
              height: 4px;
            }
            .f1c-name, .f1c-value {
              white-space: normal;
            }
          }

          @media (max-width: 460px) {
            .f1c-name { font-size: 17px; }
            .f1c-value { font-size: 15px; }
          }
        `}</style>

        <div className="container">
          <div className="section_title">
            <h3 className="title-dark" data-aos="fade-right" data-aos-duration="1000">
              CONTACT US
            </h3>
          </div>

          <div className="f1c-card" data-aos="fade-up" data-aos-duration="800">
            <div className="f1c-columns">
              {CONTACT_ITEMS.map((item, idx) => (
                <React.Fragment key={item.value}>
                  {idx > 0 && <div className="f1c-divider" aria-hidden="true" />}
                  <a className="f1c-item" href={item.href} style={{ '--ci-color': item.color }}>
                    <div className="f1c-icon">
                      <i className={item.icon}></i>
                    </div>
                    <p className="f1c-name">{item.name}</p>
                    <span className="f1c-value">{item.value}</span>
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div id="lgx-footer" className="lgx-footer">
          <div className="lgx-inner-footer">
            <div className="container-fluid">
              <div className="row">
                <div className="lgx-footer-area">
                  <div className="col-md-3" style={{ padding: '0px' }}>
                    <div className="lgx-footer-single" style={{ textAlign: 'center' }}>
                      <a href="#" className="lgx-scroll">
                        <img 
                          loading="lazy" 
                          decoding="async" 
                          src="/assets/img/9.0_assets/hackCBS9.0_logo_white.png" 
                          width="300px" 
                          alt="hackCBS 9.0 Logo" 
                        />
                      </a>
                    </div>
                  </div>

                  <div className="col-md-3 address_footer">
                    <div className="lgx-footer-single">
                      <h3 className="footer-title">Venue</h3>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.580254099303!2d77.1160121747764!3d28.732087675610426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013938e13ba5%3A0xbacd4c8f320fa4ff!2sSHAHEED%20SUKHDEV%20COLLEGE%20OF%20BUSINESS%20STUDIES!5e0!3m2!1sen!2sin!4v1694593915477!5m2!1sen!2sin"
                        width="215"
                        height="150"
                        style={{ border: 0, borderRadius: '0.4rem' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Shaheed Sukhdev College of Business Studies"
                      ></iframe>
                      <p style={{ color: '#ff5a66', marginTop: '10px' }}><b>October-November 2026</b></p>
                      <a href="https://goo.gl/maps/TzNt7TZ2tLfWApzF7" className="lgx-scroll resource_color" target="_blank" rel="noopener noreferrer">
                        Shaheed Sukhdev College of Business Studies<br />
                      </a>
                    </div>
                  </div>

                  <div className="col-md-2">
                    <div className="lgx-footer-single">
                      <h3 className="footer-title">Resources</h3>
                      <a href="/assets/docs/hackCBS_proposal_8.pdf" target="_blank" rel="noopener noreferrer" className="resource_color">Sponsorship Brochure</a><br />
                      <a href="/assets/docs/Code_of_Conduct.pdf" target="_blank" rel="noopener noreferrer" className="resource_color">Code of Conduct</a>
                      <br />
                      <h3 className="footer-title" style={{ marginTop: '15px' }}>Archives</h3>
                      <a href="https://v2.hackcbs.tech" target="_blank" rel="noopener noreferrer" className="resource_color">hackCBS 2.0</a><br />
                      <a href="https://v3.hackcbs.tech" target="_blank" rel="noopener noreferrer" className="resource_color">hackCBS 3.0</a><br />
                      <a href="https://v4.hackcbs.tech" target="_blank" rel="noopener noreferrer" className="resource_color">hackCBS 4.0</a><br />
                      <a href="https://v5.hackcbs.tech" target="_blank" rel="noopener noreferrer" className="resource_color">hackCBS 5.0</a><br />
                      <a href="https://v6.hackcbs.tech" target="_blank" rel="noopener noreferrer" className="resource_color">hackCBS 6.0</a>
                    </div>
                  </div>

                  <div className="col-md-1">
                    <div className="lgx-footer-single">
                      <h3 className="footer-title">Community</h3>
                      <a href="http://bit.ly/hackcbs_discord" target="_blank" rel="noopener noreferrer" className="resource_color">
                        <i className="fab fa-discord"></i> Discord
                      </a><br />
                      <a href="https://t.me/joinchat/LlOuzVQ1_GSIbQ8oodUOwQ" target="_blank" rel="noopener noreferrer" className="resource_color">
                        <i className="fab fa-telegram"></i> Telegram
                      </a><br />
                      <a href="https://github.com/hackcbs" target="_blank" rel="noopener noreferrer" className="resource_color">
                        <i className="fab fa-github"></i> Github
                      </a>
                      <br />
                      <h3 className="footer-title" style={{ marginTop: '15px' }}>Policies</h3>
                      <a href="/assets/docs/privacy-policy/" target="_blank" rel="noopener noreferrer" className="resource_color">Privacy Policy</a><br />
                      <a href="/assets/docs/terms-of-service/" target="_blank" rel="noopener noreferrer" className="resource_color" style={{ whiteSpace: 'nowrap' }}>Terms of Service</a>
                    </div>
                  </div>

                  <div className="col-md-3 social" style={{ padding: '0 3vw' }}>
                    <div className="lgx-footer-single">
                      <h3 className="footer-title">Social Connection</h3>
                      <p className="text">Follow us for latest updates:</p>
                      <ul className="list-inline lgx-social-footer">
                        <li><a href="https://www.facebook.com/hackcbs/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://www.twitter.com/hackcbs/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.instagram.com/hackcbs/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/company/hackcbs" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="http://bit.ly/hackCBS-YouTube" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="footer-text-container">
                  <hr />
                  <div className="col-sm-12">
                    <h5 style={{ color: 'white', textAlign: 'center' }}>
                      <a href="https://www.linkedin.com/in/amit-singh-502bba289/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                        Designed with ❤️ by Team hackCBS
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Back-to-Top Button */}
      {showScrollTop && (
        <button 
          type="button" 
          className="btn btn-floating btn-lg" 
          id="btn-back-to-top" 
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            display: 'block',
            backgroundColor: '#e10600',
            color: '#fff',
            borderRadius: '50%',
            zIndex: 999,
            width: '50px',
            height: '50px',
            border: 'none',
            boxShadow: '0 4px 15px rgba(225, 6, 0, 0.4)'
          }}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </>
  );
}
