import ParticlesCanvas from "@/components/ParticleCanvas";
import { useEffect, useRef, useState } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import IconBox from "@/components/IconBox";

export default function Page1({ onVisible }: any) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onVisible("section1");
            setIsInView(true);
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

  const [visibleIcons, setVisibleIcons] = useState<number[]>([]);

  useEffect(() => {
    const totalIcons = 10;
    const interval = 200; // 200ms 간격으로 아이콘을 밝히기
    if (isInView) {
      const intervalId = setInterval(() => {
        setVisibleIcons((prev) => {
          if (prev.length < totalIcons) {
            const newVisibleIcons = [...prev];
            let randomIndex;
            do {
              randomIndex = Math.floor(Math.random() * totalIcons);
            } while (newVisibleIcons.includes(randomIndex));
            newVisibleIcons.push(randomIndex);
            return newVisibleIcons;
          } else {
            clearInterval(intervalId);
            return prev;
          }
        });
      }, interval);

      return () => clearInterval(intervalId);
    }
  }, [isInView]);

  return (
    <section id="section1" ref={sectionRef} className="section m-auto">
      {/* <ParticlesCanvas /> */}
      <div className="px-28 pt-16">
        <div className="relative text-center mb-10 flex justify-center">
          <div className="titleBox before:w-[5.5rem] md:before:w-[8rem] before:border-b-[1.4rem] before:left-9">
            About
          </div>
        </div>
        <div className="w-full text-center mb-10 flex flex-col justify-center items-center gap-2 mt-24 transition-all duration-200 custom-lg:flex-row">
          <div
            className={`flex flex-col items-center ${
              isInView
                ? "transform translate-x-0 opacity-100 transition duration-1000 ease-out"
                : "transform -translate-x-full opacity-0"
            }`}
          >
            <Image
              src={"/me.jpeg"}
              alt={"me"}
              width={200}
              height={180}
              className="rounded-full"
            />
            <p className="text-white md:p-10 p-3 md:text-xl text-md w-auto text-left m-auto font-mono">
              Fully committed to the philosophy of life-long learning, I’m a
              full stack developer with a deep passion for JavaScript, React and
              all things web development. The unique combination of creativity,
              logic, technology and never running out of new things to discover,
              drives my excitement and passion for web development. When I’m not
              at my computer I like to spend my time reading, keeping fit and
              playing guitar.
            </p>
          </div>
          <div className="flex flex-row items-center md:gap-5 *:md:gap-5">
            <div className="flex flex-col mr-5">
              <IconBox
                imgName="html"
                name="HTML"
                visibleIcons={visibleIcons.includes(0)}
              />
              <IconBox
                imgName="css"
                name="CSS"
                visibleIcons={visibleIcons.includes(1)}
              />
              <IconBox
                imgName="js"
                name="JavaScript"
                visibleIcons={visibleIcons.includes(2)}
              />
            </div>
            <div className="flex flex-col mr-5">
              <IconBox
                imgName="react"
                name="React"
                visibleIcons={visibleIcons.includes(3)}
              />
              <IconBox
                imgName="reactnative"
                name="ReactNative"
                visibleIcons={visibleIcons.includes(4)}
              />
              <IconBox
                imgName="next"
                name="Next"
                visibleIcons={visibleIcons.includes(5)}
              />
              <IconBox
                imgName="nestjs"
                name="Nest"
                visibleIcons={visibleIcons.includes(6)}
              />
            </div>
            <div className="flex flex-col">
              <IconBox
                imgName="graphql"
                name="GraphQL"
                visibleIcons={visibleIcons.includes(7)}
              />
              <IconBox
                imgName="java"
                name="JAVA"
                visibleIcons={visibleIcons.includes(8)}
              />
              <IconBox
                imgName="mysql"
                name="MySQL"
                visibleIcons={visibleIcons.includes(9)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
