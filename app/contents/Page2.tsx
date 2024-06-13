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
    <section id="section2" ref={sectionRef} className="section">
      <ParticlesCanvas />
      <div className="pt-16">
        <div className="relative w-full text-center mb-10 flex justify-center gap-2">
          <div className="titleBox before:w-[22rem] before:border-b-[1.4rem] before:left-7">
            Job Expriences
          </div>
        </div>
        <p className="text-white mt-4 p-10">여기는 첫 번째 페이지입니다.</p>
      </div>
    </section>
  );
}
