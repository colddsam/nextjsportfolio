import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import Image from 'next/image';
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const icons = [
  <IconClipboardCopy key={0} className="h-4 w-4 text-neutral-500" />,
  <IconFileBroken key={1} className="h-4 w-4 text-neutral-500" />,
  <IconSignature key={2} className="h-4 w-4 text-neutral-500" />,
  <IconTableColumn key={3} className="h-4 w-4 text-neutral-500" />,
  <IconArrowWaveRightUp key={4} className="h-4 w-4 text-neutral-500" />,
  <IconBoxAlignTopLeft key={5} className="h-4 w-4 text-neutral-500" />,
  <IconBoxAlignRightFilled key={6} className="h-4 w-4 text-neutral-500" />
]

interface Achievements {
  title: string;
  description:string;
  header: string;
  date: string;
}

export function BentoGridDemo() {
  const [data,setData]=useState<Achievements[]|null>(null)
  useEffect(() => {
    fetch('/api/achievements')
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
    <div className="w-screen flex flex-col relative items-center justify-center mt-10 mb-10 p-6">
      <BentoGrid className="max-w-4xl mx-auto">
      {data?data.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={<Skeleton image={item.header} />}
          icon={icons[i % icons.length]}
          className={i % 3 === 0 && i != 0 ? "md:col-span-2" : ""}
          date={item.date}
        />
      )):''}
    </BentoGrid>
    </div>
  );
}
const Skeleton = ({ image }: { image?: string; }) => (
  <div className="relative w-full h-full bg-gradient-to-br from-[#efebf1] to-[#a6a6a6] rounded-lg overflow-hidden flex justify-center items-center">
    {
      image?<Image src={image} alt="achievements" width={1000} height={1000} />:''
    }
  </div>
);
