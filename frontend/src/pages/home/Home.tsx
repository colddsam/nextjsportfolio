"use client";

import React from "react";
import { Spotlight } from "@/components/Spotlight";
import { HoverBorderGradient } from "@/components/hover-border-gradient";
import Link from "next/link";
import { FlipWords } from "@/components/flip-words";
import Spline from '@splinetool/react-spline';

export default function IntroSection() {
    const words = ["Techies!!", "Devs!!", "Friends!!", "Folks!!"];
  return (
    <div className="min-h-screen h-auto w-screen flex flex-col md:flex-row items-center justify-center md:justify-between bg-black/[0.96] antialiased bg-dot-white/[0.2] relative overflow-hidden">
        <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
      />
      <div className="h-[40vh] w-screen md:h-screen md:w-2/3 flex flex-col justify-center items-center px-4">
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            <span className="w-screen md:h-[72px] h-[36px] md:flex flex-row items-center justify-center text-center md:justify-start md:text-start mb-3 box-border">
              Hey <FlipWords words={words} />
            </span>
            <span className="w-full h-auto flex flex-row items-center justify-center text-center md:justify-start md:text-start box-border">
              Here Samrat :)
            </span>
          </h1>
          <p className="mt-4 font-normal text-sm md:text-base text-neutral-300 w-full text-center mx-auto md:flex md:flex-row md:items-center md:justify-start md:text-start">
            A ML developer with a knack for problem-solving and a passion for continuous learning. Currently pursuing my B-Tech in ECE at Narula Institute of Technology, Kolkata. Let&apos;s connect and explore the world of tech together!
          </p>
          <div className="mt-5 flex flex-row justify-center md:justify-start w-full items-center">
            <a href='/resume/resume.pdf' download>
              <HoverBorderGradient
                containerClassName="rounded-[10px] mr-4 w-[105px]"
                as="button"
                className="bg-zinc-900 text-sm md:text-base text-white flex items-center"
              >
                <span>Resume</span>
              </HoverBorderGradient>
            </a>
            <Link href='/quiz'>
              <HoverBorderGradient
                containerClassName="rounded-[10px]  w-[105px]"
                as="button"
                className="bg-zinc-900 text-sm md:text-base text-white flex items-center"
              >
                <span>Puzzle</span>
              </HoverBorderGradient>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[60vh] w-screen md:h-screen md:w-1/3 flex flex-col justify-center items-center p-4">
        <Spline
          scene= {`${process.env.NEXT_PUBLIC_SPLINE}`}
        />
      </div>
    </div>
  );
}
