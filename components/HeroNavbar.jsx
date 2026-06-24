import { useState } from "react";
import bannerImg from "../assets/Banner.png";
import "../styles/HeroNavbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Overview", href: "#overview" },
  { label: "Why Participate", href: "#why-participate" },
  { label: "Recognition Process", href: "#recognition-process" },
  { label: "Contact Us", href: "#contact-us" },
];

const HeroNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <section id="home" className="hero-section">
      <nav className="hero-navbar">
        <div className="desktop-menu">
          <div className="hero-links">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`mobile-menu ${menuOpen ? "show-menu" : ""}`}>
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <img src={bannerImg} alt="Event Banner" className="hero-banner-image" />
    </section>
  );
};

export default HeroNavbar;