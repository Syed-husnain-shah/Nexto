import React, { FC } from "react";

type Props = {
  name?: string;
};

export const Statistical: FC<Props> = ({ name }) => (
  <section className="bg-[#161B22] text-white py-20 px-6 mt-20">
    <div className="max-w-334 mx-auto">
      <div className="flex justify-center mb-6">
        <span className="border border-gray-800 text-sm px-5 py-1 rounded-full ">
          STATISTICAL DETAILS
        </span>
      </div>

      <h2 className="text-center text-4xl md:text-5xl font-semibold">
        Nexto's Statistical Story
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
        <div className="text-gray-300 space-y-6 text-lg leading-relaxed">
          <p>
            At Nexto, our success is not just a narrative—it's quantifiable.
            Dive into the facts and figures that illustrate the impact of Nexto
            on your digital journey
          </p>

          <p>
            Experience real-time collaboration, breaking down silos and
            promoting a cohesive work environment. Our platform goes beyond
            traditional project management, ensuring a unified digital ecosystem
            that elevates collaboration, efficiency, & overall project success.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div>
            <h3 className="text-4xl font-semibold">7.5M</h3>
            <p className="text-gray-400 mt-2">Users worldwide</p>
          </div>

          <div>
            <h3 className="text-4xl font-semibold">14+</h3>
            <p className="text-gray-400 mt-2">Year of experience</p>
          </div>

          <div>
            <h3 className="text-4xl font-semibold">100+</h3>
            <p className="text-gray-400 mt-2">Collaborative projects daily</p>
          </div>

          <div>
            <h3 className="text-4xl font-semibold">100%</h3>
            <p className="text-gray-400 mt-2">Client satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
