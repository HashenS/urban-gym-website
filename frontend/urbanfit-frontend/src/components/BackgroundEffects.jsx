import { motion } from "framer-motion";

const GymIcons = () => {
    const icons = [
        // Solid Dumbbell
        <path d="M5 9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9zm12 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9zM9 11h6v2H9v-2zM2 8a1 1 0 0 1 1-1h1v10H3a1 1 0 0 1-1-1V8zm18-1h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1V7z" />,
        // Solid Stopwatch
        <path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />,
        // Solid Heart/Pulse
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />,
        // Solid Lightning
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    ];

    const floatingIcons = Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        icon: icons[i % icons.length],
        x: Math.random() * 95,
        y: Math.random() * 95,
        size: 25 + Math.random() * 35,
        duration: 30 + Math.random() * 20,
        delay: Math.random() * 10
    }));

    return (
        <>
            {floatingIcons.map((item) => (
                <motion.svg
                    key={item.id}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="floating-icon"
                    style={{
                        position: "absolute",
                        left: `${item.x}%`,
                        top: `${item.y}%`,
                        width: item.size,
                        height: item.size,
                        overflow: "visible"
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: [0.04, 0.1, 0.04], // Subtler, ambient opacity
                        y: ["-30px", "30px", "-30px"],
                        x: ["-15px", "15px", "-15px"],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: item.duration,
                        repeat: Infinity,
                        delay: item.delay,
                        ease: "linear"
                    }}
                >
                    {item.icon}
                </motion.svg>
            ))}
        </>
    );
};

export default function BackgroundEffects() {
    return (
        <div className="bg-effects-container">
            {/* Moving Energy Orbs */}
            <div className="energy-orb orb-1"></div>
            <div className="energy-orb orb-2"></div>
            <div className="energy-orb orb-3"></div>

            <div className="bg-vignette"></div>
            <div className="mesh-grid"></div>
            <GymIcons />
        </div>
    );
}
