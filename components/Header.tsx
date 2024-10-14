import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Header({ currentSection }: { currentSection: string }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsSticky(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "main", label: "Home" },
    { to: "section1", label: "About" },
    { to: "section2", label: "Experience" },
    { to: "section3", label: "Project" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50
        ${isSticky ? "bg-gray-900 shadow-lg py-2" : "bg-transparent py-4"}`}
    >
      <nav className="container mx-auto px-4">
        <ul className="flex justify-end space-x-6">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                className={`
                  cursor-pointer text-lg font-medium 
                  transition-colors duration-300
                  ${
                    currentSection === item.to
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
