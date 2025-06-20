import AnimatedSection from '../AnimatedSection';

const HeroComp = () => {
    return (
        <section
            id="hero-section"
            className="relative overflow-hidden flex items-center justify-start px-6 md:px-12 lg:px-16 min-h-screen pt-16 text-white"
        >
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="\videos\hero-bg.mp4" type="video/mp4" />
            </video>

            {/* Overlay (optional for dark tint) */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

            {/* Content */}
            <div className="relative z-20 flex flex-col justify-center h-full w-full">
                {/* Small heading */}
                <div className="mb-4 md:mb-6">
                    <span className="text-lg">
                        Who are we?
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-8 w-[60%]">
                    <AnimatedSection staggerLetters>
                        Driving Innovation in Education for Sustainable Learning Ecosystems
                    </AnimatedSection>
                </h1>

                {/* Paragraph + Button */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-6 md:mt-8 pt-10 w-full pb-4 border-b-2 border-gray-300">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium max-w-sm">
                        Educraftor is a leading innovation and development group weaving learning ecosystems globally
                    </p>
                    <div className="flex justify-start md:justify-end">
                        <button className="bg-[rgb(244,74,39)] px-8 py-4 rounded-full hover:bg-black font-bold text-lg sm:text-xl transition whitespace-nowrap min-w-[180px] sm:min-w-[200px]">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroComp;
