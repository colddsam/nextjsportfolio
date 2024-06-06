"use client";
import React, { useEffect,useState } from "react";
import { HeroParallax } from "@/components/hero-parallax";
interface Projects {
  title: string;
  link: string;
  thumbnail: string;
}
export default function HeroParallaxDemo() {
  const [data, setData] = useState<Projects[] | null>(null);
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
      .catch(error => console.error('Error fetching projects:', error));
  }, []);
  return data?<HeroParallax products={data}/>:'';
}
