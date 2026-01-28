import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Particle = ({ icon, color }) => {
    // Random trajectory
    const angle = Math.random() * Math.PI * 2;
    const distance = 80 + Math.random() * 60;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    return (
        <motion.svg
            viewBox="0 0 24 24"
            fill={color}
            style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: 14 + Math.random() * 10,
                height: 14 + Math.random() * 10,
                pointerEvents: "none",
                zIndex: 10,
                marginLeft: -10,
                marginTop: -10,
            }}
            initial={{ x: 0, y: 0, opacity: 1, scale: 0.5, rotate: 0 }}
            animate={{
                x,
                y,
                opacity: 0,
                scale: [0.5, 1, 0.8],
                rotate: Math.random() * 720 - 360
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {icon}
        </motion.svg>
    );
};

export default function ExplodingButton({ to, children, className = "", onClick }) {
    const [isHovered, setIsHovered] = useState(false);

    const particles = [
        // Dumbbells
        <path key="d1" d="M5 9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9zm12 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9zM9 11h6v2H9v-2zM2 8a1 1 0 0 1 1-1h1v10H3a1 1 0 0 1-1-1V8zm18-1h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1V7z" />,
        // Lightning
        <path key="l1" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
    ];

    return (
        <div
            className="exploding-btn-container"
            style={{ position: "relative", display: "inline-block" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link
                to={to}
                className={`btn primary ${className}`}
                style={{ position: "relative", zIndex: 2 }}
                onClick={onClick}
            >
                {children}
            </Link>

            <AnimatePresence>
                {isHovered && Array.from({ length: 8 }).map((_, i) => (
                    <Particle
                        key={i}
                        icon={particles[i % 2]}
                        color={i % 2 === 0 ? "#22c55e" : "#00ff88"}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}
