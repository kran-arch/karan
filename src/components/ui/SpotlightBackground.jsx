import { useEffect, useState } from "react";

export default function SpotlightBackground() {
  const [coords, setCoords] = useState({ x: -1000, y: -1000 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only activate on devices that support hover (desktop/mouse)
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reducedMotion) return;

    let ticking = false;

    const onMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setCoords({ x: e.clientX, y: e.clientY });
          if (!visible) setVisible(true);
          ticking = false;
        });
        ticking = true;
      }
    };

    const onMouseLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.body.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        background: `radial-gradient(650px at ${coords.x}px ${coords.y}px, rgba(100, 255, 218, 0.038), transparent 80%)`,
        transition: "opacity 0.4s ease",
      }}
    />
  );
}
