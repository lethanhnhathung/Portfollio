"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeProvider";
import confetti from "canvas-confetti";

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const stars: Star[] = [];
    const colorsDark = ["#ffffff", "#8b5cf6", "#3b82f6", "#06b6d4"];
    const colorsLight = ["#1a1a1a", "#3b82f6", "#06b6d4"];

    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.8 + 0.2,
        color: (theme === "dark" ? colorsDark : colorsLight)[
          Math.floor(Math.random() * 4)
        ],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (theme === "dark") {
        stars.forEach((star) => {
          star.y += star.speed;
          if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
          }

          ctx.beginPath();
          ctx.fillStyle = star.color;
          ctx.globalAlpha = star.opacity;
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [theme]);

  useEffect(() => {
    if (theme === "light") {
      setShowFireworks(true);
      confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
      const timeout = setTimeout(() => setShowFireworks(false), 1500);
      return () => clearTimeout(timeout);
    }
  }, [theme]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10 opacity-30"
      />
    </>
  );
}
