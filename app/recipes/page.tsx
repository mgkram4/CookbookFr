"use client";

import React from "react";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function Recipes() {
  const list = [
    {
      title: "Orange",
      img: "/image1.jpg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/image2.jpg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/image3.jpg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/image4.jpg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/image1.jpg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/image2.jpg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/image3.jpg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/image4.jpg",
      price: "$12.20",
    },
  ];

  return (
    <div className="m-8 mt-20 mb-20">
      <div className="flex items-center  font-bold m-8 justify-center text-5xl">
        Recipies
      </div>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
