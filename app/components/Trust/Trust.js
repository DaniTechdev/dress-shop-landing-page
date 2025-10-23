"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./Trust.module.css";

export default function Trust() {
  const [counters, setCounters] = useState({
    customers: 0,
    rating: 0,
    years: 0,
    response: 0,
  });

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      number: "500+",
      label: "Happy Customers",
      description: "Families dressed with perfection",
    },
    {
      number: "4.9★",
      label: "Customer Rating",
      description: "Rated excellent by our clients",
    },
    {
      number: "3+",
      label: "Years of Excellence",
      description: "Crafting beautiful memories",
    },
    {
      number: "24h",
      label: "Response Time",
      description: "Quick consultation responses",
    },
  ];

  const features = [
    {
      icon: "✂️",
      title: "Bespoke Tailoring",
      description:
        "Every piece is custom-made to your exact measurements and preferences with meticulous attention to detail",
      highlight: "Perfect Fit Guarantee",
    },
    {
      icon: "🎨",
      title: "Custom Design",
      description:
        "Work directly with our designers to bring your vision to life with unlimited revisions until you're delighted",
      highlight: "Collaborative Process",
    },
    {
      icon: "⚡",
      title: "Quick Turnaround",
      description:
        "Express options available for urgent occasions without compromising on quality or craftsmanship",
      highlight: "Timely Delivery",
    },
    {
      icon: "🌟",
      title: "Premium Quality",
      description:
        "Only the finest fabrics and materials sourced from trusted suppliers for lasting beauty and comfort",
      highlight: "Luxury Materials",
    },
  ];

  const guarantees = [
    {
      icon: "✅",
      title: "Quality Assured",
      description: "Every stitch inspected for perfection",
    },
    {
      icon: "🔄",
      title: "Free Revisions",
      description: "Adjustments included in every package",
    },
    {
      icon: "📞",
      title: "Direct Support",
      description: "Personal communication throughout",
    },
    {
      icon: "🚚",
      title: "Secure Delivery",
      description: "Careful packaging and tracking",
    },
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate counters
  useEffect(() => {
    if (isVisible) {
      const durations = [2000, 1800, 1500, 1200];
      stats.forEach((stat, index) => {
        const duration = durations[index];
        const startTime = Date.now();

        const animate = () => {
          const now = Date.now();
          const progress = Math.min((now - startTime) / duration, 1);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        animate();
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className={styles.trust}>
      <div className="container">
        {/* Main Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why Trust Tacia Apparels?</h2>
          <p className={styles.sectionSubtitle}>
            Experience the difference of bespoke craftsmanship, where every
            piece tells a story of quality, attention to detail, and
            unforgettable moments
          </p>
        </div>

        {/* Statistics Grid */}
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={styles.statCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.statContent}>
                <h3 className={styles.statNumber}>{stat.number}</h3>
                <p className={styles.statLabel}>{stat.label}</p>
                <p className={styles.statDescription}>{stat.description}</p>
              </div>
              <div className={styles.statGlow}></div>
            </div>
          ))}
        </div>

        {/* Value Propositions */}
        <div className={styles.featuresSection}>
          <div className={styles.featuresHeader}>
            <h3>Our Commitment to Excellence</h3>
            <p>What sets us apart in creating your perfect outfit</p>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={styles.featureCard}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={styles.featureIconContainer}>
                  <span className={styles.featureIcon}>{feature.icon}</span>
                </div>
                <div className={styles.featureContent}>
                  <h4 className={styles.featureTitle}>{feature.title}</h4>
                  <p className={styles.featureDescription}>
                    {feature.description}
                  </p>
                  <div className={styles.featureHighlight}>
                    {feature.highlight}
                  </div>
                </div>
                <div className={styles.featureHoverEffect}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees Bar */}
        <div className={styles.guaranteesBar}>
          <div className={styles.guaranteesContent}>
            <h4>Our Guarantees</h4>
            <div className={styles.guaranteesGrid}>
              {guarantees.map((guarantee, index) => (
                <div key={guarantee.title} className={styles.guaranteeItem}>
                  <span className={styles.guaranteeIcon}>{guarantee.icon}</span>
                  <div className={styles.guaranteeText}>
                    <strong>{guarantee.title}</strong>
                    <span>{guarantee.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className={styles.trustBadges}>
          <div className={styles.badge}>
            <div className={styles.badgeIcon}>🏆</div>
            <div className={styles.badgeText}>
              <strong>Premium Craftsmanship</strong>
              <span>Award-winning attention to detail</span>
            </div>
          </div>
          <div className={styles.badge}>
            <div className={styles.badgeIcon}>💎</div>
            <div className={styles.badgeText}>
              <strong>Luxury Materials</strong>
              <span>Only the finest fabrics used</span>
            </div>
          </div>
          <div className={styles.badge}>
            <div className={styles.badgeIcon}>⭐</div>
            <div className={styles.badgeText}>
              <strong>5-Star Service</strong>
              <span>Consistently exceptional reviews</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.trustCTA}>
          <div className={styles.ctaContent}>
            <h3>Ready to Experience the Tacia Difference?</h3>
            <p>
              Join hundreds of satisfied customers who trust us with their
              special moments
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryCTA}>
                Start Your Design Journey
              </button>
              <button className={styles.secondaryCTA}>
                View Customer Stories →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
