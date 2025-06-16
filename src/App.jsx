import "./App.css";

import TestimonialCarousel from './Components/TestimonialCarousel';
import Navbar from "./Components/Navbar";
import HeroComp from './Components/HeroComp';
import LogoCarousel from './Components/LogoCarousel';
import ContactForm from './Components/ContactForm';
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen min-w-full bg-gray-100">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <HeroComp />

      {/* New Section - 01 */}
      <section className="w-full flex flex-col gap-10 justify-center items-center py-20">
        <div className="w-11/12 flex flex-row items-stretch border-b-2 border-gray-400 pb-10">
          {/* Left Inner Div */}
          <div className="flex flex-col justify-center flex-1">
            <span className="text-blue-600 text-lg font-semibold mb-2 text-left">
              Our Mission
            </span>
            <span className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-900 text-left">
              Transforming Education for Tomorrow
            </span>
          </div>
          {/* Right Inner Div */}
          <div className="flex items-center justify-end flex-1">
            <span className="text-gray-300 font-light text-[10vw] leading-none select-none h-full flex items-center italic">
              (01)
            </span>
          </div>
        </div>
        {/* New Row Below */}
        <div className="w-11/12 flex flex-row items-stretch mt-12">
          {/* Left Text Div */}
          <div className="flex-1 flex items-center">
            <span className="text-left text-2xl md:text-3xl font-semibold text-gray-900">
              The call for educational
              <br />
              transformation has never
              <br />
              been louder.
            </span>
          </div>
          {/* Right Text Div */}
          <div className="flex-1 flex items-center justify-end">
            <span className="text-right text-2xl md:text-3xl font-semibold text-gray-400">
              As the gap widens between traditional teaching methods and the
              needs of our rapidly evolving society, educators stand
              <br />
              at the forefront of a crucial shift.
            </span>
          </div>
        </div>
        {/* Image Background Section */}
        <div
          className="w-11/12 mt-16 mx-auto border-12 border-black overflow-hidden relative min-h-[680px] flex flex-col justify-between bg-cover bg-center bg-gray-500"
          style={{ backgroundImage: "" }}
        >
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-opacity-40 z-0"></div>
          {/* Main Text */}
          <div className="relative z-10 px-12 pt-12 pb-6 w-full">
            <h2 className="text-white font-extrabold text-8xl md:text-5xl lg:text-7xl leading-tight">
              The concept of learning
              <br />
              ecosystems — a visionary
              <br />
              approach that brings flexibility
              <br />
              and interconnectedness
            </h2>
          </div>
          {/* Bottom Row */}
          <div className="relative z-10 flex flex-row w-[95%] ml-12 mb-10 pb-10 gap-8 border-b-4 border-gray-400">
            {/* Left Div */}
            <div className="flex-1 flex items-center">
              <span className="text-white text-left text-2xl md:text-4xl font-semibold">
                to the heart of education
                <br />
                or any educational process.
              </span>
            </div>
            {/* Right Div */}
            <div className="flex-1 flex items-center justify-end">
              <span className="text-white text-left text-2xl md:text-4xl font-semibold">
                contact us
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* New Section - 02 */}
      <section className="w-full flex flex-col gap-10 justify-center items-center py-20">
        <div className="w-11/12 flex flex-row items-stretch border-b-2 border-gray-400 pb-10">
          {/* Left Inner Div */}
          <div className="flex flex-col justify-center flex-1">
            <span className="text-blue-600 text-lg font-semibold mb-2 text-left">
              Our Mission
            </span>
            <span className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-900 text-left">
              Transforming Education for Tomorrow
            </span>
          </div>
          {/* Right Inner Div */}
          <div className="flex items-center justify-end flex-1">
            <span className="text-gray-300 font-light text-[10vw] leading-none select-none h-full flex items-center italic">
              (02)
            </span>
          </div>
        </div>
        {/* Image Background Section */}
        <div
          className="w-11/12 mt-16 mx-auto border-12 border-black overflow-hidden relative min-h-[680px] flex flex-col justify-between bg-cover bg-center bg-gray-500"
          style={{ backgroundImage: "" }}
        >
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-opacity-40 z-0"></div>
          {/* Main Text */}
          <div className="relative z-10 px-12 pt-12 pb-6 w-full">
            <h2 className="text-white font-extrabold text-8xl md:text-5xl lg:text-7xl leading-tight">
              The concept of learning
              <br />
              ecosystems — a visionary
              <br />
              approach that brings flexibility
              <br />
              and interconnectedness
            </h2>
          </div>
          {/* Bottom Row */}
          <div className="relative z-10 flex flex-row w-[95%] ml-12 mb-10 pb-10 gap-8 border-b-4 border-gray-400">
            {/* Left Div */}
            <div className="flex-1 flex items-center">
              <span className="text-white text-left text-2xl md:text-4xl font-semibold">
                to the heart of education
                <br />
                or any educational process.
              </span>
            </div>
            {/* Right Div */}
            <div className="flex-1 flex items-center justify-end">
              <span className="text-white text-left text-2xl md:text-4xl font-semibold">
                contact us
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col gap-10 justify-center items-center py-8">
        {/* Final New Row Below All Sections */}
        <div className="w-11/12 flex flex-row items-stretch mt-4 mx-auto">
          {/* Left Text Div */}
          <div className="flex-1 flex items-center">
            <span className="text-left text-2xl md:text-3xl font-semibold text-gray-900">
              This is a left-aligned sentence for the new row below all
              sections.
            </span>
          </div>
          {/* Right Text Div */}
          <div className="flex-1 flex items-center justify-end">
            <span className="text-right text-2xl md:text-3xl font-semibold text-gray-400">
              This is a right-aligned sentence for the new row below all
              sections.
            </span>
          </div>
        </div>
        {/* Two Images Row */}
        <div className="w-11/12 flex flex-row gap-8 mt-8 mx-auto min-h-[75vh] items-stretch">
          {/* Left Image Div */}
          <div className="border-gray-600 border-8 overflow-hidden w-[40%] flex-shrink-0 flex flex-col h-full">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              alt="Left"
              className="w-full h-full object-cover flex-1"
            />
          </div>
          {/* Right Image Div */}
          <div className="border-black border-8 overflow-hidden w-[60%] flex-shrink-0 flex flex-col h-full">
            <img
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80"
              alt="Right"
              className="w-full h-full object-cover flex-1"
            />
          </div>
        </div>
      </section>

      {/* New Section - 03 */}
      <section className="w-full flex flex-col gap-10 justify-center items-center py-20">
        <div className="w-11/12 flex flex-row items-stretch border-b-2 border-gray-400 pb-10">
          {/* Left Inner Div */}
          <div className="flex flex-col justify-center flex-1">
            <span className="text-blue-600 text-lg font-semibold mb-2 text-left">
              Our Mission
            </span>
            <span className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-900 text-left">
              Transforming Education for Tomorrow
            </span>
          </div>
          {/* Right Inner Div */}
          <div className="flex items-center justify-end flex-1">
            <span className="text-gray-300 font-light text-[10vw] leading-none select-none h-full flex items-center italic">
              (03)
            </span>
          </div>
        </div>
        {/* Image Background Section */}
        <div
          className="w-11/12 mt-16 mx-auto border-12 border-black overflow-hidden relative min-h-[680px] flex flex-col justify-between bg-cover bg-center bg-gray-500"
          style={{ backgroundImage: "" }}
        >
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-opacity-40 z-0"></div>
          {/* Main Text */}
          <div className="relative z-10 px-12 pt-12 pb-6 w-full">
            <h2 className="text-white font-extrabold text-8xl md:text-5xl lg:text-7xl leading-tight">
              The concept of learning
              <br />
              ecosystems — a visionary
              <br />
              approach that brings flexibility
              <br />
              and interconnectedness
            </h2>
          </div>
          {/* Bottom Row */}
          <div className="relative z-10 flex flex-row w-[95%] ml-12 mb-10 pb-10 gap-8 border-b-4 border-gray-400">
            {/* Left Div */}
            <div className="flex-1 flex items-center">
              <span className="text-white text-left text-2xl md:text-4xl font-semibold">
                to the heart of education
                <br />
                or any educational process.
              </span>
            </div>
            {/* Right Div */}
            <div className="flex-1 flex items-center justify-end">
              <span className="text-white text-left text-2xl md:text-4xl font-semibold">
                contact us
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* New Part - After Timline */}

      {/* New Section - 04 */}
      <section className="w-full flex flex-col gap-10 justify-center items-center py-20">
        <div className="w-11/12 flex flex-row items-end pb-10 border-b-2 border-gray-400 ">
          {/* Left Inner Div */}
          <div className="flex flex-col justify-center flex-1">
            <span className="text-blue-600 text-lg font-semibold mb-2 text-left">
              How do we transform education?
            </span>
            <span className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-900 text-left">
              Our Innovation Framework
            </span>
          </div>
          {/* Center Inner Div */}
          <div className="flex flex-col justify-center flex-1">
            <span className="font-extrabold text-xl md:text-2xl lg:text-3xl text-amber-600 italic text-center">
              A new paradigm through CRAFTOGOGY
            </span>
          </div>
          {/* Right Inner Div */}
          <div className="flex items-center justify-end flex-1">
            <span className="text-gray-300 font-light text-[10vw] leading-none select-none h-full flex items-center italic">
              (04)
            </span>
          </div>
        </div>
        {/* New Row Below */}
        <div className="w-11/12 flex flex-row items-stretch mt-12">
          {/* Left Text Div */}
          <div className="flex-1 flex items-center">
            <span className="text-left text-2xl md:text-3xl font-semibold text-gray-900">
              The call for educational
              <br />
              transformation has never
              <br />
              been louder.
            </span>
          </div>
          {/* Right Text Div */}
          <div className="flex-1 flex items-center justify-end">
            <span className="text-right text-2xl md:text-3xl font-semibold text-gray-400">
              As the gap widens between traditional teaching methods and the
              needs of our rapidly evolving society, educators stand
              <br />
              at the forefront of a crucial shift.
            </span>
          </div>
        </div>
        {/* Image Background Section */}
        <div
          className="w-11/12 mt-16 mx-auto border-12 border-black overflow-hidden relative min-h-[680px] flex flex-col justify-between bg-cover bg-center bg-gray-500"
          style={{ backgroundImage: "" }}
        >
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-opacity-40 z-0"></div>
          {/* Main Text */}
          <div className="relative z-10 px-12 pt-12 pb-6 w-full">
            <h2 className="text-white font-extrabold text-8xl md:text-5xl lg:text-7xl leading-tight">
              The concept of learning
              <br />
              ecosystems — a visionary
              <br />
              approach that brings flexibility
              <br />
              and interconnectedness
            </h2>
          </div>
          {/* Bottom Row */}
          <div className="relative z-10 flex flex-row w-[95%] ml-12 mb-10 pb-10 gap-8 border-b-4 border-gray-400">
            {/* Left Div */}
            <div className="flex-1 flex items-center">
              <span className="text-white text-left text-2xl md:text-4xl font-semibold">
                to the heart of education
                <br />
                or any educational process.
              </span>
            </div>
            {/* Right Div */}
            <div className="flex-1 flex items-center justify-end">
              <span className="text-white text-left text-2xl md:text-4xl font-semibold">
                contact us
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* New Section - 05 */}
      <section className="w-full flex flex-col gap-10 justify-center items-center py-20">
        <div className="w-11/12 flex flex-row items-stretch border-b-2 border-gray-400 pb-10">
          {/* Left Inner Div */}
          <div className="flex flex-col justify-center flex-1">
            <span className="text-blue-600 text-lg font-semibold mb-2 text-left">
              Transformations in action
            </span>
            <span className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-900 text-left">
              What people <br /> say about us
            </span>
          </div>
          {/* Right Inner Div */}
          <div className="flex items-center justify-end flex-1">
            <span className="text-gray-300 font-light text-[10vw] leading-none select-none h-full flex items-center italic">
              (05)
            </span>
          </div>
        </div>
        <TestimonialCarousel />
      </section>

      {/* New Section - 06 */}
      <section className="w-full flex flex-col gap-10 justify-center items-center py-20">
        <div className="w-11/12 flex flex-row items-stretch border-b-2 border-gray-400 pb-10">
          {/* Left Inner Div */}
          <div className="flex flex-col justify-center flex-1">
            <span className="text-blue-600 text-lg font-semibold mb-2 text-left">
              What do we work with?
            </span>
            <span className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-900 text-left">
              Partners <br /> and Clients
            </span>
          </div>
          {/* Right Inner Div */}
          <div className="flex items-center justify-end flex-1">
            <span className="text-gray-300 font-light text-[10vw] leading-none select-none h-full flex items-center italic">
              (06)
            </span>
          </div>
        </div>
        <LogoCarousel />
      </section>

      {/* New Section - 07 */}
      <section className="w-full flex flex-col gap-10 justify-center items-center py-20">
        <div className="w-11/12 flex flex-row items-stretch border-b-2 border-gray-400 pb-10">
          {/* Left Inner Div */}
          <div className="flex flex-col justify-center flex-1">
            <span className="text-blue-600 text-lg font-semibold mb-2 text-left">
              Is anything unclear?
            </span>
            <span className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-900 text-left">
              Get in touch
            </span>
          </div>
          {/* Right Inner Div */}
          <div className="flex items-center justify-end flex-1">
            <span className="text-gray-300 font-light text-[10vw] leading-none select-none h-full flex items-center italic">
              (07)
            </span>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col gap-10 justify-center items-center py-8">
        {/* Final New Row Below All Sections */}
        <div className="w-11/12 flex flex-row items-stretch mt-4 mx-auto">
          {/* Left Text Div */}
          <div className="flex-1 flex items-center">
            <span className="text-left text-2xl md:text-3xl font-semibold text-gray-900">
              This is a left-aligned sentence for the new row below all
              sections.
            </span>
          </div>
          {/* Right Text Div */}
          <div className="flex-1 flex items-center justify-end">
            <span className="text-right text-2xl md:text-3xl font-semibold text-gray-400">
              This is a right-aligned sentence for the new row below all
              sections.
            </span>
          </div>
        </div>
      </section>
      <ContactForm />


      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
