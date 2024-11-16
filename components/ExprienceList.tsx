import React from "react";

const experiences = [
  {
    date: {
      ko: "2024.03 - 2024.06",
      en: "2024.03 - 2024.06",
    },
    job: {
      ko: "프론트엔드 개발자",
      en: "Front-End Developer",
    },
    title: {
      ko: "퍼플잉글리시 플랫폼 (React Native)",
      en: "Purple English Platform (React Native)",
    },
    description: {
      ko: "5,000개 이상의 CCSS 기반 활동을 포함한 교육 플랫폼을 리개발했습니다. React Native, SVG, WebView를 활용하여 알파벳 따라쓰기와 전자책 기능 등의 인터랙티브한 기능을 구현했습니다. 다양한 디바이스에서 일관된 사용자 경험을 제공하기 위한 크로스 플랫폼 과제를 해결했습니다.",
      en: "Redeveloped an educational platform with 5,000+ CCSS-based activities for early childhood English education. Implemented interactive features like alphabet tracing and ebook functionality using React Native, SVG, and WebView. Overcame cross-platform challenges to ensure consistent UX across various devices.",
    },
    stacks: ["ReactNative", "React", "JavaScript", "SVG"],
  },
  {
    date: {
      ko: "2023.06 - 2024.03",
      en: "2023.06 - 2024.03",
    },
    job: {
      ko: "프론트엔드 개발자",
      en: "Front-End Developer",
    },
    title: {
      ko: "퍼플잉글리시 교육 플랫폼",
      en: "Purple English Educational Platform",
    },
    description: {
      ko: "CCSS를 기반으로 한 교육 플랫폼을 개발하여 유아 영어 교육을 위한 5,000개 이상의 다양한 활동을 제공했습니다. React.js를 사용하여 사용자 참여와 효과적인 학습 경험에 중점을 둔 인터랙티브한 기능을 구현했습니다.",
      en: "Developed an educational platform based on CCSS, providing over 5,000 diverse activities for early childhood English education. Implemented interactive features using React.js, focusing on user engagement and effective learning experiences.",
    },
    stacks: ["React.js", "SVG", "GSAP", "JavaScript"],
  },
  {
    date: {
      ko: "2022.09 - 2023.03",
      en: "2022.09 - 2023.03",
    },
    job: {
      ko: "풀스택 개발자",
      en: "Full-stack Developer",
    },
    title: {
      ko: "아이고서 - 고문서 번역 스마트 플랫폼",
      en: "Aigoseo - Smart Platform for Ancient Korean Translation",
    },
    description: {
      ko: "역사적 문헌을 번역하고 관리하는 국가 공공 부문 프로젝트 '아이고서' 개발에 기여했습니다. 고문서 문자 인식 및 데이터 비교 등의 복잡한 기능을 구현했습니다.",
      en: "Contributed to the development of 'aigoseo', a national public sector project for translating and managing historical texts. Implemented complex features including character recognition and data comparison for ancient Korean texts.",
    },
    stacks: ["Spring Boot", "MariaDB", "jQuery", "REST", "HTML", "CSS", "SQL"],
  },
  {
    date: {
      ko: "2022.07 - 2022.09",
      en: "2022.07 - 2022.09",
    },
    job: {
      ko: "프론트엔드 개발자",
      en: "Front-End Developer",
    },
    title: {
      ko: "사내 근태관리 플랫폼",
      en: "In-House Attendance Platform",
    },
    description: {
      ko: "회사 직원들이 출석을 기록하고, 휴가를 신청하고, 승인 문서를 관리할 수 있는 React 기반 플랫폼을 개발했습니다. 사용자 친화적이고 반응형 인터페이스를 갖춘 전체 프론트엔드 아키텍처를 설계하고 구현했습니다.",
      en: "Developed a React-based platform for company employees to record attendance, submit leave requests, and manage approval documents. Designed and implemented the entire front-end architecture, ensuring a user-friendly and responsive interface.",
    },
    stacks: ["React", "REST", "HTML", "CSS"],
  },
  {
    date: {
      ko: "2022.04 - 2022.07",
      en: "2022.04 - 2022.07",
    },
    job: {
      ko: "풀스택 개발자",
      en: "Full-stack Developer",
    },
    title: {
      ko: "PODOPODO 와인 판매 웹사이트",
      en: "PODOPODO Wine Sales Website",
    },
    description: {
      ko: "Spring Boot, Thymeleaf, jQuery를 사용하여 와인 판매 웹사이트 개발에 기여했습니다. Elasticsearch를 사용한 홈페이지, 사용자 프로필 관리, 장바구니, 검색 기능 등 핵심 기능을 구현했습니다.",
      en: "Contributed to the development of a wine sales website using Spring Boot, Thymeleaf, and jQuery. Implemented core features including homepage, user profile management, shopping cart, and search functionality using Elasticsearch.",
    },
    stacks: ["Spring Boot", "Thymeleaf", "jQuery", "MariaDB", "Elasticsearch"],
  },
];

function ExperienceSection({
  isInView,
  language,
}: {
  isInView: boolean;
  language: "ko" | "en";
}) {
  return (
    <div className="flex flex-col gap-6 max-w-6xl">
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`
            group relative transform transition-all duration-700 ease-out
            ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }
            ${isInView ? `delay-[${index * 100}ms]` : ""}
          `}
        >
          {/* Timeline connector with gradient */}
          <div className="absolute left-0 md:left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/30 to-transparent" />

          {/* Timeline dot with transition */}
          <div
            className="absolute md:left-1/4 top-2 w-2 h-2 rounded-full bg-indigo-500 transform -translate-x-1/2
            group-hover:scale-150 group-hover:bg-indigo-400 transition-all duration-300 ease-out"
          />

          <div className="w-full ml-4 md:ml-0 pl-2 md:pl-0 flex flex-col md:flex-row md:gap-6">
            {/* Left side - Date & Role */}
            <div className="md:w-1/4 mb-1.5 md:mb-0 md:text-right md:pr-6">
              <p className="text-indigo-400 font-medium text-sm group-hover:text-indigo-300 transition-colors">
                {experience.date[language]}
              </p>
              <p className="text-white/60 text-xs mt-0.5">
                {experience.job[language]}
              </p>
            </div>

            {/* Right side - Content */}
            <div className="md:w-3/4">
              <div
                className="rounded-lg p-3 transition-all duration-300
                group-hover:bg-white/5 group-hover:shadow-lg group-hover:shadow-white/5"
              >
                <h2 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
                  {experience.title[language]}
                </h2>
                <p className="mt-2 text-sm text-white/70 leading-relaxed group-hover:text-white/80 transition-colors">
                  {experience.description[language]}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {experience.stacks.map((stack, stackIndex) => (
                    <span
                      key={stackIndex}
                      className="px-2 py-0.5 text-xs font-medium bg-white/5 text-indigo-300 rounded-md
                      hover:bg-white/10 transition-colors cursor-default"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceSection;
