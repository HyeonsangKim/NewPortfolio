"use client";
import React from "react";

type LanguageContextType = {
  language: "ko" | "en";
  setLanguage: (lang: "ko" | "en") => void;
};

export const LanguageContext = React.createContext<
  LanguageContextType | undefined
>(undefined);

export const useLanguage = () => {
  const context = React.useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
