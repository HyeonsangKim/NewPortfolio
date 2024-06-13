import ParticlesCanvas from "@/components/ParticleCanvas";
import { useEffect, useRef } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Page1({ onVisible }: any) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onVisible("section1");
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
    <section id="section1" ref={sectionRef} className="section">
      <ParticlesCanvas />
      <div className="pt-16">
        <div className="relative text-center mb-10 flex justify-center">
          <div className="titleBox before:w-[8rem] before:border-b-[1.4rem] before:left-9">
            About
          </div>
        </div>
        <div className="w-full text-center mb-10 flex flex-col justify-center items-center gap-2 mt-24">
          <Image
            src={"/me.jpeg"}
            alt={"me"}
            width={200}
            height={180}
            className="rounded-full"
          />
          <p className="text-white p-10">여기는 첫 번째 페이지입니다.</p>
        </div>
      </div>
    </section>
  );
}
