"use client";

import { Player, Controls } from "@lottiefiles/react-lottie-player";
import React from "react";
import Link from "next/link";

import { Card, CardFooter, Image, Button, CardHeader } from "@nextui-org/react";

export default function DrinkMeu() {
  return (
    <div className="dark:bg-white flex flex-col items-center justify-center min-h-screen">
      <div className="font-bold text-5xl m-4">Thirsty?</div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-8 shadow-xl m-12 rounded-lg">
        <Link href="/nonalc">
          <Card className="col-span-12 sm:col-span-3 h-[300px] relative">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start"></CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover transform transition-transform hover:scale-110 hover:shadow-xl"
              src="/drink1.jpg"
            />
          </Card>
        </Link>

        <Link href="/Alc">
          <Card className="flex items-center justify-center col-span-12 sm:col-span-3 h-[300px] relative md:flex">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-4xl text-white/60 uppercase font-bold">21+</p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover transform transition-transform hover:scale-110 hover:shadow-xl"
              src="/drink2.jpg"
            />
          </Card>
        </Link>
      </div>

      <Player
        autoplay
        loop
        src="/drinks.json"
        style={{ width: "25%", height: "25%" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </div>
  );
}
