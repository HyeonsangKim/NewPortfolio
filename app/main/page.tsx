"use client";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { useVisibility } from "../hooks/useVisibility";

export default function Main({ onVisible, language }: any) {
  const { sectionRef, isInView } = useVisibility("main", onVisible);
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
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [onVisible]);

  const renderContent = () => {
    if (language === "ko") {
      return (
        <>
          <div
            className={`mb-4 ${
              isInView
                ? "transform translate-x-0 opacity-100 transition duration-500 ease-out"
                : "transform -translate-x-10 opacity-0"
            }`}
          >
            <span className="text-white text-2xl sm:text-3xl md:text-4xl">
              안녕하세요.
            </span>
          </div>
          <div
            className={`mb-4 ${
              isInView
                ? "transform translate-x-0 opacity-100 transition duration-500 ease-out delay-100"
                : "transform translate-x-10 opacity-0"
            }`}
          >
            <span className="text-white text-2xl sm:text-3xl md:text-4xl">
              프론트엔드 개발자
            </span>
          </div>
          <div
            className={`mb-8 ${
              isInView
                ? "transform translate-x-0 opacity-100 transition duration-500 ease-out delay-200"
                : "transform -translate-x-10 opacity-0"
            }`}
          >
            <span className="text-white text-2xl sm:text-3xl md:text-4xl">
              <span className="text-indigo-400">김현상</span> 입니다.
            </span>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div
            className={`mb-4 ${
              isInView
                ? "transform translate-x-0 opacity-100 transition duration-500 ease-out"
                : "transform -translate-x-10 opacity-0"
            }`}
          >
            <span className="text-white text-2xl sm:text-3xl md:text-4xl">
              Hello, I&apos;m
            </span>
          </div>
          <div
            className={`mb-4 ${
              isInView
                ? "transform translate-x-0 opacity-100 transition duration-500 ease-out delay-100"
                : "transform translate-x-10 opacity-0"
            }`}
          >
            <span className="text-indigo-400 text-2xl sm:text-3xl md:text-4xl">
              Hyeonsang Kim
            </span>
          </div>
          <div
            className={`mb-8 ${
              isInView
                ? "transform translate-x-0 opacity-100 transition duration-500 ease-out delay-200"
                : "transform -translate-x-10 opacity-0"
            }`}
          >
            <span className="text-white text-2xl sm:text-3xl md:text-4xl">
              a Frontend Developer.
            </span>
          </div>
        </>
      );
    }
  };

  return (
    <div
      id="main"
      ref={sectionRef}
      className="flex justify-center items-center min-h-screen"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        {renderContent()}

        <div
          className={`transition transform ${
            btnAnimation
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          } duration-500 ease-out`}
        >
          <Link
            to="section1"
            smooth={true}
            duration={500}
            className="inline-block border-2 px-6 py-2 border-indigo-400 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <span className="text-indigo-400">
              {language === "ko" ? "내 소개 ↓" : "About me ↓"}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
