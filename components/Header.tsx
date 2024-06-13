import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";

function Header({ currentSection }: { currentSection: string }) {
  const [isSticky, setIsSticky] = useState<Boolean>(false);
  const { ref, inView } = useInView({
    threshold: 0,
    onChange: (inView) => setIsSticky(!inView),
  });

  return (
    <>
      <div ref={ref} className="h-0"></div>
      <header
        className={`flex justify-end items-center transition-transform duration-300 pr-5 ${
          isSticky ? "sticky top-0 header" : "relative header"
        }`}
      >
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="main"
                offset={-100}
                smooth={true}
                duration={500}
                className={`hover:text-blue-500 cursor-pointer ${
                  currentSection === "main" ? "text-blue-500 " : "text-white"
                }`}
                spy={true}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="section1"
                smooth={true}
                duration={500}
                className={`hover:text-blue-500 cursor-pointer ${
                  currentSection === "section1"
                    ? "text-blue-500 "
                    : "text-white"
                }`}
                spy={true}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="section2"
                smooth={true}
                duration={500}
                className={`hover:text-blue-500 cursor-pointer ${
                  currentSection === "section2"
                    ? "text-blue-500 "
                    : "text-white"
                }`}
                spy={true}
              >
                Expriences
              </Link>
            </li>
            <li>
              <Link
                to="section3"
                smooth={true}
                duration={500}
                className={`hover:text-blue-500 cursor-pointer ${
                  currentSection === "section3"
                    ? "text-blue-500 "
                    : "text-white"
                }`}
                spy={true}
              >
                Project
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
