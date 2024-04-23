import React from "react";
import { Vortex } from "@/components/ui/vortex";

export function VortexDemoSecond() {
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
            Let&apos;s talk about some of my skills
        </h1>
      </Vortex>
    </div>
  );
}
