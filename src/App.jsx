import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [navBg, setNavBg] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (!heroSection) return;
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      if (heroBottom <= 0) {
        setNavBg("bg-white shadow");
      } else {
        setNavBg("bg-transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen min-w-full bg-gray-100">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-[calc(100%-4rem)] mx-auto mt-6 mb-6 ${navBg} shadow-none flex items-center justify-between px-8 py-8 min-h-[100px] rounded-full transition-colors duration-300`}
      >
        {/* Left: Logo and Name */}
        <div className="flex items-center space-x-3">
          {/* Replace the SVG below with your logo if needed */}
          <svg
            className="h-10 w-10 text-blue-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
          <span className="font-extrabold text-3xl text-gray-800">
            Transfinitte
          </span>
        </div>
        {/* Middle: Navigation Options */}
        <div className="flex space-x-10">
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 font-semibold text-xl"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 font-semibold text-xl"
          >
            Services
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 font-semibold text-xl"
          >
            Contact
          </a>
        </div>
        {/* Right: Button */}
        <div>
          <button className="bg-blue-600 text-white px-7 py-3 rounded-full hover:bg-blue-700 font-bold text-lg transition">
            Get Started
          </button>
        </div>
      </nav>
      {/* Hero Section */}
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
      {/* New Section */}
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
      {/* New Section */}
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
      {/* New Section */}
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
    </div>
  );
}

export default App;
