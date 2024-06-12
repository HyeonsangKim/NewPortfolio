import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Events, Link, scrollSpy } from "react-scroll";

function Header() {
  const [isSticky, setIsSticky] = useState<Boolean>(false);
  const [current, setCurrent] = useState<string>("");
  const { ref, inView } = useInView({
    threshold: 0,
    onChange: (inView) => setIsSticky(!inView),
  });

  return (
    <>
      <div ref={ref} className="h-0"></div>
      <header
        className={`flex justify-end items-center transition-transform duration-300 border-blue-50 ${
          isSticky
            ? "sticky h-10 top-0 bg-gray-800 text-white p-4 z-50"
            : "relative h-10 bg-gray-800 text-white p-4 z-50"
        }`}
      >
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className={`hover:underline cursor-pointer ${
                  current === "" ? "text-blue-400 " : "text-white"
                }`}
                spy={true}
                onSetActive={() => {
                  console.log("dd");
                  setCurrent("");
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="section1"
                smooth={true}
                duration={500}
                offset={-200}
                className={`hover:underline cursor-pointer ${
                  current === "section1" ? "text-blue-400 " : "text-white"
                }`}
                spy={true}
                onSetActive={() => {
                  console.log("dd");
                  setCurrent("section1");
                }}
              >
                섹션 1
              </Link>
            </li>
            <li>
              <Link
                to="section2"
                smooth={true}
                duration={500}
                offset={-200}
                className={`hover:underline cursor-pointer ${
                  current === "section2" ? "text-blue-400 " : "text-white"
                }`}
                spy={true}
                onSetActive={() => {
                  console.log("dd");
                  setCurrent("section2");
                }}
              >
                섹션 2
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
