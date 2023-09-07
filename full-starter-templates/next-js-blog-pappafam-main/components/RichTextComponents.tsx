import Image from "next/image";
import urlFor from "@/lib/urlFor";
import Link from "next/link";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative max-w-lg h-content-min my-2 mr-auto">
          <Image
            className="object-contain mr-auto"
            src={urlFor(value).url()}
            alt="blog post image"
            width={800}
            height={300}
            object-fit="contain"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className=" list-disc text-gray-600  ml-6">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className=" list-decimal text-gray-600  text-base sm:text-base xl:text-lg ml-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="py-2 font-serif text-gray-600 text-base sm:text-base xl:text-lg">
        {children}
      </li>
    ),
    number: ({ children }: any) => (
      <li className="py-3 font-serif text-gray-600 text-base sm:text-base xl:text-lg">
        {children}
      </li>
    ),
  },

  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl sm:text-5xl py-8 font-bold text-gray-600">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2
        id={children[0].toLowerCase().replace(/\s+/g, "-")}
        className="text-2xl sm:text-4xl py-8 font-bold text-gray-600 font-sans scroll-mt-20 snap-start"
      >
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl sm:text-3xl py-5 font-bold text-gray-600">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-2 font-bold text-gray-600">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="py-4 text-gray-600 font-serif text-base sm:text-base xl:text-lg">
        {children}
      </p>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#f4b400] border-l-4 pl-5 text-gray-500  py-5 font-bold italic text-lg sm:text-xl ">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#f4b400] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
