import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

function getOffset(direction, distance) {
  switch (direction) {
    case "down":
      return `translateY(-${distance}px)`;
    case "left":
      return `translateX(-${distance}px)`;
    case "right":
      return `translateX(${distance}px)`;
    case "scale":
      return "scale(0.97)";
    case "up":
    default:
      return `translateY(${distance}px)`;
  }
}

/**
 * Fast, crisp FadeIn with recursive scroll detection:
 * - 100% crisp typography (no blur filters)
 * - Snappy 350ms transition
 * - Resets on exit and replays on entry
 */
export default function FadeIn({
  children,
  direction = "up",
  distance = 12,
  duration = 0.35,
  delay = 0,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const easing = "cubic-bezier(0.16, 1, 0.3, 1)";

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Recursive intersection observer: resets on exit and replays on entry
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -20px 0px",
      }
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
        transform: visible ? "translate(0) scale(1)" : getOffset(direction, distance),
        transition: `opacity ${duration}s ${easing} ${visible ? delay : 0}s, transform ${duration}s ${easing} ${visible ? delay : 0}s`,
      }}
    >
      {children}
    </Box>
  );
}
