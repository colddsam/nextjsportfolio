"use client";
import React from "react";
import { WavyBackground } from "@/components/wavy-background";

export default function WavyBackgroundDemo() {
  return (
      <WavyBackground className="w-screen h-screen mx-auto flex flex-col justify-center items-center">
        <h2 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 box-border overflow-hidden">
            Experience
        </h2>
    
    </WavyBackground>
  );
}
