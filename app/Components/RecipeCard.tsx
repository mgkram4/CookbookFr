"use client";

import React, { useEffect, useState } from "react";
import { client } from "../lib/sanity";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

interface Recipe {
  title: string;
  overview: string;
  link: string;
  _id: string;
  imageUrl: string;
}

export default function RecipeCard() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    async function fetchRecipes() {
      const query = `*[_type == "Recipes"] {
        title,
        overview,
        link,
        _id,
        "imageUrl": image.asset->url
      }`;

      try {
        const data = await client.fetch(query);
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }

    fetchRecipes();
  }, []);

  return (
    <div>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {recipes.map((recipe) => (
          <Card
            shadow="sm"
            key={recipe._id}
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={recipe.title}
                className="w-full object-cover h-[140px]"
                src={recipe.imageUrl}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{recipe.title}</b>
              <p className="text-default-500">{recipe.overview}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
