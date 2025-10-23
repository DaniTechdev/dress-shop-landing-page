"use client";
import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu when clicking on a link
  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when pressing Escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    document.addEventListener("keydown", handleEscapeKey);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className={styles.layout}>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
        <div className="container">
          <div className={styles.navContent}>
            <div className={styles.logo}>
              <h1>Tacia Apparels</h1>
            </div>

            {/* Desktop Navigation */}
            <div className={styles.navLinks}>
              <a href="#collections" onClick={handleNavLinkClick}>
                Collections
              </a>
              <a href="#artistry" onClick={handleNavLinkClick}>
                Artistry
              </a>
              <a href="#mum-and-me" onClick={handleNavLinkClick}>
                Mum & Me
              </a>
              <a href="#lookbook" onClick={handleNavLinkClick}>
                Lookbook
              </a>
              <a href="#testimonials" onClick={handleNavLinkClick}>
                Testimonials
              </a>
            </div>

            <div className={styles.navActions}>
              <button
                className={styles.themeToggle}
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {isDark ? "☀️" : "🌙"}
              </button>
              <button className={styles.ctaButton}>Contact Us</button>

              {/* Mobile Hamburger Button */}
              <button
                className={`${styles.hamburger} ${
                  isMobileMenuOpen ? styles.active : ""
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`${styles.mobileMenuOverlay} ${
            isMobileMenuOpen ? styles.active : ""
          }`}
        >
          <div className={styles.mobileMenuContent}>
            {/* Close Button */}
            <button
              className={styles.closeButton}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <span>×</span>
            </button>

            {/* Mobile Navigation Links */}
            <div className={styles.mobileNavLinks}>
              <a
                href="#collections"
                onClick={handleNavLinkClick}
                className={styles.mobileNavLink}
              >
                Collections
              </a>
              <a
                href="#artistry"
                onClick={handleNavLinkClick}
                className={styles.mobileNavLink}
              >
                Artistry
              </a>
              <a
                href="#mum-and-me"
                onClick={handleNavLinkClick}
                className={styles.mobileNavLink}
              >
                Mum & Me
              </a>
              <a
                href="#lookbook"
                onClick={handleNavLinkClick}
                className={styles.mobileNavLink}
              >
                Lookbook
              </a>
              <a
                href="#testimonials"
                onClick={handleNavLinkClick}
                className={styles.mobileNavLink}
              >
                Testimonials
              </a>
            </div>

            {/* Mobile Contact Info */}
            <div className={styles.mobileContact}>
              <h4>Get In Touch</h4>
              <button className={styles.mobileCtaButton}>Contact Us</button>
              <div className={styles.mobileContactInfo}>
                <p>Email: hello@taciaapparels.com</p>
                <p>Phone: +1 (555) 123-4567</p>
              </div>
              <div className={styles.mobileSocialLinks}>
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">Pinterest</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h3>Tacia Apparels</h3>
              <p>Where Elegance Meets Imagination</p>
            </div>
            <div className={styles.footerSection}>
              <h4>Connect</h4>
              <div className={styles.socialLinks}>
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">Pinterest</a>
              </div>
            </div>
            <div className={styles.footerSection}>
              <h4>Contact</h4>
              <p>Email: hello@taciaapparels.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
