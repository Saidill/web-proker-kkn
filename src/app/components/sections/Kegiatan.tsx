"use client";

import { useState, useEffect, ReactNode } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence, Variants} from "framer-motion";

/* ================= TYPES ================= */

type Kegiatan = {
  id: number;
  title: string;
  date: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  gallery: string[];
};

type Direction = -1 | 0 | 1;

/* ================= DATA ================= */

const kegiatanData: Kegiatan[] = [
   {
    id: 1,
    title: "Kerja Bakti Lingkungan RW 10",
    date: "DD/MM/YYYY",
    shortDesc:
      "Kegiatan gotong royong warga RW 10 untuk menjaga kebersihan dan kenyamanan lingkungan RW.",
    fullDesc:
      "Kerja Bakti RW 10 merupakan kegiatan rutin yang melibatkan warga dalam membersihkan lingkungan sekitar, seperti jalan, saluran air, dan fasilitas umum. Kegiatan ini bertujuan untuk menciptakan lingkungan yang bersih, sehat, dan nyaman, sekaligus mempererat kebersamaan serta semangat gotong royong antarwarga Plono Timur.",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=400&h=300&fit=crop",
    ],
  },
  {
    id: 2,
    title: "Senam Bersama Gerakan Masyarakat Sehat",
    date: "DD/MM/YYYY",
    shortDesc:
      "Deskripsi kegiatan masyarakat yang ada di Plono Timur. Deskripsi kegiatan masyarakat yang ada di Plono Timur. Deskripsi kegiatan masyarakat yang ada......",
    fullDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=400&h=300&fit=crop",
    ],
  },
  {
    id: 3,
    title: "Diskusi Warga Plono Timur Bersama KKN PPM UGM",
    date: "DD/MM/YYYY",
    shortDesc:
      "Deskripsi kegiatan masyarakat yang ada di Plono Timur. Deskripsi kegiatan masyarakat yang ada di Plono Timur. Deskripsi kegiatan masyarakat yang ada......",
    fullDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=400&h=300&fit=crop",
    ],
  },
  {
    id: 4,
    title: "Tanam Jahe Bersama Warga",
    date: "DD/MM/YYYY",
    shortDesc:
      "Deskripsi kegiatan masyarakat yang ada di Plono Timur. Deskripsi kegiatan masyarakat yang ada di Plono Timur. Deskripsi kegiatan masyarakat yang ada......",
    fullDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop",
    ],
  },
  {
    id: 5,
    title: "HUT Ke-79 Kalurahan Pagerharjo",
    date: "DD/MM/YYYY",
    shortDesc:
      "Deskripsi kegiatan masyarakat yang ada di Plono Timur. Deskripsi kegiatan masyarakat yang ada di Plono Timur. Deskripsi kegiatan masyarakat yang ada......",
    fullDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop",
    ],
  },
  {
    id: 6,
    title: "HUT Ke-79 Kalurahan Pagerharjo",
    date: "DD/MM/YYYY",
    shortDesc:
      "Deskripsi kegiatan masyarakat yang ada di Plono Timur. Deskripsi kegiatan masyarakat yang ada di Plono Timur. Deskripsi kegiatan masyarakat yang ada......",
    fullDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop",
    ],
  },
  {
    id: 7,
    title: "Posyandu Balita",
    date: "DD/MM/YYYY",
    shortDesc:
      "Deskripsi kegiatan masyarakat yang ada di Plono Timur. Deskripsi kegiatan masyarakat yang ada di Plono Timur. Deskripsi kegiatan masyarakat yang ada......",
    fullDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop",
    ],
  },
    {
    id: 8,
    title: "Dasa Wisma",
    date: "DD/MM/YYYY",
    shortDesc:
      "Deskripsi kegiatan masyarakat yang ada di Plono Timur. Deskripsi kegiatan masyarakat yang ada di Plono Timur. Deskripsi kegiatan masyarakat yang ada......",
    fullDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop",
    ],
  },
  {
    id: 9,
    title: "Kegiatan PKK RW 9",
    date: "DD/MM/YYYY",
    shortDesc:
      "Deskripsi kegiatan masyarakat yang ada di Plono Timur. Deskripsi kegiatan masyarakat yang ada di Plono Timur. Deskripsi kegiatan masyarakat yang ada......",
    fullDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop",
    ],
  },
  {
    id: 10,
    title: "Perkumpulan RW 10",
    date: "DD/MM/YYYY",
    shortDesc:
      "Deskripsi kegiatan masyarakat yang ada di Plono Timur. Deskripsi kegiatan masyarakat yang ada di Plono Timur. Deskripsi kegiatan masyarakat yang ada......",
    fullDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://drive.google.com/file/d/1goQUEr06VhNhaTH1ZCfHOfDXVxZRs-Fq/view?usp=drive_link",
    gallery: [
      "https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop",
    ],
  },
  {
    id: 11,
    title: "Kegiatan PKK RW 11",
    date: "DD/MM/YYYY",
    shortDesc:
      "Deskripsi kegiatan masyarakat yang ada di Plono Timur. Deskripsi kegiatan masyarakat yang ada di Plono Timur. Deskripsi kegiatan masyarakat yang ada......",
    fullDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop",
    ],
  },
  {
    id: 10,
    title: "Kegiatan Taman Bacaan Masyarakat",
    date: "04/01/2026",
    shortDesc:
      "Deskripsi kegiatan masyarakat yang ada di Plono Timur. Deskripsi kegiatan masyarakat yang ada di Plono Timur. Deskripsi kegiatan masyarakat yang ada......",
    fullDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop",
    ],
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

