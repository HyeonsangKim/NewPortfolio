"use client";
import Header from "@/components/Header";
import Page2 from "./contents/Page2";
import { useState } from "react";
import Main from "./main/page";
import Page3 from "./contents/Page3";
import Page1 from "./contents/Page1";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("main");

  const handleSectionVisible = (id: string) => {
    setCurrentSection(id);
  };
  return (
    <div>
      <main className="min-h-screen">
        <Main onVisible={handleSectionVisible} />
        <Header currentSection={currentSection} />
        <Page1 onVisible={handleSectionVisible} />
        <Page2 onVisible={handleSectionVisible} />
        <Page3 onVisible={handleSectionVisible} />
      </main>
    </div>
  );
}
