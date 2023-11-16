import React from "react";
import RecipeCard from "../Components/RecipeCard";

export default async function Recipes() {
  return (
    <div className="m-8 mt-20 mb-20 dark:bg-white">
      <div className="flex items-center font-bold m-8 justify-center text-5xl">
        Recipes
      </div>
      <RecipeCard />
    </div>
  );
}
