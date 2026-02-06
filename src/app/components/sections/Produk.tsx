"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

/* ================= CONFIG ================= */

const ITEMS_MOBILE = 4;
const ITEMS_DESKTOP = 6;

/* ================= TYPES ================= */

interface Product {
  id: number;
  name: string;
  category: string;
  categoryFull: string;
  description: string;
  descriptionFull: string;
  image: string;
  phone: string;
  seller: string;
  sellerRole: string;
}

/* ================= ICON ================= */

interface IconProps {
  className?: string;
}

const WhatsAppIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
  </svg>
);

/* ================= DATA ================= */
const products: Product[] = [
  {
    id: 1,
    name: "Keripik Talas",
    category: "Makanan",
    categoryFull: "Keripik",
    description:
      "Camilan renyah yang terbuat dari irisan talas pilihan, digoreng hingga garing sempurna.",
    descriptionFull:
      "Camilan renyah yang terbuat dari irisan talas pilihan, digoreng hingga garing sempurna. Teksturnya yang kriuk dan gurih dengan sedikit rasa manis alami dari talas, menjadikannya teman santai yang sempurna. Cocok dinikmati kapan saja, baik sebagai camilan keluarga maupun oleh-oleh khas daerah. \nFacebook: Keripik Talas pak kusdianto",
    seller: "Kusdianto",
    sellerRole: "Penjual Produk",
    phone: "0859138529181",
    image: "/images/product/IMG_9611 - saidil.jpeg",
  },
  {
    id: 2,
    name: "Verda Salon",
    category: "Salon",
    categoryFull: "Jasa Salon",
    description:
      "Salon sederhana di desa kami yang melayani potong rambut, catok, smoothing, dan creambath dengan harga ramah di kantong.",
    descriptionFull:
      "Salon sederhana di desa kami yang melayani potong rambut, catok, smoothing, dan creambath dengan harga ramah di kantong. Dikelola dengan penuh keramahan dan kehangatan khas desa, kami siap membantu Anda tampil rapi dan cantik untuk acara-acara penting seperti pernikahan, pengajian, atau sekadar ingin ganti gaya. Lokasi mudah dijangkau, pelayanan ramah, dan hasil memuaskan. Cocok untuk ibu-ibu, remaja, sampai bapak-bapak yang mau potong rambut! Cantik dan rapi, harga bersahabat.",
    seller: "Theresia Yatinah",
    sellerRole: "Pemilik",
    phone: "085326975288",
    image: "/images/product/IMG_9612 - saidil.jpeg",
  },
  {
    id: 3,
    name: "Geblek Pawon",
    category: "Makanan",
    categoryFull: "Makanan",
    description:
      "Camilan tradisional khas desa yang terbuat dari aci (tepung tapioka) dengan bumbu rempah yang meresap sempurna.",
    descriptionFull:
      "Camilan tradisional khas desa yang terbuat dari aci (tepung tapioka) dengan bumbu rempah yang meresap sempurna. Teksturnya kenyal dan gurih, dengan cita rasa yang khas dan bikin nagih. Dimasak dengan cara sederhana turun-temurun, geblek ini jadi favorit untuk menemani sore hari sambil ngobrol santai. Cocok buat camilan keluarga, oleh-oleh khas daerah, atau sekadar nostalgia rasa masa kecil. Dibuat fresh setiap hari dengan bahan-bahan alami tanpa pengawet. \nIg: Geblek Pawon",
    seller: "Ibu Retno",
    sellerRole: "Penjual Produk",
    phone: "082324702493",
    image: "/images/product/IMG_9613 - saidil.jpeg",
  },
  {
    id: 4,
    name: "Peyek Ibu",
    category: "Peyek Kacang dan Pegagang",
    categoryFull: "Makanan",
    description:
      "Peyek renyah khas buatan rumahan dengan taburan kacang tanah dan pegagang (teri medan) yang melimpah.",
    descriptionFull:
      "Peyek renyah khas buatan rumahan dengan taburan kacang tanah dan pegagang (teri medan) yang melimpah. Dibuat dengan resep turun-temurun menggunakan bumbu rempah pilihan, menghasilkan cita rasa gurih yang pas di lidah. Setiap keping peyek digoreng dengan minyak panas hingga garing sempurna, cocok untuk lauk nasi, teman makan lontong sayur, atau sekadar camilan saat santai. Dibuat fresh tanpa bahan pengawet, murni hasil olahan tangan dengan penuh kehati-hatian.",
    seller: "Ibu Supartini",
    sellerRole: "Penjual Produk",
    phone: "082146149123",
    image: "/images/product/IMG_9629 - saidil.jpeg",
  },
  {
    id: 5,
    name: "Putra Sablon",
    category: "Sablon",
    categoryFull: "Sablon",
    description:
      "Jasa sablon manual untuk berbagai kebutuhan seperti kaos, totebag, seragam, dan merchandise lainnya.",
    descriptionFull:
      "Jasa sablon manual untuk berbagai kebutuhan seperti kaos, totebag, seragam, dan merchandise lainnya. Dikerjakan dengan teknik sablon tradisional yang rapi dan tahan lama, cocok untuk pesanan kelompok seperti acara RT, karang taruna, pengajian, atau reuni keluarga. Harga terjangkau dengan hasil memuaskan. Bisa custom desain sesuai keinginan atau pilih dari katalog yang tersedia. Minimal order fleksibel, pengerjaan cepat dan bisa konsultasi dulu sebelum pesan.",
    seller: "Ponira",
    sellerRole: "Pemilik",
    phone: "081390987908",
    image: "/images/product/17676832053381882227500464048452 - Fafa Rafa.jpg",
  },
  {
    id: 6,
    name: "Baki, Wadah Bibit, Meja Kursi",
    category: "Perabotan",
    categoryFull: "Perabotan",
    description:
      "Menyediakan berbagai perabotan rumah tangga berkualitas dengan harga terjangkau.",
    descriptionFull:
      "Menyediakan berbagai perabotan rumah tangga berkualitas dengan harga terjangkau. Produk meliputi meja, kursi, lemari, rak, dipan, dan furniture kayu lainnya yang dibuat oleh pengrajin lokal dengan bahan pilihan. Bisa pesan sesuai ukuran dan model yang diinginkan, atau pilih dari stok yang sudah tersedia. Pengerjaan rapi dan kokoh, tahan lama untuk kebutuhan sehari-hari. Cocok untuk melengkapi rumah, warung, atau tempat usaha.",
    seller: "Suwarji",
    sellerRole: "Penjual Produk",
    phone: "-",
    image: "/images/product/IMG_3370 - Chrisvina Oryza.jpeg",
  },
  {
    id: 7,
    name: "Ally Family",
    category: "Bubur ayam, Nasi Uduk, Gorengan",
    categoryFull: "Bubur ayam, Nasi Uduk, Gorengan",
    description: "Jualan pagi yang menyajikan menu sarapan favorit warga desa.",
    descriptionFull:
      "Jualan pagi yang menyajikan menu sarapan favorit warga desa. Bubur ayam kuah gurih dengan topping ayam suwir, cakwe renyah, dan taburan bawang goreng. Nasi uduk pulen harum santan disajikan dengan lauk pilihan seperti ayam goreng, telur, tempe orek, dan sambal yang nendang. Tersedia juga gorengan hangat seperti tahu isi, tempe, pisang, bakwan, dan cireng yang baru diangkat dari penggorengan. Cocok buat sarapan keluarga atau teman ngopi pagi.",
    seller: "Pak Basuki",
    sellerRole: "Pemilik",
    phone: "081229860181",
    image: "/images/product/IMG_9660 - saidil.jpeg",
  },
  {
    id: 8,
    name: "Bubur kacang ijo dan bubur sumsum",
    category: "Makanan",
    categoryFull: "Makanan",
    description:
      "Sajian bubur manis hangat yang cocok untuk sarapan atau camilan sore.",
    descriptionFull:
      "Sajian bubur manis hangat yang cocok untuk sarapan atau camilan sore. Bubur kacang ijo lembut dengan kuah santan gurih manis, ditambah potongan roti tawar untuk menambah kenikmatan. Bubur sumsum kenyal lembut disiram kuah gula merah dan santan kental yang manis legit. Dibuat fresh setiap hari dengan bahan-bahan alami tanpa pengawet. Disajikan hangat-hangat, pas banget untuk menghangatkan perut di pagi hari atau menemani sore yang hujan.",
    seller: "Ibu Tri sudarsih",
    sellerRole: "Penjual Produk",
    phone: "082322115207",
    image:
      "https://cdn1-production-images-kly.akamaized.net/Xp1-vbmTUtAPeeCDILd4P3p96sE=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3130110/original/081120200_1589611083-Cara_Membuat_Bubur_Kacang_Hijau_Nikmat.jpg",
  },
  {
    id: 9,
    name: "Kedai Soto Menoreh",
    category: "Makanan",
    categoryFull: "Makanan",
    description:
      "Hidangan berkuah hangat khas rumahan dengan kuah bening yang gurih dan segar.",
    descriptionFull:
      "Hidangan berkuah hangat khas rumahan dengan kuah bening yang gurih dan segar. Berisi potongan daging ayam atau sapi empuk, tauge, soun, telur rebus, dan dilengkapi dengan taburan bawang goreng, seledri, dan koya yang harum. Disajikan dengan nasi pulen dan sambal yang menggigit. Dibuat dengan bumbu rempah tradisional yang diracik turun-temurun, menghasilkan cita rasa yang khas dan bikin ketagihan. Cocok untuk makan siang atau malam, hangat di perut dan bikin kenyang.",
    seller: "Bu Irah",
    sellerRole: "Pemilik",
    phone: "0813209225",
    image: "/images/product/rafly-alfaridzy-9JC5KK9amxA-unsplash.jpg",
  },
  {
    id: 10,
    name: "Mainan anak-anak",
    category: "Mainan",
    categoryFull: "Mainan",
    description:
      "Menjual berbagai mainan untuk anak-anak dengan harga yang ramah di kantong.",
    descriptionFull:
      "Menjual berbagai mainan untuk anak-anak dengan harga yang ramah di kantong. Tersedia mainan tradisional seperti gundu, lompat tali, yoyo, layang-layang, hingga mainan modern seperti boneka, mobil-mobilan, pistol mainan, dan masih banyak lagi. Cocok untuk hadiah ulang tahun, oleh-oleh, atau sekadar membuat anak-anak senang. Mainan dipilih yang aman dan menarik untuk berbagai usia. Bisa beli satuan atau grosir untuk acara seperti 17-an atau perayaan kampung.",
    seller: "Mbah Rusinah",
    sellerRole: "Pemilik",
    phone: "-",
    image:
      "https://images.unsplash.com/photo-1765329104399-e8488fed2cc8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    name: "Warung makan mbak yani",
    category: "Makanan",
    categoryFull: "Makanan soto, rames dll",
    description:
      "Warung makan sederhana yang menyajikan masakan rumahan dengan cita rasa khas ibu rumah tangga.",
    descriptionFull:
      "Warung makan sederhana yang menyajikan masakan rumahan dengan cita rasa khas ibu rumah tangga. Porsi pas, harga bersahabat, dan rasa yang bikin kangen masakan rumah. Suasana warung yang cocok untuk makan siang atau malam bersama keluarga. Pelayanan ramah dan cepat, seperti makan di rumah sendiri.",
    seller: "Ibu Andayani",
    sellerRole: "Pemilik",
    phone: "082324614373",
    image:
      "https://plus.unsplash.com/premium_photo-1661310032863-0488bf177c54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    name: "Usaha Tembakau",
    category: "Kerajinan",
    categoryFull: "Kerajinan",
    description:
      "Menyediakan berbagai kerajinan dari bahan tembakau seperti rokok linting tradisional, cerutu lokal, dan produk olahan tembakau lainnya.",
    descriptionFull:
      "Menyediakan berbagai kerajinan dari bahan tembakau seperti rokok linting tradisional, cerutu lokal, dan produk olahan tembakau lainnya. Dibuat dengan tangan secara manual menggunakan teknik turun-temurun dari pengrajin berpengalaman. Setiap produk dikerjakan dengan teliti menggunakan tembakau pilihan kualitas terbaik dari hasil panen lokal. Cocok untuk konsumsi pribadi, oleh-oleh khas daerah, atau dijual kembali. Tersedia dalam berbagai ukuran dan jenis sesuai selera.",
    seller: "Ibu Susmawati",
    sellerRole: "Pemilik",
    phone: "081377668490",
    image:
      "https://img.freepik.com/foto-premium/daun-tembakau-kering-yang-dibundel-dengan-indah-dengan-urat-rumit-siap-untuk-kerajinan-menggulung-cerutu_209190-168110.jpg",
  },
  {
    id: 13,
    name: "Warung Mbak Suti",
    category: "Makanan",
    categoryFull: "Makanan",
    description:
      "Warung makan sederhana yang menyajikan aneka menu masakan rumahan dengan cita rasa yang enak dan bikin kangen.",
    descriptionFull:
      "Warung makan sederhana yang menyajikan aneka menu masakan rumahan dengan cita rasa yang enak dan bikin kangen. Tersedia nasi dengan berbagai pilihan lauk seperti ayam goreng/bacem, ikan, tempe tahu goreng, telur, plus sayuran seperti sayur asem, lodeh, atau tumisan yang selalu fresh. Porsi mengenyangkan dengan harga yang pas di kantong. Suasana warung yang nyaman dan pelayanan Mbak Suti yang ramah bikin betah makan di sini. Cocok untuk makan siang pekerja, anak sekolah, atau makan malam keluarga.",
    seller: "Ibu Sutijah",
    sellerRole: "Pemilik",
    phone: "-",
    image:
      "https://awsimages.detik.net.id/community/media/visual/2022/04/18/warung-makan-untuk-sahur-2.jpeg?w=1200",
  },
  {
    id: 14,
    name: "Baja Menoreh",
    category: "Jasa",
    categoryFull: "Tangki minyak, tabung-tabung, dll.",
    description:
      "Melayani pembuatan tangki minyak, tabung air, drum, dan berbagai wadah dari plat besi/stainless sesuai pesanan.",
    descriptionFull:
      "Melayani pembuatan tangki minyak, tabung air, drum, dan berbagai wadah dari plat besi/stainless sesuai pesanan. Dikerjakan oleh tukang las berpengalaman dengan hasil yang kuat, rapi, dan anti bocor.\nFacebook: Keliktengki",
    seller: "Bapak Ponijo",
    sellerRole: "Pemilik",
    phone: "08597275577",
    image:
      "https://trubus.id/wp-content/uploads/2023/01/Proses-Pembuatan-Minyak-Gaharu.jpg",
  },
  {
    id: 15,
    name: "Lestari",
    category: "Peyek, ampyang, keripik pegagang",
    categoryFull: "Makanan",
    description:
      "Camilan tradisional khas buatan rumahan dengan cita rasa yang autentik dan bikin nagih.",
    descriptionFull:
      "Camilan tradisional khas buatan rumahan dengan cita rasa yang autentik dan bikin nagih. Peyek renyah dengan taburan kacang tanah melimpah, ampyang kacang manis legit yang kenyal gurih, dan keripik pegagang (teri medan) yang garing pedas gurih.",
    seller: "ibu ch ngatilah",
    sellerRole: "Pemilik",
    phone: "083105273026",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR08X8oCVJZ7Ji9K5Y86ko00mfp9Vul0IquQ&s",
  },
  {
    id: 16,
    name: "Service AC",
    category: "Jasa",
    categoryFull: "Jasa",
    description:
      "Jasa perbaikan dan perawatan AC untuk rumah, warung, atau kantor kecil.",
    descriptionFull:
      "Jasa perbaikan dan perawatan AC untuk rumah, warung, atau kantor kecil. Melayani cuci AC, isi freon, perbaikan kerusakan ringan hingga berat, bongkar pasang, dan pengecekan rutin agar AC awet dan dingin maksimal.",
    seller: "Sukiyat",
    sellerRole: "Pemilik",
    phone: "085742478686",
    image:
      "https://www.abangbenerin.com/blog/wp-content/uploads/2021/07/biaya-service-ac.jpg",
  },
  {
    id: 17,
    name: "Lilik Laundry",
    category: "Laundry",
    categoryFull: "Laundry",
    description:
      "Jasa cuci pakaian, seprei, selimut, dan kain lainnya dengan hasil bersih, wangi, dan rapi.",
    descriptionFull:
      "Jasa cuci pakaian, seprei, selimut, dan kain lainnya dengan hasil bersih, wangi, dan rapi. Melayani cuci kering (dry clean), cuci setrika, dan cuci lipat sesuai kebutuhan. Pakaian dicuci dengan detergen berkualitas dan disetrika dengan rapi.",
    seller: "Lilik",
    sellerRole: "Pemilik",
    phone: "081328810647",
    image:
      "https://i.pinimg.com/736x/e4/b1/ae/e4b1ae6126d895d00b238ad673d02019.jpg",
  },
  {
    id: 18,
    name: "Bengkel Las, Riska Taylor, Toko Buah",
    category: "Bengkel Las, Jahit baju, Buah",
    categoryFull: "Bengkel Las, Jahit baju, Buah",
    description:
      "Tempat usaha lengkap yang melayani berbagai kebutuhan dalam satu lokasi!",
    descriptionFull:
      "Tempat usaha lengkap yang melayani berbagai kebutuhan dalam satu lokasi! Bengkel Las - Perbaikan pagar, teralis, pintu besi, pembuatan konstruksi ringan, dan pengelasan lainnya dengan hasil kuat dan rapi. Jahit Baju - Menerima jahit baju baru, obras, perbaikan pakaian sobek, pasang resleting, kancing, dan modifikasi pakaian sesuai keinginan. Buah Segar - Menjual berbagai buah segar pilihan harian seperti pisang, pepaya, jeruk, apel, dan buah musiman lainnya dengan harga bersaing. Satu tempat, banyak solusi! Pelayanan ramah dan harga terjangkau.\nFacebook: puger tri gunawan",
    seller: "Puger tri gunawan",
    sellerRole: "Pemilik",
    phone: "083875746946",
    image:
      "https://dongkrakusaha.com/uploads/Bengkel20250301-021159-Bengkel%20Las%20Teralis%20Di%20Kebumen.webp",
  },
  {
    id: 19,
    name: "Dodo AC",
    category: "Jasa service ac, mesi cuci, kulkas dll",
    categoryFull: "Jasa service ac, mesi cuci, kulkas dll",
    description:
      "Melayani perbaikan dan perawatan berbagai elektronik rumah tangga seperti AC, mesin cuci, kulkas, freezer, dispenser, dan peralatan elektronik lainnya.",
    descriptionFull:
      "Melayani perbaikan dan perawatan berbagai elektronik rumah tangga seperti AC, mesin cuci, kulkas, freezer, dispenser, dan peralatan elektronik lainnya. Menangani berbagai masalah mulai dari tidak dingin, bocor, mati total, berisik, hingga kerusakan komponen lainnya.",
    seller: "Pak Widodo",
    sellerRole: "Pemilik",
    phone: "-",
    image:
      "https://sosialita.tanahlautkab.go.id/assets/uploads/webp/fotoproduk/crop/SxX1fKYt20231016134021.png.webp",
  },
  {
    id: 20,
    name: "Prima Motor",
    category: "Bengkel",
    categoryFull: "Bengkel",
    description:
      "Melayani servis dan perbaikan motor segala jenis dan merek dari servis rutin hingga perbaikan berat.",
    descriptionFull:
      "Melayani servis dan perbaikan motor segala jenis dan merek. Dari servis rutin seperti ganti oli, tune up, rem, rantai, hingga perbaikan berat seperti turun mesin, ganti kampas kopling, dan kelistrikan. Dikerjakan oleh mekanik berpengalaman dengan spare part original maupun kualitas setara.",
    seller: "Pak Bambang Sigit Iriyanto",
    sellerRole: "Pemilik",
    phone: "081325115905",
    image:
      "https://astraotoshop.com/asset/article-aop/bengkel%20motor%20surabaya_20250825.webp",
  },
  {
    id: 21,
    name: "Toko Kelontong",
    category: "Toko Kelontong",
    categoryFull: "Toko Kelontong",
    description:
      "Toko kelontong lengkap yang menyediakan berbagai kebutuhan sehari-hari.",
    descriptionFull:
      "Toko kelontong lengkap yang menyediakan berbagai kebutuhan sehari-hari mulai dari sembako (beras, gula, minyak, telur), bumbu dapur, mie instan, minuman ringan, sabun mandi, detergen, shampo, jajanan anak, rokok, gas LPG, hingga keperluan rumah tangga lainnya.",
    seller: "Christina Tri Ambarwati",
    sellerRole: "Pemilik",
    phone: "085228399522",
    image:
      "https://finance.pembiayaanbpkb.com/wp-content/uploads/2026/02/Cara-Membuka-Toko-Kelontong2.jpg",
  },
];

