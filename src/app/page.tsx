"use client"
import { IntroSection } from "@/components/Home";
import { AnimatedPinDemo } from "@/components/TestSkiLL";
import { VortexDemoSecond } from "@/components/Vertex";


export default function Home() {
  return (
    <main className="h-auto w-screen box-border overflow-hidden flex flex-col">
      <IntroSection />
      <VortexDemoSecond />
      <AnimatedPinDemo/>
    </main>
  );
}
