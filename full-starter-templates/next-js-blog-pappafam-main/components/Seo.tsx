import urlFor from "@/lib/urlFor";

export async function seoData(data: Post, source: string) {
  const canonical_base = process.env.LIVE_SITE_URL;

  return {
    title: data.title,
    description: data.headline,
    openGraph: {
      title: data.title,
      description: data.headline,
      url: `${canonical_base}/${source}/${data.slug.current}`,
      siteName: `MyHomeCooked`,
      images: [
        {
          url: urlFor(data.mainImage).url(),
          width: 800,
          height: 600,
        },
        {
          url: urlFor(data.mainImage).url(),
          width: 1800,
          height: 1600,
          alt: urlFor(data.mainImage).url(),
        },
      ],
      locale: "en-US",
      type: "website",
    },
  };
}
