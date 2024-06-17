import React from "react";

const experiences = [
  {
    date: "2024.04 - 2024.06",
    job: "Frontend Engineer",
    title: "PurpleEnglish Application",
    description:
      "Description of Project ADescription of Project Description of Project Description of Project Description of Project Description of Project Description of Project Description of Project Description of Project ",
    stacks: ["ReactNative", "JavaScript"],
  },
  {
    date: "2023.06 - 2024.03",
    job: "Frontend Engineer",
    title: "PurpleEnglish",
    description:
      "Description of Project ADescription of Project Description of Project Description of Project Description of Project Description of Project Description of Project Description of Project Description of Project ",
    stacks: ["React", "JavaScript", "HTML&CSS"],
  },
  {
    date: "2022.11 - 2023.02",
    job: "Fullstack Engineer",
    title: "JCON",
    description: "JCON",
    stacks: ["JAVA", "Spring", "JQuery", "MySQL", "HTML&CSS"],
  },
  {
    date: "2022.08 - 2022.09",
    job: "Frontend Engineer",
    title: "IEZAMS",
    description: "IEZAMS",
    stacks: ["React", "JavaScript"],
  },
  {
    date: "2022.03 - 2022.07",
    job: "Fullstack Engineer",
    title: "PODOPODO",
    description: "PODOPODO",
    stacks: ["JAVA", "Spring", "JQuery", "MySQL", "HTML&CSS"],
  },
  // 더 많은 경력 추가
];

function ExperienceSection({ isInView }: { isInView: boolean }) {
  return (
    <div className="flex flex-col gap-12 mt-4">
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
          } transition-all duration-1000 ease-out transform ${
            isInView
              ? "opacity-100 translate-x-0"
              : index % 2 === 0
              ? "opacity-0 -translate-x-10"
              : "opacity-0 translate-x-10"
          }`}
        >
          <div
            className={`flex lg:w-4/5 w-full p-4 rounded-md flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center`}
          >
            <div
              className={`md:w-1/4 w-full h-full ${
                index % 2 === 0 ? "text-left" : "lg:text-right"
              } mb-1`}
            >
              <p className="text-sm lg:text-base font-sans text-white text-opacity-85">
                {experience.date}
              </p>
              <p className="text-xs lg:text-sm font-sans text-white text-opacity-85">
                {experience.job}
              </p>
            </div>
            <div
              className={`md:w-3/4 w-full ${
                index % 2 === 0 ? "text-left" : "text-right"
              }`}
            >
              <h2 className="text-xl font-mono text-left font-bold text-white mb-4">
                {experience.title}
              </h2>
              <p className="text-white font-mono text-left text-sm md:text-base text-opacity-75">
                {experience.description}
              </p>
              <div className="gap-3 flex flex-row mt-3">
                {experience.stacks.map((stack, index) => (
                  <p
                    key={index}
                    className="bg-teal-400/10 text-teal-300 rounded-full p-1 px-3 text-xs"
                  >
                    {stack}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceSection;
