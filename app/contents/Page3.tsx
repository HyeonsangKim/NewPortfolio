"use client";
import { PersonalProject } from "@/components/Project";
import { useEffect, useRef, useState } from "react";

export default function Page3({ onVisible }: any) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState<boolean>(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onVisible("section3");
            setIsInView(true);
          }
        });
      },
      { threshold: 0.2 }
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
  return (
    <section ref={sectionRef} id="section3" className="section m-auto">
      {/* <ParticlesCanvas /> */}
      <div className="lg:px-28 pt-16">
        <div className="relative w-full text-center mb-10 flex justify-center gap-2">
          <div className="titleBox md:before:w-[23.5rem] before:w-[17.5rem] before:border-b-[1.4rem] before:left-7">
            Personal Project
          </div>
        </div>
        <div className="p-3">
          <PersonalProject isInView={isInView} />
        </div>
      </div>
    </section>
  );
}
