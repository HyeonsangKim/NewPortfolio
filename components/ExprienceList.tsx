import React from "react";

const experiences = [
  {
    date: "2024.03 - 2024.06",
    job: "Front-End Developer",
    title: "Purple English Platform (React Native)",
    description:
      "Redeveloped an educational platform with 5,000+ CCSS-based activities for early childhood English education. Implemented interactive features like alphabet tracing and ebook functionality using React Native, SVG, and WebView. Overcame cross-platform challenges to ensure consistent UX across various devices.",
    stacks: ["ReactNative", "React", "JavaScript", "SVG"],
  },
  {
    date: "2023.06 - 2024.03",
    job: "Front-End Developer",
    title: "Purple English Educational Platform",
    description:
      "Developed an educational platform based on CCSS, providing over 5,000 diverse activities for early childhood English education. Implemented interactive features using React.js, focusing on user engagement and effective learning experiences.",
    stacks: ["React.js", "SVG", "GSAP", "JavaScript"],
  },
  {
    date: "2022.09 - 2023.03",
    job: "Full-stack Developer",
    title: "Aigoseo - Smart Platform for Ancient Korean Translation",
    description:
      "Contributed to the development of 'aigoseo', a national public sector project for translating and managing historical texts. Implemented complex features including character recognition and data comparison for ancient Korean texts.",
    stacks: ["Spring Boot", "MariaDB", "jQuery", "REST", "HTML", "CSS", "SQL"],
  },
  {
    date: "2022.07 - 2022.09",
    job: "Front-End Developer",
    title: "In-House Attendance Platform",
    description:
      "Developed a React-based platform for company employees to record attendance, submit leave requests, and manage approval documents. Designed and implemented the entire front-end architecture, ensuring a user-friendly and responsive interface.",
    stacks: ["React", "REST", "HTML", "CSS"],
  },
  {
    date: "2022.04 - 2022.07",
    job: "Full-stack Developer",
    title: "PODOPODO Wine Sales Website",
    description:
      "Contributed to the development of a wine sales website using Spring Boot, Thymeleaf, and jQuery. Implemented core features including homepage, user profile management, shopping cart, and search functionality using Elasticsearch.",
    stacks: ["Spring Boot", "Thymeleaf", "jQuery", "MariaDB", "Elasticsearch"],
  },
];

function ExperienceSection({ isInView }: { isInView: boolean }) {
  return (
    <div className="flex flex-col gap-8 mt-4">
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
            className={`flex w-full md:w-4/5 p-4 rounded-md flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-start`}
          >
            <div
              className={`w-full md:w-1/4 mb-4 md:mb-0 ${
                index % 2 === 0 ? "md:text-left" : "md:text-right"
              }`}
            >
              <p className="text-sm lg:text-base font-sans text-white text-opacity-85">
                {experience.date}
              </p>
              <p className="text-xs lg:text-sm font-sans text-white text-opacity-85">
                {experience.job}
              </p>
            </div>
            <div
              className={`w-full md:w-3/4 ${
                index % 2 === 0 ? "md:pl-4" : "md:pr-4"
              }`}
            >
              <h2 className="text-xl font-mono font-bold text-white mb-4">
                {experience.title}
              </h2>
              <p className="text-white font-mono text-sm md:text-base text-opacity-75">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {experience.stacks.map((stack, stackIndex) => (
                  <p
                    key={stackIndex}
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
