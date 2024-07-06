"use client";
import React from "react";
import { MaskContainer } from "@/components/svg-mask-effect";

export default function About(){
    return (
        <div className=" inred h-screen w-screen flex items-center justify-center  overflow-hidden bg-black/[0.96] antialiased ">
      <MaskContainer
        revealText={
          <p className="w-2/3 mx-auto text-white text-center text-2xl md:text-4xl cursor-pointer">
            <span className="text-red-500">Who am I?</span><br />
            Good question! I'm still figuring it out, but here's what I know so far...<br />
            <span className="text-blue-400 md:hidden block text-lg">Hover me</span>
          </p>
        }
        className="h-screen w-screen "
      >
        Hey there! I'm <span className="text-red-500">Samrat</span>,
        a tech enthusiast diving deep into <span className="text-red-500">machine learning </span>
        and <span className="text-red-500">web development</span>.
        Let's <span className="text-red-500">geek</span> out together!
      </MaskContainer>
    </div>
    )
}

  