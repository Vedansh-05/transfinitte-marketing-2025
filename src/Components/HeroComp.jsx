const HeroComp = () => {
    return (
        <section
            id="hero-section"
            className="flex items-center justify-start px-16 min-h-[calc(100vh-100px)] pt-[140px]"
        >
            <div className="flex flex-col justify-center h-full w-full">
                <div className="mb-6">
                    <span className="text-blue-600 text-lg font-semibold">
                        Who are we?
                    </span>
                </div>
                <h1 className="font-extrabold text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mb-8">
                    Driving Innovation in
                    <br />
                    Education for Sustainable
                    <br />
                    Learning Ecosystems
                </h1>
                <div className="flex items-center justify-between mt-8 pt-12 w-full pb-4 border-b-4 border-gray-400">
                    <p className="text-gray-600 text-xl font-medium">
                        Empowering the future through transformative educational
                        solutions.
                    </p>
                    <div className="flex-1 flex justify-end">
                        <button className="bg-blue-600 text-white px-14 py-5 rounded-full hover:bg-blue-700 font-bold text-2xl transition whitespace-nowrap min-w-[220px] ml-8">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroComp