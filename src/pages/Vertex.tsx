import React from "react";
import { Vortex } from "@/components/vortex";
import { Highlight } from "@/components/hero-highlight"

export default function VortexDemoSecond() {
  return (
    <div className="w-screen mx-auto rounded-md h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-screen h-screen"
      >
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Skills
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto px-3">
          <Highlight className="text-black dark:text-white">Strength</Highlight> lies in mastering oneself, adaptability in mastering change, and <Highlight className="text-black dark:text-white">success</Highlight> in mastering both.
        </p>
      </Vortex>
    </div>
  );
}
