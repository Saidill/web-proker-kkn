"use client";

import Image from "next/image";

const struktur = {
  dukuh: {
    title: "Dukuh",
    name: "Paulus Priyo Sabtono"
  },
  rw: [
    {
      id: 1,
      title: "Ketua RW 09",
      name: "Paulus Swarno"
    },
    {
      id: 2,
      title: "Ketua RW 10",
      name: "Widodo"
    },
    {
      id: 3,
      title: "Ketua RW 11",
      name: "Marjuki"
    }
  ],
  rt: [
    {
      id: 1,
      items: [
        { number: "RT 17", name: "V. Sumardi" },
        { number: "RT 18", name: "Suroto" }
      ]
    },
    {
      id: 2,
      items: [
        { number: "RT 19", name: "Puger Tri Gunawan" },
        { number: "RT 20", name: "Suwarji." }
      ]
    },
    {
      id: 3,
      items: [
        { number: "RT 21", name: "Mujiharjo" },
        { number: "RT 22", name: "Sudarmawan" }
      ]
    }
  ],
  bottom: [
    {
      id: 1,
      title: "Keamanan",
      items: [
        { name: "Suprapman" },
        { name: "Supriyanto" }
      ]
    },
    {
      id: 2,
      title: "Kesehatan",
      items: [
        { name: "Kader Posyandu" },
        { name: "Kader PKK" }
      ]
    },
    {
      id: 3,
      title: "Keagamaan",
      items: [
        { name: "Rois Fajar Abdullah" },
      ]
    }
  ]
};

export default function StrukturWargaSection() {
  return (
    <section className="w-full bg-gray-50 py-8 lg:py-20 px-3 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Title */}
        <h2 className="text-2xl lg:text-5xl font-bold text-green-700 text-center mb-5 lg:mb-12">
          Struktur Warga
        </h2>

        {/* Container with border */}
        <div className="bg-white rounded-xl lg:rounded-3xl p-3 lg:p-12 shadow-lg border border-gray-300">
          
          {/* Dukuh - Top Center */}
          <div className="flex justify-center mb-3 lg:mb-10">
            <div className="bg-green-100 rounded-lg lg:rounded-2xl p-2 lg:p-6 w-full max-w-[140px] lg:max-w-[300px]">
              <div className="flex items-center gap-1 lg:gap-3 mb-0.5 lg:mb-2">
                <Image 
                  src="/images/person.png" 
                  alt="Person Icon" 
                  width={16} 
                  height={16}
                  className="w-3 h-3 lg:w-7 lg:h-7"
                />
                <h3 className="text-[10px] lg:text-xl font-bold text-green-700">
                  {struktur.dukuh.title}
                </h3>
              </div>
              <p className="text-[8px] lg:text-base text-gray-800">
                {struktur.dukuh.name}
              </p>
            </div>
          </div>

          {/* RW Row */}
          <div className="grid grid-cols-3 gap-1.5 lg:gap-6 mb-2 lg:mb-6">
            {struktur.rw.map((rw) => (
              <div key={rw.id} className="bg-green-100 rounded-lg lg:rounded-2xl p-1.5 lg:p-5">
                <div className="flex items-center gap-1 lg:gap-3 mb-0.5 lg:mb-2">
                  <Image 
                    src="/images/person.png" 
                    alt="Person Icon" 
                    width={12} 
                    height={12}
                    className="w-2.5 h-2.5 lg:w-6 lg:h-6"
                  />
                  <h4 className="text-[8px] lg:text-lg font-bold text-green-700">
                    {rw.title}
                  </h4>
                </div>
                <p className="text-[7px] lg:text-base text-gray-800">
                  {rw.name}
                </p>
              </div>
            ))}
          </div>

          {/* RT Row */}
          <div className="grid grid-cols-3 gap-1.5 lg:gap-6 mb-2 lg:mb-6">
            {struktur.rt.map((rt) => (
              <div key={rt.id} className="bg-green-100 rounded-lg lg:rounded-2xl p-1.5 lg:p-5">
                <div className="flex items-center gap-1 lg:gap-3 mb-1 lg:mb-3">
                  <Image 
                    src="/images/person.png" 
                    alt="Person Icon" 
                    width={12} 
                    height={12}
                    className="w-2.5 h-2.5 lg:w-6 lg:h-6"
                  />
                  <h4 className="text-[8px] lg:text-lg font-bold text-green-700">
                    Ketua RT
                  </h4>
                </div>
                <div className="space-y-1 lg:space-y-3">
                  {rt.items.map((item, index) => (
                    <div key={index}>
                      <div className="flex gap-0.5 lg:gap-2 text-[7px] lg:text-base">
                        <span className="font-bold text-green-700">{item.number}</span>
                        <span className="text-gray-800">{item.name}</span>
                      </div>
                      {index < rt.items.length - 1 && (
                        <hr className="my-1 lg:my-3 border-t border-gray-400" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-3 gap-1.5 lg:gap-6">
            {struktur.bottom.map((item) => (
              <div key={item.id} className="bg-green-100 rounded-lg lg:rounded-2xl p-1.5 lg:p-5">
                <div className="flex items-center gap-1 lg:gap-3 mb-1 lg:mb-3">
                  <Image 
                    src="/images/person.png" 
                    alt="Person Icon" 
                    width={12} 
                    height={12}
                    className="w-2.5 h-2.5 lg:w-6 lg:h-6"
                  />
                  <h4 className="text-[8px] lg:text-lg font-bold text-green-700">
                    {item.title}
                  </h4>
                </div>
                <div className="space-y-1 lg:space-y-3">
                  {item.items.map((member, index) => (
                    <div key={index}>
                      <p className="text-[7px] lg:text-base text-gray-800">
                        {member.name}
                      </p>
                      {index < item.items.length - 1 && (
                        <hr className="my-1 lg:my-3 border-t border-gray-400" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}