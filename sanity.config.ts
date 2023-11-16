import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
// import { visionTool } from "@sanity/vision;
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "default",
  title: "Cookbook4",

  projectId: "6pvz30zg",
  dataset: "production",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
