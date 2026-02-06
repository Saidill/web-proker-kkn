"use client";

const products = [
  {
    id: 1,
    name: "Keripik Talas",
    image: "/images/product/IMG_9611 - saidil.jpeg"
  },
  {
    id: 2,
    name: "Geblek Pawon",
    image: "/images/product/IMG_9613 - saidil.jpeg"
  },
  {
    id: 3,
    name: "Peyek Kacang dan Pegagang",
    image: "/images/product/IMG_9629 - saidil.jpeg"
  }
];

export default function AboutSection() {
  return (
    <section id="Profil" className="w-full bg-green-50 py-16 lg:py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 lg:mb-8">
            Tentang Plono Timur
          </h2>
          <p className="text-base lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Plono Timur adalah padukuhan yang terletak di Kelurahan Pagerharjo, Kapanewon Samigaluh, Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta. Berada di kawasan perbukitan dengan tanah yang subur, Plono Timur dikelilingi lahan pertanian dan perkebunan yang menjadi sumber kehidupan masyarakat. 
          <br /><br />
          Didukung semangat gotong royong dan kearifan lokal, masyarakat Plono Timur hidup selaras dengan alam serta menjaga keberlanjutan lingkungan sebagai bagian dari identitas padukuhan.         </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative h-20 sm:h-52 lg:h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Product Name */}
              <div className="p-3 sm:p-4 lg:p-8 text-center">
                <h3 className="text-sm sm:text-lg lg:text-3xl font-bold text-gray-800">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}