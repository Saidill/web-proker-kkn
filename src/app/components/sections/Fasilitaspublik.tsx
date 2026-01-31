"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= DATA ================= */

const fasilitasData = [
  {
    id: 1,
    name: "Balai Desa Plono Timur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
    lat: -7.797068,
    lng: 110.370529,
    googleMapsUrl: "https://www.google.com/maps?q=-7.797068,110.370529",
  },
  {
    id: 2,
    name: "Posyandu Mawar",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
    lat: -7.798,
    lng: 110.371,
    googleMapsUrl: "https://www.google.com/maps?q=-7.798000,110.371000",
  },
  {
    id: 3,
    name: "Masjid Al-Ikhlas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1564769610726-4b5c6e3e7b70?w=800&h=600&fit=crop",
    lat: -7.7965,
    lng: 110.37,
    googleMapsUrl: "https://www.google.com/maps?q=-7.796500,110.370000",
  },
  {
    id: 4,
    name: "Lapangan Olahraga",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&h=600&fit=crop",
    lat: -7.7975,
    lng: 110.3715,
    googleMapsUrl: "https://www.google.com/maps?q=-7.797500,110.371500",
  },
  {
    id: 5,
    name: "Taman Bermain Anak",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    lat: -7.7968,
    lng: 110.3708,
    googleMapsUrl: "https://www.google.com/maps?q=-7.796800,110.370800",
  },
  {
    id: 6,
    name: "Perpustakaan Desa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop",
    lat: -7.7972,
    lng: 110.3702,
    googleMapsUrl: "https://www.google.com/maps?q=-7.797200,110.370200",
  },
];

/* ================= ANIMATION ================= */

const cardVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.85,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.3 },
    },
  },
  exit: (dir) => ({
    x: dir > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.85,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.2 },
    },
  }),
};

/* ================= COMPONENT ================= */

export default function FasilitasPublikSection() {
  const [index, setIndex] = useState(0);
  const [selectedFasilitas, setSelectedFasilitas] = useState(null);
  const [direction, setDirection] = useState(0);

  /* ========== Scroll Lock ========== */
  useEffect(() => {
    if (selectedFasilitas) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedFasilitas]);

  /* ========== Navigation ========== */
  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % fasilitasData.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + fasilitasData.length) % fasilitasData.length);
  };

  /* ========== Desktop Cards ========== */
  const visibleCards = () => {
    return [0, 1, 2].map(
      (i) => fasilitasData[(index + i) % fasilitasData.length],
    );
  };

  /* ================= RENDER ================= */

  return (
    <section className="py-16 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Fasilitas Publik
        </h2>

        {/* Slider */}
        <div className="relative flex items-center justify-center gap-4 md:gap-8">
          {/* Prev */}
          <NavButton onClick={prev} left>
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </NavButton>

          {/* Desktop */}
          <div className="hidden md:grid grid-cols-3 gap-6 flex-1 max-w-6xl">
            {visibleCards().map((item) => (
              <Card
                key={item.id}
                item={item}
                onClick={() => setSelectedFasilitas(item)}
              />
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden flex-1 overflow-hidden px-2">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="cursor-pointer w-full"
              >
                <Card
                  item={fasilitasData[index]}
                  onClick={() => setSelectedFasilitas(fasilitasData[index])}
                  mobile
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next */}
          <NavButton onClick={next}>
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </NavButton>
        </div>

        {/* Modal */}
        {selectedFasilitas && (
          <MapModal
            data={selectedFasilitas}
            close={() => setSelectedFasilitas(null)}
          />
        )}
      </div>
    </section>
  );
}

/* ================= SUB COMPONENT ================= */

function Card({ item, onClick, mobile }) {
  return (
    <div
      onClick={onClick}
      className={`overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer ${
        mobile ? "max-w-full" : ""
      }`}
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.name}
        className={`w-full object-cover ${mobile ? "h-48" : "h-48"}`}
      />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-800">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {item.description}
        </p>

        {/* Button Lihat Lokasi */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="w-full bg-white border-2 border-emerald-700 text-emerald-700 rounded-full py-2.5 px-4 font-medium hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2"
        >
          <MapPin className="w-4 h-4" />
          Lihat Lokasi
        </button>
      </div>
    </div>
  );
}

function NavButton({ children, onClick, left }) {
  return (
    <button
      onClick={onClick}
      className="z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 flex-shrink-0"
    >
      {children}
    </button>
  );
}

function MapModal({ data, close }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={close}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gray-100 px-6 py-4 flex justify-between items-center border-b">
          <h3 className="text-xl font-bold text-gray-800">
            Pop Up Peta Lokasi
          </h3>
          <button
            onClick={close}
            className="p-2 hover:bg-gray-200 rounded-full transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <h4 className="text-2xl font-bold mb-4 text-gray-800">
            Peta Lokasi {data.name}
          </h4>

          {/* Google Maps Embed */}
          <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg mb-6">
            <iframe
              src={`https://maps.google.com/maps?q=${data.lat},${data.lng}&z=16&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />

            {/* Fallback: Static map image jika tidak ada API key */}
            {/* <img 
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${data.lat},${data.lng}&zoom=16&size=800x500&markers=color:red%7C${data.lat},${data.lng}&key=YOUR_API_KEY`}
              alt="Map"
              className="w-full h-full object-cover"
            /> */}
          </div>

          {/* Button Detail Lokasi - Desktop: buka modal, Mobile: buka Google Maps */}
          <div className="flex gap-3">
            {/* Desktop & Tablet */}
            <a
              href={data.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex flex-1 bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-full font-medium transition-colors items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Buka di Google Maps
            </a>

            {/* Mobile */}

            <a
              href={data.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden flex-1 bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Detail Lokasi
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
