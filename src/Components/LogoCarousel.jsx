import React from 'react';

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/UNESCO_logo.svg/512px-UNESCO_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/World_Bank_Group_logo.svg/2560px-World_Bank_Group_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Ministry_of_Education_%28Finland%29_Logo.svg/512px-Ministry_of_Education_%28Finland%29_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/9/91/Education_Finland_Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/b/b2/Erasmus%2B_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Logo_Hasso-Plattner-Institut.svg/512px-Logo_Hasso-Plattner-Institut.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/EdTech_Finland_logo.png/600px-EdTech_Finland_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/OBJ_logo.svg/512px-OBJ_logo.svg.png"
];


const LogoCarousel = () => {
    return (
        <div className="flex justify-center items-center gap-8 flex-wrap p-6 bg-gray-100">
            {logos.map((logo, index) => (
                <div
                    key={index}
                    className="w-24 h-24 rounded-full border border-gray-300 flex items-center justify-center bg-white p-2"
                >
                    <img src={logo} alt={`logo-${index}`} className="max-h-12 object-contain" />
                </div>
            ))}
        </div>
    );
};

export default LogoCarousel;
