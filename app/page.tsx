"use client";
import Header from "@/components/Header";
import ParticlesCanvas from "@/components/ParticleCanvas";
import Page1 from "./contents/Page1";
import { useState } from "react";
import Main from "./main/page";
import { useInView } from "react-intersection-observer";
import Page2 from "./contents/Page2";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen">
        <Main />
        <Header />
        <Page1 />
        <Page2 />
      </main>
    </div>
  );
}