/* ================= MAIN ================= */

export default function ProdukLokalSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [currentPage, setCurrentPage] = useState(1);

  /* ================= SCROLL LOCK ================= */

  useEffect(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProduct]);

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

  /* ================= EMPTY STATE ================= */

  if (products.length === 0) {
    return (
      <section className="py-16 text-center text-gray-500">
        Produk belum tersedia
      </section>
    );
  }

  /* ================= RENDER ================= */

  return (
    <section id="ProdukLokal" className="min-h-screen bg-gradient-to-b from-teal-50 to-white py-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Produk Lokal
        </h2>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-10">
          {desktopProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDetail={() => setSelectedProduct(product)}
            />
          ))}
        </div>

        {/* Mobile */}
        <div className="grid lg:hidden grid-cols-2 gap-4 mb-10">
          {mobileProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDetail={() => setSelectedProduct(product)}
            />
          ))}
        </div>

        {/* Desktop Pagination */}
        <div className="hidden lg:flex justify-center gap-2">
          {Array.from({ length: totalPagesDesktop }, (_, i) => i + 1).map(
            (page) => (
              <PaginationButton
                key={page}
                page={page}
                current={currentPage}
                onClick={() => setCurrentPage(page)}
              />
            ),
          )}
        </div>

        {/* Mobile Pagination */}
        <div className="flex lg:hidden justify-center gap-2">
          {Array.from({ length: totalPagesMobile }, (_, i) => i + 1).map(
            (page) => (
              <PaginationButton
                key={page}
                page={page}
                current={currentPage}
                onClick={() => setCurrentPage(page)}
              />
            ),
          )}
        </div>
      </div>

      {/* Popup */}
      {selectedProduct && (
        <ProductPopup
          product={selectedProduct}
          close={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}

/* ================= CARD ================= */

interface ProductCardProps {
  product: Product;
  onDetail: () => void;
}

function ProductCard({ product, onDetail }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-36 md:h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold text-gray-800">{product.name}</h3>

        <p className="text-teal-600 text-sm font-semibold mb-2">
          {product.category}
        </p>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2 hidden md:block">
          {product.description}
        </p>

        <div className="flex gap-2">
          {/* WA */}
          <button
            onClick={() =>
              window.open(`https://wa.me/${product.phone}`, "_blank")
            }
            className="flex-1 bg-[#1F7A4D] hover:bg-teal-800 text-white rounded-full py-2 text-sm font-medium flex items-center justify-center gap-2"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Hubungi
          </button>

          {/* Detail */}
          <button
            onClick={onDetail}
            className="flex-1 border-2 border-teal-700 text-teal-700 rounded-full py-2 text-sm font-medium hover:bg-teal-50"
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================= PAGINATION ================= */

interface PaginationProps {
  page: number;
  current: number;
  onClick: () => void;
}

function PaginationButton({ page, current, onClick }: PaginationProps) {
  return (
    <button
      onClick={onClick}
      className={`w-9 h-9 rounded-lg font-medium transition ${
        page === current
          ? "bg-[#1F7A4D] text-white"
          : "border border-teal-700 text-teal-700 hover:bg-teal-50"
      }`}
    >
      {page}
    </button>
  );
}

/* ================= POPUP ================= */

interface PopupProps {
  product: Product;
  close: () => void;
}

function ProductPopup({ product, close }: PopupProps) {
  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={close}
    >
      <div
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1F7A4D] text-white px-6 py-4 flex justify-between">
          <h3 className="font-semibold text-lg">Detail Produk</h3>

          <button onClick={close}>
            <X />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[80vh]">
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

          <p className="text-gray-700">{product.descriptionFull}</p>

          <div className="bg-teal-50 p-4 rounded-lg">
            <p className="font-bold text-teal-700">{product.seller}</p>

            <p className="text-sm text-gray-600">{product.sellerRole}</p>
          </div>

          <button
            onClick={() =>
              window.open(`https://wa.me/${product.phone}`, "_blank")
            }
            className="w-full bg-[#1F7A4D] hover:bg-teal-800 text-white py-3 rounded-full font-medium flex items-center justify-center gap-2"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Hubungi Penjual
          </button>
        </div>
      </div>
    </div>
  );
}
