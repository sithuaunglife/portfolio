"use client";

import { useEffect, useState } from "react";

export default function Spotlight() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");

    const handleChange = () => setEnabled(media.matches);
    handleChange();

    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(
          600px at ${position.x}px ${position.y}px,
          rgba(29, 78, 216, 0.15),
          transparent 80%
        )`,
      }}
    />
  );
}
