import Image from "next/image";
import urlFor from "@/lib/urlFor";
import * as React from "react";
import Link from "next/link";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div className="py-16 px-6 2xl:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {posts.map((post) => (
          <ClientSideRoute
            route={`/post/${post?.slug?.current}`}
            key={post._id}
          >
            <div className=" flex flex-col group cursor-pointer">
              <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                <Image
                  alt={post?.author?.name}
                  src={urlFor(post?.mainImage)?.url() ?? null}
                  className="object-cover object-left lg:object-center"
                  sizes="(max-width: 768px) 517px,
              (max-width: 1200px) 517px"
                  fill
                />
                <div className="absolute gap-8 bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-4 flex justify-between">
                  <div className="">
                    <p className="font-bold text-white">{post?.title}</p>
                    <p>
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                    {post?.categories?.map((category, index) => (
                      <div
                        key={index}
                        className="bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        <p className="whitespace-nowrap">{category?.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex-1">
                <p className="underline text-lg font-bold">{post?.title}</p>
                <p className="text-gray-500 line-clamp-2">
                  {/* {post?.description} */}
                </p>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
