import React, { FC } from 'react';
const plans = ["Basic", "Standard", "Premium"];

type Props = {
    name?: string;
};


  const features = [
    {
      name: "Priority Email Support",
      availability: [true, true, true],
    },
    {
      name: "Basic Reporting & Insights",
      availability: [true, true, true],
    },
    {
      name: "Custom Fields & Data Filters",
      availability: [true, true, true],
    },
    {
      name: "Enhanced Security & Permissions",
      availability: [false, true, true],
    },
    {
      name: "Advanced Security Features",
      availability: [false, true, true],
    },
    {
      name: "Data Backup & Recovery",
      availability: [false, false, true],
    },
    {
      name: "Enterprise-Grade Integrations",
      availability: [false, false, true],
    },
  ];

export const Overview: FC<Props> = ({ name }) => ( 
        <section className='mx-auto max-w-334 p-8 mt-20'>
            <div className='text-center'>
                <p className='uppercase mx-auto border border-gray-700 rounded-full w-20 text-[14px] font-normal leading-6'>benefits</p>
                <h1 className='capitalize text-[38px] font-medium leading-14 mt-2 mb-4'>plan features</h1>
                <p className='text-gray-400 text-sm font-normal leading-5.25 mx-auto max-w-xl'>project management essentials to advanced collaboration features, discover the power within each Nexto plan & elevate your digital journey with confidence.</p>
            </div>
            <div className="w-full text-white py-10 px-4">
      <div className="max-w-6xl mx-auto border border-gray-800 rounded-xl overflow-hidden">
        <div className="grid grid-cols-4 bg-[#111827] px-6 py-4 text-sm font-medium text-gray-300">
          <div>Overview</div>
          {plans.map((plan) => (
            <div key={plan} className="text-center">
              {plan}
            </div>
          ))}
        </div>

        {features.map((feature, i) => (
          <div
            key={i}
            className="grid grid-cols-4 px-6 py-5 border-t border-gray-800 items-center"
          >
            <div className="text-gray-400">{feature.name}</div>

            {feature.availability.map((available, idx) => (
              <div key={idx} className="flex justify-center">
                {available ? (
                  <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-600">
                    <img src="/image/tick.svg" alt="" />
                  </div>
                ) : (
                  <div className="w-6 h-6" />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
        </section>
);