"use client";
import Header from "@/components/Header";
import Page2 from "./contents/Page2";
import { useState } from "react";
import Main from "./main/page";
import Page3 from "./contents/Page3";
import Page1 from "./contents/Page1";
import ParticlesCanvas from "@/components/ParticleCanvas";
import { LanguageContext } from "./hooks/languageContext";
import LanguageToggle from "@/components/language-toggle";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("main");
  const [language, setLanguage] = useState<"ko" | "en">("ko");
  const handleSectionVisible = (id: string) => {
    setCurrentSection(id);
  };
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div>
        <main className="min-h-screen">
          <ParticlesCanvas />
          <Main onVisible={handleSectionVisible} />
          <Header />
          <Page1 onVisible={handleSectionVisible} />
          <Page2 onVisible={handleSectionVisible} />
          <Page3 onVisible={handleSectionVisible} />
          <LanguageToggle />
        </main>
      </div>
    </LanguageContext.Provider>
  );
}
