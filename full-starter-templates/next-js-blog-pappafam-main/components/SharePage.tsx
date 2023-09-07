"use client";

import React from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";

interface ShareProps {
  title: string;
  slug: string;
  source: string;
  headline: string;
}

export default function Share({ title, slug, source, headline }: ShareProps) {
  return (
    <div className="flex justify-between items-center py-6 mt-6 border-t border-b border-gray-200 dark:border-gray-700">
      <aside aria-label="Share social media" className="flex">
        {/* <div className="inline-flex items-center gap-2 focus:ring-2 focus:outline-none focus:ring-primary-300 focus:rounded-full mr-2 text-s font-medium text-gray-900 no-underline bg-white rounded-full border-4 border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600  dark:hover:text-white dark:hover:bg-gray-700">
          <FacebookShareButton
            url={`https://www.myhomecooked.com/${source}/${slug}`}
            // quote={title}
            // hashtag={`#${slug.split("-").join("")}`}
            className="inline-flex items-center  text-s font-medium w-24 justify-center h-8 border focus:ring-2 focus:outline-none focus:ring-primary-300 focus:rounded-full dark:focus:ring-gray-700"
          >
            <FacebookIcon
              size={24}
              iconFillColor="white"
              round
              className="mr-2 p-0 "
              bgStyle={{ fill: "black" }}
            />{" "}
            Share
          </FacebookShareButton>
        </div> */}
        <div className="inline-flex items-center  mr-2 text-s font-medium text-gray-900 no-underline bg-white rounded-full border-4 border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600  dark:hover:text-white dark:hover:bg-gray-700">
          <TwitterShareButton
            title={title}
            url={`https://www.myhomecooked.com/${source}/${slug}`}
            hashtags={[`${slug.split("-").join("")}`]}
            className="inline-flex items-center  text-s font-medium w-24 justify-center h-8 border focus:ring-2 focus:outline-none focus:ring-primary-300 focus:rounded-full dark:focus:ring-gray-700"
          >
            {/* <TwitterIcon
              size={24}
              iconFillColor="white"
              round
              className="mr-2 p-0 "
              bgStyle={{ fill: "black" }}
            /> */}
            Tweet
          </TwitterShareButton>
        </div>
        <button
          type="button"
          onClick={() =>
            navigator.clipboard.writeText(
              `https://www.myhomecooked.com/${source}/${slug}`
            )
          }
          className="inline-flex items-center py-1 px-6 text-s font-medium text-gray-900 no-underline bg-white rounded-full border-4 border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          {" "}
          <svg
            className="mr-2 w-4 h-4"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
              clipRule="evenodd"
            ></path>
          </svg>{" "}
          Copy link
        </button>
      </aside>
    </div>
  );
}
