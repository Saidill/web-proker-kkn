"use client";

import { Check } from "lucide-react";

const missionItems = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

export default function VisionMissionSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl lg:text-5xl font-bold text-green-700 text-center mb-12 lg:mb-16">
          Visi & Misi
        </h2>

        {/* Desktop & Mobile Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          
          {/* Visi Card */}
          <div className="w-full lg:w-1/2 bg-green-700 rounded-3xl lg:rounded-[2.5rem] p-8 lg:p-12 shadow-lg">
            <h3 className="text-3xl lg:text-4xl font-bold text-white text-center mb-6 lg:mb-8">
              Visi
            </h3>
            <p className="text-base lg:text-lg text-white leading-relaxed text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Misi Card */}
          <div className="w-full lg:w-1/2 bg-green-50 rounded-3xl lg:rounded-[2.5rem] p-8 lg:p-12 shadow-lg">
            <h3 className="text-3xl lg:text-4xl font-bold text-green-700 text-center mb-8 lg:mb-10">
              Misi
            </h3>
            
            <div className="space-y-6 lg:space-y-8">
              {missionItems.map((item, index) => (
                <div key={item.id}>
                  <div className="flex items-start gap-4">
                    {/* Check Icon */}
                    <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-green-700 rounded-full flex items-center justify-center">
                      <Check className="w-7 h-7 lg:w-8 lg:h-8 text-white stroke-[3]" />
                    </div>
                    
                    {/* Mission Text */}
                    <p className="text-base lg:text-lg text-gray-700 leading-relaxed pt-2">
                      {item.text}
                    </p>
                  </div>
                  
                  {/* Divider - tidak tampil di item terakhir */}
                  {index < missionItems.length - 1 && (
                    <hr className="mt-6 lg:mt-8 border-t-2 border-green-300" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}