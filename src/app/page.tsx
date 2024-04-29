"use client"

import { BentoGridDemo } from "@/pages/Achivements";
import { GoogleGeminiEffectDemo } from "@/pages/Gemini";
import { IntroSection } from "@/pages/Home";
import { HeroParallaxDemo } from "@/pages/Parallax";
import { AnimatedPinDemo } from "@/pages/Skill";
import { VortexDemoSecond } from "@/pages/Vertex";


export default function Home() {

  return (
    <main className="h-auto w-screen box-border flex flex-col">
      <IntroSection />
      <VortexDemoSecond />
      <AnimatedPinDemo/>
      <HeroParallaxDemo/>
      <GoogleGeminiEffectDemo/>
      <BentoGridDemo/>
    </main>
  );
}
