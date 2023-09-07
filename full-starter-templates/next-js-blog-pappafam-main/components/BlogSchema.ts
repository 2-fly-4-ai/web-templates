import urlFor from "@/lib/urlFor";
import { blocksToText } from "@/functions/portable2plain";

export function BlogSchema(data: BlogData) {
  const canonical_base = process.env.LIVE_SITE_URL;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.title,
    alternativeHeadline: data.title,
    image: urlFor(data.mainImage).url(),
    editor: data.author.name ?? data.author.name,
    genre: "Foodie Posts", //Put current Category Here
    keywords: data.slug.current,
    // wordcount: "1120",
    // publisher: "Book Publisher Inc",
    url: `${canonical_base}/blog/${data.slug.current}`,
    datePublished: data._createdAt,
    dateCreated: data.publishedAt,
    dateModified: data._updatedAt,
    description: data.headline,
    articleBody: blocksToText(data.body),
    author: {
      "@type": "Person",
      name: "Sarika Nand",
    },
  };
}
