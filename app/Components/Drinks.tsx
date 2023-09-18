"use client";

import { Player, Controls } from "@lottiefiles/react-lottie-player";
import React from "react";

import { Card, CardFooter, Image, Button, CardHeader } from "@nextui-org/react";

export default function Drinks() {
  return (
    <div className="">
      <div className=" flex  font-bold justify-center m-4 text-5xl">
        Thisty ?{" "}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  shadow-xl  m-12 rounded-lg">
        <Card className="col-span-12 sm:col-span-3 h-[300px] ">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start"></CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover transform transition-transform hover:scale-110 hover:shadow-xl"
            src="/drink1.jpg"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-3 h-[300px]">
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
