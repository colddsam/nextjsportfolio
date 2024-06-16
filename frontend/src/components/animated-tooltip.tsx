"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    community: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 50, damping: 30 }; // Further adjusted stiffness and damping
  const x = useMotionValue(0);

  // More conservative rotation range
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-10, 10]),
    springConfig
  );

  // More conservative translation range
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-10, 10]),
    springConfig
  );

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    const offsetX = event.nativeEvent.offsetX - halfWidth;

    // Ensure smooth transitions by clamping the offsetX value
    const clampedOffsetX = Math.max(Math.min(offsetX, 100), -100);
    x.set(clampedOffsetX); // set the x value, which is then used in transform and rotate
  };

  return (
    <div className="flex flex-wrap flex-row items-center justify-center mr-4">
      {items.map((item, idx) => (
        <div
          className="-mr-4 relative group mb-4"
          key={idx}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }} // Adjusted initial scale
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-[75%] translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <h3 className="font-bold text-white relative z-30 text-base">
                  {item.name}
                </h3>
                <h4 className="text-white text-xs">{item.community}</h4>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={process.env.NEXT_PUBLIC_CLOUDINARY_URL+item.image}
            alt={item.name}
            className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"
          />
        </div>
      ))}
    </div>
  );
};
