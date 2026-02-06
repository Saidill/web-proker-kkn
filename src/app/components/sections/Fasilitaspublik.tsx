"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

/* ================= TYPES ================= */

type Direction = 1 | -1;

interface Fasilitas {
  id: number;
  name: string;
  description: string;
  image: string;
  lat: number;
  lng: number;
  googleMapsUrl: string;
}

/* ================= DATA (ISI SENDIRI) ================= */

const fasilitasData: Fasilitas[] = [
  {
    id: 1,
    name: "Balai Desa Pagerharjo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
    lat: -7.673170182866815,
    lng: 110.13503415233636,
    googleMapsUrl:
      "https://www.google.com/maps?q=-7.673170182866815, 110.13503415233636",
  },
  {
    id: 2,
    name: "Naoki Plono Pusat Belanja",
    description:
      "Naoki Plono adalah pusat perbelanjaan modern yang menyediakan berbagai kebutuhan sehari-hari bagi warga Desa Plono Timur dan sekitarnya. Dengan konsep yang ramah lingkungan dan fasilitas lengkap, Naoki Plono menjadi destinasi favorit untuk berbelanja warga Plono Timur.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
    lat: -7.669270405074422,
    lng: 110.14384410223076,
    googleMapsUrl:
      "https://www.google.com/maps?q=-7.669344835126685, 110.14397284826678",
  },
  {
    id: 3,
    name: "Pasar Tradisional Plono Timur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1564769610726-4b5c6e3e7b70?w=800&h=600&fit=crop",
    lat: -7.669157471025906,
    lng: 110.14283798103988,
    googleMapsUrl:
      "https://www.google.com/maps?q=-7.669157471025906, 110.14283798103988",
  },
  {
    id: 4,
    name: "Masjid Jami' Plono Timur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&h=600&fit=crop",
    lat: -7.6688549476936485,
    lng: 110.14665610000333,
    googleMapsUrl:
      "https://www.google.com/maps?q=-7.6688549476936485, 110.14665610000333",
  },
  {
    id: 5,
    name: "Gereja Kristen Jawa Plono (GKJ PLONO)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    lat: -7.665963576040485,
    lng: 110.14422297424042,
    googleMapsUrl:
      "https://www.google.com/maps?q=-7.665963576040485, 110.14422297424042",
  },
  {
    id: 6,
    name: "Masjid Al Hikmah",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop",
    lat: -7.668036810592859,
    lng: 110.14343144170745,
    googleMapsUrl:
      "https://www.google.com/maps?q=-7.668036810592859, 110.14343144170745",
  },
  {
    id: 7,
    name: "Masjid Baiturrohim",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop",
    lat: -7.670035790420361,
    lng: 110.14425756209009,
    googleMapsUrl:
      "https://www.google.com/maps?q=-7.670035790420361, 110.14425756209009",
  },
];

/* ================= ANIMATION ================= */

const cardVariants: Variants = {
  enter: (dir: Direction) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.85,
  }),

  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      opacity: { duration: 0.3 },
      scale: { duration: 0.3 },
    },
  },

  exit: (dir: Direction) => ({
    x: dir > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.85,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      opacity: { duration: 0.2 },
      scale: { duration: 0.2 },
    },
  }),
};

/* ================= COMPONENT ================= */

export default function FasilitasPublikSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>(1);

  const [selectedFasilitas, setSelectedFasilitas] = useState<Fasilitas | null>(
    null,
  );

  /* ========== Scroll Lock ========== */

  useEffect(() => {
    document.body.style.overflow = selectedFasilitas ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedFasilitas]);

  /* ========== Navigation ========== */

  const next = () => {
    setDirection(1);

    setIndex((i) =>
      fasilitasData.length === 0 ? 0 : (i + 1) % fasilitasData.length,
    );
  };

  const prev = () => {
    setDirection(-1);

    setIndex((i) =>
      fasilitasData.length === 0
        ? 0
        : (i - 1 + fasilitasData.length) % fasilitasData.length,
    );
  };

  /* ========== Desktop Cards ========== */

  const visibleCards = () => {
    return [0, 1, 2].map(
      (i) => fasilitasData[(index + i) % fasilitasData.length],
    );
  };

  /* ================= RENDER ================= */

  if (fasilitasData.length === 0) {
    return (
      <section className="py-16 text-center text-gray-500">
        Data fasilitas belum tersedia
      </section>
    );
  }

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
          <NavButton onClick={prev}>
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
                className="w-full"
              >
                <Card
                  item={fasilitasData[index]}
                  mobile
                  onClick={() => setSelectedFasilitas(fasilitasData[index])}
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

interface CardProps {
  item: Fasilitas;
  onClick: () => void;
  mobile?: boolean;
}

function Card({ item, onClick, mobile }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-xl transition cursor-pointer ${
        mobile ? "max-w-full" : ""
      }`}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-800">{item.name}</h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {item.description}
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="w-full border-2 border-emerald-700 text-emerald-700 rounded-full py-2.5 font-medium hover:bg-emerald-50 transition flex items-center justify-center gap-2"
        >
          <MapPin className="w-4 h-4" />
          Lihat Lokasi
        </button>
      </div>
    </div>
  );
}

/* ================= NAV BUTTON ================= */

interface NavButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

function NavButton({ children, onClick }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className="z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:scale-110 transition"
    >
      {children}
    </button>
  );
}

/* ================= MODAL ================= */

interface MapModalProps {
  data: Fasilitas;
  close: () => void;
}

function MapModal({ data, close }: MapModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={close}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gray-100 px-6 py-4 flex justify-between items-center">
          <h3 className="text-xl font-bold">Lokasi {data.name}</h3>

          <button onClick={close}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="w-full h-[400px] rounded-2xl overflow-hidden mb-6">
            <iframe
              src={`https://maps.google.com/maps?q=${data.lat},${data.lng}&z=16&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>

          <a
            href={data.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-full font-medium justify-center items-center gap-2"
          >
            <MapPin className="w-5 h-5" />
            Buka di Google Maps
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
