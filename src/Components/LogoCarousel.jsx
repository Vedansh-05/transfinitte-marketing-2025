const logos = [
  "https://1000logos.net/wp-content/uploads/2021/04/UNESCO-logo.png",
  "https://1000logos.net/wp-content/uploads/2021/04/UNESCO-logo.png",
  "https://1000logos.net/wp-content/uploads/2021/04/UNESCO-logo.png",
  "https://1000logos.net/wp-content/uploads/2021/04/UNESCO-logo.png",
  "https://1000logos.net/wp-content/uploads/2021/04/UNESCO-logo.png",
  "https://1000logos.net/wp-content/uploads/2021/04/UNESCO-logo.png",
  "https://1000logos.net/wp-content/uploads/2021/04/UNESCO-logo.png",
  "https://1000logos.net/wp-content/uploads/2021/04/UNESCO-logo.png"
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
