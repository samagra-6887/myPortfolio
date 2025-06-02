import React, { useState, useEffect } from 'react'
import './header.css';

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (header) {
        if (window.scrollY >= 80) {
          header.classList.add("scroll-header");
        } else {
          header.classList.remove("scroll-header");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Samagra Singh</a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {[
              { href: "#home", icon: "uil-estate", label: "Home" },
              { href: "#about", icon: "uil-user", label: "About" },
              { href: "#skills", icon: "uil-file-alt", label: "Skills" },
              { href: "#services", icon: "uil-briefcase-alt", label: "Services" },
              { href: "#portfolio", icon: "uil-scenery", label: "Portfolio" },
              { href: "#contact", icon: "uil-message", label: "Contact" },
            ].map(({ href, icon, label }) => (
              <li className="nav__item" key={href}>
                <a
                  href={href}
                  onClick={() => setActiveNav(href)}
                  className={activeNav === href ? "nav__link active-link" : "nav__link"}
                >
                  <i className={`uil ${icon} nav__icon`}></i> {label}
                </a>
              </li>
            ))}
          </ul>

          <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
