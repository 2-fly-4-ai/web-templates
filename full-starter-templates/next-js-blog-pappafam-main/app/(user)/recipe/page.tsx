import { groq } from "next-sanity";
import { client } from "lib/sanity.client";
import { cache } from "react";
import Banner from "../../../components/Banner";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import urlFor from "@/lib/urlFor";
import type { Metadata } from "next";
import Link from "next/link";
import { RECIPE_LIST_QUERY } from "@/queries/recipeListQuery";
import Image from "next/image";

const clientFetch = cache(client.fetch.bind(client));

export const metadata: Metadata = {
  title: "Home Cooked Recipes",
  description:
    "Discover delicious and comforting home cooked recipes that will satisfy your cravings and bring joy to your family's dining table. From classic favorites to innovative dishes, explore a wide range of recipes that are easy to follow and made with love. Start cooking now and enjoy the taste of home!",
};

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export default async function recipePage({ params: { slug } }: Props) {
  const posts = await clientFetch(RECIPE_LIST_QUERY);

  return (
    <section className="  ">
      <Banner slug="/recipe" title="" />
      <div className=" mx-auto p-4 2xl:px-0 py-8">
        <div className="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {posts.map((post: Recipe, index: number) => (
            <Link href={`recipe/${post?.slug?.current}`} key={index}>
              <div className=" rounded-none overflow-hidden relative shadow-md bg-gray-100">
                <div>
                  <Image
                    className="w-full"
                    src={urlFor(post?.mainImage).url()}
                    alt="Recipe Title"
                    width={400}
                    height={200}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-gray-700">
                    {post?.name}
                  </h2>
                  <div className="flex justify-between mt-4 mb-4 text-gray-500">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="ml-1 lg:text-xl">{post?.time}m</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path
                          fillRule="evenodd"
                          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-1 lg:text-xl">
                        {post?.ingredient.length}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      <span className="ml-1 lg:text-xl">{post?.portion}</span>
                    </div>
                  </div>
                  <p className="mb-4 text-gray-500">
                    {post?.metaTitle}

                    {/* <PortableText
                    value={post?.metaTitle}
                    components={RichTextComponents}
                  /> */}
                  </p>

                  <button className="text-white bg-[#f4b400] p-4 rounded-none w-full uppercase">
                    View Recipe
                  </button>
                </div>
                <div className="absolute top-0 right-0 mt-4 mr-4 bg-[#f4b400] text-white rounded-full pt-1 pb-1 pl-4 pr-5 text-xs uppercase">
                  <span>Medium</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
