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
  const [language, setLanguage] = useState<"ko" | "en">("en");
  const handleSectionVisible = (id: string) => {
    setCurrentSection(id);
  };
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div>
        <main className="min-h-screen">
          <ParticlesCanvas />
          <Main onVisible={handleSectionVisible} language={language} />
          <Header />
          <Page1 onVisible={handleSectionVisible} language={language} />
          <Page2 onVisible={handleSectionVisible} language={language} />
          <Page3 onVisible={handleSectionVisible} language={language} />
          <LanguageToggle />
        </main>
      </div>
    </LanguageContext.Provider>
  );
}
