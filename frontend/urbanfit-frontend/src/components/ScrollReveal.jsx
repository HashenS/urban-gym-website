import { useEffect, useRef } from "react";

export default function ScrollReveal({ children, className = "", once = true }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("show");
            if (once) io.unobserve(el);
          } else if (!once) {
            el.classList.remove("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
