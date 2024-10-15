"use client";
import { PersonalProject } from "@/components/Project";
import { useVisibility } from "../hooks/useVisibility";

export default function Page3({ onVisible }: any) {
  const { sectionRef, isInView } = useVisibility("main", onVisible);

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
