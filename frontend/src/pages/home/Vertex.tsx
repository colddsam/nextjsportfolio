import React from "react";
import { Vortex } from "@/components/vortex";

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
        <h2 className="text-4xl md:text-7xl inred  text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Skills
        </h2>
        <p className="qiukyu font-medium text-lg md:text-2xl text-center px-6 md:px-0">
        Oh, I&apos;ve got skills. Some even say I can code with my eyes closed (but I wouldn&apos;t recommend it though)
        </p>
      </Vortex>
    </div>
  );
}