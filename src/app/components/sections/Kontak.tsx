"use client";

import { User } from "lucide-react";

/* ================= DATA ================= */

const kontakData = [
  {
    id: 1,
    name: "Ketua RT 01",
    phone: "+62 897-3612-1210",
  },
  {
    id: 2,
    name: "Ketua RW 09",
    phone: "+62 897-3612-1210",
  },
  {
    id: 3,
    name: "Dukuh",
    phone: "+62 813-3630-0600",
  },
];

/* ================= COMPONENT ================= */

export default function KontakSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Kontak
        </h2>

        {/* Container */}
        <div className="max-w-6xl mx-auto border-2 border-emerald-700 rounded-3xl p-8 md:p-12">
          {/* Desktop Grid - 3 columns */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {kontakData.map((kontak) => (
              <ContactCard key={kontak.id} kontak={kontak} />
            ))}
          </div>

          {/* Mobile Stack - vertical */}
          <div className="md:hidden space-y-4">
            {kontakData.map((kontak) => (
              <ContactCard key={kontak.id} kontak={kontak} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= SUB COMPONENT ================= */

function ContactCard({ kontak }) {
  return (
    <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div className="bg-emerald-700 rounded-full p-3 flex-shrink-0">
          <User className="w-6 h-6 text-white" />
        </div>

        {/* Content */}
        <div>
          <h3 className="text-lg md:text-xl font-bold text-emerald-700 mb-1">
            Nama Kontak
          </h3>
          <p className="text-gray-700 text-sm md:text-base font-medium">
            {kontak.phone}
          </p>
        </div>
      </div>
    </div>
  );
}