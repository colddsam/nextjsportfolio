"use client"
import { Suspense, useEffect } from 'react';
import { LoadingProvider, useLoading } from '../context/LoadingContext';
import InfiniteMovingCardsDemo from "@/pages/Projects";
import BentoGridDemo from "@/pages/Achivements";
import GoogleGeminiEffectDemo from "@/pages/Gemini";
import IntroSection from "@/pages/Home";
import HeroParallaxDemo from "@/pages/Parallax";
import AnimatedPinDemo from "@/pages/Skill";
import VortexDemoSecond from "@/pages/Vertex";
import BackgroundBeamsDemo from "@/pages/Events";
import GlobeDemo from "@/pages/GitHubGlobe";
import SignupFormDemo from "@/pages/SignUp";
import MultiStepLoaderDemo from "@/pages/Loading"
import  WavyBackgroundDemo  from '@/pages/Experience';
import StickyScrollRevealDemo from '@/pages/ExperienceGrid';
import { FloatingNav } from "@/components/floating-navbar";
import { IconBrandX, IconBrandLinkedin, IconMail, IconBrandInstagram, IconBrandMedium } from "@tabler/icons-react";

const navItems = [
    {
      name: "Mail",
      link: "mailto:colddsam@gmail.com",
      icon: (
        <IconMail  className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
  },
    {
      name: "Gitub",
      link: "https://github.com/colddsam",
      icon: (
        <IconMail  className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Twitter",
      link: "https://x.com/colddsam",
      icon: <IconBrandX  className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/colddsam/",
      icon: <IconBrandLinkedin  className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },

    {
      name: "Instagram",
      link: "https://www.instagram.com/colddsam/",
      icon: (
        <IconBrandInstagram  className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
  },
        {
      name: "Medium",
      link: "https://colddsam.medium.com/",
      icon: (
        <IconBrandMedium  className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];


export default function Home() {

  return (
    <main className="h-auto w-screen flex box-border flex-col bg-black ">

      <LoadingProvider>
        <Suspense fallback={<LoadingFallback />}>
        {/* <Suspense fallback={<LoadingFallback />}> */}
          <FloatingNav navItems={navItems} />
          <IntroSection />
          <VortexDemoSecond />
          <AnimatedPinDemo />
            <WavyBackgroundDemo/>
          <StickyScrollRevealDemo/>
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
      progress += 1;
      if (progress > 10) progress = 10;
      setLoadingProgress(progress);
    }, 500);

    return () => clearInterval(interval);
  }, [setLoadingProgress]);

  return  <MultiStepLoaderDemo />
;
};


