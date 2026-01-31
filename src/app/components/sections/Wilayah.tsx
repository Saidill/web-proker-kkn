"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* ================= DATA ================= */

const dukuhOptions = [
  "Plono Timur",
  "Plono Barat",
  "Plono Utara",
  "Plono Selatan",
];

const rwOptions = [
  "RW 01",
  "RW 02",
  "RW 03",
  "RW 04",
  "RW 05",
  "RW 06",
  "RW 07",
  "RW 08",
  "RW 09",
  "RW 10",
];

const rtOptions = [
  "RT 01",
  "RT 02",
  "RT 03",
  "RT 04",
  "RT 05",
  "RT 06",
  "RT 07",
  "RT 08",
  "RT 09",
  "RT 10",
  "RT 11",
  "RT 12",
  "RT 13",
  "RT 14",
  "RT 15",
  "RT 16",
  "RT 17",
  "RT 18",
  "RT 19",
  "RT 20",
];

const tabs = ["Wilayah", "Zona Rawan", "Kualitas Air", "UMKM"];

// Dummy map images
const mapImages = {
  Wilayah:
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=800&fit=crop",
  "Zona Rawan":
    "https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=1200&h=800&fit=crop",
  "Kualitas Air":
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop",
  UMKM: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&h=800&fit=crop",
};

/* ================= COMPONENT ================= */

export default function WilayahSection() {
  const [activeTab, setActiveTab] = useState("Wilayah");
  const [selectedDukuh, setSelectedDukuh] = useState("Plono Timur");
  const [selectedRW, setSelectedRW] = useState("RW 09");
  const [selectedRT, setSelectedRT] = useState("RT 17");

  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 to-white py-8 md:py-16">
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
              onClick={() => setActiveTab(tab)}
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

        {/* Filters - Only show on Wilayah tab */}
        {activeTab === "Wilayah" && (
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8 max-w-3xl mx-auto">
            {/* Dukuh Dropdown */}
            <div className="relative flex-1">
              <select
                value={selectedDukuh}
                onChange={(e) => setSelectedDukuh(e.target.value)}
                className="w-full appearance-none bg-white border-2 border-green-700 text-green-700 rounded-full px-4 md:px-6 py-2 md:py-3 pr-10 text-sm md:text-base font-medium focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
              >
                {dukuhOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-green-700 pointer-events-none" />
            </div>

            {/* RW Dropdown */}
            <div className="relative flex-1">
              <select
                value={selectedRW}
                onChange={(e) => setSelectedRW(e.target.value)}
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

            {/* RT Dropdown */}
            <div className="relative flex-1">
              <select
                value={selectedRT}
                onChange={(e) => setSelectedRT(e.target.value)}
                className="w-full appearance-none bg-white border-2 border-green-700 text-green-700 rounded-full px-4 md:px-6 py-2 md:py-3 pr-10 text-sm md:text-base font-medium focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
              >
                {rtOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-green-700 pointer-events-none" />
            </div>
          </div>
        )}

        {/* Map Container */}
        <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-xl">
          <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
            {/* Map Image */}
            <div className="relative w-full h-[350px] sm:h-[450px] md:h-[600px]">
              <img
                src={mapImages[activeTab]}
                alt={`Peta ${activeTab}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay info */}
              <div className="absolute top-3 md:top-4 left-3 md:left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 md:px-4 py-1.5 md:py-2 shadow-lg">
                <p className="text-xs md:text-sm font-semibold text-gray-800">
                  {activeTab}
                </p>
                {activeTab === "Wilayah" && (
                  <p className="text-[10px] md:text-xs text-gray-600">
                    {selectedDukuh} - {selectedRW} - {selectedRT}
                  </p>
                )}
              </div>

              {/* Watermark */}
              <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 bg-black/50 backdrop-blur-sm rounded-lg px-2 md:px-3 py-0.5 md:py-1">
                <p className="text-[10px] md:text-xs text-white">
                  Dummy Map Image
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
