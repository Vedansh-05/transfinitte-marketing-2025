import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

//Letter-by-letter fall-in
const fallInTextContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const fallInLetter = {
    hidden: { y: -20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

//Scale-down animation
const scaleDownVariant = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function AnimatedSection({
    children,
    className = "",
    staggerLetters = false,
    scaleDown = false,
}) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

    //Letter-by-letter animation
    if (staggerLetters && typeof children === "string") {
        const words = children.split(" ");

        return (
            <motion.div
                ref={ref}
                className={`flex flex-wrap ${className}`}
                variants={fallInTextContainer}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                {words.map((word, wordIdx) => (
                    <span key={wordIdx} className="flex mr-2">
                        {word.split("").map((letter, letterIdx) => (
                            <motion.span
                                key={letterIdx}
                                variants={fallInLetter}
                                className="inline-block"
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </span>
                ))}
            </motion.div>
        );
    }

    //Scale-down block animation
    if (scaleDown) {
        return (
            <motion.div
                ref={ref}
                className={className}
                variants={scaleDownVariant}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                {children}
            </motion.div>
        );
    }
    //Default fallback
    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
