"use client";

import React from "react";
import { Button } from "@nextui-org/react";

export default function App() {
  return (
    <div className="bg-cover bg-[url('/kitchen.jpg')]">
      <div className="px-4 bg-cover bg-hero mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
          Explore Culinary Delights with Us
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48">
          Welcome to a world of flavors and recipes where every dish is a
          masterpiece waiting to be crafted. Join us on a gastronomic journey
          filled with culinary wonders.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Button className="border-black text-xl bg-green-600 text-white">
            Discover Recipes
          </Button>
          <Button className="text-xl bg-transparent hover:border-black hover:bg-transparent text-black">
            Feeling Hangry?
          </Button>
        </div>
      </div>
    </div>
  );
}
