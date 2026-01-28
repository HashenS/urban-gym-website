import Card from "./Card";

export default function TrainerCard({ name, specialty, image, children, className = "", ...props }) {
    return (
        <div className={`trainerCardWrapper ${className}`} {...props}>
            <Card
                className="trainerCard"
                style={{
                    position: "relative",
                    overflow: "hidden",
                    padding: 0, // Padding handled by internal content
                    height: "100%",
                    minHeight: "340px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end"
                }}
            >
                {/* Background Image Layer */}
                <div
                    className="trainerCardImage"
                    style={{
                        backgroundImage: `url(${image})`,
                        position: "absolute",
                        inset: 0,
                        backgroundSize: "cover",
                        backgroundPosition: "center 20%",
                        zIndex: 0,
                        transition: "transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)"
                    }}
                />

                {/* Overlay for Readability */}
                <div
                    className="trainerCardOverlay"
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, rgba(5, 7, 11, 0.1) 0%, rgba(5, 7, 11, 0.9) 80%)",
                        zIndex: 1
                    }}
                />

                {/* Content Layer */}
                <div
                    className="trainerCardContent"
                    style={{
                        position: "relative",
                        zIndex: 2,
                        padding: "24px",
                        width: "100%"
                    }}
                >
                    <div style={{ fontWeight: 900, fontSize: "1.2rem", color: "#fff" }}>{name}</div>
                    <div className="p" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", marginTop: "4px" }}>
                        {specialty}
                    </div>
                    {children}
                </div>
            </Card>
        </div>
    );
}
