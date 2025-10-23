"use client";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

const slides = [
  {
    image: "/images/hero-1.jpg",
    title: "Tacia Apparels",
    subtitle: "Where Elegance Meets Imagination",
    description:
      "Crafting unforgettable moments through exquisite tailoring and timeless design",
  },
  {
    image: "/images/hero-2.jpg",
    title: "Bespoke Creations",
    subtitle: "Tailored to Perfection",
    description:
      "Every stitch tells a story of craftsmanship and attention to detail",
  },
  {
    image: "/images/hero-3.jpg",
    title: "Special Occasions",
    subtitle: "Memories in Motion",
    description:
      "From ball gowns to casual wear, create magical moments with our collections",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.slider}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ""
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={styles.overlay}></div>
            <div className="container">
              <div className={styles.heroContent}>
                <h1 className={styles.title}>{slide.title}</h1>
                <h2 className={styles.subtitle}>{slide.subtitle}</h2>
                <p className={styles.description}>{slide.description}</p>
                <div className={styles.heroButtons}>
                  <button className={styles.primaryButton}>
                    Explore Collections
                  </button>
                  <button className={styles.secondaryButton}>
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.sliderDots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === currentSlide ? styles.active : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
}
