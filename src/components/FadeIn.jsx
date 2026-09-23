import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

// Builds the "hidden" transform for a given direction + distance.
// Add a new case here to support a new animation style anywhere in the site.
function getOffset(direction, distance) {
  switch (direction) {
    case "down":
      return `translateY(-${distance}px)`;
    case "left":
      return `translateX(-${distance}px)`;
    case "right":
      return `translateX(${distance}px)`;
    case "scale":
      return "scale(0.9)";
    case "up":
    default:
      return `translateY(${distance}px)`;
  }
}

// Reveals children on entry and resets them after they leave the viewport,
// so each later visit plays the animation again.
//
// Props (all optional, each section sets its own combination in isolation):
//   direction - 'up' | 'down' | 'left' | 'right' | 'scale'   (default 'up')
//   distance  - how far it travels, in px                     (default 24)
//   duration  - how long the animation takes, in seconds       (default 0.6)
//   delay     - stagger start time, in seconds                 (default 0)
export default function FadeIn({
  children,
  direction = "up",
  distance = 16,
  duration = 0.72,
  delay = 0,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const easing = "cubic-bezier(0.22, 1, 0.36, 1)";

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      className="fade-in-content"
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate(0) scale(1)"
          : getOffset(direction, distance),
        transition: `opacity ${duration}s ${easing} ${visible ? delay : 0}s, transform ${duration}s ${easing} ${visible ? delay : 0}s`,
      }}
    >
      {children}
    </Box>
  );
}
