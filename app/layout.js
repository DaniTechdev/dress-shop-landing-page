import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Tacia Apparels - Where Elegance Meets Imagination",
  description:
    "Luxurious custom dresses including Kids casuals, Ankara ball dresses, Cartoon dresses, Shirts, Ball dresses, and Mum and me sets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preload" href="/images/hero-1.jpg" as="image" />
      </head>
      <body>{children}</body>
    </html>
  );
}
