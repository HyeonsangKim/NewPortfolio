import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-4 mt-8 sm:mt-12 md:mt-16">
      <div className="mx-auto px-4">
        <div className="flex justify-center items-center space-x-4 sm:space-x-6 md:space-x-8 mb-2 sm:mb-3 md:mb-4">
          <a
            href="https://github.com/HyeonsangKim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl sm:text-2xl md:text-3xl hover:text-blue-500 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hyeonsang-kim-5a7a67260"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl sm:text-2xl md:text-3xl hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="text-center text-xs sm:text-sm md:text-base">
          © {new Date().getFullYear()} Hyeonsang Kim. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