export default function KegiatanSection() {
  const [index, setIndex] = useState<number>(0);

  const [popup, setPopup] = useState<Kegiatan | null>(null);

  const [direction, setDirection] = useState<Direction>(0);

  /* ========== Scroll Lock ========== */
  useEffect(() => {
    document.body.style.overflow = popup ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [popup]);

  /* ========== Navigation ========== */

  const next = (): void => {
    setDirection(1);

    setIndex((i) => (i + 1) % kegiatanData.length);
  };

  const prev = (): void => {
    setDirection(-1);

    setIndex(
      (i) => (i - 1 + kegiatanData.length) % kegiatanData.length,
    );
  };

  /* ========== Desktop Cards ========== */

  const visibleCards = (): Kegiatan[] => {
    return [0, 1, 2].map(
      (i) => kegiatanData[(index + i) % kegiatanData.length],
    );
  };

  /* ================= RENDER ================= */

  return (
    <section
      id="Kegiatan"
      className="py-16 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Kegiatan Masyarakat
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
              <div
                key={item.id}
                onClick={() => setPopup(item)}
                className="cursor-pointer bg-white rounded-3xl shadow-lg hover:shadow-xl transition"
              >
                <Card item={item} />
              </div>
            ))}

          </div>

          {/* Mobile */}
          <div className="md:hidden flex-1 overflow-hidden px-2">

            <AnimatePresence
              initial={false}
              custom={direction}
              mode="wait"
            >
              <motion.div
                key={index}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                onClick={() =>
                  setPopup(kegiatanData[index])
                }
                className="cursor-pointer w-full"
              >
                <Card item={kegiatanData[index]} mobile />
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Next */}
          <NavButton onClick={next}>
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </NavButton>

        </div>

        {/* Popup */}
        {popup && (
          <Popup
            data={popup}
            close={() => setPopup(null)}
          />
        )}

      </div>
    </section>
  );
}

/* ================= SUB COMPONENT ================= */

/* ===== Card ===== */

type CardProps = {
  item: Kegiatan;
  mobile?: boolean;
};

function Card({ item, mobile = false }: CardProps) {
  return (
    <div
      className={`overflow-hidden rounded-3xl bg-white shadow-lg ${
        mobile ? "max-w-full" : ""
      }`}
    >
      <img
        src={item.image}
        alt={item.title}
        className={`w-full object-cover ${
          mobile ? "h-64 sm:h-80" : "h-48"
        }`}
      />

      <div className={mobile ? "p-8" : "p-6"}>

        <h3
          className={`font-bold mb-2 text-gray-800 ${
            mobile ? "text-2xl" : "text-xl"
          }`}
        >
          {item.title}
        </h3>

        <p
          className={`text-gray-500 mb-3 ${
            mobile ? "text-base" : "text-sm"
          }`}
        >
          {item.date}
        </p>

        <p
          className={`text-gray-600 line-clamp-3 ${
            mobile
              ? "text-base leading-relaxed"
              : "text-sm"
          }`}
        >
          {item.shortDesc}
        </p>

      </div>
    </div>
  );
}

/* ===== NavButton ===== */

type NavButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

function NavButton({
  children,
  onClick,
}: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className="z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 flex-shrink-0"
    >
      {children}
    </button>
  );
}

/* ===== Popup ===== */

type PopupProps = {
  data: Kegiatan;
  close: () => void;
};

function Popup({ data, close }: PopupProps) {
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
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center rounded-t-3xl z-10">

          <h3 className="text-2xl font-bold text-gray-800">
            Detail Kegiatan
          </h3>

          <button
            onClick={close}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X className="w-6 h-6" />
          </button>

        </div>

        {/* Body */}
        <div className="p-6">

          <img
            src={data.image}
            alt={data.title}
            className="w-full h-64 object-cover rounded-2xl mb-6"
          />

          <h4 className="text-3xl font-bold mb-2 text-gray-800">
            {data.title}
          </h4>

          <p className="text-sm text-gray-500 mb-4">
            {data.date}
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            {data.fullDesc}
          </p>

          {/* Gallery */}
          <h5 className="text-xl font-semibold mb-4 text-gray-800">
            Galeri
          </h5>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {data.gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-32 object-cover rounded-xl hover:scale-105 transition-transform duration-200"
              />
            ))}

          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}
