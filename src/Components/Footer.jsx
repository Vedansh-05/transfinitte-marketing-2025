import React, { useState } from "react";

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Subscribed email:", email);
        setEmail("");
    };

    return (
        <footer className="bg-black text-white px-6 md:px-16 pt-12 pb-8">
            <div className="flex flex-col md:flex-row justify-between border-t border-b border-gray-700 py-10">
                {/* Left Section */}
                <div className="mb-10 md:mb-0">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-6 h-6 bg-[#ff3e1d] rounded-full" />
                        <span className="text-2xl font-bold">educraftor</span>
                    </div>

                    <div className="text-sm text-gray-400 space-y-4">
                        <div>
                            <p className="font-semibold text-white">Address</p>
                            <p>Educraftor Oy Ab</p>
                            <p>Yliopistonkatu 31</p>
                            <p>FI-20100 TURKU</p>
                            <p>Finland</p>
                        </div>
                        <div>
                            <p className="font-semibold text-white pt-4">Phone</p>
                            <p>+358 505 331 278</p>
                            <p>+358 440 644 755</p>
                        </div>
                        <div className="pt-4">
                            <p className="font-semibold text-white text-sm">E-mail</p>
                            <p className="text-3xl font-bold mt-1 break-words">
                                query@transfinitte.org
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="md:w-1/2">
                    {/* Socials */}
                    <div className="flex flex-wrap gap-4 mb-6">
                        {["LinkedIn", "Twitter/X", "Facebook", "Instagram"].map((platform) => (
                            <button
                                key={platform}
                                className="bg-gray-600 text-white px-6 py-2 rounded-full text-sm hover:bg-[#e63619] transition"
                            >
                                {platform}
                            </button>
                        ))}
                    </div>

                    {/* Newsletter */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="email"
                            placeholder="E-mail *"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full rounded-full px-6 py-4 text-black text-base placeholder-gray-500 outline-none bg-white"
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#ff3e1d] text-white font-semibold text-xl rounded-full py-4 hover:bg-[#e63619] transition"
                        >
                            Newsletter Sign-up
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="flex justify-between items-center pt-6 text-sm text-gray-500">
                <p>© 2024 - Educraftor. All rights reserved</p>
                <a href="#" className="hover:text-white">
                    Privacy policy
                </a>
            </div>
        </footer>
    );
};

export default Footer;
