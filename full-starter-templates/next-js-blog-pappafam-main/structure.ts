import type { DefaultDocumentNodeResolver } from "sanity/desk";
// import Iframe from "sanity-plugin-iframe-pane";
// import { SeoToolsPane } from "sanity-plugin-seo-tools";

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (S) => {
  {
    return S.document().views([
      S.view.form(),
      // S.view
      //   .component(Iframe)
      //   .options({
      //     fetch: true,
      //     resolveProductionUrl: (doc: any) =>
      //       new URL(`http://localhost:3000/${doc?.slug?.current}/api/preview`),

      //     // url: `${
      //     //   process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
      //     // }/api/preview`,
      //     //Optional: Set the Default size
      //     defaultSize: `desktop`, // Default "desktop"
      //     //Optional: Add a reload button, or relaod on new document revisions
      //     reload: {
      //       button: true,
      //     },
      //     //Optional: Pass attributes to the underlying `Iframe` elements:
      //     //SEee
      //     attributes: {},
      //   })
      //   .title("Preview"),

      // S.view

      //   .component(SeoToolsPane)
      //   .options({
      //     fetch: true,
      //     resolveProductionUrl: (doc: any) =>
      //       new URL(`http://localhost:3000/${doc?.slug?.current}`),
      //     select: (doc: any) => ({
      //       focus_keyword: doc.focus_keyword ?? "",
      //       seo_title: doc.seo_title ?? "",
      //       meta_description: doc.meta_description ?? "",
      //       focus_synonyms: doc.focus_synonyms ?? [],
      //     }),
      //   })
      //   .title("SEO"),
    ]);
  }
};
