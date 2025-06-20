import TestimonialCarousel from './Components/TestimonialCarousel';
import Navbar from "./Components/Navbar";
import HeroComp from './Components/HeroComp';
import LogoCarousel from './Components/LogoCarousel';
import ContactForm from './Components/ContactForm';
import Footer from "./Components/Footer";

import AnimatedSection from './AnimatedSection';

function App() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // offset for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen min-w-full bg-gray-100">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <HeroComp />

      {/* New Section - 01 */}
      <section id="about-section" className="w-full flex flex-col gap-10 justify-center items-center py-20">
        {/* Top Row */}
        <div className="w-11/12 flex flex-col md:flex-row items-stretch border-b-1 border-gray-400 pb-10 gap-6">
          {/* Left */}
          <div className="flex flex-col justify-center flex-1">
            <AnimatedSection staggerLetters className="text-black text-xs md:text-sm mb-2 text-left">
              What are the key challenges?
            </AnimatedSection>
            <div className="font-semibold text-3xl sm:text-4xl md:text-5xl text-black text-left w-lg">
              <AnimatedSection staggerLetters className='text-[rgb(244,74,39)] italic'>Why</AnimatedSection>
              <AnimatedSection staggerLetters>Learning Ecosystems?</AnimatedSection>
            </div>
          </div>
          {/* Right */}
          <div className="hidden md:flex items-center justify-end md:justify-end flex-1">
            <AnimatedSection staggerLetters className="text-gray-300 font-light md:text-8xl lg:text-9xl leading-none select-none italic">
              (01)
            </AnimatedSection>
          </div>
        </div>

        {/* Middle Row */}
        <div className="w-11/12 flex flex-col md:flex-row items-stretch justify-center mt-12 gap-6">
          {/* Left */}
          <div className="flex-1 flex items-center">
            <span className="text-left text-2xl md:text-3xl lg:text-3xl text-black w-[70%]">
              The call for educational transformation has never been louder.
            </span>
          </div>
          {/* Right */}
          <div className="flex-1 flex items-center justify-end md:justify-end">
            <span className="text-left text-xs sm:text-sm text-gray-400 font-medium w-[40%]">
              As the gap widens between traditional teaching methods and the needs of our rapidly evolving society, educators stand at the forefront of a crucial shift.
            </span>
          </div>
        </div>

        {/* Image/Highlight Block */}
        <AnimatedSection scaleDown
          className="w-11/12 mt-16 mx-auto overflow-hidden relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex flex-col justify-between bg-cover bg-center bg-[rgb(143,143,143)] border-4"
          style={{ backgroundImage: "" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-opacity-40 z-0"></div>

          {/* Main Text */}
          <div className="relative z-10 px-10 mt-16 mx-4 flex flex-col gap-4 md:flex-row md:justify-between items-center">
            <div className="text-white text-4xl lg:text-6xl mt-8">
              <AnimatedSection staggerLetters className='font-bold italic'>The concept of learning ecosystems-</AnimatedSection>
              <AnimatedSection staggerLetters>a visionary approach that brings flexibility and interconnectedness</AnimatedSection>
            </div>
            <img src="\pics\section-01.1.png" className='border-4 w-xs  md:rotate-[20deg]' />
          </div>

          {/* Bottom Row */}
          <div className="z-10 flex flex-col md:flex-row gap-3 w-full my-10 px-10 mx-4 pb-4 border-b-2 border-gray-400">
            {/* Left */}
            <div className="flex-1 flex items-center">
              <span className="text-white text-left text-2xl md:text-3xl lg:text-4xl">
                to the heart of education or any educational process.
              </span>
            </div>
            {/* Right */}
            <div className="flex-1 flex items-center md:justify-end">
              <span onClick={() => scrollToSection("contact-section")} className="text-white text-left md:text-right text-4xl md:text-3xl lg:text-4xl">
                contact us
              </span>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* New Section - 02 */}
      <section className="w-full flex flex-col gap-10 justify-center items-center py-20">
        {/* Top Row */}
        <div className="w-11/12 flex flex-col md:flex-row items-stretch border-b-1 border-gray-400 pb-10 gap-6">
          {/* Left */}
          <div className="flex flex-col justify-center flex-1">
            <AnimatedSection staggerLetters className="text-black text-xs md:text-sm mb-2 text-left">
              How do we transform education?
            </AnimatedSection>
            <div className="font-semibold text-3xl sm:text-4xl md:text-5xl text-black text-left w-lg">
              <AnimatedSection staggerLetters className='text-[rgb(244,74,39)] italic'>What</AnimatedSection>
              <AnimatedSection staggerLetters>is a Learning Ecosystem?</AnimatedSection>
            </div>
          </div>
          {/* Right */}
          <div className="hidden md:flex items-center justify-end md:justify-end flex-1">
            <AnimatedSection staggerLetters className="text-gray-300 font-light md:text-8xl lg:text-9xl leading-none select-none italic">
              (02)
            </AnimatedSection>
          </div>
        </div>

        {/* Image/Highlight Block */}
        <AnimatedSection scaleDown
          className="w-11/12 mt-16 mx-auto overflow-hidden relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex flex-col justify-between bg-cover bg-center bg-[rgb(244,74,39)] border-4"
          style={{ backgroundImage: "" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-opacity-40 z-0"></div>

          {/* Main Text */}
          <div className="relative z-10 px-10 mt-16 mx-4 flex flex-col gap-4 md:flex-row md:justify-between items-center">
            <div className="text-white text-4xl lg:text-6xl mt-8">
              <AnimatedSection staggerLetters className='font-bold italic'>Learning ecosystem</AnimatedSection>
              <AnimatedSection staggerLetters>presents a powerful solution, embracing both the formal lessons of the classroom</AnimatedSection>
            </div>
            <img src="\pics\section-02.1.png" className='border-4 w-xs  md:-rotate-[20deg]' />
          </div>

          {/* Bottom Row */}
          <div className="z-10 flex flex-col md:flex-row gap-3 w-full my-10 px-10 mx-4 pb-4 border-b-2 border-gray-400">
            {/* Left */}
            <div className="flex-1 flex items-center">
              <span className="text-white text-left text-lg md:text-xl lg:text-2xl">
                and the informal lessons of life outside its walls, they are the natural environments where people learn and unlearn across a lifetime.
              </span>
            </div>
            {/* Right */}
            <div className="flex-1 flex items-center md:justify-end">
              <span onClick={() => scrollToSection("contact-section")} className="text-white text-left md:text-right text-4xl md:text-3xl lg:text-4xl">
                contact us
              </span>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="w-full flex flex-col gap-10 justify-center items-center py-8">
        {/* Final New Row Below All Sections */}
        <div className="w-11/12 flex flex-col md:flex-row items-start mt-4 mx-auto gap-6">
          {/* Left Text Div */}
          <div className="flex-1 flex items-center">
            <span className="text-left text-base sm:text-lg md:text-2xl lg:text-3xl font-medium text-black">
              <span>This </span><AnimatedSection staggerLetters className='text-[rgb(244,74,39)] italic font-extrabold inline-flex'>model encourages</AnimatedSection><span>us to see education as a living, breathing entity that grows and adapts, reflecting the diverse needs of our learners and their communities.</span>
            </span>
          </div>
          {/* Right Text Div */}
          <div className="flex-1 flex items-center md:justify-end">
            <span className="text-left md:text-right text-xs sm:text-sm md:text-base lg:text-md w-md font-semibold text-gray-400">
              Adopting a learning ecosystem approach empowers us to provide more effective support for all learners, fostering an environment of lifelong learning and adaptability.
            </span>
          </div>
        </div>

        {/* Two Images Row */}
        <div className="w-11/12 flex flex-col md:flex-row gap-6 mt-8 mx-auto min-h-[50vh] items-stretch">
          {/* Left Image Div */}
          <div className="border-gray-400 border-4 overflow-hidden w-full md:w-[40%] flex-shrink-0 flex flex-col h-[300px] md:h-auto">
            <img
              src="\pics\section-02.2.png"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right Image Div */}
          <div className="border-[rgb(244,74,39)] border-4 overflow-hidden w-full md:w-[60%] flex-shrink-0 flex flex-col h-[300px] md:h-auto">
            <img
              src="\pics\section-02.3.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* New Section - 03 */}
      <section className="w-full flex flex-col gap-10 justify-center items-center py-20">
        {/* Top Row */}
        <div className="w-11/12 flex flex-col md:flex-row items-stretch border-b-1 border-gray-400 pb-10 gap-6">
          {/* Left */}
          <div className="flex flex-col justify-center flex-1">
            <AnimatedSection staggerLetters className="text-black text-xs md:text-sm mb-2 text-left">What do we do?</AnimatedSection>
            <div className="font-semibold text-3xl sm:text-4xl md:text-5xl text-black text-left w-lg">
              <AnimatedSection staggerLetters className='text-[rgb(244,74,39)] italic'>Cultivating</AnimatedSection>
              <AnimatedSection staggerLetters>Learning Ecosystems Globally</AnimatedSection>
            </div>
          </div>
          {/* Right */}
          <div className="hidden md:flex items-center justify-end md:justify-end flex-1">
            <AnimatedSection staggerLetters className="text-gray-300 font-light md:text-8xl lg:text-9xl leading-none select-none italic">
              (03)
            </AnimatedSection>
          </div>
        </div>

        {/* Middle Row */}
        <div className="w-11/12 flex flex-col md:flex-row items-stretch justify-around">
          {/* Left */}
          <div className="md:w-55/100">
            <span className="text-left text-lg md:text-xl lg:text-2xl text-black w-full">
              <div className='mb-2'>In a global effort,</div>
              <span className='text-4xl md:text-5xl lg:text-6xl font-normal'>
                <span>Educraftor develops resources, empowers grassroot movements, and </span>
                <span className='italic text-[rgb(244,74,39)] font-extrabold'>collaborates with decision-makers </span>
                <span>to foster the creation and adoption of learning ecosystems.</span>
              </span>
            </span>
          </div>
          {/* Right */}
          <div className="flex items-start justify-center md:justify-end">
            <img
              src="\pics\section-03.1.png"
              className="h-[80%] object-cover md:rotate-8"
            />
          </div>
        </div>
      </section>

      {/* New Section - 04 */}
      <section id="about-section" className="w-full flex flex-col gap-10 justify-center items-center py-20">
        {/* Top Row */}
        <div className="w-11/12 flex flex-col md:flex-row items-stretch border-b-1 border-gray-400 pb-10 gap-6">
          {/* Left */}
          <div className="flex flex-col justify-center flex-1">
            <AnimatedSection staggerLetters className="text-black text-xs md:text-sm mb-2 text-left">
              How do we transform education?
            </AnimatedSection>
            <div className="font-semibold text-3xl sm:text-4xl md:text-5xl text-black text-left w-lg">
              <AnimatedSection staggerLetters className='inline-flex'>Our</AnimatedSection>
              <AnimatedSection staggerLetters className='text-[rgb(244,74,39)] italic inline-flex'>Innovation</AnimatedSection>
              <AnimatedSection staggerLetters>Framework</AnimatedSection>
            </div>
          </div>
          {/* Center Inner Div */}
          <div className="flex flex-col justify-center flex-1">
            <span className="font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[rgb(244,74,39)] italic text-left md:text-center">
              A new paradigm through CRAFTOGOGY
            </span>
          </div>
          {/* Right */}
          <div className="hidden md:flex items-center justify-end md:justify-end flex-1">
            <AnimatedSection staggerLetters className="text-gray-300 font-light md:text-8xl lg:text-9xl leading-none select-none italic">
              (04)
            </AnimatedSection>
          </div>
        </div>

        {/* Middle Row */}
        <div className="w-11/12 flex flex-col md:flex-row items-stretch justify-center mt-12 gap-6">
          {/* Left */}
          <div className="flex-1 flex items-center">
            <span className="text-left text-2xl md:text-3xl lg:text-3xl text-black w-[70%]">
              Core aspects of <AnimatedSection staggerLetters className='font-extrabold italic inline-flex'>our Innovation Framework</AnimatedSection> are processes and praxis, iterative learning cycles and long term learning paths encouraged by continuous action-based growth.
            </span>
          </div>
          {/* Right */}
          <div className="flex-1 flex items-center justify-end md:justify-end">
            <span className="text-left text-xs sm:text-sm text-gray-400 font-medium w-[40%]">
              In a psychological sense, learning is about modifying behaviour, and by adopting this mindset,learners and their teams are able to iteratively grow into positive and collaborative change agents.
            </span>
          </div>
        </div>

        {/* Image/Highlight Block */}
        <div
          className="w-11/12 mt-16 mx-auto overflow-hidden relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex flex-col justify-between bg-cover bg-center border-4 border-[rgb(244,74,39)]"
          style={{
            backgroundImage: "url('/pics/section-04.1.png')",
          }}
        >
          <div className="relative z-10 p-8 text-white">
          </div>

          {/* Button at the bottom */}
          <div className="relative z-10 p-8 flex justify-center">
            <button className="bg-[rgb(244,74,39)] rounded-3xl px-20 py-4 text-lg md:text-xl lg:text-2xl text-white shadow-lg hover:bg-black transition">
              Download the Innovation Framework Report
            </button>
          </div>
        </div>

      </section>

      {/* New Section - 05 */}
      <section className="w-full flex flex-col gap-10 justify-center items-center py-20">
        <div className="w-11/12 flex flex-col md:flex-row items-stretch border-b-1 border-gray-400 pb-10 gap-6">
          {/* Left */}
          <div className="flex flex-col justify-center flex-1">
            <AnimatedSection staggerLetters className="text-black text-xs md:text-sm mb-2 text-left">
              Transformations in action
            </AnimatedSection>
            <div className="font-semibold text-3xl sm:text-4xl md:text-5xl text-black text-left w-lg">
              <AnimatedSection staggerLetters className='text-[rgb(244,74,39)] italic'>What</AnimatedSection>
              <AnimatedSection staggerLetters>people say about us</AnimatedSection>
            </div>
          </div>
          {/* Right */}
          <div className="hidden md:flex items-center justify-end md:justify-end flex-1">
            <AnimatedSection staggerLetters className="text-gray-300 font-light md:text-8xl lg:text-9xl leading-none select-none italic">
              (05)
            </AnimatedSection>
          </div>
        </div>
        <TestimonialCarousel />
      </section>

      {/* New Section - 06 */}
      <section className="w-full flex flex-col gap-10 justify-center items-center py-20">
        {/* Top Row */}
        <div className="w-11/12 flex flex-col md:flex-row items-stretch border-b-1 border-gray-400 pb-10 gap-6">
          {/* Left */}
          <div className="flex flex-col justify-center flex-1">
            <AnimatedSection staggerLetters className="text-black text-xs md:text-sm mb-2 text-left">
              What do we work with?
            </AnimatedSection>
            <div className="font-semibold text-3xl sm:text-4xl md:text-5xl text-black text-left w-lg">
              <AnimatedSection staggerLetters>Partners</AnimatedSection>
              <AnimatedSection staggerLetters className='text-[rgb(244,74,39)] italic inline-flex'>and</AnimatedSection>
              <AnimatedSection staggerLetters className='inline-flex'>Clients</AnimatedSection>
            </div>
          </div>
          {/* Right */}
          <div className="hidden md:flex items-center justify-end md:justify-end flex-1">
            <AnimatedSection staggerLetters className="text-gray-300 font-light md:text-8xl lg:text-9xl leading-none select-none italic">
              (06)
            </AnimatedSection>
          </div>
        </div>
        <LogoCarousel />
      </section>

      {/* New Section - 07 */}
      <section id="contact-section" className="w-full flex flex-col gap-10 justify-center items-center py-20">
        {/* Top Row */}
        <div className="w-11/12 flex flex-col md:flex-row items-stretch border-b-1 border-gray-400 pb-10 gap-6">
          {/* Left */}
          <div className="flex flex-col justify-center flex-1">
            <AnimatedSection staggerLetters className="text-black text-xs md:text-sm mb-2 text-left">
              Is anything unclear?
            </AnimatedSection>
            <div className="font-semibold text-3xl sm:text-4xl md:text-5xl text-black text-left w-lg">
              <AnimatedSection staggerLetters className='inline-flex'>Get in</AnimatedSection>
              <AnimatedSection staggerLetters className='text-[rgb(244,74,39)] italic inline-flex'>touch</AnimatedSection>
            </div>
          </div>
          {/* Right */}
          <div className="hidden md:flex items-center justify-end md:justify-end flex-1">
            <AnimatedSection staggerLetters className="text-gray-300 font-light md:text-8xl lg:text-9xl leading-none select-none italic">
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
            <span className="text-left text-base sm:text-lg md:text-2xl lg:text-3xl text-black">
              Over the years, <span className='font-semibold italic'>we have solved</span> a large number of educational challenges for our partners and clients.
            </span>
          </div>
          {/* Right Text Div */}
          <div className="flex-1 flex items-center md:justify-end">
            <span className="text-left md:text-right text-xs sm:text-sm md:text-base lg:text-md w-md font-semibold text-gray-400">
              For your challenge, we might already have a ready-made solution. If not, we can surely develop one.
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
