export async function seo_defaults(data: any) {
  // console.warn(data);
  return {
    title: data.title,
    description: data.headline,
    openGraph: {
      title: data.title,
      description: data.headline,
      url: "https://www.myhomecooked.com",
      siteName: "MyHomeCooked",
      images: [
        {
          url: data.mainImage,
          width: 800,
          height: 600,
        },
        {
          url: data.mainImage,
          width: 1800,
          height: 1600,
          alt: data.title,
        },
      ],

      locale: "en-US",
      type: "website",
    },
  };
}
