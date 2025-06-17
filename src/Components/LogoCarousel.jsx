import { motion } from "framer-motion";

const logos = [
    "https://1000logos.net/wp-content/uploads/2021/04/UNESCO-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/04/UNESCO-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/04/UNESCO-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/04/UNESCO-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/04/UNESCO-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/04/UNESCO-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/04/UNESCO-logo.png",
];

const LogoCarousel = () => {
    return (
        <div className="w-full overflow-hidden bg-gray-100 py-6">
            <motion.div
                className="flex gap-8"
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                }}
            >
                {[...logos, ...logos].map((logo, index) => (
                    <div
                        key={index}
                        className="w-36 h-36 rounded-full border border-gray-300 flex items-center justify-center bg-white p-4 shrink-0"
                    >
                        <img
                            src={logo}
                            alt={`logo-${index}`}
                            className="max-h-12 object-contain"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default LogoCarousel;
