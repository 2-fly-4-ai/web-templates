import React from "react";
import Image from "next/image";
import urlFor from "@/lib/urlFor";

// type Props = {
//   params: {
//     slug: string;
//     title: string;
//   };
// };

export default function Banner({ slug, title }: BannerProps) {
  return (
    <div>
      <div className="py-8 flex flex-grow flex-row-reverse gap-16 auto-rows-min px-10 backdrop-blur-lg bg-gray-50 border-b">
        <div className="w-80 justify-center items-center hidden sm:flex">
          <Image
            className="border-8"
            alt="logo"
            height={200}
            width={200}
            src="https://i.pinimg.com/564x/22/88/41/2288419821ccd5b5d0e5d8cbfe27c78e.jpg"
            priority={true}
          />
        </div>
        <div className="flex my-auto flex-col gap-8">
          <div className="flex gap-4 flex-col">
            {slug == "/" ? (
              <h2 className="lg:text-3xl xl:text-6xl 2xl:text-6xl md:text-3xl text-gray-700 text-4xl font-bold  border-b-8 my-auto ">
                My Home Cooked Meals
              </h2>
            ) : null}

            {slug == "/post/post" ? (
              <h2 className="lg:text-3xl xl:text-5xl 2xl:text-6xl md:text-3xl text-gray-700 text-3xl font-bold  border-b-8 my-auto ">
                {title}
              </h2>
            ) : null}

            {slug === "/recipe/post" ? (
              <h2 className="lg:text-3xl xl:text-5xl 2xl:text-6xl md:text-3xl text-gray-700 text-3xl font-bold  border-b-8 my-auto ">
                {title}
              </h2>
            ) : null}

            {slug == "/recipe" ? (
              <h2 className="lg:text-3xl xl:text-5xl 2xl:text-6xl md:text-3xl text-gray-700 text-3xl font-bold  border-b-8 my-auto ">
                My Home Cooked Recipes
              </h2>
            ) : null}
          </div>
        </div>
        <div className="w-96 px-2 flex-col bg-gray-100  ml-auto mx-4 py-8 justify-center items-center border-8 border-opacity-30 border-[#f4b400]  hidden xl:flex">
          <p className="text-lg  whitespace-nowrap rounded-full bg-black cursor-pointer bg-opacity-70 hover:bg-gray-600 font-medium text-[#f4c300] text-center px-4  py-1 pb-1.5">
            Join Our Newsletter
          </p>
          <em className="text-md px-2 py-2 text-center ">
            Signup for the Best recipes, food tips. 100% Free
          </em>
        </div>
      </div>
      {slug == "/" ? (
        <div className="relative px-6 items-center  bg-black bg-opacity-10 flex">
          <div className="flex items-center mx-auto py-1">
            <em className="text-2xl ml-0  pr-6 text-gray-700 ">
              Delicious Everyday Home Cooked Meals - Made With Love
            </em>
          </div>
        </div>
      ) : null}
      <hr className="shaow-md" />
    </div>
  );
}
