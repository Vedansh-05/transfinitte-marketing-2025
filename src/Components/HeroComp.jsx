import AnimatedSection from '../AnimatedSection';

const HeroComp = () => {
    return (
        <section id="hero-section" className="flex items-center justify-start px-6 md:px-12 lg:px-16 min-h-[calc(100vh-100px)] pt-[120px]">
            <div className="flex flex-col justify-center h-full w-full">
                {/* Small heading */}
                <div className="mb-4 md:mb-6">
                    <span className="text-blue-600 text-lg font-semibold">
                        Who are we?
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight mb-8 w-[60%]">
                    <AnimatedSection staggerLetters>Driving Innovation in Education for Sustainable Learning Ecosystems </AnimatedSection>
                </h1>

                {/* Paragraph + Button */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-6 md:mt-8 pt-10 w-full pb-4 border-b-4 border-gray-400">
                    <p className="text-gray-600 text-base sm:text-lg md:text-xl font-medium">
                        Empowering the future through transformative educational
                        solutions.
                    </p>
                    <div className="flex justify-start md:justify-end">
                        <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 font-bold text-lg sm:text-xl transition whitespace-nowrap min-w-[180px] sm:min-w-[200px]">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroComp;