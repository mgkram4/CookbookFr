import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "6pvz30zg",
  dataset: "production",
  apiVersion: "2021-10-21", // use a UTC date string
  // token: "sanity-auth-token", // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});
