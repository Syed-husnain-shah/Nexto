import image from 'next/image';
import React, { FC } from 'react';

type Props = {
    name?: string;
};

 const imgs = [
    { image : "/image/connectivity.svg" },
  ];

export const Connectivity: FC<Props> = ({ name }) => ( 
            <section className="bg-linear-to-b from-[#0b1220] to-[#0f1a2e] text-white py-20 px-6">
                <div className="bg-[url('/image/inte1.svg')]  bg-cover bg-center">
      <div className="max-w-6xl mx-auto text-center">

        <div className="inline-block border border-white/20 px-4 py-1 rounded-full text-sm text-white/70 mb-6">
          INTEGRATION
        </div>

        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Connectivity Solutions
        </h2>

        <p className="text-white/60 max-w-2xl mx-auto mb-12">
          Experience a new era of efficiency with Nexto's Integration Hub.
          Connect your tools, teams, & projects in one cohesive ecosystem.
        </p>

        <div className="border border-white/10 rounded-xl overflow-hidden">
          <img
            src="image/connectivity.svg"
            alt="integrations"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="mt-12">
          <button className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            Explore Integrations →
          </button>
        </div>

      </div>
      </div>
    </section>
);