import { useState } from "react";

const testimonials = [
  {
    image: "./pics/section-05.1.png",
    quote: "The workshocks have been an easy way to talk about technology and think about how to use it in a concrete way in my teaching.",
    description:
      "I believe you should share your discoveries everywhere because the model can be effective in both formal and non-formal education.",
    name: "Jelena Lohmatova",
    role: "Founder & Director, Vestifex",
  },
  {
    image: "./pics/section-05.2.png",
    quote: "WTF are you doing?",
    description:
      "I can already after only one session clearly see the change that is happening in our organization",
    name: "Mari-Liis Sults",
    role: "School leader in Estonia.",
  },
  {
    image: "./pics/section-05.3.png",
    quote: "I was very impressed and had plenty of ideas and insights.",
    description:
      "We appreciate all the networking opportunities and our coach Juhani’s warm and supporting approach.”",
    name: "Aki Järvinen",
    role: "Teacher in Turku University",
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const { image, quote, description, name, role } = testimonials[current];

  return (
    <div className="w-full mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
      {/* Left - Image */}
      <div className="w-full md:w-1/2 p-4 flex justify-center">
        <img
          src={image}
          alt={name}
          className="rounded-lg border-4 border-black w-lg object-cover"
        />
      </div>

      {/* Right - Text */}
      <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-start">
        {/* Navigation */}
        <div className="mb-6 flex justify-between items-center w-full max-w-xs self-center gap-4">
          <button
            onClick={prev}
            className="bg-orange-500 hover:bg-black transition duration-300 text-white w-10 h-10 flex items-center justify-center rounded-full text-xl leading-none"
          >
            <span className="relative -top-[1px]">&#8592;</span>
          </button>
          <span className="text-gray-700 text-xl sm:text-2xl font-bold" >
            {String(current + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
          </span>
          <button
            onClick={next}
            className="bg-orange-500 hover:bg-black transition duration-300 text-white w-10 h-10 flex items-center justify-center rounded-full text-xl leading-none"
          >
            <span className="relative -top-[1px]">&#8594;</span>
          </button>

        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600 my-4 leading-snug">
          “{quote}”
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
          {description}
        </p>

        <div className="text-sm text-gray-500">{role}</div>
        <div className="font-semibold text-base sm:text-lg">{name}</div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
