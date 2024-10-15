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

    // react-scroll 이벤트 설정
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
    { to: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50
        ${isSticky ? "bg-gray-900 shadow-lg py-2" : "bg-transparent py-4"}`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex justify-end space-x-4 pr-4">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                onSetActive={() => setActiveSection(item.to)}
                className={`
                  cursor-pointer text-base font-medium 
                  transition-colors duration-300
                  ${
                    activeSection === item.to
                      ? "text-blue-500"
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
