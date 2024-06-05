"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
interface Project{
  title: string;
  sub:string;
  language: string;
  date: string;
  link: string;
  thumbnail: string;
  logo: string;
}

export default function InfiniteMovingCardsDemo() {
  const [data, setData] = useState<Project[]|null>(null);
    useEffect(() => {
    fetch('/api/projects')
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
  }, []); 
  return (
    <div className="min-h-screen h-auto rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      {
        data ? (
          <>
          <InfiniteMovingCards
        items={data}
        direction="left"
        speed="normal"
            />
          <InfiniteMovingCards
        items={data}
        direction="right"
        speed="normal"
            />
        </>
          
        ):('')
      }
    </div>
  );
}

