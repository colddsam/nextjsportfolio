"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (!isHovered) {
      startFlipping();
    }

    return () => clearInterval(interval);
  }, [isHovered]);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 3000);
  };

  const handleMouseEnter = () => {
    clearInterval(interval);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative h-72 md:h-96 w-72 md:w-2/3">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute box-border overflow-hidden h-full w-full rounded-3xl flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, // decrease z-index for the cards that are behind
            }}
          >
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="h-full w-full flex flex-col items-center justify-center  cursor-pointer  absolute top-0 left-0 isolate aspect-video backdrop-blur-sm rounded-xl bg-white/20 shadow-lg "
            >

              <div
                className="cursor-pointer overflow-hidden relative card h-full w-full rounded-md shadow-xl group/card mx-auto flex flex-col justify-between p-4 bg-cover"
                style={{
                  backgroundImage: "url(/images/profile/oldprofile.png)",
                }}
              >

                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-50 "></div>
                <div className="flex flex-row items-center  z-10">
                
                  <Image
                    height="100"
                    width="100"
                    alt="Avatar"
                    src="/images/profile/oldprofile.png"
                    className="h-10 w-10 rounded-full border-2 object-cover"
                  />
                 
                  <div className="flex flex-col">
                    <p className="font-normal text-base text-gray-50 relative z-10">
                      Manu Arora
                    </p>
                    <p className="text-sm text-gray-50">2 min read</p>
                  </div>
                </div>
                <div className="text content">
                  <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                    Author Card
                  </h1>
                  <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                    During the period I worked as a graphics designer in various
                    social media pages. Mainly I created the template and
                    various mockup for them.
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
