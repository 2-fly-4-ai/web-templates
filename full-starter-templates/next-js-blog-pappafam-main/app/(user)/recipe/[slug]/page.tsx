import React from "react";
import Banner from "../../../../components/Banner";
import { client } from "@/lib/sanity.client";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import { RECIPE_QUERY } from "@/queries/recipeQuery";
import { seoData } from "@/components/Seo";
import { RecipeSchema } from "@/components/RecipeSchema";
import StructuredData from "@/components/StructuredData";
import Share from "@/components/SharePage";
import YoutubeVideo from "@/components/Youtube";
import { groq } from "next-sanity";

type Props = {
  params: {
    slug: string;
    title: string;
  };
};

async function getProduct(slug: string) {
  const res = await client.fetch(RECIPE_QUERY, { slug });
  return res;
}

// Genrate SEO DATA
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const data = await getProduct(slug);
  const source = "recipe";
  const seo_final = seoData(data, source);
  return seo_final;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`*[_type=="recipe"]
  {
    slug
  }`;
  const slugs: Post[] = await client.fetch(query);

  const slugRoutes = slugs.map((slug) => slug.slug.current);
  // console.warn(slugRoutes);
  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export default async function Recipe({ params: { slug } }: Props) {
  const post: Post = await getProduct(slug);
  const theData = RecipeSchema(post);

  return (
    <section>
      <StructuredData data={{ ...theData }} />
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}
      <Banner slug="/recipe/post" title={post?.name} />
      <article className="px-6 2xl:px-0 pb-28 bg-white">
        <section className=" text-white">
          <div className="flex flex-col ">
            <section>
              <div>
                <div>
                  <div className="flex flex-col-reverse lg:flex-row-reverse ">
                    <div className="w-full bg-opacity-80 flex flex-col  ">
                      <div className="flex max-w-2xl  flex-col mx-auto">
                        <article className="recipe">
                          <div className="p-6 bg-gray-100 my-8 shadow-md">
                            <div className="flex flex-col sm:flex items-center justify-center gap-1 mx-auto  ">
                              <div className="flex-col md:flex-row flex gap-1">
                                {slug != "/" ? (
                                  <Image
                                    className="rounded-full mx-4 border-2 m-1 w-32 h-32 my-auto border-opacity-50"
                                    src={urlFor(post?.chef?.image).url()}
                                    width={110}
                                    height={90}
                                    alt={post?.chef?.name}
                                  />
                                ) : null}
                                <em className=" px-2 text-gray-700 font-serif  font-medium py-2 ">
                                  {post?.headline}
                                </em>
                              </div>
                              <div className="flex flex-col sm:flex-row border items-center px-2 py-1 bg-orange-200 w-full">
                                <em className="text-lg ml-0 font-medium  text-gray-700 ">
                                  {slug == "/"
                                    ? "Delicious Everyday Home Cooked Meals - Made With Love"
                                    : `By ${post?.chef?.name}`}
                                </em>
                                {slug != "/" ? (
                                  <em className="text-lg mx-4 text-gray-700 flex items-center gap-1  border-l-2 border-r-2 border-gray-400 px-4">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="w-6 h-6"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                                      />
                                    </svg>
                                    <p className="text">
                                      {new Date(
                                        post?.publishedAt
                                      ).toLocaleDateString("en-us", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                      })}
                                    </p>
                                    <p className="text-gray-700  font-medium px-2 py-1">{` ~ ${post.time}min`}</p>
                                    <p className="text-gray-700  font-medium px-1 py-1 flex">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                        />
                                      </svg>
                                      {`${post.portion}`}
                                    </p>
                                  </em>
                                ) : null}
                                {/* {post?.categories?.map((category) => ( */}
                                <div className="bg-[#F7AB0A] text-center text-black px-3 rounded-full text-sm font-semibold">
                                  <p className="whitespace-nowrap py-1 px-2">
                                    Recipes
                                  </p>
                                </div>
                                {/* ))} */}
                              </div>
                            </div>
                          </div>
                          {/* <button className="like-button" onClick={addLike}>
                            {likes} ❤️
                          </button> */}

                          <main className="content">
                            <Image
                              src={urlFor(post?.mainImage).url()}
                              alt={post.name}
                              width={700}
                              height={550}
                              className="mb-10"
                            />
                            <PortableText
                              value={post?.intro}
                              components={RichTextComponents}
                            />
                            <hr className="shadow-md border mt-8" />

                            <div className="breakdown bg-gray-200 px-6">
                              <h2
                                id="ingredients"
                                className="text-2xl sm:text-4xl py-8 font-bold text-gray-600 font-sans scroll-mt-20 snap-start "
                              >
                                Ingredients:
                              </h2>
                              <ul className="ingredients grid grid-cols-1 gap-4 py-2 pb-6 text-gray-500">
                                {post.ingredient?.map((ingredient) => (
                                  <li
                                    key={ingredient._key}
                                    className="ingredient bg-white bg-opacity-80 p-2 px-4 flex gap-6 shadow-md hover:shadow-lg hover:scale-105 rounded-lg transition-transform duration-200 ease-out items-center"
                                  >
                                    <div className="flex items-center gap-2 capitalize font-medium">
                                      {ingredient?.wholeNumber ? (
                                        <span className="font-medium">
                                          {ingredient?.wholeNumber}
                                        </span>
                                      ) : null}
                                      <span className="font-medium ">
                                        {ingredient?.fraction}{" "}
                                        {ingredient?.unit}
                                      </span>

                                      {ingredient?.ingredient?.name}
                                    </div>
                                    <div className="ml-auto bg-black font-medium bg-opacity-60 rounded-full text-sm p-1 px-4  cursor-pointer text-orange-200 ">
                                      Buy
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <h2
                              id="cooking-instructions"
                              className="scroll-mt-20 snap-start text-2xl sm:text-4xl py-8 font-bold text-gray-600 font-sans "
                            >
                              Cooking Instructions:
                            </h2>
                            <PortableText
                              value={post?.instructions}
                              components={RichTextComponents}
                            />
                            <h2
                              id="ingredients-overview"
                              className="scroll-mt-20 snap-start text-2xl sm:text-4xl py-8 font-bold text-gray-600 font-sans "
                            >
                              Ingredients Overview:
                            </h2>
                            <PortableText
                              value={post?.ingredientsOverview}
                              components={RichTextComponents}
                            />
                            {post.youtubelinkid ? (
                              <h2
                                id="how-to-make"
                                className="scroll-mt-20 snap-start text-2xl sm:text-4xl py-8 font-bold text-gray-600 font-sans "
                              >
                                {post?.name} As Featured On Youtube
                              </h2>
                            ) : null}

                            {post.youtubelinkid ? (
                              <YoutubeVideo
                                videoId={post.youtubelinkid}
                                height="390"
                                width="640"
                                // autoplay={1}
                              />
                            ) : null}
                            <h2 className="scroll-mt-20 snap-start text-2xl sm:text-4xl py-8 font-bold text-gray-600 font-sans ">
                              FAQS: {post?.name}
                            </h2>
                            <PortableText
                              value={post?.faq}
                              components={RichTextComponents}
                            />
                            <Share
                              slug={post.slug.current}
                              source="recipe"
                              headline={post.headline}
                              title={post.title}
                            />
                          </main>
                        </article>
                      </div>
                    </div>

                    <div className="mt-8  xl:top-24 xl:sticky  h-min flex flex-col gap-4">
                      <div className="  text-black bg-gray-50 shadow-md lg:w-80">
                        <div className="text-2xl py-3 px-6 font-bold border-b bg-gray-50">
                          Table Of Contents:
                        </div>
                        <ol className=" bg-gray-50 px-4 py-4 flex flex-col list-outside gap-2">
                          <a href="#ingredients">
                            <li className="font-medium text-black underline p-2  bg-gray-200 hover:bg-gray-300">
                              Ingredients
                            </li>
                          </a>
                          <a href="#cooking-instructions">
                            <li className="font-medium text-black underline p-2 bg-gray-200 hover:bg-gray-300">
                              {" "}
                              Cooking Instructions
                            </li>
                          </a>
                          <a href="#ingredients-overview">
                            <li className="font-medium text-black underline p-2 bg-gray-200 hover:bg-gray-300">
                              Ingredients Overview
                            </li>
                          </a>
                          <a href="#how-to-make">
                            <li
                              id="#how-to-make"
                              className="font-medium text-black underline p-2 bg-gray-200 hover:bg-gray-300"
                            >
                              How To Make: {post?.name}
                            </li>
                          </a>
                        </ol>
                      </div>

                      <div className="  text-black bg-gray-50 shadow-md lg:w-80">
                        <div className="text-2xl py-3 px-6 font-bold border-b bg-gray-50">
                          Nutritional Facts:
                        </div>
                        <ol className=" bg-gray-50 px-4 py-4 flex flex-col list-outside gap-2">
                          <li className="font-medium text-black  p-2  bg-gray-200 hover:bg-gray-300">
                            {`Calories ${post.nutritional.calories}`}
                          </li>

                          <li className="font-medium text-black  p-2 bg-gray-200 hover:bg-gray-300">
                            {`Total Carbohydrate ${post.nutritional.carbs} g`}
                          </li>

                          <li className="font-medium text-black  p-2 bg-gray-200 hover:bg-gray-300">
                            {`Protein ${post.nutritional.protein} g`}
                          </li>
                          <li
                            id="#how-to-make"
                            className="font-medium text-black  p-2 bg-gray-200 hover:bg-gray-300"
                          >
                            {`Fat Content ${post.nutritional.fatContent} g`}
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </article>
    </section>
  );
}
