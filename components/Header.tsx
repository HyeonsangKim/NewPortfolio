import React, { useState, useEffect, useCallback } from "react";
import { Link, Events, scrollSpy } from "react-scroll";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("main");

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsSticky(currentScrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    Events.scrollEvent.register("begin", (to, element) => {
      setActiveSection(to);
    });

    scrollSpy.update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("begin");
    };
  }, [handleScroll]);

  const navItems = [
    { to: "main", label: "Home" },
    { to: "section1", label: "About" },
    { to: "section2", label: "Experience" },
    { to: "section3", label: "Project" },
    { to: "section4", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50
        ${isSticky ? "bg-gray-900 shadow-lg py-2" : "bg-transparent py-4"}`}
    >
      <nav className="container mx-auto px-2 sm:px-4">
        <ul className="flex justify-center md:justify-end items-center space-x-1 sm:space-x-2 md:space-x-4">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onSetActive={() => setActiveSection(item.to)}
                className={`
                  cursor-pointer text-[10px] xxs:text-xs sm:text-sm md:text-base font-medium 
                  transition-colors duration-300 px-1 sm:px-2 py-1
                  ${
                    activeSection === item.to
                      ? "text-indigo-400"
                      : "text-white hover:text-blue-300"
                  }
                `}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
