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
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const updateCanvasSize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, []);

  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      setParticles(generateParticles(200, dimensions.width, dimensions.height));
    }
  }, [dimensions]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (canvas && context && particles.length > 0) {
      canvas.width = dimensions.width;
      canvas.height = dimensions.height;

      const animate = () => {
        context.clearRect(0, 0, dimensions.width, dimensions.height);
        context.fillStyle = "#1a1a1a";
        context.fillRect(0, 0, dimensions.width, dimensions.height);

        particles.forEach((particle) => {
          particle.x += particle.velocityX;
          particle.y += particle.velocityY;

          if (particle.x < 0 || particle.x > dimensions.width)
            particle.velocityX *= -1;
          if (particle.y < 0 || particle.y > dimensions.height)
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

        setParticles((prevParticles) =>
          prevParticles.map((particle) => {
            const dx = particle.x - mouseX;
            const dy = particle.y - mouseY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 100;

            return {
              ...particle,
              color:
                distance < maxDistance
                  ? `${particle.color.slice(0, -4)}0.7)`
                  : `${particle.color.slice(0, -4)}0.3)`,
            };
          })
        );
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [particles, dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default ParticlesCanvas;
