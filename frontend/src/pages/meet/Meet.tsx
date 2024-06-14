"use client";
import { Spotlight } from "@/components/Spotlight";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push('https://meet.google.com/iea-qkux-isn');
  }, [router]);

  return (
    <div className="min-h-screen h-auto w-screen flex flex-col items-center justify-center  bg-black/[0.96] antialiased bg-dot-white/[0.2] relative overflow-hidden">
              <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
      />
      <h1 className='text-4xl md:text-7xl flex flex-row items-center align-center h-auto  text-center'>🚀 <span className=" font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 py-3">Redirecting.... </span></h1>
    </div>
  );
}
