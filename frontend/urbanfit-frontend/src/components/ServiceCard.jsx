import { useState, useEffect, useRef, useMemo } from "react";
import Card from "./Card";

export default function ServiceCard({ children, className = "", style, folderName = "strength_traning", frameCount = 31, ...props }) {
    const [currentFrame, setCurrentFrame] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const frameRef = useRef(0);
    const intervalRef = useRef(null);

    // Dynamic frames based on folder and count
    const frames = useMemo(() => {
        return Array.from({ length: frameCount }, (_, i) => {
            const frameNumber = String(i + 1).padStart(3, "0");
            return new URL(`../assets/video_frames/${folderName}/ezgif-frame-${frameNumber}.jpg`, import.meta.url).href;
        });
    }, [folderName, frameCount]);

    // Preload frames
    useEffect(() => {
        frames.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, [frames]);

    // Animation control
    useEffect(() => {
        if (isHovering) {
            frameRef.current = 0;
            setCurrentFrame(0);

            intervalRef.current = setInterval(() => {
                if (frameRef.current < frameCount - 1) {
                    frameRef.current += 1;
                    setCurrentFrame(frameRef.current);
                } else {
                    if (intervalRef.current) clearInterval(intervalRef.current);
                }
            }, 50);
        } else {
            if (intervalRef.current) clearInterval(intervalRef.current);
            frameRef.current = 0;
            setCurrentFrame(0);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isHovering, frameCount]);

    return (
        <div
            className={`serviceCardWrapper ${className}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <Card
                className="serviceCard"
                style={{ ...style, position: "relative", overflow: "hidden" }}
                {...props}
            >
                {/* Animation behind content */}
                <div
                    className="serviceCardAnimation"
                    style={{
                        backgroundImage: `url(${frames[currentFrame]})`,
                    }}
                />

                {/* Content Layer */}
                <div style={{ position: "relative", zIndex: 1 }}>
                    {children}
                </div>
            </Card>
        </div>
    );
}
