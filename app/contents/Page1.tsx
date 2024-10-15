"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import IconBox from "@/components/IconBox";
import { useVisibility } from "../hooks/useVisibility";

export default function Page1({ onVisible }: any) {
  const { sectionRef, isInView } = useVisibility("section1", onVisible);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleIcons, setVisibleIcons] = useState<number[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const animateIcons = useCallback(() => {
    const totalIcons = 10;
    const interval = isMobile ? 50 : 100;

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
  }, [isMobile]);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    if (isInView) {
      cleanup = animateIcons();
    } else {
      setVisibleIcons([]);
    }

    return () => {
      if (cleanup) cleanup();
    };
  }, [isInView, animateIcons]);

  const getImageAnimationClass = () => {
    if (!isInView) return "opacity-0 scale-50";
    return isMobile
      ? "animate-zoomInFade"
      : "transform scale-100 opacity-100 transition duration-1000 ease-out";
  };

  const getTextAnimationClass = () => {
    if (!isInView) return "opacity-0 translate-y-10";
    return isMobile
      ? "animate-slideUpFade"
      : "transform translate-y-0 opacity-100 transition duration-1000 ease-out delay-500";
  };
  return (
    <section id="section1" ref={sectionRef} className="section m-auto">
      <div className="px-4 sm:px-8 md:px-16 lg:px-28 pt-16">
        <div className="relative text-center mb-10 flex justify-center">
          <div className="titleBox before:w-[5.5rem] md:before:w-[8rem] before:border-b-[1.4rem] before:left-9">
            About
          </div>
        </div>
        <div className="w-full text-center mb-10 flex flex-col justify-center items-center gap-8 mt-12 md:mt-24 transition-all duration-200 lg:flex-row">
          <div className="flex flex-col items-center max-w-2xl rounded-lg p-6 lg:p-8">
            <div className={`${getImageAnimationClass()} mb-6`}>
              <Image
                src={"/me.jpeg"}
                alt={"me"}
                width={200}
                height={180}
                className="rounded-full border-4 border-blue-500 shadow-lg"
              />
            </div>
            <div className={`space-y-4 ${getTextAnimationClass()}`}>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">
                Hi, I&apos;m Hyeonsang Kim
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                I&apos;m a passionate full stack developer with a deep love for
                JavaScript, React, and all things web development.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Committed to lifelong learning, I thrive on the unique blend of
                creativity, logic, and technology that web development offers.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me engrossed in a
                good book, staying fit, or strumming my guitar.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 scale-75 sm:scale-90 md:scale-100">
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
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
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
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
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
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
