"use client";
import { useState } from "react";
import styles from "./Categories.module.css";
import Image from "next/image";

const categories = [
  {
    id: "kids-casuals",
    title: "Kids Casuals",
    description: "Comfortable and stylish everyday wear for little ones",
    image: "/kidcasual.jpg",
    featured: true,
    colors: ["#FF6B6B", "#4ECDC4"],
  },
  {
    id: "ankara-ball-dresses",
    title: "Ankara Ball Dresses",
    description: "Vibrant and elegant dresses perfect for special occasions",
    image: "/ankaradress.jpg",
    featured: true,
    colors: ["#FFD93D", "#6BCF7F"],
  },
  {
    id: "cartoon-dresses",
    title: "Cartoon Dresses",
    description: "Fun and playful dresses featuring beloved characters",
    image: "/cartoondress.jpg",
    featured: false,
    colors: ["#FF9FF3", "#54A0FF"],
  },
  {
    id: "shirts",
    title: "Designer Shirts",
    description: "Tailored shirts with unique patterns and perfect fit",
    image: "/shirt.jpg",
    featured: false,
    colors: ["#FF9F43", "#0ABDE3"],
  },
  {
    id: "ball-dresses",
    title: "Elegant Ball Dresses",
    description: "Stunning gowns for formal events and celebrations",
    image: "/balldress.jpg",
    featured: true,
    colors: ["#A55EEA", "#FD7272"],
  },
  {
    id: "mum-and-me",
    title: "Mum & Me Sets",
    description: "Coordinating outfits for beautiful mother-daughter moments",
    image: "/mumandset.jpg",
    featured: true,
    colors: ["#FC427B", "#574B90"],
  },
];

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (categoryId) => {
    setLoadedImages((prev) => ({ ...prev, [categoryId]: true }));
  };

  const allImagesLoaded =
    Object.keys(loadedImages).length === categories.length;

  return (
    <section id="collections" className={styles.categories}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Collections</h2>
          <p className={styles.sectionSubtitle}>
            Discover our carefully crafted collections, each piece made with
            love and attention to detail
          </p>
        </div>

        {/* Interactive Category Grid */}
        <div
          className={`${styles.categoriesGrid} ${
            allImagesLoaded ? styles.loaded : ""
          }`}
        >
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`${styles.categoryCard} ${
                activeCategory === category.id ? styles.active : ""
              } ${category.featured ? styles.featured : ""}`}
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
              style={{
                animationDelay: `${index * 0.1}s`,
                "--gradient-start": category.colors[0],
                "--gradient-end": category.colors[1],
              }}
            >
              {/* Image Container with Next.js Image */}
              <div className={styles.imageContainer}>
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.categoryImage}
                  onLoad={() => handleImageLoad(category.id)}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9faXL9nVpoTNW4mts4X93q5BvFYas7Y116OPmVZcuC4hWS3yf/2Q=="
                />
              </div>

              {/* Gradient Overlay */}
              <div className={styles.gradientOverlay}></div>

              {/* Content */}
              <div className={styles.categoryContent}>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <p className={styles.categoryDescription}>
                  {category.description}
                </p>

                {/* Hover Action */}
                <div className={styles.hoverActions}>
                  <button className={styles.exploreButton}>
                    Explore Collection
                    <span className={styles.arrow}>→</span>
                  </button>
                </div>
              </div>

              {/* Featured Badge */}
              {category.featured && (
                <div className={styles.featuredBadge}>
                  <span>Popular</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Category Spotlight */}
        {activeCategory && (
          <div className={styles.categorySpotlight}>
            {categories
              .filter((cat) => cat.id === activeCategory)
              .map((category) => (
                <div key={category.id} className={styles.spotlightContent}>
                  <h3>Discover {category.title}</h3>
                  <p>{category.description}</p>
                  <div className={styles.spotlightActions}>
                    <button className={styles.primaryAction}>
                      View Gallery
                    </button>
                    <button className={styles.secondaryAction}>
                      Get Quote
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className={styles.collectionsCTA}>
          <h3>Can't Find What You're Looking For?</h3>
          <p>
            We specialize in custom designs. Let's create something unique just
            for you!
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaPrimary}>Start Custom Design</button>
            <button className={styles.ctaSecondary}>Book Consultation</button>
          </div>
        </div>
      </div>
    </section>
  );
}
