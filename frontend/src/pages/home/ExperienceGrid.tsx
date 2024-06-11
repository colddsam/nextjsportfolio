"use client";
import React, { useEffect, useState } from "react";
import { StickyScroll } from "@/components/sticky-scroll-reveal";


interface Experiences {
  title: string;
  description: string;
  time: string;
  link: string;
}
export default function StickyScrollRevealDemo() {
const [data,setData]=useState<Experiences[]|null>(null)
  useEffect(() => {
    fetch('/api/experiences')
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
    <div className="h-auto w-screen flex flex-center items-center top-0 justify-center">
      <StickyScroll content={data??[]} />
    </div>
  );
}
