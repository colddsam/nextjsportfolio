import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import Link from "next/link";

export default function App({item}:Readonly<{
  item:{
    title: string;
    sub:string;
    language: string;
    date: string;
    link: string;
    thumbnail: string;
    logo: string;
  }
}>) {
  return (
    <Card isFooterBlurred className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 md:w-[450px] col-span-12 sm:col-span-7 md:h-[300px] h-[250px] overflow-hidden">
      <CardHeader className="h-auto md:h-1/4 absolute bg-black/40 z-10 top-0 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase truncate w-[90%] qiukyu">{item.sub}</p>
        <h3 className="text-white/90 font-medium text-xl inred">{item.title}</h3>
      </CardHeader>
      <Image
        removeWrapper
        alt={item.title}
        className="z-0 w-full h-full object-cover"
        src={process.env.NEXT_PUBLIC_CLOUDINARY_URL+item.thumbnail}
      />
      <CardFooter className="qiukyu absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt={item.language}
            className="rounded-full w-10 h-11 bg-black"
            src={process.env.NEXT_PUBLIC_CLOUDINARY_URL+item.logo}
          />
          <div className="flex flex-col">
            <h4 className="text-sm text-white/60">{item.date}</h4>
            <h4 className="text-sm text-white/60">{item.language}</h4>
          </div>
        </div>
        <Link href={item.link}>
        <Button radius="full" className="text-base" size="sm">View</Button>

        </Link>
      </CardFooter>
    </Card>
  );
}
