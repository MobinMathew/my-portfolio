import React, { useEffect, useRef } from "react";

export default function MouseTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let animationFrame;
    let mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const points = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;

      points.push({
        x: mouse.x,
        y: mouse.y,
        life: 1,
      });

      if (points.length > 25) {
        points.shift();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < points.length; i++) {
        const point = points[i];

        point.life -= 0.035;

        const size = point.life * 4;

        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(0, 210, 255, ${point.life * 0.35})`;
        ctx.fill();
      }

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resizeCanvas);

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="mouse-trail"
      aria-hidden="true"
    />
  );
}