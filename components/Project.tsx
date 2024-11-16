"use client";
interface ProjectDataType {
  title: Record<string, string>;
  subtitle: Record<string, string>;
  description: Record<string, string>;
  features: Record<string, string[]>;
  techDetails: Record<string, string[]>;
  stacks: Array<{
    category: string;
    techs: string[];
  }>;
  image: string;
  links: {
    github: string;
    demo?: string;
  };
}
const projectData: ProjectDataType = {
  title: {
    en: "Inter Agora",
    ko: "인터 아고라",
  },
  subtitle: {
    en: "Sales Platform for Foreign Residents",
    ko: "외국인 거주자 중고거래 플랫폼",
  },
  description: {
    en: "Full stack social media application built with Nextjs14, Prisma, Supabase.",
    ko: "한국 거주 외국인을 위한 로컬 마켓플레이스 및 커뮤니티 플랫폼. Next.js 14로 구축되었으며, 실시간 채팅, 위치 기반 서비스.",
  },
  features: {
    en: [
      "Local marketplace for buying, selling, and exchanging items",
      "Real-time chat system for price negotiations",
      "Location-based community boards",
    ],
    ko: [
      "물품 구매, 판매 및 교환을 위한 로컬 마켓플레이스",
      "가격 협상을 위한 실시간 채팅 시스템",
      "위치 기반 커뮤니티 게시판",
    ],
  },
  techDetails: {
    en: [
      "Built with Next.js 14 App Router for optimal performance",
      "Implemented real-time features using Supabase",
      "Responsive design with Tailwind CSS",
      "Type-safe development with TypeScript",
      "Database management with Prisma ORM",
    ],
    ko: [
      "Next.js 14 App Router를 활용한 최적화된 성능",
      "Supabase를 활용한 실시간 기능 구현",
      "Tailwind CSS를 이용한 반응형 디자인",
      "TypeScript를 통한 타입 안전성 확보",
      "Prisma ORM을 이용한 데이터베이스 관리",
    ],
  },
  stacks: [
    {
      category: "Frontend",
      techs: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Backend",
      techs: ["Supabase", "Prisma", "PostgreSQL"],
    },
    // {
    //   category: "DevOps",
    //   techs: ["Vercel", "Git"],
    // },
  ],
  image: "/aaa.png",
  links: {
    github: "https://github.com/HyeonsangKim/inter_market",
    demo: "https://inter-market-o4b4-six.vercel.app/",
  },
};

export function PersonalProject({
  isInView,
  language,
}: {
  isInView: boolean;
  language: "en" | "ko";
}) {
  const getText = (ko: string, en: string) => (language === "ko" ? ko : en);
  return (
    <div
      className={`
        relative transform transition-all duration-700 ease-out
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
      `}
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative flex flex-col">
          <div className="relative flex">
            <div className="relative h-full">
              <div className="w-full items-center flex">
                <a
                  href="https://inter-market-o4b4-six.vercel.app/"
                  className="
                  w-2/3 
                  group 
                  relative 
                  overflow-hidden
                  transition-all 
                  duration-500 
                  hover:shadow-2xl 
                  hover:shadow-indigo-500/20
                "
                >
                  {/* 배경 그라데이션 효과 */}
                  <div
                    className="
                    absolute 
                    inset-0 
                    bg-gradient-to-r 
                    from-indigo-800 
                    to-blue-700 
                    opacity-90
                    transition-all
                    duration-500
                    group-hover:opacity-80
                  "
                  />

                  {/* 이미지 컨테이너 */}
                  <div
                    className="
                    relative 
                    flex 
                    items-center 
                    pt-14 
                    pb-14 
                    pr-14 
                    md:pt-16 
                    md:pb-16 
                    md:pr-16
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                  >
                    <img
                      src={projectData.image}
                      alt={projectData.title[language]}
                      className="
                        h-full 
                        w-full 
                        object-cover 
                        transition-all 
                        duration-500
                        group-hover:saturate-150
                      "
                    />

                    {/* 호버시 나타나는 오버레이 */}
                    <div
                      className="
                      absolute 
                      inset-0 
                      flex 
                      items-center 
                      justify-center
                      bg-black/0
                      transition-all
                      duration-500
                      group-hover:bg-black/20
                      cursor-pointer
                    "
                    ></div>
                  </div>
                </a>

                {/* 컨텐츠 섹션에 슬라이드 인 애니메이션 */}
                <div
                  className={`
                  relative 
                  w-1/3 
                  -left-14 
                  md:-top-10
                  transform
                  transition-all
                  duration-700
                  translate-x-10
                  opacity-0
                  ${isInView ? "translate-x-0 opacity-100" : ""}
                `}
                >
                  <div className="w-full bg-black bg-opacity-50 sm:bg-opacity-0 p-2 sm:p-8 md:gap-2">
                    <h3
                      className="
                      text-xl md:text-3xl lg:text-4xl xl:text-5xl 
                      font-bold 
                      text-white 
                      md:mb-5
                      transform
                      transition-all
                      duration-500
                      hover:text-indigo-400
                    "
                    >
                      {projectData.title[language]}
                    </h3>
                    <p className="text-xs md:text-sm lg:text-base xl:text-lg text-indigo-400 mb-2">
                      {projectData.subtitle[language]}
                    </p>

                    <p className="text-xs md:text-sm lg:text-base xl:text-lg text-white/70">
                      {projectData.description[language]}
                    </p>

                    <div className="flex flex-col gap-2 md:gap-3 pt-2 mt-2 md:mt-10">
                      <a
                        href={projectData.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          px-3 md:px-4 
                          py-1.5 md:py-2 
                          text-xs md:text-sm lg:text-base 
                          font-medium 
                          text-white 
                          bg-indigo-600/90 
                          rounded-lg
                          transform
                          transition-all
                          duration-300
                          hover:bg-indigo-500
                          hover:-translate-y-0.5
                          hover:shadow-lg
                          hover:shadow-indigo-500/20
                          active:translate-y-0
                        "
                      >
                        GitHub
                      </a>
                      {projectData.links.demo && (
                        <a
                          href={projectData.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            px-3 md:px-4 
                            py-1.5 md:py-2 
                            text-xs md:text-sm lg:text-base 
                            font-medium 
                            text-indigo-300 
                            border 
                            border-indigo-500/30 
                            rounded-lg
                            transform
                            transition-all
                            duration-300
                            hover:bg-indigo-500/10
                            hover:-translate-y-0.5
                            active:translate-y-0
                          "
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
