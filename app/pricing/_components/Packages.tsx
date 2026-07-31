import React, { FC } from "react";

type Props = {
  name?: string;
};

const plans = [
  {
    img: "/image/basic.svg",
    name: "Basic Plan",
    price: "$19.99 USD",
    desc: "Just pay for small businesses and startups",
    features: [
      "Basic Customer Support",
      "Essential Analytics",
      "10+ Projects Opportunity",
      "Cloud Storage: 5GB",
    ],
    highlighted: false,
  },
  {
    img: "/image/standard.svg",
    name: "Standard Plan",
    price: "$49.99 USD",
    desc: "Unlock advanced reporting and analytics",
    features: [
      "Priority Customer Support",
      "Advanced Analytics",
      "25 Projects Opportunity",
      "Cloud Storage: 15GB",
    ],
    highlighted: true,
  },
  {
    img: "/image/premium.svg",
    name: "Premium Plan",
    price: "$99.99 USD",
    desc: "Discover our exclusive premium plan",
    features: [
      "24/7 Premium Support",
      "Advanced Analytics",
      "Unlimited Projects Opportunity",
      "Cloud Storage: 50GB",
    ],
    highlighted: false,
  },
];

export const Packages: FC<Props> = ({ name }) => (
  <section className="mx-auto max-w-334">
    <div className="mx-auto text-center mt-30">
      <p className="uppercase border border-gray-700 w-25 rounded-full mx-auto text-sm font-normal leading-3">
        Packages
      </p>
      <h1 className="text-5xl font-semibold leading-[67.2px]">pricing plan</h1>
    </div>
    <div className="mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl border border-gray-700 p-8 flex flex-col justify-between transition ${
              plan.highlighted
                ? "bg-[#111827] scale-105 shadow-xl"
                : "bg-transparent"
            }`}
          >
            <div>
              <img src={plan.img} alt={plan.name} className="mb-10" />
              <h3 className="text-white text-xl font-semibold mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>

              <div className=" border-b border-gray-700 mb-4"></div>
              <h2 className="text-white text-3xl font-bold mb-6">
                {plan.price}
              </h2>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-300 flex items-center gap-2">
                    <span className="text-green-400">
                        <img src="/image/tick.svg" alt="" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`w-full py-3 rounded-lg border transition ${
                plan.highlighted
                  ? "bg-gray-800 text-white border-gray-600 hover:bg-gray-700"
                  : "border-gray-600 text-white hover:bg-gray-800"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);
