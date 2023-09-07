import { previewData } from "next/headers";
import { groq } from "next-sanity";
import PreviewSuspense from "components/PreviewSuspense";
import { client } from "lib/sanity.client";
import { cache } from "react";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";
import Banner from "../../components/Banner";
import { POST_LIST_QUERY } from "@/queries/postListQuery";
import type { Metadata } from "next";

type Props = {
  params: {
    slug: string;
    title: string;
    author: string;
    date: string;
    categories: string;
  };
};

export const metadata: Metadata = {
  title: "MyHomeCooked",
  description:
    "Welcome to MyHomeCooked, your go-to destination for tasty and wholesome home cooked meals. Whether you're a seasoned chef or a beginner in the kitchen, we've got you covered with our collection of easy-to-follow recipes that are sure to please your taste buds. With our step-by-step instructions and helpful cooking tips, you'll be able to create delicious dishes that your whole family will love. So why wait? Start cooking with us today and experience the joy of home cooking!",
};

const clientFetch = cache(client.fetch.bind(client));
// const inter = Inter({ subsets: ["latin"] });

export const revalidate = 60;

export default async function HomePage() {
  // if (previewData()) {
  //   return (
  //     <PreviewSuspense
  //       fallback={
  //         <div role="status">
  //           <p className="text-center text-lg animate-pusle text-[#F7AB0A]">
  //             Loading Preview Data
  //           </p>
  //         </div>
  //       }
  //     >
  //       <PreviewBlogList query={POST_LIST_QUERY} />
  //     </PreviewSuspense>
  //   );
  // }

  const posts = await clientFetch(POST_LIST_QUERY);

  return (
    <>
      <Banner slug={"/"} title={"test"} />
      <BlogList posts={posts} />
    </>
  );
}
