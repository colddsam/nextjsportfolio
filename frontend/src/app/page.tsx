"use client"
import { Suspense, useEffect } from 'react';
import { LoadingProvider, useLoading } from '../context/LoadingContext';
import InfiniteMovingCardsDemo from "@/pages/home/Projects";
import BentoGridDemo from "@/pages/home/Achivements";
import GoogleGeminiEffectDemo from "@/pages/home/Gemini";
import IntroSection from "@/pages/home/Home";
import HeroParallaxDemo from "@/pages/home/Parallax";
import AnimatedPinDemo from "@/pages/home/Skill";
import VortexDemoSecond from "@/pages/home/Vertex";
import BackgroundBeamsDemo from "@/pages/home/Events";
import GlobeDemo from "@/pages/home/GitHubGlobe";
import SignupFormDemo from "@/pages/home/SignUp";
import MultiStepLoaderDemo from "@/pages/home/Loading"
import  WavyBackgroundDemo  from '@/pages/home/Experience';
import StickyScrollRevealDemo from '@/pages/home/ExperienceGrid';
import { FloatingNav } from "@/components/floating-navbar";
import { IconBrandX, IconBrandLinkedin, IconMail, IconBrandInstagram, IconBrandMedium,IconBrandGithub } from "@tabler/icons-react";
const navItems = [
    {
      name: "Mail",
      link: "mailto:samrat@colddsam.xyz",
      icon: (
        <IconMail  className="h-4 w-4 text-white" />
      ),
    },
    {
      name: "Gitub",
      link: "https://github.com/colddsam",
      icon: (
        <IconBrandGithub  className="h-4 w-4 text-white" />
      ),
    },
    {
      name: "Twitter",
      link: "https://x.com/colddsam",
      icon: <IconBrandX  className="h-4 w-4 text-white" />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/colddsam/",
      icon: <IconBrandLinkedin  className="h-4 w-4 text-white" />,
    },

    {
      name: "Instagram",
      link: "https://www.instagram.com/colddsam/",
      icon: (
        <IconBrandInstagram  className="h-4 w-4 text-white" />
      ),
  },
        {
      name: "Medium",
      link: "https://colddsam.medium.com/",
      icon: (
        <IconBrandMedium  className="h-4 w-4 text-white" />
      ),
    },
  ];


export default function Home() {

  return (
    <main className="h-auto w-screen flex box-border flex-col bg-black ">

      <LoadingProvider>
        <Suspense fallback={<LoadingFallback />}>
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


