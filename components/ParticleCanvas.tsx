import React, { useEffect, useRef, useState } from "react";

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
  const colors = ["rgba(18, 234, 255, ", "rgba(255, 72, 72, "];

  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight,
      radius: 1.2,
      color: `${colors[Math.floor(Math.random() * colors.length)]}0.3)`,
      velocityX: (Math.random() - 0.5) * 0.1,
      velocityY: (Math.random() - 0.5) * 0.1,
    });
  }

  return particles;
};

const ParticlesCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const mousePositionRef = useRef({ x: 0, y: 0 });

  const updateCanvasSize = () => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      particlesRef.current = generateParticles(
        200,
        window.innerWidth,
        window.innerHeight
      );
    }
  };

  useEffect(() => {
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (canvas && context) {
      const animate = () => {
        context.fillStyle = "#1a1a1a";
        context.fillRect(0, 0, canvas.width, canvas.height);

        particlesRef.current.forEach((particle) => {
          // 움직임 업데이트
          particle.x += particle.velocityX;
          particle.y += particle.velocityY;

          // 경계 체크
          if (particle.x < 0 || particle.x > canvas.width)
            particle.velocityX *= -1;
          if (particle.y < 0 || particle.y > canvas.height)
            particle.velocityY *= -1;

          // 마우스와의 거리 계산
          const dx = particle.x - mousePositionRef.current.x;
          const dy = particle.y - mousePositionRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 100;

          // 파티클 그리기
          context.beginPath();
          context.arc(
            particle.x,
            particle.y,
            particle.radius,
            0,
            Math.PI * 2,
            false
          );
          context.fillStyle =
            distance < maxDistance
              ? `${particle.color.slice(0, -4)}0.7)`
              : `${particle.color.slice(0, -4)}0.3)`;
          context.fill();
        });

        animationFrameRef.current = requestAnimationFrame(animate);
      };

      const handleMouseMove = (event: MouseEvent) => {
        mousePositionRef.current = {
          x: event.clientX,
          y: event.clientY,
        };
      };

      window.addEventListener("mousemove", handleMouseMove);
      animate();

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }

    return () => window.removeEventListener("resize", updateCanvasSize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default ParticlesCanvas;
