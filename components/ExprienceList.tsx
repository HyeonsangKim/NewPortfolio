import React from "react";

const experiences = [
  {
    date: "2024.04 - 2024.06",
    title: "PurpleEnglish Application",
    description: "Description of Project A",
  },
  {
    date: "2023.06 - 2024.03",
    title: "PurpleEnglish",
    description: "PurpleEnglish",
  },
  {
    date: "2018 - 2019",
    title: "Project C",
    description: "Description of Project C",
  },
  // 더 많은 경력 추가
];

function ExperienceSection() {
  return (
    <div className="space-y-8">
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`flex ${
            index % 2 === 0 ? "md:justify-start" : "md:justify-end"
          }`}
        >
          <div className="md:w-1/2 w-full bg-gray-800 p-4 rounded-md flex items-center">
            <div className="w-1/3 text-left">
              <p className="text-base font-sans text-white text-opacity-85">
                {experience.date}
              </p>
            </div>
            <div className="w-2/3 text-right">
              <h2 className="text-xl font-mono text-white">
                {experience.title}
              </h2>
              <p className="text-white font-mono">{experience.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceSection;
