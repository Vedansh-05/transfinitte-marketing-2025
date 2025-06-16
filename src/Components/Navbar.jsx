import { useEffect, useState } from "react";

const Navbar = () => {
    const [navBg, setNavBg] = useState ("bg-transparent");

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
        <nav
            className={`fixed top-0 left-0 right-0 z-50 w-[calc(100%-4rem)] mx-auto my-4 ${navBg} shadow-none flex items-center justify-between px-8 py-8 min-h-[100px] rounded-full transition-colors duration-300`}
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
    )
}

export default Navbar