"use client";
import { useLanguage } from "@/app/hooks/languageContext";
import React, { useState } from "react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "ko" ? "en" : "ko");
  };

  return (
    <button
      onClick={toggleLanguage}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-12 h-12 rounded-full
        bg-gray-800 hover:bg-gray-700
        text-white shadow-lg
        transition-all duration-300 ease-in-out
        ${isHovered ? "w-20" : "w-12"}
      `}
    >
      <span
        className={`
        transition-all duration-300 ease-in-out
        ${isHovered ? "opacity-0" : "opacity-100"}
      `}
      >
        {language.toUpperCase()}
      </span>
      <span
        className={`
        absolute
        transition-all duration-300 ease-in-out
        ${isHovered ? "opacity-100" : "opacity-0"}
      `}
      >
        {language === "ko" ? "ENG" : "한국어"}
      </span>
    </button>
  );
};

export default LanguageToggle;
