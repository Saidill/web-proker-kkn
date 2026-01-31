"use client";

const products = [
  {
    id: 1,
    name: "Susu Kambing",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Susu Kambing",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Susu Kambing",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop"
  }
];

export default function AboutSection() {
  return (
    <section className="w-full bg-green-50 py-16 lg:py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 lg:mb-8">
            Tentang Plono Timur
          </h2>
          <p className="text-base lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
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