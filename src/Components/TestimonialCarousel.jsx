import { useState } from "react";

const testimonials = [
    {
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
        quote: "I was very impressed and had plenty of ideas and insights.",
        description: "I believe you should share your discoveries everywhere because the model can be effective in both formal and non-formal education.",
        name: "Jelena Lohmatova",
        role: "Founder & Director, Vestifex",
    },
    {
        image: "https://images.unsplash.com/photo-1614282288264-c12b44d9581c",
        quote: "This approach is truly revolutionary.",
        description: "It’s rare to find a model that scales so well across diverse learning environments.",
        name: "Alex Johnson",
        role: "EdTech Consultant",
    },
    {
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        quote: "A brilliant initiative with tangible impact.",
        description: "The execution and relevance of this model exceeded expectations in both corporate and educational domains.",
        name: "Samantha Ray",
        role: "Program Director, LearnSphere",
    },
];

const TestimonialCarousel = () => {
    const [current, setCurrent] = useState(0);
    const total = testimonials.length;
    const next = () => setCurrent((prev) => (prev + 1) % total);
    const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
    const { image, quote, description, name, role } = testimonials[current];

    return (
        <div className="w-full max-w-9xl mx-auto p-6 flex flex-col md:flex-row items-center">
            {/* Left - Image */}
            <div className="w-1/2 h-1/4 p-4">
                <img src={image} alt={name} className="rounded-lg w-full h-auto object-cover shadow-md" />
            </div>
            {/* Right - Text */}
            <div className="md:w-1/2 w-full h-screen p-4 flex flex-col">
                {/* Navigation */}
                <div className="mb-6 gap-4 flex flex-row justify-end items-center">
                    <button onClick={prev}
                        className="bg-orange-500 hover:bg-black transition duration-300 text-white w-10 h-10 flex items-center justify-center rounded-full text-xl"
                    >&#8592;</button>

                    <span className="text-gray-700 text-2xl font-bold">
                        {String(current + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
                    </span>

                    <button onClick={next}
                        className="bg-orange-500 hover:bg-black transition text-white w-10 h-10 flex items-center justify-center rounded-full text-xl"
                    >&#8594;</button>
                </div>
                <h2 className="text-3xl md:text-5xl max-w-[65%] font-bold text-orange-600 my-4">“{quote}”</h2>
                <p className="text-gray-600 text-lg max-w-[50%] min-h-[30%] h-fit">{description}</p>
                <div className="text-sm text-gray-500">{role}</div>
                <div className="font-semibold text-lg">{name}</div>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
