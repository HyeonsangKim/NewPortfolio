"use client";
import { PersonalProject } from "@/components/Project";
import { useVisibility } from "../hooks/useVisibility";
import { useEffect, useState } from "react";

export default function Page3({ onVisible, language }: any) {
  const { sectionRef, isInView } = useVisibility("section3", onVisible);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);
  const getText = (ko: string, en: string) => (language === "ko" ? ko : en);
  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);
  return (
    <section
      ref={sectionRef}
      id="section3"
      className="section m-auto relative flex flex-col justify-center
        items-center"
    >
      {/* <ParticlesCanvas /> */}
      <div className="">
        <div className="relative w-full text-center mb-10 flex justify-center gap-2">
          <div className={`titleBox relative inline-block`}>
            {getText("개인 프로젝트", "Personal Project")}
            <div
              className={`
          absolute -bottom-0.5 left-0 h-4 bg-indigo-400
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
        <PersonalProject isInView={isInView} language={language} />
      </div>
    </section>
  );
}
