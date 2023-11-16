"use client";

import React from "react";
import { Card, CardHeader, Image } from "@nextui-org/react";
import Link from "next/link";

export default function Seasonal() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-5xl font-bold m-8">Seasonal Selections</div>
      <div className="gap-2 grid grid-cols-4 grid-rows-1 px-8">
        <Link href="/spring">
          <Card className="col-span-4  h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Spring
              </p>
              <h4 className="text-white font-medium text-large">
                Fresh and Vibrant Spring Delights
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover transform transition-transform hover:scale-110 hover:shadow-xl"
              src="/image1.jpg"
            />
          </Card>
        </Link>

        <Link href="/summer">
          <Card className="col-span-12 sm:col-span-3 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Summer
              </p>
              <h4 className="text-white font-medium text-large">
                Savor the Taste of Summer
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover transform transition-transform hover:scale-110 hover:shadow-xl"
              src="/image2.jpg"
            />
          </Card>
        </Link>

        <Link href="/autum">
          <Card className="col-span-12 sm:col-span-3 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Autumn
              </p>
              <h4 className="text-white font-medium text-large">
                Cozy Comforts of Autumn
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover transform transition-transform hover:scale-110 hover:shadow-xl"
              src="/image3.jpg"
            />
          </Card>
        </Link>

        <Link href="/winter">
          <Card className="col-span-12 sm:col-span-3 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Winter
              </p>
              <h4 className="text-white font-medium text-large">
                Hearty Winter Fare
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover transform transition-transform hover:scale-110 hover:shadow-xl"
              src="/image4.jpg"
            />
          </Card>
        </Link>
      </div>
    </div>
  );
}
