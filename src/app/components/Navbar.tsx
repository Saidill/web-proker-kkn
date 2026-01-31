"use client";

import { useState } from "react";

const menus = [
  { label: "Beranda", href: "#Beranda" },
  { label: "Profil", href: "#profil" },
  { label: "Kegiatan", href: "#Kegiatan" },
  { label: "Produk Lokal", href: "#ProdukLokal" },
  { label: "Wilayah", href: "#wilayah" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [active, setActive] = useState("Beranda");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto px-6 lg:px-12">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-green-100" />
            <span className="text-xl lg:text-3xl font-semibold text-green-700">
              Plono Timur
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {menus.map((menu) => {
              const isActive = active === menu.label;

              return (
                <li key={menu.label}>
                  <a
                    href={menu.href}
                    onClick={() => setActive(menu.label)}
                    className={`relative text-xl font-semibold transition-colors
                      ${
                        isActive
                          ? "text-green-700"
                          : "text-gray-700 hover:text-green-600"
                      }
                      after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full
                      after:origin-left after:scale-x-0 after:bg-green-700 after:transition-transform
                      ${isActive && "after:scale-x-100"}
                    `}
                  >
                    {menu.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center relative"
          >
            <span
              className={`w-7 h-0.5 bg-green-700 rounded transition-all absolute ${isOpen ? "rotate-45" : "top-1"}`}
            />
            <span
              className={`w-7 h-0.5 bg-green-700 rounded transition-all ${isOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`w-7 h-0.5 bg-green-700 rounded transition-all absolute ${isOpen ? "-rotate-45" : "bottom-1"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute left-4 right-4 top-20 bg-white rounded-3xl shadow-2xl overflow-hidden z-50">
          <ul className="py-4">
            {menus.map((menu) => {
              const isActive = active === menu.label;

              return (
                <li key={menu.label}>
                  <a
                    href={menu.href}
                    onClick={() => {
                      setActive(menu.label);
                      setIsOpen(false);
                    }}
                    className={`block px-8 py-3 text-xl font-semibold text-center transition-colors
      ${isActive ? "text-green-700" : "text-gray-800"}
    `}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span>{menu.label}</span>

                      {/* underline selalu ada */}
                      <div className="w-full h-0.5 bg-green-600 rounded-full" />
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
