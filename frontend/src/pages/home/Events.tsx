"use client";
import React,{useEffect,useState} from "react";
import { BackgroundBeams } from "@/components/background-beams";
import { AnimatedTooltip } from "@/components/animated-tooltip";

interface Events {
  id: number;
  name: string;
  community: string;
  image: string;
}

export default function BackgroundBeamsDemo() {
const [data,setData]=useState<Events[]|null>(null)
  useEffect(() => {
    fetch('/api/events')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        return res.json();
      })
      .then(data => {
        setData(data)
      })
      .catch(error => console.error('Error fetching skills:', error));
  },[])
  return (
    <div
      className="h-screen w-screen bg-black/[0.96] relative flex flex-col items-center justify-center antialiased"
    >
      <div
        className="max-w-2xl mx-auto p-4 flex flex-col items-center justify-center"
        style={{ position: 'relative', zIndex: 10 }} // Ensure this div is visible and on top
      >
        <h2 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          My Attended Events
        </h2>
        <div
          className="flex flex-col items-center justify-center mb-10 h-auto mt-6 w-[70vw]"
        >
          <AnimatedTooltip items={data ?? []} />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
