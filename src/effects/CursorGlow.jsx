import React, { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!glowRef.current) return;

      glowRef.current.style.transform = `translate3d(
        ${event.clientX - 150}px,
        ${event.clientY - 150}px,
        0
      )`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="cursor-glow"
      aria-hidden="true"
    />
  );
}