import React, { useState } from "react";
import Image from "next/image";

interface IconBoxProps {
  imgName: string;
  name: string;
  visibleIcons: boolean;
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  language: "ko" | "en";
  getText: (ko: string, en: string) => string;
}

const IconBox: React.FC<IconBoxProps> = ({
  imgName,
  name,
  visibleIcons,
  proficiency,
  language,
  getText,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const getProficiencyText = (prof: string) => {
    switch (prof) {
      case "Beginner":
        return getText("초보", "Beginner");
      case "Intermediate":
        return getText("중급", "Intermediate");
      case "Advanced":
        return getText("고급", "Advanced");
      case "Expert":
        return getText("전문가", "Expert");
      default:
        return prof;
    }
  };

  return (
    <div
      className={`p-1 w-40 text-left bg-gradient-to-r from-[#51a2e9] to-[#ff4d5a] rounded-md md:scale-100 scale-[0.8] transition-all duration-500 ${
        visibleIcons ? "opacity-100 scale-100" : "opacity-0 scale-0"
      } cursor-pointer hover:shadow-lg`}
      onClick={handleClick}
    >
      <div className="p-1 px-2 bg-backCol rounded-md text-white md:text-xl text-lg font-bold flex flex-col items-center relative overflow-hidden">
        <div className="relative w-14 h-12 mb-1">
          <Image
            src={`/${imgName}.${imgName === "nestjs" ? "svg" : "png"}`}
            alt={`${name}`}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <span>{name}</span>
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 transition-all duration-300 ${
            isActive ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <span className="text-white text-sm font-bold">
            {getProficiencyText(proficiency)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default IconBox;
