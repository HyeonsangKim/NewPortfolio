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
    <section
      id="section2"
      ref={sectionRef2}
      className="section m-auto relative min-h-screen"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white inline-block relative">
            Job Experiences
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </h2>
        </div>
        <div className="p-3">
          <ExperienceSection isInView={isInView} />
        </div>
      </div>
    </section>
  );
}
