import React from "react";
import Image from "next/image";

const solutions = [
  {
    title: "Datafuse",
    tag: "IT Service Management",
    desc: "You can seamlessly connect & Effortlessly create, track, and manage tasks, all in one centralized workspace.",
    img: "/image/datafuse.svg",
  },
  {
    title: "Infinita",
    tag: "Entertainment",
    desc: "You can seamlessly manage & optimize your channel directly from our platform. Schedule, upload, and analyze your videos.",
    img: "/image/infinita.svg",
  },
  {
    img: "/image/integrid.svg",
    title: "InteGrid",
    tag: "Interface Design",
    desc: "Collaborate on prototypes, iterate on designs, and gather feedback, all in one centralized workspace.",
  },
  {
    title: "SyncFlow",
    tag: "Logical Reasoning",
    desc: "Schedule, view, and manage your calendar events directly from Zenly.",
    img: "/image/syncflow.svg",
  },
  {
    title: "Connectify",
    tag: "Note-taking web application",
    desc: "Collaborate on documents, organize tasks, and access your content without switching apps.",
    img: "/image/connectify.svg",
  },
  {
    title: "Aquaflow",
    tag: "Social Network",
    desc: "Effortlessly schedule and post updates directly from our platform.",
    img: "/image/aquaflow.svg",
  },
];

export default function Integration() {
  return (
    <section className="bg-[#050816] text-white py-16 md:py-24 px-6">
      
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <span className="text-xs tracking-widest text-gray-400 border border-gray-700 px-3 py-1 rounded-full">
            INTEGRATIONS
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mt-6">
            Connectivity Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          
          {solutions.map((item, i) => (
            <div
              key={i}
              className="
                relative 
                border border-gray-800 
                rounded-lg 
                bg-[#070b1a] 
                p-6 md:p-8 
                hover:border-gray-600 
                transition
              "
            >
              
              <div className="absolute right-4 top-4 w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover"
                />
              </div>

              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <span className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-md inline-block mb-3">
                {item.tag}
              </span>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>

              <button className="flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
                Get Started <span>→</span>
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}