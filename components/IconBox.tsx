import Image from "next/image";

interface IconBoxProps {
  imgName: string;
  name: string;
  visibleIcons: boolean;
}

export default function IconBox({ imgName, name, visibleIcons }: IconBoxProps) {
  return (
    <div
      className={`p-1 w-40 text-left bg-gradient-to-r from-[#51a2e9] to-[#ff4d5a] rounded-md md:scale-100 scale-[0.8] transition-opacity duration-500 ${
        visibleIcons ? "opacity-100" : "opacity-0"
      } fadeIn 1s ease-in-out forwards`}
    >
      <div className="p-1 px-8 bg-backCol rounded-md text-white md:text-xl text-lg font-bold flex flex-col items-center">
        <div className="relative w-14 h-12">
          {imgName === "nestjs" ? (
            <Image
              src={`/${imgName}.svg`}
              alt={`${name}`}
              // width={100}
              // height={50}
              className={`mb-1`}
              objectFit="contain"
              layout="fill"
            />
          ) : (
            <Image
              src={`/${imgName}.png`}
              alt={`${name}`}
              // width={100}
              // height={50}
              className={`mb-1`}
              objectFit="contain"
              layout="fill"
            />
          )}
        </div>
        {name}
      </div>
    </div>
  );
}
