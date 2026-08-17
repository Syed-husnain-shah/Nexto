import Image from "next/image";

const testimonials = [
  {
    name: "Kathryn Murphy",
    role: "Precision Designs",
    text: "The Design Mockup Integration Tab at Precision Designs has revolutionized our approach to visual excellence.",
    img: "/image/kathryn.jpg",
  },
  {
    name: "Savannah Nguyen",
    role: "Digital Impact",
    text: "The customization options allow us to tailor our workspace to match our brand identity seamlessly.",
    img: "/image/savannah.jpg",
  },
  {
    name: "Bessie Cooper",
    role: "Trends Agency",
    text: "The ability to personalize layouts & themes aligns seamlessly with our brand identity.",
    img: "/image/bessie.jpg",
  },
  {
    name: "Darlene Robertson",
    role: "Innovations Hub",
    text: "The Insights Hub has become our go-to tool for data-driven decisions at Tech Innovations Hub.",
    img: "/image/darlene.jpg",
  },
  {
    name: "Brooklyn Simmons",
    role: "Marketing Solutions",
    text: "The customization options are robust, giving me the flexibility I need for my design projects.",
    img: "/image/savannah.jpg",
  },
  {
    name: "Dianne Russell",
    role: "Tech Innovators",
    text: "It provides a clear and concise view of key metrics, helping me make informed decisions.",
    img: "/image/bessie.jpg",
  },
  {
    name: "Jenny Wilson",
    role: "Tech Ventures",
    text: "Real experiences from users across the globe showcase the versatility and impact of Nexto.",
    img: "/image/kathryn.jpg",
  },
  {
    name: "Ronald Richards",
    role: "Digital Agency",
    text: "It's a platform that understands & adapts to our unique agency needs.",
    img: "/image/darlene.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#030712] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-center text-[15px] font-normal leading-9 mx-auto uppercase border border-gray-700 w-45 rounded-full">
          testimonials
        </p>

        <h2 className="text-4xl font-semibold mt-6">Customer Reviews</h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Explore the Digital Impact section filled with user testimonials that
          showcase how Nexto has elevated projects across the digital spectrum
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#0B1220] border border-gray-800 rounded-xl p-6 text-left hover:border-gray-600 transition"
            >
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.text}
              </p>

              <div className="flex items-center gap-3 mt-6">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}