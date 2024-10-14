import React from "react";

const experiences = [
  {
    date: "2024.03 - 2024.06",
    job: "Front-End Developer",
    title: "Purple English Platform (React Native)",
    description:
      "Redeveloped an educational platform with 5,000+ CCSS-based activities for early childhood English education. Implemented interactive features like alphabet tracing and ebook functionality using React Native, SVG, and WebView. Overcame cross-platform challenges to ensure consistent UX across various devices.",
    stacks: ["React Native", "React", "JavaScript", "SVG"],
    // achievements: [
    //   "Gained expertise in React Native drag events, SVG, and Animated API",
    //   "Improved code modularity and reusability across web and mobile platforms",
    //   "Enhanced cross-platform development skills and UX considerations",
    // ],
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
            index % 2 === 0 ? "md:justify-start" : "md:justify-end"
          } transition-all duration-1000 ease-out transform ${
            isInView
              ? "opacity-100 translate-x-0"
              : index % 2 === 0
              ? "opacity-0 -translate-x-10"
              : "opacity-0 translate-x-10"
          }`}
        >
          <div
            className={`flex md:w-4/5 w-full p-6 rounded-lg bg-[#242424] bg-opacity-50 backdrop-blur-sm shadow-lg ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-start`}
          >
            <div
              className={`md:w-1/4 w-full ${
                index % 2 === 0 ? "md:text-left" : "md:text-right"
              } mb-4 md:mb-0`}
            >
              <p className="text-sm lg:text-base font-semibold text-blue-300">
                {experience.date}
              </p>
              <p className="text-xs lg:text-sm text-gray-400">
                {experience.job}
              </p>
            </div>
            <div
              className={`md:w-3/4 w-full ${
                index % 2 === 0 ? "md:pl-6" : "md:pr-6"
              }`}
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {experience.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base mb-4">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.stacks.map((stack, index) => (
                  <span
                    key={index}
                    className="bg-blue-500 bg-opacity-20 text-blue-300 rounded-full px-3 py-1 text-xs"
                  >
                    {stack}
                  </span>
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
