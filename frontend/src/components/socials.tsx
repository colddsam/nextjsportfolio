import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { LinkPreview } from "@/components/link-preview";

export default function Dock({
  items,
}: {
  items?: {
    name: string;
    link: string;
    icon?: React.JSX.Element;
  }[];
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  let mouseX = useMotionValue(Infinity);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="h-[100px] gap-4 rounded-2xl bg-transparent md:px-4 px-0 flex flex-row items-center justify-center"
    >
      {items &&
        items.map((item, idx) => (
          <AppIcon key={idx} mouseX={mouseX} icon={item.icon} link={item.link} />
        ))}
    </motion.div>
  );
}

function AppIcon({
  mouseX,
  icon,
  link,
}: {
  mouseX: MotionValue;
  icon?: React.JSX.Element;
  link: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-140, 0, 140], [40, 60, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <LinkPreview url={link==='mailto:samrat@colddsam.dev'?'https://colddsam.dev':link}>
      <motion.div
        ref={ref}
        style={{ width }}
        className="aspect-square h-auto w-auto rounded-full bg-gray-700 flex items-center justify-center cursor-pointer"
      >
        <Link href={link}>
          <div>{icon}</div>
        </Link>
      </motion.div>
    </LinkPreview>
  );
}
