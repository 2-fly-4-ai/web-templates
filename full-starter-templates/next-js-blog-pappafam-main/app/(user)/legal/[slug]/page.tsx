import React from "react";
import { client } from "@/lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import { LEGAL_QUERY } from "@/queries/legalQuery";
import { Params } from "next-sanity/preview";
import { groq } from "next-sanity";

type Props = {
  params: {
    slug: string;
    title: string;
  };
  posts: Post[];
};

export default async function affiliate_disclosure({
  params,
}: {
  params: Params;
}) {
  const { slug } = params;
  const post = await client.fetch(LEGAL_QUERY, { slug });

  return (
    <section>
      <div className="max-w-5xl mx-auto px-6 py-16">
        <PortableText value={post.text} components={RichTextComponents} />
      </div>
    </section>
  );
}
