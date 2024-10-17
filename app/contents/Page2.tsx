"use client";
import ExperienceSection from "@/components/ExprienceList";
import { useVisibility } from "../hooks/useVisibility";
import { useLanguage } from "../hooks/languageContext";
import { useEffect, useState } from "react";
import { CommonProps } from "../type/common";

export default function Page2({ onVisible, language }: CommonProps) {
  const { sectionRef, isInView } = useVisibility("main", onVisible);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);
  const getText = (ko: string, en: string) => (language === "ko" ? ko : en);
  return (
    <section
      id="section2"
      ref={sectionRef}
      className="section m-auto relative min-h-screen"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
        <div className="text-center mb-12">
          <div className={`titleBox relative inline-block`}>
            {getText("경 력", "Job Experiences")}
            <div
              className={`
          absolute -bottom-0.5 left-0 h-4 bg-blue-500
          transition-all duration-1000 ease-out
          ${isVisible ? "w-[calc(100%)]" : "w-0"}
        `}
              style={{
                zIndex: -1,
                transform: "skew(-10deg)",
              }}
            />
          </div>
        </div>
        <div className="p-3">
          <ExperienceSection isInView={isInView} />
        </div>
      </div>
    </section>
  );
}
