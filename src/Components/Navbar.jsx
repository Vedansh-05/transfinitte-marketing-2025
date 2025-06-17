import { useEffect, useState } from "react";

const Navbar = () => {
    const [navBg, setNavBg] = useState("bg-transparent");
    const [menuOpen, setMenuOpen] = useState(false);

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
            className={`fixed z-50 w-full max-w-screen mx-auto my-4 ${navBg} shadow-none flex items-center justify-between px-6 md:px-8 py-4 md:py-6 min-h-[80px] rounded-full transition-colors duration-300`}
        >
            {/* Left: Logo and Name */}
            <div className="flex items-center space-x-3">
                <svg
                    className="h-8 w-8 md:h-10 md:w-10 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <circle cx="12" cy="12" r="10" />
                </svg>
                <span className="font-extrabold text-xl md:text-3xl text-gray-800">
                    Transfinitte
                </span>
            </div>

            {/* Middle: Nav Links (hidden on small screens) */}
            <div className="hidden md:flex space-x-6 lg:space-x-10">
                <a
                    href="#hero-section"
                    className="text-gray-700 hover:text-blue-600 font-semibold text-base md:text-lg"
                >
                    Home
                </a>
                <a
                    href="#about-section"
                    className="text-gray-700 hover:text-blue-600 font-semibold text-base md:text-lg"
                >
                    About
                </a>
                <a
                    href="#contact-section"
                    className="text-gray-700 hover:text-blue-600 font-semibold text-base md:text-lg"
                >
                    Contact
                </a>
            </div>

            {/* Right: Button (hidden on small screens) */}
            <div className="hidden md:block">
                <button className="bg-blue-600 text-white px-6 md:px-7 py-2 md:py-3 rounded-full hover:bg-blue-700 font-bold text-base md:text-lg transition">
                    Get Started
                </button>
            </div>

            {/* Hamburger Icon (shown on small screens) */}
            <div className="md:hidden">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-gray-700 focus:outline-none"
                >
                    <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="absolute top-full mt-3 left-0 right-0 bg-white rounded-2xl shadow-md px-6 py-4 flex flex-col items-start space-y-4 md:hidden">

                    <a
                        href="#hero-section"
                        className="text-gray-700 hover:text-blue-600 font-medium text-base"
                    >
                        Home
                    </a>
                    <a
                        href="#about-section"
                        className="text-gray-700 hover:text-blue-600 font-medium text-base"
                    >
                        About
                    </a>
                    <a
                        href="#contact-section"
                        className="text-gray-700 hover:text-blue-600 font-medium text-base"
                    >
                        Contact
                    </a>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 font-bold text-base transition w-full text-center">
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Navbar