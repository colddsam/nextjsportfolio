import React, { useEffect, useState } from "react";
import { PinContainer } from "@/components/3d-pin";
import Image from 'next/image';

interface Skill {
  name: string ; 
  image: string;
  percentage: string;
  description: string;
}

export default function AnimatedPinDemo() {
  const [data, setData] = useState<Skill[] | null>(null);

  useEffect(() => {
    fetch('/api/skills')
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
    <div className="h-full md:h-screen w-screen relative flex p-4 flex-wrap items-center justify-center mb-12">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {data ? data.map((item,index)=>(
        
          <PinContainer  key={index} title={item.percentage}>
      <div className="flex basis-full flex-col m-2 p-0 tracking-tight text-slate-100/50 sm:basis-1/2 w-[10rem] h-[10rem] ">
        <h3 className="max-w-xs !pb-0.5 !m-0 font-bold  text-base text-slate-100">
          {item.name}
        </h3>
        <div className="text-xs !m-0 !p-0 font-normal">
          <span className="text-slate-500 ">
            {item.description}
          </span>
        </div>
        <div className="relative w-full h-full bg-gradient-to-br from-[#efebf1] to-[#a6a6a6] mt-3 rounded-lg p-4 overflow-hidden flex justify-center items-center">
          <Image src={item.image} width={60} height={60} alt={item.name} />
        </div>
      </div>
    </PinContainer>
        
       )) : (
        ''
      )}
    </div>
  );
}
