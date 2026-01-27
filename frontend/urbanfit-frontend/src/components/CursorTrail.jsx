import { useEffect, useRef, useState } from "react";

export default function CursorTrail() {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorPosRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const cursor = cursorRef.current;
    if (!canvas || !cursor) return;

    const ctx = canvas.getContext("2d");
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.life = 1;
        this.decay = Math.random() * 0.02 + 0.01;
        this.color = `hsl(${120 + Math.random() * 30}, 100%, ${50 + Math.random() * 20}%)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= this.decay;
        this.size *= 0.98;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.life;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      // Create particles at cursor position
      for (let i = 0; i < 2; i++) {
        particlesRef.current.push(
          new Particle(e.clientX, e.clientY)
        );
      }
    };

    // Check if hovering over interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Animation loop
    const animate = () => {
      // Smooth cursor follow
      cursorPosRef.current.x += (mouseRef.current.x - cursorPosRef.current.x) * 0.15;
      cursorPosRef.current.y += (mouseRef.current.y - cursorPosRef.current.y) * 0.15;

      // Update cursor position and size
      if (cursor) {
        cursor.style.left = cursorPosRef.current.x + "px";
        cursor.style.top = cursorPosRef.current.y + "px";
        const size = isHovering ? 30 : 20;
        cursor.style.width = size + "px";
        cursor.style.height = size + "px";
        cursor.style.borderColor = isHovering 
          ? "rgba(34, 197, 94, 1)" 
          : "rgba(34, 197, 94, 0.8)";
        cursor.style.boxShadow = isHovering
          ? "0 0 30px rgba(34, 197, 94, 0.8)"
          : "0 0 20px rgba(34, 197, 94, 0.5)";
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw cursor glow trail
      const glowSize = isHovering ? 80 : 60;
      const glowOpacity = isHovering ? 0.3 : 0.2;
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        glowSize
      );
      gradient.addColorStop(0, `rgba(34, 197, 94, ${glowOpacity})`);
      gradient.addColorStop(0.5, `rgba(34, 197, 94, ${glowOpacity * 0.5})`);
      gradient.addColorStop(1, "transparent");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.update();
        particle.draw();
        return particle.life > 0;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovering]);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          width: "20px",
          height: "20px",
          border: "2px solid rgba(34, 197, 94, 0.8)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 10000,
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s, height 0.2s, border-color 0.2s, box-shadow 0.2s",
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </>
  );
}

