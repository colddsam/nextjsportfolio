"use client"
import { Suspense, useEffect } from 'react';
import { LoadingProvider, useLoading } from '../context/LoadingContext';
import { InfiniteMovingCardsDemo } from "@/pages/Projects";
import { BentoGridDemo } from "@/pages/Achivements";
import { GoogleGeminiEffectDemo } from "@/pages/Gemini";
import { IntroSection } from "@/pages/Home";
import { HeroParallaxDemo } from "@/pages/Parallax";
import { AnimatedPinDemo } from "@/pages/Skill";
import { VortexDemoSecond } from "@/pages/Vertex";
import { BackgroundBeamsDemo } from "@/pages/Events";
import { GlobeDemo } from "@/pages/GitHubGlobe";
import { SignupFormDemo } from "@/pages/SignUp";
import { MultiStepLoaderDemo } from "@/pages/Loading";


export default function Home() {

  return (
    <main className="h-auto w-screen box-border flex flex-col bg-black">
      <LoadingProvider>
        <Suspense fallback={<LoadingFallback />}>
          <IntroSection />
          <VortexDemoSecond />
          <AnimatedPinDemo/>
          <HeroParallaxDemo />
          <InfiniteMovingCardsDemo/>
          <GoogleGeminiEffectDemo/>
          <BentoGridDemo/>
          <BackgroundBeamsDemo/>
          <GlobeDemo/>
          <SignupFormDemo />
        </Suspense>
      </LoadingProvider>
    </main>
  );
}

const LoadingFallback = () => {
  const { setLoadingProgress } = useLoading();

  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      if (progress > 100) progress = 100;
      setLoadingProgress(progress);
    }, 500);

    return () => clearInterval(interval);
  }, [setLoadingProgress]);

  return  <MultiStepLoaderDemo />
;
};


