"use client";

import BackgroundElements from "../components/BackgroundElements";
import TextBackground from "../components/TextBackground";
import TextRows from "../components/TextRows";
import KineticType from "../components/KineticType";
import useGsapAnimations from "../hooks/useGsapAnimations";

export default function Home() {
  // Initialize GSAP animations
  useGsapAnimations();

  return (
    <>
      <BackgroundElements />
      <TextBackground />
      <TextRows />
      <KineticType />
    </>
  );
}
