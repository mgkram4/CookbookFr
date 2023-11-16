import { recipe } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Key, ReactElement } from "react"; // Remove unnecessary imports

async function getData(slug: string) {
  try {
    const query = `*[_type == "recipe" && slug.current == "${slug}"][0]`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as recipe;

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <div className="flex justify-center items-center ">
          <Image
            src={urlFor(value).url()}
            alt="Image"
            className="rounded-lg"
            width={350}
            height={350}
          />
        </div>
      ),
    },
  };

  return (
    <div className="dark:bg-white px-4 sm:px-8 bg-hero mx-auto max-w-screen-xl text-center py-12 lg:py-24">
      <h1 className="mb-4 text-2xl sm:text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
        {data.title}
      </h1>
      <hr className="h-px my-4 bg-gray-400 border-0" />
      <p className="text-sm sm:text-lg font-normal text-gray-700 lg:text-xl sm:px-4 lg:px-16">
        {data.overview}
      </p>
      <hr className="h-px my-4 bg-gray-400 border-0" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="col-span-1 sm:col-span-1">
          <div className="md:w-4/5">
            <div className="font-bold text-sm sm:text-base">Ingredients</div>
            <hr className="h-px my-2 sm:my-4 bg-gray-400 border-0" />
            <PortableText
              value={data.content}
              components={PortableTextComponent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
