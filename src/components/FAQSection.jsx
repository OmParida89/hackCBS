import React, { useState } from 'react';
import { faqItems } from '../data/faqData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="pb100 pt100">
      <style>{`
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          max-width: 900px;
          margin: 0 auto;
        }

        .faq-item {
          position: relative;
          background: linear-gradient(160deg, #1c1c1f 0%, #0a0a0c 80%);
          border: 1px solid rgba(255, 24, 1, 0.25);
          border-left: 3px solid #FF2800;
          border-radius: 6px;
          overflow: hidden;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .faq-item.open {
          border-color: rgba(255, 24, 1, 0.6);
          box-shadow: 0 10px 28px rgba(255, 24, 1, 0.18);
        }

        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 16px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          padding: 19px 22px;
          transition: color 0.25s ease;
        }

        .faq-question-text {
          flex: 1;
          font-family: 'Titillium Web', sans-serif;
          font-size: 16.5px;
          font-weight: 600;
          letter-spacing: 0.2px;
          color: #f5f5f5;
          transition: color 0.25s ease;
        }

        .faq-question:hover .faq-question-text {
          color: #ff5a66;
        }

        .faq-icon {
          flex-shrink: 0;
          position: relative;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid rgba(255, 24, 1, 0.4);
          background: rgba(255, 24, 1, 0.08);
          transition: background 0.25s ease, border-color 0.25s ease;
        }

        .faq-item.open .faq-icon {
          background: rgba(255, 24, 1, 0.2);
          border-color: #FF2800;
        }

        .faq-icon::before,
        .faq-icon::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          background: #FF2800;
          transform: translate(-50%, -50%);
          transition: transform 0.3s ease;
        }

        .faq-icon::before {
          width: 12px;
          height: 2px;
        }

        .faq-icon::after {
          width: 2px;
          height: 12px;
        }

        .faq-item.open .faq-icon::after {
          transform: translate(-50%, -50%) rotate(90deg) scale(0);
        }

        .faq-panel {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.35s ease;
        }

        .faq-item.open .faq-panel {
          grid-template-rows: 1fr;
        }

        .faq-panel-inner {
          overflow: hidden;
        }

        .faq-answer {
          margin: 0;
          padding: 0 22px 20px;
          font-family: 'Poppins', sans-serif;
          color: #c8ccd0;
          font-size: 15px;
          line-height: 1.65;
        }

        .faq-answer a {
          color: #ff5a66;
          text-decoration: underline;
        }
      `}</style>

      <div className="container">
        <div className="section_title mb50">
          <h3 className="title-dark" data-aos="fade-right" data-aos-duration="1000">
            Frequently Asked Questions
          </h3>
        </div>
      </div>

      <div className="container">
        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div className={`faq-item ${isOpen ? 'open' : ''}`} key={index}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-icon" aria-hidden="true" />
                </button>
                <div className="faq-panel">
                  <div className="faq-panel-inner">
                    <p className="faq-answer">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <br /><br />
        <center>
          <div className="row">
            <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000">
              <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer">
                <button className="cta">
                  <span className="hover-underline-animation" style={{ color: 'white', fontSize: '17px' }}>
                    Code of Conduct
                  </span>
                  <svg
                    style={{ fill: 'white', marginLeft: '10px' }}
                    viewBox="0 0 46 16"
                    height="10"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      transform="translate(30)"
                      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </center>
      </div>
    </section>
  );
}
