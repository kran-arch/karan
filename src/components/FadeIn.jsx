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

// Wraps children and animates them in every time they enter the viewport,
// and back out when they leave - so it replays on every scroll pass, and
// every time you navigate back to a page that contains it.
//
// Props (all optional, each section sets its own combination in isolation):
//   direction - 'up' | 'down' | 'left' | 'right' | 'scale'   (default 'up')
//   distance  - how far it travels, in px                     (default 24)
//   duration  - how long the animation takes, in seconds       (default 0.6)
//   delay     - stagger start time, in seconds                 (default 0)
export default function FadeIn({
  children,
  direction = "up",
  distance = 24,
  duration = 0.6,
  delay = 0,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate(0) scale(1)"
          : getOffset(direction, distance),
        transition: `opacity ${duration}s ease ${delay}s, transform ${duration}s ease ${delay}s`,
      }}
    >
      {children}
    </Box>
  );
}
