"use client";
import ExperienceSection from "@/components/ExprienceList";
import ParticlesCanvas from "@/components/ParticleCanvas";
import { useEffect, useRef, useState } from "react";

export default function Page2({ onVisible }: any) {
  const sectionRef2 = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState<boolean>(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onVisible("section2");
            setIsInView(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef2.current) {
      observer.observe(sectionRef2.current);
    }

    return () => {
      if (sectionRef2.current) {
        observer.unobserve(sectionRef2.current);
      }
    };
  }, [onVisible]);
  return (
    <section id="section2" ref={sectionRef2} className="section m-auto">
      {/* <ParticlesCanvas /> */}
      <div className="lg:px-28 pt-16">
        <div className="relative w-full text-center mb-10 flex justify-center gap-2">
          <div className="titleBox md:before:w-[22rem] before:w-[16.3rem] before:border-b-[1.4rem] before:left-7">
            Job Expriences
          </div>
        </div>
        <div className="p-3">
          <ExperienceSection isInView={isInView} />
        </div>
      </div>
    </section>
  );
}
