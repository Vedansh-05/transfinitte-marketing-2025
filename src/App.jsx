import TestimonialCarousel from './Components/TestimonialCarousel';
import Navbar from "./Components/Navbar";
import HeroComp from './Components/HeroComp';
import LogoCarousel from './Components/LogoCarousel';
import ContactForm from './Components/ContactForm';
import Footer from "./Components/Footer";

import AnimatedSection from './AnimatedSection';

function App() {
  return (
    <div className="min-h-screen min-w-full bg-gray-100">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <HeroComp />

      {/* New Section - 01 */}
      <section id="about-section" className="w-full flex flex-col gap-10 justify-center items-center py-20">
        {/* Top Row */}
        <div className="w-11/12 flex flex-col md:flex-row items-stretch border-b-2 border-gray-400 pb-10 gap-6">
          {/* Left */}
          <div className="flex flex-col justify-center flex-1">
            <AnimatedSection staggerLetters className="text-blue-600 text-base md:text-lg font-semibold mb-2 text-left">
              Our Mission
            </AnimatedSection>
            <AnimatedSection staggerLetters className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-900 text-left">
              Transforming Education for Tomorrow
            </AnimatedSection>
          </div>
          {/* Right */}
          <div className="hidden md:flex items-center justify-end md:justify-end flex-1">
            <AnimatedSection staggerLetters className="text-gray-300 font-light text-[18vw] sm:text-[12vw] md:text-[10vw] leading-none select-none italic">
              (01)
            </AnimatedSection>
          </div>
        </div>

        {/* Middle Row */}
        <div className="w-11/12 flex flex-col md:flex-row items-stretch mt-12 gap-6">
          {/* Left */}
          <div className="flex-1 flex items-center">
            <span className="text-left text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
              The call for educational
              <br />
              transformation has never
              <br />
              been louder.
            </span>
          </div>
          {/* Right */}
          <div className="flex-1 flex items-center justify-end md:justify-end">
            <span className="text-left md:text-right text-lg sm:text-md md:text-lg font-semibold text-gray-400">
              As the gap widens between traditional teaching methods and the
              needs of our rapidly evolving society, educators stand
              <br />
              at the forefront of a crucial shift.
            </span>
          </div>
        </div>

        {/* Image/Highlight Block */}
        <AnimatedSection scaleDown
          className="w-11/12 mt-16 mx-auto overflow-hidden relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex flex-col justify-between bg-cover bg-center bg-gray-500 border-8"
          style={{ backgroundImage: "" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-opacity-40 z-0"></div>

          {/* Main Text */}
          <div className="relative z-10 px-6 sm:px-10 md:px-12 pt-10 pb-6 w-full">
            <AnimatedSection staggerLetters className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug w-[75%]">
              The concept of learning ecosystems — a visionary approach that brings flexibility and interconnectedness
            </AnimatedSection>
          </div>

          {/* Bottom Row */}
          <div className="relative z-10 flex flex-col md:flex-row w-[95%] ml-4 md:ml-12 mb-10 pb-10 gap-6 border-b-4 border-gray-400">
            {/* Left */}
            <div className="flex-1 flex items-center">
              <span className="text-white text-left text-xl md:text-2xl font-semibold">
                to the heart of education
                <br />
                or any educational process.
              </span>
            </div>
            {/* Right */}
            <div className="flex-1 flex items-center md:justify-end">
              <span className="text-white text-left md:text-right text-xl md:text-2xl font-semibold">
                contact us
              </span>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* New Section - 02 */}
      <section className="w-full flex flex-col gap-10 justify-center items-center py-20">
        {/* Top Row */}
        <div className="w-11/12 flex flex-col md:flex-row items-stretch border-b-2 border-gray-400 pb-10 gap-6">
          {/* Left */}
          <div className="flex flex-col justify-center flex-1">
            <AnimatedSection staggerLetters className="text-blue-600 text-base md:text-lg font-semibold mb-2 text-left">
              Our Mission
            </AnimatedSection>
            <AnimatedSection staggerLetters className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-900 text-left">
              Transforming Education for Tomorrow
            </AnimatedSection>
          </div>
          {/* Right */}
          <div className="hidden md:flex items-center justify-end md:justify-end flex-1">
            <AnimatedSection staggerLetters className="text-gray-300 font-light text-[18vw] sm:text-[12vw] md:text-[10vw] leading-none select-none italic">
              (02)
            </AnimatedSection>
          </div>
        </div>

        {/* Middle Row */}
        <div className="w-11/12 flex flex-col md:flex-row items-stretch mt-12 gap-6">
          {/* Left */}
          <div className="flex-1 flex items-center">
            <span className="text-left text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
              The call for educational
              <br />
              transformation has never
              <br />
              been louder.
            </span>
          </div>
          {/* Right */}
          <div className="flex-1 flex items-center justify-end md:justify-end">
            <span className="text-left md:text-right text-lg sm:text-md md:text-lg font-semibold text-gray-400">
              As the gap widens between traditional teaching methods and the
              needs of our rapidly evolving society, educators stand
              <br />
              at the forefront of a crucial shift.
            </span>
          </div>
        </div>

        {/* Image/Highlight Block */}
        <AnimatedSection scaleDown
          className="w-11/12 mt-16 mx-auto overflow-hidden relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex flex-col justify-between bg-cover bg-center bg-gray-500 border-8"
          style={{ backgroundImage: "" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-opacity-40 z-0"></div>

          {/* Main Text */}
          <div className="relative z-10 px-6 sm:px-10 md:px-12 pt-10 pb-6 w-full">
            <AnimatedSection staggerLetters className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug w-[75%]">
              The concept of learning ecosystems — a visionary approach that brings flexibility and interconnectedness
            </AnimatedSection>
          </div>

          {/* Bottom Row */}
          <div className="relative z-10 flex flex-col md:flex-row w-[95%] ml-4 md:ml-12 mb-10 pb-10 gap-6 border-b-4 border-gray-400">
            {/* Left */}
            <div className="flex-1 flex items-center">
              <span className="text-white text-left text-xl md:text-2xl font-semibold">
                to the heart of education
                <br />
                or any educational process.
              </span>
            </div>
            {/* Right */}
            <div className="flex-1 flex items-center md:justify-end">
              <span className="text-white text-left md:text-right text-xl md:text-2xl font-semibold">
                contact us
              </span>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="w-full flex flex-col gap-10 justify-center items-center py-8">
        {/* Final New Row Below All Sections */}
        <div className="w-11/12 flex flex-col md:flex-row items-stretch mt-4 mx-auto gap-6">
          {/* Left Text Div */}
          <div className="flex-1 flex items-center">
            <span className="text-left text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold text-gray-900">
              This is a left-aligned sentence for the new row below all sections and it can be much bigger.
            </span>
          </div>
          {/* Right Text Div */}
          <div className="flex-1 flex items-center md:justify-end">
            <span className="text-left md:text-right text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold text-gray-400">
              This is a right-aligned sentence for the new row below all sections and it can be much bigger.
            </span>
          </div>
        </div>

        {/* Two Images Row */}
        <div className="w-11/12 flex flex-col md:flex-row gap-6 mt-8 mx-auto min-h-[50vh] items-stretch">
          {/* Left Image Div */}
          <div className="border-gray-600 border-8 overflow-hidden w-full md:w-[40%] flex-shrink-0 flex flex-col h-[300px] md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              alt="Left"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right Image Div */}
          <div className="border-black border-8 overflow-hidden w-full md:w-[60%] flex-shrink-0 flex flex-col h-[300px] md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80"
              alt="Right"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* New Section - 03 */}
      <section className="w-full flex flex-col gap-10 justify-center items-center py-20">
        {/* Top Row */}
        <div className="w-11/12 flex flex-col md:flex-row items-stretch border-b-2 border-gray-400 pb-10 gap-6">
          {/* Left */}
          <div className="flex flex-col justify-center flex-1">
            <AnimatedSection staggerLetters className="text-blue-600 text-base md:text-lg font-semibold mb-2 text-left">
              Our Mission
            </AnimatedSection>
            <AnimatedSection staggerLetters className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-900 text-left">
              Transforming Education for Tomorrow
            </AnimatedSection>
          </div>
          {/* Right */}
          <div className="hidden md:flex items-center justify-end md:justify-end flex-1">
            <AnimatedSection staggerLetters className="text-gray-300 font-light text-[18vw] sm:text-[12vw] md:text-[10vw] leading-none select-none italic">
              (03)
            </AnimatedSection>
          </div>
        </div>

        {/* Middle Row */}
        <div className="w-11/12 flex flex-col md:flex-row items-stretch mt-12 gap-6">
          {/* Left */}
          <div className="flex-1 flex items-center">
            <span className="text-left text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
              The call for educational
              <br />
              transformation has never
              <br />
              been louder.
            </span>
          </div>
          {/* Right */}
          <div className="flex-1 flex items-center justify-end md:justify-end">
            <span className="text-left md:text-right text-lg sm:text-md md:text-lg font-semibold text-gray-400">
              As the gap widens between traditional teaching methods and the
              needs of our rapidly evolving society, educators stand
              <br />
              at the forefront of a crucial shift.
            </span>
          </div>
        </div>

        {/* Image/Highlight Block */}
        <AnimatedSection scaleDown
          className="w-11/12 mt-16 mx-auto overflow-hidden relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex flex-col justify-between bg-cover bg-center bg-gray-500 border-8"
          style={{ backgroundImage: "" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-opacity-40 z-0"></div>

          {/* Main Text */}
          <div className="relative z-10 px-6 sm:px-10 md:px-12 pt-10 pb-6 w-full">
            <AnimatedSection staggerLetters className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug w-[75%]">
              The concept of learning ecosystems — a visionary approach that brings flexibility and interconnectedness
            </AnimatedSection>
          </div>

          {/* Bottom Row */}
          <div className="relative z-10 flex flex-col md:flex-row w-[95%] ml-4 md:ml-12 mb-10 pb-10 gap-6 border-b-4 border-gray-400">
            {/* Left */}
            <div className="flex-1 flex items-center">
              <span className="text-white text-left text-xl md:text-2xl font-semibold">
                to the heart of education
                <br />
                or any educational process.
              </span>
            </div>
            {/* Right */}
            <div className="flex-1 flex items-center md:justify-end">
              <span className="text-white text-left md:text-right text-xl md:text-2xl font-semibold">
                contact us
              </span>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* New Section - 04 */}
      <section className="w-full flex flex-col gap-10 justify-center items-center py-20">
        {/* Top Row */}
        <div className="w-11/12 flex flex-col md:flex-row items-stretch border-b-2 border-gray-400 pb-10 gap-6">
          {/* Left */}
          <div className="flex flex-col justify-center flex-1">
            <AnimatedSection staggerLetters className="text-blue-600 text-base md:text-lg font-semibold mb-2 text-left">
              Our Mission
            </AnimatedSection>
            <AnimatedSection staggerLetters className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-900 text-left">
              Transforming Education for Tomorrow
            </AnimatedSection>
          </div>
          {/* Center Inner Div */}
          <div className="flex flex-col justify-center flex-1">
            <span className="font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-600 italic text-left md:text-center">
              A new paradigm through CRAFTOGOGY
            </span>
          </div>
          {/* Right */}
          <div className="hidden lg:flex items-center justify-end md:justify-end flex-1">
            <AnimatedSection staggerLetters className="text-gray-300 font-light text-[18vw] sm:text-[12vw] md:text-[10vw] leading-none select-none italic">
              (04)
            </AnimatedSection>
          </div>
        </div>

        {/* Middle Row */}
        <div className="w-11/12 flex flex-col md:flex-row items-stretch mt-12 gap-6">
          {/* Left */}
          <div className="flex-1 flex items-center">
            <span className="text-left text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
              The call for educational
              <br />
              transformation has never
              <br />
              been louder.
            </span>
          </div>
          {/* Right */}
          <div className="flex-1 flex items-center justify-end md:justify-end">
            <span className="text-left md:text-right text-lg sm:text-md md:text-lg font-semibold text-gray-400">
              As the gap widens between traditional teaching methods and the
              needs of our rapidly evolving society, educators stand
              <br />
              at the forefront of a crucial shift.
            </span>
          </div>
        </div>

        {/* Image/Highlight Block */}
        <AnimatedSection scaleDown
          className="w-11/12 mt-16 mx-auto overflow-hidden relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex flex-col justify-between bg-cover bg-center bg-gray-500 border-8"
          style={{ backgroundImage: "" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-opacity-40 z-0"></div>

          {/* Main Text */}
          <div className="relative z-10 px-6 sm:px-10 md:px-12 pt-10 pb-6 w-full">
            <AnimatedSection staggerLetters className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug w-[75%]">
              The concept of learning ecosystems — a visionary approach that brings flexibility and interconnectedness
            </AnimatedSection>
          </div>

          {/* Bottom Row */}
          <div className="relative z-10 flex flex-col md:flex-row w-[95%] ml-4 md:ml-12 mb-10 pb-10 gap-6 border-b-4 border-gray-400">
            {/* Left */}
            <div className="flex-1 flex items-center">
              <span className="text-white text-left text-xl md:text-2xl font-semibold">
                to the heart of education
                <br />
                or any educational process.
              </span>
            </div>
            {/* Right */}
            <div className="flex-1 flex items-center md:justify-end">
              <span className="text-white text-left md:text-right text-xl md:text-2xl font-semibold">
                contact us
              </span>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* New Section - 05 */}
      <section className="w-full flex flex-col gap-10 justify-center items-center py-20">
        <div className="w-11/12 flex flex-col md:flex-row items-stretch border-b-2 border-gray-400 pb-10 gap-6">
          {/* Left */}
          <div className="flex flex-col justify-center flex-1">
            <AnimatedSection staggerLetters className="text-blue-600 text-base md:text-lg font-semibold mb-2 text-left">
              Our Mission
            </AnimatedSection>
            <AnimatedSection staggerLetters className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-900 text-left">
              Transforming Education for Tomorrow
            </AnimatedSection>
          </div>
          {/* Right */}
          <div className="hidden md:flex items-center justify-end md:justify-end flex-1">
            <AnimatedSection staggerLetters className="text-gray-300 font-light text-[18vw] sm:text-[12vw] md:text-[10vw] leading-none select-none italic">
              (05)
            </AnimatedSection>
          </div>
        </div>
        <TestimonialCarousel />
      </section>

      {/* New Section - 06 */}
      <section className="w-full flex flex-col gap-10 justify-center items-center py-20">
        <div className="w-11/12 flex flex-col md:flex-row items-stretch border-b-2 border-gray-400 pb-10 gap-6">
          {/* Left */}
          <div className="flex flex-col justify-center flex-1">
            <AnimatedSection staggerLetters className="text-blue-600 text-base md:text-lg font-semibold mb-2 text-left">
              Our Mission
            </AnimatedSection>
            <AnimatedSection staggerLetters className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-900 text-left">
              Transforming Education for Tomorrow
            </AnimatedSection>
          </div>
          {/* Right */}
          <div className="hidden md:flex items-center justify-end md:justify-end flex-1">
            <AnimatedSection staggerLetters className="text-gray-300 font-light text-[18vw] sm:text-[12vw] md:text-[10vw] leading-none select-none italic">
              (06)
            </AnimatedSection>
          </div>
        </div>
        <LogoCarousel />
      </section>

      {/* New Section - 07 */}
      <section id="contact-section" className="w-full flex flex-col gap-10 justify-center items-center py-20">
        <div className="w-11/12 flex flex-col md:flex-row items-stretch border-b-2 border-gray-400 pb-10 gap-6">
          {/* Left */}
          <div className="flex flex-col justify-center flex-1">
            <AnimatedSection staggerLetters className="text-blue-600 text-base md:text-lg font-semibold mb-2 text-left">
              Our Mission
            </AnimatedSection>
            <AnimatedSection staggerLetters className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-900 text-left">
              Transforming Education for Tomorrow
            </AnimatedSection>
          </div>
          {/* Right */}
          <div className="hidden md:flex items-center justify-end md:justify-end flex-1">
            <AnimatedSection staggerLetters className="text-gray-300 font-light text-[18vw] sm:text-[12vw] md:text-[10vw] leading-none select-none italic">
              (07)
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col gap-10 justify-center items-center py-8">
        {/* Final New Row Below All Sections */}
        <div className="w-11/12 flex flex-col md:flex-row items-stretch mt-4 mx-auto gap-6">
          {/* Left Text Div */}
          <div className="flex-1 flex items-center">
            <span className="text-left text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold text-gray-900">
              This is a left-aligned sentence for the new row below all sections and it can be much bigger.
            </span>
          </div>
          {/* Right Text Div */}
          <div className="flex-1 flex items-center md:justify-end">
            <span className="text-left md:text-right text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold text-gray-400">
              This is a right-aligned sentence for the new row below all sections and it can be much bigger.
            </span>
          </div>
        </div>
      </section>

      <ContactForm />

      {/* Footer */}
      <Footer />
    </div >
  );
}

export default App;
