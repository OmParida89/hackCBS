import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { id: 'about', label: 'ABOUT' },
  { id: 'themes', label: 'THEMES' },
  { id: 'prizes', label: 'PRIZES' },
  { id: 'schedule', label: 'SCHEDULE' },
  { id: 'sponsors', label: 'SPONSORS' },
  { id: 'teams', label: 'TEAM' },
  { id: 'faq', label: "FAQ's" },
  { id: 'contact', label: 'CONTACT' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveSection(topMost.target.id);
        } else {
          setActiveSection(null);
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <div className="nav-container">
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          <a href="#" className="nav-branding">
            <img
              loading="lazy"
              decoding="async"
              src="/assets/img/9.0_assets/hackCBS9.0_logo_coloured.png"
              alt="hackCBS 9.0 Logo"
            />
          </a>

          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            {NAV_ITEMS.map((item, index) => (
              <li className="nav-item" style={{ '--delay': index + 1 }} key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={handleLinkClick}
                  className={`nav-link ${activeSection === item.id ? 'active-link' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            id="mlh-trust-badge-logo"
            href="https://mlh.io/apac?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=red"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              loading="lazy"
              decoding="async"
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-red.svg"
              alt="Major League Hacking 2025 Hackathon Season"
              style={{ width: '100%' }}
            />
          </a>

          <div className={`hamburger ${isOpen ? 'active' : 'off'}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </div>
    </header>
  );
}
