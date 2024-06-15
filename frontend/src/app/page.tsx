"use client";
import React,{ Suspense, useEffect } from 'react';
import { FloatingNav } from "@/components/floating-navbar";
import { IconBrandX, IconBrandLinkedin, IconMail, IconBrandInstagram, IconBrandMedium, IconBrandGithub } from "@tabler/icons-react";
import Footer from '@/pages/home/Footer';
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
import  WavyBackgroundDemo  from '@/pages/home/Experience';
import StickyScrollRevealDemo from '@/pages/home/ExperienceGrid';
import Loading from './loading';

const navItems = [
  {
    name: "Mail",
    link: "mailto:samrat@colddsam.dev",
    icon: <IconMail className="h-4 w-4 text-white" />,
  },
  {
    name: "GitHub",
    link: "https://github.com/colddsam",
    icon: <IconBrandGithub className="h-4 w-4 text-white" />,
  },
  {
    name: "Twitter",
    link: "https://x.com/colddsam",
    icon: <IconBrandX className="h-4 w-4 text-white" />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/colddsam/",
    icon: <IconBrandLinkedin className="h-4 w-4 text-white" />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/colddsam/",
    icon: <IconBrandInstagram className="h-4 w-4 text-white" />,
  },
  {
    name: "Medium",
    link: "https://colddsam.medium.com/",
    icon: <IconBrandMedium className="h-4 w-4 text-white" />,
  },
];

// const IntroSection = React.lazy(() => import("@/pages/home/Home"));
// const VortexDemoSecond = React.lazy(() => import("@/pages/home/Vertex"));
// const AnimatedPinDemo = React.lazy(() => import("@/pages/home/Skill"));
// const WavyBackgroundDemo = React.lazy(() => import('@/pages/home/Experience'));
// const StickyScrollRevealDemo = React.lazy(() => import('@/pages/home/ExperienceGrid'));
// const HeroParallaxDemo = React.lazy(() => import("@/pages/home/Parallax"));
// const InfiniteMovingCardsDemo = React.lazy(() => import("@/pages/home/Projects"));
// const GoogleGeminiEffectDemo = React.lazy(() => import("@/pages/home/Gemini"));
// const BentoGridDemo = React.lazy(() => import("@/pages/home/Achivements"));
// const BackgroundBeamsDemo = React.lazy(() => import("@/pages/home/Events"));
// const GlobeDemo = React.lazy(() => import("@/pages/home/GitHubGlobe"));
// const SignupFormDemo = React.lazy(() => import("@/pages/home/SignUp"));



export default function Home() {
  return (
    <main className="h-auto w-screen flex box-border flex-col bg-black ">
        <Suspense fallback={<Loading />}>
          <FloatingNav navItems={navItems} />
          <IntroSection />
          <VortexDemoSecond />
          <AnimatedPinDemo />
          <WavyBackgroundDemo />
          <StickyScrollRevealDemo />
          <HeroParallaxDemo />
          <InfiniteMovingCardsDemo />
          <GoogleGeminiEffectDemo />
          <BentoGridDemo />
          <BackgroundBeamsDemo />
          <GlobeDemo />
          <SignupFormDemo />
          <Footer />
        </Suspense>
    </main>
  );
}

