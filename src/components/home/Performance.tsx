import React, { FC } from "react";
import Image from "next/image";

type Props = {
  name?: string;
};

export const Performance: FC<Props> = () => (
  <section className="bg-[#11151C] py-16 md:py-24 text-white">
    
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
      
      <div className="space-y-4">
        
        <div className="flex gap-4 bg-[#161B22] p-4 rounded-lg">
          <div className="bg-[#24292F] h-8 w-8 flex items-center justify-center rounded text-sm font-medium">
            1
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-medium">
              Cross-platform
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Stay connected, stay productive. Seamlessly manage
              projects across devices for ultimate flexibility.
            </p>
          </div>
        </div>

        <div className="flex gap-4 bg-[#161B22] p-4 rounded-lg">
          <div className="bg-[#24292F] h-8 w-8 flex items-center justify-center rounded text-sm font-medium">
            2
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-medium">
              Customization
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Craft a tailored digital experience with Nexto's
              customization feature.
            </p>
          </div>
        </div>

        <div className="flex gap-4 bg-[#161B22] p-4 rounded-lg">
          <div className="bg-[#24292F] h-8 w-8 flex items-center justify-center rounded text-sm font-medium">
            3
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-medium">
              Collaboration
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Real-time features, project sharing, & a dedicated
              client portal for transparent communication.
            </p>
          </div>
        </div>

      </div>

      <div className="bg-[#161B22] rounded-lg p-4">
        <Image
          src="/image/performance.svg"
          alt="Performance"
          width={600}
          height={400}
          className="w-full h-auto"
        />
      </div>

    </div>
  </section>
);