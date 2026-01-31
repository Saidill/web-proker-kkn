"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

/* ================= CONFIG ================= */

const ITEMS_MOBILE = 4;
const ITEMS_DESKTOP = 6;

/* ================= ICON ================= */

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
  </svg>
);

/* ================= MAIN ================= */

const ProdukLokalSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  /* ================= SCROLL LOCK ================= */
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProduct]);

  /* ================= DATA ================= */

  const products = [
    {
      id: 1,
      name: "Produk 1",
      category: "Makanan",
      categoryFull: "Kategori Produk",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      seller: "Ini Nama Penjualnya",
      sellerRole: "Penjual Produk",
      phone: "6281234567890",
      image:
        "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Produk 2",
      category: "Minuman",
      categoryFull: "Kategori Produk",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      seller: "Nama Penjual Dua",
      sellerRole: "Penjual Produk",
      phone: "6281234567890",
      image:
        "https://images.unsplash.com/photo-1544145945-35c4e5d30c7f?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Produk 3",
      category: "Makanan",
      categoryFull: "Kategori Produk",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      seller: "Penjual Ketiga",
      sellerRole: "Penjual Produk",
      phone: "6281234567890",
      image:
        "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Produk 4",
      category: "Makanan",
      categoryFull: "Kategori Produk",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      seller: "Toko Empat",
      sellerRole: "Penjual Produk",
      phone: "6281234567890",
      image:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop",
    },
    {
      id: 5,
      name: "Produk 5",
      category: "Minuman",
      categoryFull: "Kategori Produk",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      seller: "Penjual Lima",
      sellerRole: "Penjual Produk",
      phone: "6281234567890",
      image:
        "https://images.unsplash.com/photo-1556910633-5099dc3971e8?w=400&h=400&fit=crop",
    },
    {
      id: 6,
      name: "Produk 6",
      category: "Makanan",
      categoryFull: "Kategori Produk",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      seller: "Toko Enam",
      sellerRole: "Penjual Produk",
      phone: "6281234567890",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop",
    },
    {
      id: 7,
      name: "Produk 7",
      category: "Makanan",
      categoryFull: "Kategori Produk",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      seller: "Penjual Tujuh",
      sellerRole: "Penjual Produk",
      phone: "6281234567890",
      image:
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop",
    },
    {
      id: 8,
      name: "Produk 8",
      category: "Minuman",
      categoryFull: "Kategori Produk",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      seller: "Toko Delapan",
      sellerRole: "Penjual Produk",
      phone: "6281234567890",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=400&fit=crop",
    },
    {
      id: 9,
      name: "Produk 9",
      category: "Makanan",
      categoryFull: "Kategori Produk",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      seller: "Penjual Sembilan",
      sellerRole: "Penjual Produk",
      phone: "6281234567890",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop",
    },
    {
      id: 10,
      name: "Produk 10",
      category: "Makanan",
      categoryFull: "Kategori Produk",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      seller: "Toko Sepuluh",
      sellerRole: "Penjual Produk",
      phone: "6281234567890",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
    },
    {
      id: 11,
      name: "Produk 11",
      category: "Minuman",
      categoryFull: "Kategori Produk",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      seller: "Penjual Sebelas",
      sellerRole: "Penjual Produk",
      phone: "6281234567890",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop",
    },
    {
      id: 12,
      name: "Produk 12",
      category: "Makanan",
      categoryFull: "Kategori Produk",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descriptionFull:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      seller: "Toko Duabelas",
      sellerRole: "Penjual Produk",
      phone: "6281234567890",
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop",
    },
  ];

  /* ================= PAGINATION ================= */
  // Mobile
  const totalPagesMobile = Math.ceil(products.length / ITEMS_MOBILE);

  const startMobile = (currentPage - 1) * ITEMS_MOBILE;

  const mobileProducts = products.slice(
    startMobile,
    startMobile + ITEMS_MOBILE,
  );

  // Desktop
  const totalPagesDesktop = Math.ceil(products.length / ITEMS_DESKTOP);

  const startDesktop = (currentPage - 1) * ITEMS_DESKTOP;

  const desktopProducts = products.slice(
    startDesktop,
    startDesktop + ITEMS_DESKTOP,
  );

  /* ================= COMPONENT ================= */

  const ProductCard = ({ product }) => (
    <div
      id="ProdukLokal"
      className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-36 md:h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold text-gray-800 text-base md:text-lg">
          {product.name}
        </h3>

        <p className="text-teal-600 text-sm font-semibold mb-2">
          {product.category}
        </p>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2 hidden md:block">
          {product.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-2">
          {/* WA Button */}
          <button
            onClick={() =>
              window.open(`https://wa.me/${product.phone}`, "_blank")
            }
            className="flex-1 bg-[#1F7A4D] hover:bg-teal-800 text-white rounded-full py-2 text-sm font-medium transition flex items-center justify-center gap-2"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Hubungi</span>
          </button>

          {/* Detail */}
          <button
            onClick={() => setSelectedProduct(product)}
            className="flex-1 border-2 border-teal-700 text-teal-700 rounded-full py-2 text-sm font-medium hover:bg-teal-50 transition"
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );

  const ProductPopup = ({ product }) => (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={() => setSelectedProduct(null)}
    >
      <div
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1F7A4D] text-white px-6 py-4 flex justify-between items-center">
          <h3 className="font-semibold text-lg">Detail Produk</h3>

          <button
            onClick={() => setSelectedProduct(null)}
            className="hover:bg-teal-800 rounded-full p-1 transition"
          >
            <X />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[80vh] p-6 space-y-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md mx-auto rounded-lg"
          />

          <div>
            <h2 className="text-2xl font-bold">{product.name}</h2>

            <p className="text-[#1F7A4D] font-semibold">
              {product.categoryFull}
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            {product.descriptionFull}
          </p>

          <div className="bg-teal-50 p-4 rounded-lg">
            <p className="font-bold text-teal-700">{product.seller}</p>

            <p className="text-sm text-gray-600">{product.sellerRole}</p>
          </div>

          <button
            onClick={() =>
              window.open(`https://wa.me/${product.phone}`, "_blank")
            }
            className="w-full bg-[#1F7A4D] bottom-4 z-50 sticky hover:bg-teal-800 text-white py-3 rounded-full font-medium transition flex items-center justify-center gap-2"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Hubungi Penjual
          </button>
        </div>
      </div>
    </div>
  );

  /* ================= RENDER ================= */

  return (
    <section className="min-h-screen bg-gradient-to-b from-teal-50 to-white py-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Produk Lokal
        </h2>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-10">
          {desktopProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile Grid */}
        <div className="grid lg:hidden grid-cols-2 gap-4 mb-10">
          {mobileProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Desktop Pagination */}
        <div className="hidden lg:flex justify-center gap-2">
          {Array.from({ length: totalPagesDesktop }, (_, i) => i + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-lg font-medium transition ${
                  page === currentPage
                    ? "bg-[#1F7A4D] text-white"
                    : "border border-teal-700 text-teal-700 hover:bg-teal-50"
                }`}
              >
                {page}
              </button>
            ),
          )}
        </div>

        {/* Mobile Pagination */}
        <div className="flex lg:hidden justify-center gap-2">
          {Array.from({ length: totalPagesMobile }, (_, i) => i + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-lg font-medium transition ${
                  page === currentPage
                    ? "bg-[#1F7A4D] text-white"
                    : "border border-teal-700 text-teal-700 hover:bg-teal-50"
                }`}
              >
                {page}
              </button>
            ),
          )}
        </div>
      </div>

      {/* Popup */}
      {selectedProduct && <ProductPopup product={selectedProduct} />}
    </section>
  );
};

export default ProdukLokalSection;
