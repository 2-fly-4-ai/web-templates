// "client";
// // export const dynamic = "force-dynamic";
import React from "react";
import Banner from "../../../../components/Banner";
import { client } from "@/lib/sanity.client";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import { TableOfContents } from "@/components/TableOfContents";
import { POST_QUERY } from "@/queries/postQuery";
import { seoData } from "@/components/Seo";
import { ParseHeadings } from "@/functions/parse_headings";
import { BlogSchema } from "@/components/BlogSchema";
import StructuredData from "@/components/StructuredData";
import Share from "@/components/SharePage";
import { groq } from "next-sanity";

async function getProduct(slug: string) {
  const res = await client.fetch(POST_QUERY, { slug });
  return res;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const data = await getProduct(slug);
  const source = "post";
  const seo_final = seoData(data, source);
  return seo_final;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`*[_type=="post"]
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

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post: Post = await getProduct(slug);
  const outline = ParseHeadings(post.body);
  const theData = BlogSchema(post);

  return (
    <>
      <StructuredData data={{ ...theData }} />

      {/* ... */}
      {/* <PortableText value={post.body} /> */}
      <Banner slug="/post/post" title={post?.title} />
      <article className="px-10 2xl:px-0 pb-28 ">
        <section className="  text-white">
          <div className="flex flex-col ">
            <section>
              <div className="flex lg:flex-row-reverse flex-col-reverse">
                <div className="w-full bg-opacity-80 flex flex-col  ">
                  <div className="flex max-w-2xl mx-auto flex-col ">
                    <div className="p-6 bg-gray-100 my-8 shadow-md">
                      <div className=" flex flex-col sm:flex items-center justify-center gap-1 mx-auto ">
                        <div className="flex-col md:flex-row flex gap-1">
                          {slug != "/" ? (
                            <Image
                              className="rounded-full mx-auto md:mx-4 border-2 m-1 w-32 h-32 my-auto border-opacity-50"
                              src={urlFor(post?.author?.image).url()}
                              width={90}
                              height={90}
                              alt={post?.author?.name}
                            />
                          ) : null}
                          <em className="px-2 text-gray-700 font-serif font-medium py-2">
                            {post?.headline}
                          </em>
                        </div>
                        <div className="flex-col sm:flex-row flex w-full border px-4 py-1 items-center bg-orange-200">
                          <em className="text-lg font-medium ml-0  my-auto text-gray-700 flex ">
                            By {post?.author?.name}
                          </em>

                          <em className="text-lg mx-4 text-gray-700 flex items-center gap-2 border-l-2 border-gray-400 px-4">
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
                            <p>
                              {new Date(post?.publishedAt).toLocaleDateString(
                                "en-us",
                                {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                }
                              )}
                            </p>
                          </em>

                          {post?.categories?.map((category, index) => (
                            <div
                              key={index}
                              className="bg-[#F7AB0A] my-1 text-center py-1 text-black px-3 flex items-center rounded-full text-sm font-semibold"
                            >
                              {category?.title}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Image
                      className="mb-10"
                      src={urlFor(post.mainImage).url()}
                      alt={post.author.name}
                      width={700}
                      height={200}
                      object-fit="contain"
                    />
                    <PortableText
                      value={post.intro}
                      components={RichTextComponents}
                    />
                    <hr className="shadow-md border mt-8" />
                    <PortableText
                      value={post.body}
                      components={RichTextComponents}
                    />

                    <Share
                      slug={post.slug.current}
                      source="post"
                      headline={post.headline}
                      title={post.title}
                    />
                  </div>
                </div>
                <div className=" mt-8  xl:top-24 xl:sticky border shadow-md h-min">
                  <div className="  text-black   bg-gray-100 shadow-md">
                    <div className="text-2xl py-2 px-6 font-bold border-b">
                      Table Of Contents:
                    </div>
                  </div>{" "}
                  <TableOfContents outline={outline} />
                </div>
              </div>
            </section>
          </div>
        </section>
      </article>
    </>
  );
}
