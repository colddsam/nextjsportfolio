"use client";
import React from "react";
import { WavyBackground } from "@/components/wavy-background";

export default function WavyBackgroundDemo() {
  return (
      <WavyBackground className="w-screen h-screen mx-auto flex flex-col justify-center items-center">
        <h2 className="text-4xl md:text-7xl  text-center inred  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 box-border overflow-hidden">
            Experience
        </h2>
        <p className="qiukyu font-medium text-lg md:text-2xl text-center px-6 md:px-0">
        Check out my career highlights! From coding triumphs to debugging disasters,<br className="none"/>
        my journey's been a rollercoaster of tech-tastic adventures!
        </p>
    </WavyBackground>
  );
}