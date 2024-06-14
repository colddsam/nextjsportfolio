"use client";
import React from "react";
import { Boxes } from "@/components/background-boxes";
import { LinkPreview } from "@/components/link-preview";
import { cn } from "@/utils/cn";
export default function NotFound() {
  return (
 <div className="h-screen relative w-screen overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      <h1 className={cn("text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 z-20 p-2")}>
        Error 404 | Page not found
      </h1>
      <p className="mt-2 font-normal text-sm md:text-base text-neutral-300 w-full text-center mx-auto z-20">
        You can always redirect to the <LinkPreview url="https://colddsam.dev" className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">main page</LinkPreview>{" "}
      </p>
    </div>
  )
}