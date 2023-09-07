import React from "react";
import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

type Props = {};

export default function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex w-full items-center">
        <Link href="/" target="_blank" className="text-white flex items-center">
          {/* <ArrowUturnLeftIcon className="h-6 w-6 m-2 text-[#f4b400]" /> */}
          <p className="font-medium text-[#f4b400] mx-2">GO TO WEBSITE</p>
        </Link>
        <div className="text-[#f4b400] mx-auto border-b border-2 border-[#f4b400] px-2 my-1 font-medium tracking-[5px]">
          SARIKAS CONTENT STUDIO
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}
