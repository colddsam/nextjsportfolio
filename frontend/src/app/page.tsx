"use client";
import React,{ Suspense, useEffect } from 'react';
import { FloatingNav } from "@/components/floating-navbar";
import { IconBrandX, IconBrandLinkedin, IconMail, IconBrandInstagram, IconBrandMedium, IconBrandGithub,IconPrompt,IconHome,IconTimeline,IconBrain,IconTrophy,IconCalendarEvent,IconWorld } from "@tabler/icons-react";
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
import ThankYou from '@/pages/home/ThankYou';
import Loading from './loading';
import Dock from '@/components/socials';
const socialItems = [
  {
    name: "Mail",
    link: "mailto:samrat@colddsam.dev",
    icon: <IconMail className="md:h-6 md:w-6 h-5 w-5 text-white" />,
  },
  {
    name: "GitHub",
    link: "https://github.com/colddsam",
    icon: <IconBrandGithub className="md:h-6 md:w-6 h-5 w-5 text-white" />,
  },
  {
    name: "Twitter",
    link: "https://x.com/colddsam",
    icon: <IconBrandX className="md:h-6 md:w-6 h-5 w-5 text-white" />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/colddsam/",
    icon: <IconBrandLinkedin className="md:h-6 md:w-6 h-5 w-5 text-white" />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/colddsam/",
    icon: <IconBrandInstagram className="md:h-6 md:w-6 h-5 w-5 text-white" />,
  },
  {
    name: "Medium",
    link: "https://colddsam.medium.com/",
    icon: <IconBrandMedium className="md:h-6 md:w-6 h-5 w-5 text-white" />,
  },
];
const navItems = [
  {
    name: "Home",
    link: "#intro",
    icon: <IconHome className="md:h-6 md:w-6 h-5 w-5 text-white" />,
  },
  {
    name: "Skills",
    link: "#skills",
    icon: <IconBrain className="md:h-6 md:w-6 h-5 w-5 text-white" />,
  },
  {
    name: "Experiences",
    link: "#experiences",
    icon: <IconTimeline className="md:h-6 md:w-6 h-5 w-5 text-white" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <IconPrompt className="md:h-6 md:w-6 h-5 w-5 text-white" />,
  },
  {
    name: "Achievements",
    link: "#achievements",
    icon: <IconTrophy className="md:h-6 md:w-6 h-5 w-5 text-white" />,
  },
  {
    name: "Events",
    link: "#events",
    icon: <IconCalendarEvent className="md:h-6 md:w-6 h-5 w-5 text-white" />,
  },
  {
    name: "Connect",
    link: "#connect",
    icon: <IconWorld className="md:h-6 md:w-6 h-5 w-5 text-white" />,
  },
];

export default function Home() {

  return (
    <main className="h-auto w-screen flex box-border flex-col bg-black ">
      <Suspense fallback={<Loading />}>
        <FloatingNav navItems={navItems} />
        <section id="intro">
          <IntroSection />
        </section>
        <section id="skills">
          <VortexDemoSecond />
          <AnimatedPinDemo />
        </section>
        <section id="experiences">
          <WavyBackgroundDemo />
          <StickyScrollRevealDemo />
        </section>
        <section id="projects">
          <HeroParallaxDemo />
          <InfiniteMovingCardsDemo />
        </section>
        <section id="achievements">
          <GoogleGeminiEffectDemo />
          <BentoGridDemo />
        </section>
        <section id="events">
          <BackgroundBeamsDemo />
        </section>
        <section id="connect">
          <GlobeDemo />
          <SignupFormDemo />
        </section>
        <Dock items={socialItems}/>

          <ThankYou/>
          <Footer />
        </Suspense>
    </main>
  );
}

