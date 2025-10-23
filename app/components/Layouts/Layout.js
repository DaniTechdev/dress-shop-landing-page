"use client";
// import { useTheme } from "../../../context/ThemeContext";
import { useTheme } from "../../context/ThemeContext";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={styles.layout}>
      <nav className={styles.navbar}>
        <div className="container">
          <div className={styles.navContent}>
            <div className={styles.logo}>
              <h1>Tacia Apparels</h1>
            </div>

            <div className={styles.navLinks}>
              <a href="#collections">Collections</a>
              <a href="#artistry">Artistry</a>
              <a href="#mum-and-me">Mum & Me</a>
              <a href="#lookbook">Lookbook</a>
              <a href="#testimonials">Testimonials</a>
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
