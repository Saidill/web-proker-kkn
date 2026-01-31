"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "/images/gambar_1.jpg",
    title: "Selamat Datang di Plono Timur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    image: "/images/gambar_2.jpg",
    title: "Selamat Datang di Plono Timur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out
      ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}
    `}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Overlay (static, tidak ikut animasi) */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center px-6 lg:px-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 lg:mb-8">
              {slide.title}
            </h1>

            <p className="text-lg text-white mb-10 max-w-4xl">
              {slide.description}
            </p>

            <button className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold px-10 py-4 rounded-full transition">
              Lihat Produk Lokal
            </button>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
