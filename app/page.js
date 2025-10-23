"use client";
// import { ThemeProvider } from "../context/ThemeContext";
import { ThemeProvider } from "./context/ThemeContext";
// import Layout from "../components/Layout/Layout";
import Layout from "./components/Layouts/Layout";
// import Hero from "../components/Hero/Hero";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories/Categories";
// import Trust from '../components/Trust/Trust';
import Trust from "../app/components/Trust/Trust";
import "./globals.css";

export default function Home() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <Categories />
        <Trust />
        {/* We'll add the other sections here */}
        <section style={{ height: "50vh", padding: "2rem" }}>
          <div className="container">
            <h2>More sections coming...</h2>
            <p>
              Artistry, Mum & Me, Lookbook, and Testimonials will be implemented
              next.
            </p>
          </div>
        </section>
      </Layout>
    </ThemeProvider>
  );
}
