import ParticlesCanvas from "@/components/ParticleCanvas";
import { useEffect, useRef } from "react";

export default function Page3({ onVisible }: any) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onVisible("section3");
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
    <section ref={sectionRef} id="section3" className="section">
      {/* <ParticlesCanvas /> */}
      <h1 className="text-white text-4xl font-bold pt-10">메인 페이지</h1>
      <p className="text-white mt-4">여기는 두 번째 페이지입니다.</p>
    </section>
  );
}
