// components/ParticlesCanvas.tsx
"use client";
import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  velocityX: number;
  velocityY: number;
}

const generateParticles = (
  numParticles: number,
  canvasWidth: number,
  canvasHeight: number
): Particle[] => {
  const particles: Particle[] = [];
  const colors = ["rgba(255, 0, 0, ", "rgba(0, 255, 0, ", "rgba(0, 0, 255, "];

  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight,
      radius: Math.random() * 2 + 1,
      color: `${colors[Math.floor(Math.random() * colors.length)]}0.3)`,
      velocityX: (Math.random() - 0.5) * 0.1,
      velocityY: (Math.random() - 0.5) * 0.1,
    });
  }
  console.log(particles);

  return particles;
};

const ParticlesCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    if (canvas && context) {
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      particlesRef.current = generateParticles(300, canvasWidth, canvasHeight);

      const animate = () => {
        context.clearRect(0, 0, canvasWidth, canvasHeight);

        particlesRef.current.forEach((particle) => {
          particle.x += particle.velocityX;
          particle.y += particle.velocityY;

          if (particle.x < 0 || particle.x > canvasWidth)
            particle.velocityX *= -1;
          if (particle.y < 0 || particle.y > canvasHeight)
            particle.velocityY *= -1;

          context.beginPath();

          context.arc(
            particle.x,
            particle.y,
            particle.radius,
            0,
            Math.PI * 2,
            false
          );
          context.fillStyle = particle.color;
          context.fill();
        });

        requestAnimationFrame(animate);
      };

      animate();
      const handleMouseMove = (event: MouseEvent) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        particlesRef.current.forEach((particle) => {
          const dx = particle.x - mouseX;
          const dy = particle.y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 100;
          const force = (maxDistance - distance) / maxDistance;

          if (distance < maxDistance) {
            particle.color = `${particle.color.slice(0, -4)}0.8)`;
          } else {
            particle.color = `${particle.color.slice(0, -4)}0.2)`;
          }
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        display: "block",
      }}
    />
  );
};

export default ParticlesCanvas;
