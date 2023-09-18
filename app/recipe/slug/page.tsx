"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Recipes() {
  return (
    <div className="px-4 sm:px-8 bg-hero mx-auto max-w-screen-xl text-center py-12 lg:py-24">
      <h1 className="mb-4 text-2xl sm:text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
        Pasta and Red Sauce
        {/* This will be dynamic to recipe name */}
      </h1>
      <hr className="h-px my-4 bg-gray-400 border-0"></hr>
      <p className="text-sm sm:text-lg font-normal text-gray-700 lg:text-xl sm:px-4 lg:px-16">
        15 min | 8 ingredients | 3 measuring cups | large knife
        {/* Dynamic */}
      </p>
      <hr className="h-px my-4 bg-gray-400 border-0"></hr>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="col-span-1 sm:col-span-1">
          {/* Left Side */}
          <div className="md:w-4/5">
            <div className="font-bold text-sm sm:text-base">Ingredients</div>
            <hr className="h-px my-2 sm:my-4 bg-gray-400 border-0"></hr>
            <div className="text-sm sm:text-base">Cheese</div>
            <div className="text-sm sm:text-base">Red Sauce</div>
            <div className="text-sm sm:text-base">Butter</div>
            <div className="text-sm sm:text-base">Noodles</div>
            <div className="text-sm sm:text-base">Garlic</div>
            <div className="font-bold mt-2 sm:mt-4 text-sm sm:text-base">
              Notes
            </div>
            <hr className="h-px my-2 sm:my-4 bg-gray-400 border-0"></hr>
            <div className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
              quibusdam. Nesciunt, at reiciendis. Sit, minus quas? Rerum nulla
              repudiandae sint accusantium, quam temporibus consequatur ducimus
              voluptas natus suscipit doloremque optio.
            </div>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-1">
          {/* Right Side */}
          <Image
            alt="Card background"
            className="z-0 w-full object-cover"
            src="/pasta.jpg"
            width={200}
            height={200}
          />
          <hr className="h-px my-2 sm:my-4 bg-gray-400 border-0"></hr>
          <div className="font-bold text-base sm:text-3xl">Directions</div>
          <div className="text-sm sm:text-base">
            1. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis voluptates ratione minus id voluptatem ut blanditiis,
            esse eveniet, laboriosam eos sint itaque, adipisci deserunt
            voluptatibus nisi labore. Ipsa, nihil nobis?
            <br />
            2. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis voluptates ratione minus id voluptatem ut blanditiis,
            esse eveniet, laboriosam eos sint itaque, adipisci deserunt
            voluptatibus nisi labore. Ipsa, nihil nobis?
            <br />
            3. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis voluptates ratione minus id voluptatem ut blanditiis,
            esse eveniet, laboriosam eos sint itaque, adipisci deserunt
            voluptatibus nisi labore. Ipsa, nihil nobis?
            <br />
            4. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis voluptates ratione minus id voluptatem ut blanditiis,
            esse eveniet, laboriosam eos sint itaque, adipisci deserunt
            voluptatibus nisi labore. Ipsa, nihil nobis?
          </div>
        </div>
      </div>
    </div>
  );
}
