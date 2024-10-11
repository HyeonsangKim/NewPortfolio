"use client";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

export default function Main({ onVisible }: any) {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [btnAnimation, setBtnAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBtnAnimation(true);
    }, 500);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onVisible("main");
            setIsInView(true);
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
      <div className="relative w-full h-screen flex flex-col justify-center items-center gap-2">
        <div
          className={`${
            isInView
              ? "transform translate-x-4 opacity-100 transition duration-500 ease-out"
              : "transform -translate-x-10 opacity-0"
          }`}
        >
          <span className="text-white text-4xl">Hello, I'm </span>
          <span className="text-blue-500 text-4xl">Hyeonsang Kim</span>
          <span className="text-white text-4xl">.</span>
        </div>
        <div
          className={`${
            isInView
              ? "transform translate-x-4 opacity-100 transition duration-500 ease-out"
              : "transform translate-x-10 opacity-0"
          }`}
        >
          <h1 className="text-white text-4xl">I'm a front end developer.</h1>
        </div>

        <div
          className={`mt-7 transition transform ${
            btnAnimation
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          } duration-500 ease-out`}
        >
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
    </div>
  );
}
