import Carousel from "../Components/Carousel";
import Drinks from "../Components/Drinks";
import Header from "../Components/Header";
import QuickRecipe from "../Components/QuickRecipe";
import RecipeTable from "../Components/RecipeTable";
import Seasonal from "../Components/Seasonal";

export default function Landing() {
  return (
    <div>
      <div className="flex-col items-center justify-center">
        <Header />
        <Carousel />
        <Seasonal />
        <QuickRecipe />
        <Drinks />
      </div>
    </div>
  );
}
