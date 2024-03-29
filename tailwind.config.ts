import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const withMT = require("@material-tailwind/react/utils/withMT");
const daisyui = require("daisyui");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/image4.jpg')", // Adjust the path to your image
      },
    },
  },
  variants: {
    extend: {
      // Other variants...
      dark: [], // Remove dark mode variants
    },
  },
  plugins: [nextui(), withMT, daisyui],
};

export default config;
