"use client"
import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";

export function IntroSection() {
  return (
    <div className="h-screen w-full rounded-md flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.075] relative overflow-hidden">
        <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Hey Devs!!! <br /> This Side Samrat :)
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto px-3">
                A ML developer with a knack for problem-solving and a passion for continuous learning. Currently pursuing my B-Tech in ECE at Narula Institute of Technology, Kolkata. Let&apos;s connect and explore the world of tech together!
            </p>
        <div className="mt-5 flex flex-row justify-center items-center">
            <Link href='https://drive.google.com/file/d/10jZy-G-tbZZqSadPt_Yf8u6PKhIkpyfC/view?usp=sharing'>
                <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center"
                >
                <span>My Resume</span>
                </HoverBorderGradient>
            </Link>
        </div>
      </div>
    </div>
  );
}
