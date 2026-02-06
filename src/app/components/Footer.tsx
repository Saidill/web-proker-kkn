"use client";

import React from "react";
import { Phone } from "lucide-react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <>
      {/* Desktop Footer */}
      <footer className="hidden md:block bg-gradient-to-br from-[#2d7a5e] to-[#3d9b73] text-white">
        <div className="max-w-7xl mx-auto px-12 py-10">
          {/* Top Section */}
          <div className="flex items-center justify-between mb-8">
            {/* Brand */}
            <div className="flex items-center gap-5">
              <Image
                src="/images/logo_plono.png"
                alt="Logo Plono Timur"
                width={82}
                height={82}
                className="rounded-full object-cover bg-white"
              />

              <div>
                <h2 className="text-3xl font-bold">Plono Timur</h2>
                <p className="text-base opacity-90">
                  Pagerharjo, Samigaluh, Kulon Progo, DIY
                </p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex items-center gap-6">
              <a
                href="#Beranda"
                className="text-base font-medium hover:opacity-80 transition-opacity"
              >
                Beranda
              </a>
              <span className="text-white/40">|</span>
              <a
                href="#Profil"
                className="text-base font-medium hover:opacity-80 transition-opacity"
              >
                Profil
              </a>
              <span className="text-white/40">|</span>
              <a
                href="#Kegiatan"
                className="text-base font-medium hover:opacity-80 transition-opacity"
              >
                Kegiatan
              </a>
              <span className="text-white/40">|</span>
              <a
                href="#ProdukLokal"
                className="text-base font-medium hover:opacity-80 transition-opacity"
              >
                Produk Lokal
              </a>
              <span className="text-white/40">|</span>
              <a
                href="#Wilayah"
                className="text-base font-medium hover:opacity-80 transition-opacity"
              >
                Wilayah
              </a>
              <span className="text-white/40">|</span>
              <a
                href="#Kontak"
                className="text-base font-medium hover:opacity-80 transition-opacity"
              >
                Kontak
              </a>
            </nav>

            {/* Phone Icon */}
            <button className="w-11 h-11 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 text-[#2d7a5e]" />
            </button>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/30 mb-5"></div>

          {/* Copyright */}
          <div className="text-center text-sm opacity-95">
            © 2026 Plono Timur
          </div>
        </div>
      </footer>

      {/* Mobile Footer */}
      <footer className="md:hidden bg-gradient-to-br from-[#2d7a5e] to-[#3d9b73] text-white px-8 py-16 text-center">
        {/* Brand */}
        <h2 className="text-5xl font-bold mb-4">Plono Timur</h2>
        <p className="text-2xl mb-10 text-[#1a5940]">
          Pagerharjo, Samigaluh, Kulon Progo, DIY
        </p>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-5 mb-12">
          <a
            href="#Beranda"
            className="text-lg font-medium relative after:content-['•'] after:absolute after:-right-2.5 after:opacity-70"
          >
            Beranda
          </a>
          <a
            href="#Profil"
            className="text-lg font-medium relative after:content-['•'] after:absolute after:-right-2.5 after:opacity-70"
          >
            Profil
          </a>
          <a
            href="#Kegiatan"
            className="text-lg font-medium relative after:content-['•'] after:absolute after:-right-2.5 after:opacity-70"
          >
            Kegiatan
          </a>
          <a
            href="#ProdukLokal"
            className="text-lg font-medium relative after:content-['•'] after:absolute after:-right-2.5 after:opacity-70"
          >
            Produk Lokal
          </a>
          <a
            href="#Wilayah"
            className="text-lg font-medium relative after:content-['•'] after:absolute after:-right-2.5 after:opacity-70"
          >
            Wilayah
          </a>
          <a href="#kontak" className="text-lg font-medium">
            Kontak
          </a>
        </nav>

        {/* Divider */}
        <div className="h-px bg-white/30 mb-6"></div>

        {/* Copyright */}
        <div className="space-y-2">
          <p className="text-base opacity-90">© 2026 Plono Timur</p>
          <p className="text-sm font-medium text-[#1a5940]">
            Dikembangkan bersama KKN PPM UGM Periode IV Tahun 2026
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
