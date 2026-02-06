"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* ================= TYPES ================= */

type RW = "RW 09" | "RW 10" | "RW 11";

type KependudukanOption =
  | "Profil Kependudukan"
  | "Komposisi Masyarakat"
  | "Profil Lokasi Dukuh"
  | "Peta Administrasi Dukuh"
  | "Peta Administrasi";

type Tab = "Kependudukan" | "Zona Rawan" | "Kualitas Air" | "UMKM";

/* ================= DATA ================= */

const rwOptions: RW[] = ["RW 09", "RW 10", "RW 11"];

const kependudukanOption: KependudukanOption[] = [
  "Profil Kependudukan",
  "Komposisi Masyarakat",
  "Profil Lokasi Dukuh",
  "Peta Administrasi Dukuh",
  "Peta Administrasi",
];

const tabs: Tab[] = ["Kependudukan", "Zona Rawan", "Kualitas Air", "UMKM"];

type KependudukanMap = string | Record<RW, string>;

type MapImages = {
  Kependudukan: Record<KependudukanOption, KependudukanMap>;
  "Zona Rawan": string;
  "Kualitas Air": string;
  UMKM: string;
};

// Map images untuk setiap kombinasi
const mapImages: MapImages = {
  Kependudukan: {
    "Profil Kependudukan": "/images/datapenduduk/Profil Kependudukan.png",

    "Komposisi Masyarakat": {
      "RW 09": "/images/datapenduduk/Komposisi RW 9.png",
      "RW 10": "/images/datapenduduk/Komposisi RW 1.png",
      "RW 11": "/images/datapenduduk/Komposisi RW 11.png",
    },
    "Profil Lokasi Dukuh": "/images/datapenduduk/Peta Lokasi Dukuh.png",
    "Peta Administrasi Dukuh": "/images/datapenduduk/peta dukuh.jpeg",

    "Peta Administrasi": {
      "RW 09": "/images/datapenduduk/peta administari 9.jpeg",
      "RW 10": "/images/datapenduduk/peta administrasi 10.jpeg",
      "RW 11": "/images/datapenduduk/peta administrasi 11.jpeg",
    },
  },

  "Zona Rawan": "/images/datapenduduk/PETA POTENSI LONGSOR KKN.png",
  "Kualitas Air": "/images/datapenduduk/kualitas air.png",
  UMKM: "/images/datapenduduk/peta umkm.jpeg",
};

/* ================= COMPONENT ================= */

export default function WilayahSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Kependudukan");

  const [selectedKependudukan, setSelectedKependudukan] =
    useState<KependudukanOption>("Profil Kependudukan");

  const [selectedRW, setSelectedRW] = useState<RW>("RW 09");

  /* ================= HELPERS ================= */

  // Apakah perlu filter RW
  const needsRWFilter = (): boolean => {
    return (
      activeTab === "Kependudukan" &&
      (selectedKependudukan === "Komposisi Masyarakat" ||
        selectedKependudukan === "Peta Administrasi")
    );
  };

  // Ambil image
  const getMapImage = (): string => {
    if (activeTab === "Kependudukan") {
      const kependudukanData = mapImages.Kependudukan[selectedKependudukan];

      if (typeof kependudukanData === "object") {
        return kependudukanData[selectedRW];
      }

      return kependudukanData;
    }

    return mapImages[activeTab];
  };

  /* ================= HANDLERS ================= */

  const handleTabChange = (tab: Tab): void => {
    setActiveTab(tab);

    if (tab === "Kependudukan") {
      setSelectedKependudukan("Profil Kependudukan");
      setSelectedRW("RW 09");
    }
  };

  const handleKependudukanChange = (value: KependudukanOption): void => {
    setSelectedKependudukan(value);
    setSelectedRW("RW 09");
  };

  const handleRWChange = (value: RW): void => {
    setSelectedRW(value);
  };

  /* ================= RENDER ================= */

  return (
    <section
      id="Wilayah"
      className="min-h-screen bg-gradient-to-b from-green-50 to-white py-8 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8 text-gray-900">
          Wilayah Plono Timur
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-green-700 text-white shadow-lg scale-105"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Filters */}
        {activeTab === "Kependudukan" && (
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8 max-w-3xl mx-auto">
            {/* Kependudukan */}
            <div className="relative flex-1">
              <select
                value={selectedKependudukan}
                onChange={(e) =>
                  handleKependudukanChange(e.target.value as KependudukanOption)
                }
                className="w-full appearance-none bg-white border-2 border-green-700 text-green-700 rounded-full px-4 md:px-6 py-2 md:py-3 pr-10 text-sm md:text-base font-medium focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
              >
                {kependudukanOption.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <ChevronDown className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-green-700 pointer-events-none" />
            </div>

            {/* RW */}
            {needsRWFilter() && (
              <div className="relative flex-1">
                <select
                  value={selectedRW}
                  onChange={(e) => handleRWChange(e.target.value as RW)}
                  className="w-full appearance-none bg-white border-2 border-green-700 text-green-700 rounded-full px-4 md:px-6 py-2 md:py-3 pr-10 text-sm md:text-base font-medium focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                >
                  {rwOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <ChevronDown className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-green-700 pointer-events-none" />
              </div>
            )}
          </div>
        )}

        {/* Map */}
        <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-xl">
          <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
            <div className="relative w-full overflow-x-auto overflow-y-hidden">
              <div className="min-w-[800px] md:min-w-full h-full">
                <img
                  src={getMapImage()}
                  alt={`Peta ${activeTab}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:hidden text-center py-2 bg-gray-50">
              <p className="text-xs text-gray-500">
                ← Geser untuk melihat selengkapnya →
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
