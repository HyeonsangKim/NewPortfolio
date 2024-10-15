"use client";
import ExperienceSection from "@/components/ExprienceList";
import { useVisibility } from "../hooks/useVisibility";

export default function Page2({ onVisible }: any) {
  const { sectionRef, isInView } = useVisibility("main", onVisible);

  return (
    <section
      id="section2"
      ref={sectionRef}
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
