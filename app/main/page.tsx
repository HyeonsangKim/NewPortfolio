/* eslint-disable react/no-unescaped-entities */
import ParticlesCanvas from "@/components/ParticleCanvas";
import { useEffect, useRef } from "react";
import { Link } from "react-scroll";

export default function Main({ onVisible }: any) {
  const mainRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onVisible("main");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (mainRef.current) {
      observer.observe(mainRef.current);
    }

    return () => {
      if (mainRef.current) {
        observer.unobserve(mainRef.current);
      }
    };
  }, [onVisible]);
  return (
    //h-screen bg-gray-100 flex items-center justify-center
    <div id="main" ref={mainRef} className="flex justify-center min-h-screen">
      <ParticlesCanvas />
      <div className="relative w-full h-screen flex flex-col justify-center items-center gap-2">
        <div>
          <span className="text-white text-4xl">Hello, I'm </span>
          <span className="text-blue-500 text-4xl">Hyeonsang Kim</span>
          <span className="text-white text-4xl">.</span>
        </div>
        <h1 className="text-white text-4xl">I'm a front end developer.</h1>
        <Link
          to="section1"
          smooth={true}
          duration={500}
          className="border-2 px-6 border-blue-500 p-2 mt-4 transform transition-transform duration-300 hover:scale-105  cursor-pointer"
        >
          <span className="text-blue-500">View my work ↓</span>
        </Link>
      </div>
    </div>
  );
}
