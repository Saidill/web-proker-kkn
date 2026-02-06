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
    title: "Mengajar di SD PRENNTHALER KALIREJO",
    date: "DD/MM/YYYY",
    shortDesc:
      "Program kerja Mengajar di SD Prennthaler Kalirejo untuk mendukung proses pembelajaran siswa.",
    fullDesc:
      "Program kerja Mengajar di SD Prennthaler Kalirejo bertujuan untuk mendukung proses pembelajaran siswa melalui kegiatan edukatif dan interaktif. Kegiatan meliputi pengajaran matematika dan sains, edukasi pentingnya konsumsi susu untuk kesehatan, pengenalan lagu daerah sebagai upaya pelestarian budaya, algoritma coding sederhana untuk melatih pola pikir logis, serta etika dan literasi digital guna membekali siswa dalam menggunakan teknologi secara bijak.",
    image:
      "/images/kegiatan/mengajar/IMG_20260114_104808.jpeg",
    gallery: [
      "/images/kegiatan/mengajar/IMG_20260114_104808.jpeg",
      "/images/kegiatan/mengajar/IMG_20260114_104824.jpeg",
      "/images/kegiatan/mengajar/IMG_20260114_105335.jpeg",
    ],
  },
  {
    id: 2,
    title: "Program Edukasi dan Pembuatan Mineral Block sebagai Suplemen Mineral bagi Ternak",
    date: "DD/MM/YYYY",
    shortDesc:
      "Penyampaian materi tentang fungsi mineral, demonstrasi pembuatan mineral block, serta praktik bersama peternak.",
    fullDesc:
      "Kegiatan dilakukan melalui penyampaian materi tentang fungsi mineral, demonstrasi pembuatan mineral block, serta praktik bersama peternak. Program ini membantu peternak memahami manfaat dan cara penggunaan mineral block, terciptanya mineral block siap pakai  dengan penerapan sederhana di lapangan.",
    image:
      "/images/kegiatan/mineral_block/IMG_20260121_170329.jpg",
    gallery: [
      "/images/kegiatan/mineral_block/IMG_20260121_170329.jpg",
      "/images/kegiatan/mineral_block/IMG_20260121_170633.jpg",
      "/images/kegiatan/mineral_block/IMG_20260121_171244.jpg",
    ],
  },
  {
    id: 3,
    title: "Penyusunan Profil Dukuh Plono Timur Berdasarkan Aspek Kewilayahan, Demografi, Sosial dan Ekonomi Sebagai Alat Pendataan dan Pengoptimalan Potensi Eksisting Terutama di Bidang Pertanian, Perkebunan, dan Peternakan",
    date: "DD/MM/YYYY",
    shortDesc:
      "Menyusun dokumen komprehensif profil Dukuh Plono Timur yang memuat terkait data dan analisis mengenai karakteristik wilayah, kondisi demografi, dan kondisi sosial.",
    fullDesc:
      "Kegiatan atau program ini dibuat dengan tujuan untuk menyusun dokumen komprehensif profil Dukuh Plono Timur yang memuat terkait data dan analisis mengenai karakteristik wilayah, kondisi demografi, dan kondisi sosial. Profil ini menjadi baseline data untuk perencanaan program dan pembangunan dukuh di bidang demografi, dan kondisi sosial masyarakat Plono Timur untuk mendukung kegiatan pertanian, perkebunan, dan peternakan.",
    image:
      "/images/kegiatan/survei_rafa/IMG_20260103_133423.jpg",
    gallery: [
      "/images/kegiatan/survei_rafa/IMG_20260103_133423.jpg",
      "/images/kegiatan/survei_rafa/IMG_20260103_135827.jpg",
      "/images/kegiatan/survei_rafa/IMG_20260104_132522.jpg",
      "/images/kegiatan/survei_rafa/IMG_20260104_144727.jpg",
    ],
  },
  {
    id: 4,
    title: "Ruang Bercerita dan Tumbuh Bersama Anak Dukuh Plono Timur",
    date: "DD/MM/YYYY",
    shortDesc:
      "Kegiatan edukatif yang dirancang sebagai wadah pembelajaran nonformal bagi anak-anak Dukuh Plono Timur.",
    fullDesc:
      "Ruang Bercerita merupakan kegiatan edukatif yang dirancang sebagai wadah pembelajaran nonformal bagi anak-anak Dukuh Plono Timur. Tujuan kegiatan ini adalah meningkatkan minat baca, kemampuan komunikasi, serta kepercayaan diri anak. Pelaksanaan dilakukan melalui aktivitas membaca bersama, bercerita, bermain edukatif, dan diskusi ringan dengan pendekatan partisipatif. Hasil kegiatan menunjukkan anak-anak lebih aktif, antusias mengikuti kegiatan, serta mulai berani menyampaikan pendapat dan cerita secara lisan.",
    image:
      "/images/kegiatan/tbm/WhatsApp Image 2026-02-06 at 12.25.50.jpeg",
    gallery: [
      "/images/kegiatan/tbm/WhatsApp Image 2026-02-06 at 12.25.50.jpeg",
      "/images/kegiatan/tbm/IMG_20260117_153455.jpg",
      "/images/kegiatan/tbm/IMG_20260117_155953.jpg",
      "/images/kegiatan/tbm/IMG_20260117_160148.jpg",
    ],
  },
  {
    id: 5,
    title: "Pemetaan Kualitas Air dan Zonasi Rawan Longsor sebagai Upaya Mendukung Ketahanan Lingkungan di Kecamatan Samigaluh",
    date: "DD/MM/YYYY",
    shortDesc:
      "Mengidentifikasi kondisi lingkungan di Kecamatan Samigaluh melalui pemetaan kualitas air permukaan sebagai sumber air bersih serta pemetaan zonasi rawan longsor.",
    fullDesc:
      "Program ini bertujuan untuk mengidentifikasi kondisi lingkungan di Kecamatan Samigaluh melalui pemetaan kualitas air permukaan sebagai sumber air bersih serta pemetaan zonasi rawan longsor. Kegiatan ini dilakukan sebagai upaya mendukung keberlanjutan sektor pertanian, perkebunan, peternakan, dan keselamatan permukiman masyarakat. Hasil pemetaan diharapkan dapat menjadi sumber informasi yang mudah dipahami, sehingga masyarakat dapat lebih bijak dalam memanfaatkan sumber daya air serta meningkatkan kewaspadaan dan kesiapsiagaan terhadap potensi bencana longsor di wilayahnya.",
    image:
      "/images/kegiatan/pemetaan/20260106_155317.jpg",
    gallery: [
      "/images/kegiatan/pemetaan/20260106_155317.jpg",
      "/images/kegiatan/pemetaan/IMG-20260106-WA0092.jpg",
      "/images/kegiatan/pemetaan/IMG-20260106-WA0131.jpg",
      "/images/kegiatan/pemetaan/IMG-20260206-WA0060.jpg",
    ],
  },
  {
    id: 6,
    title: "Sosialisasi Pembuatan Minuman Herbal (Wedang Uwuh) di Dukuh Plono Timur",
    date: "DD/MM/YYYY",
    shortDesc:
      "Pembuatan minuman herbal wedang uwuh guna meningkatkan pengetahuan dan keterampilan masyarakat dalam mengolah bahan herbal lokal menjadi minuman yang bernilai ekonomi.",
    fullDesc:
      "Kegiatan praktik pembuatan minuman herbal wedang uwuh bertujuan meningkatkan pengetahuan dan keterampilan masyarakat dalam mengolah bahan herbal lokal menjadi minuman yang bernilai ekonomi. Kegiatan ini dilakukan dengan mengenalkan jenis, manfaat, serta potensi ekonomi.",
    image:
      "/images/kegiatan/wedang_uwuh/IMG_20260114_151921.jpeg",
    gallery: [
      "/images/kegiatan/wedang_uwuh/IMG_20260114_151921.jpeg",
      "/images/kegiatan/wedang_uwuh/IMG_20260114_151921(1).jpeg",
    ],
  },
  {
    id: 7,
    title: "Praktik pembuatan popcorn jagung",
    date: "DD/MM/YYYY",
    shortDesc:
      "Mengenalkan potensi pengolahan popcorn dari jagung kemudian dilanjutkan dengan praktik bersama ibu ibu.",
    fullDesc:
      "Kegiatan praktik pembuatan popcorn jagung dari jagung dilakukan dengan mengenalkan potensi pengolahan popcorn dari jagung kemudian dilanjutkan dengan praktik bersama ibu ibu. Program ini bertujuan untuk memberikan pengetahuan dan keterampilan kepada masyarakat dalam mengolah hasil pertanian menjadi produk bernilai tambah.",
    image:
      "/images/kegiatan/popcorn/IMG_20260113_153300.jpeg",
    gallery: [
      "/images/kegiatan/popcorn/IMG_20260113_153300.jpeg",
      "/images/kegiatan/popcorn/IMG_20260114_151814.jpeg",
      "/images/kegiatan/popcorn/IMG_20260114_151822.jpeg",
    ],
  }
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
