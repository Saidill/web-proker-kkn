import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Visimisi from "./components/sections/Visimisi";
import StrukturWarga from "./components/sections/Strukturwarga";
import Kegiatan from "./components/sections/Kegiatan";
import Produk from "./components/sections/Produk";
import Wilayah from "./components/sections/Wilayah";
import FasilitasPublik from "./components/sections/Fasilitaspublik";
import Kontak from "./components/sections/Kontak";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Visimisi />
      <StrukturWarga />
      <Kegiatan />
      <Produk />
      <Wilayah />
      <FasilitasPublik />
      <Kontak />
      <Footer />
    </>
  );
}
