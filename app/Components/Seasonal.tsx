"use client";
import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

export default function Seasonal() {
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <div className="text-5xl  font-bold m-8">Seasonal Selections</div>
      </div>
      <div className="gap-2 grid grid-cols-12 grid-rows-1 px-8">
        <Card className="col-span-12 sm:col-span-3 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              What to watch
            </p>
            <h4 className="text-white font-medium text-large">
              Stream the Acme event
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover transform transition-transform hover:scale-110 hover:shadow-xl"
            src="/image1.jpg"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-3 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Plant a tree
            </p>
            <h4 className="text-white font-medium text-large">
              Contribute to the planet
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover transform transition-transform hover:scale-110 hover:shadow-xl"
            src="/image2.jpg"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-3 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Supercharged
            </p>
            <h4 className="text-white font-medium text-large">
              Creates beauty like a beast
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover transform transition-transform hover:scale-110 hover:shadow-xl"
            src="/image3.jpg"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-3 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Supercharged
            </p>
            <h4 className="text-white font-medium text-large">
              Creates beauty like a beast
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover transform transition-transform hover:scale-110 hover:shadow-xl"
            src="/image4.jpg"
          />
        </Card>
      </div>
    </div>
  );
}
