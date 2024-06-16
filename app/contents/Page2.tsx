import ExperienceSection from "@/components/ExprienceList";
import ParticlesCanvas from "@/components/ParticleCanvas";
import { useEffect, useRef } from "react";

export default function Page2({ onVisible }: any) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onVisible("section2");
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
  return (
    <section id="section2" ref={sectionRef} className="section m-auto">
      {/* <ParticlesCanvas /> */}
      <div className="px-28 pt-16">
        <div className="relative w-full text-center mb-10 flex justify-center gap-2">
          <div className="titleBox md:before:w-[22rem] before:w-[16.3rem] before:border-b-[1.4rem] before:left-7">
            Job Expriences
          </div>
        </div>
        <div className="relative p-2">
          <ExperienceSection />
        </div>
      </div>
    </section>
  );
}
