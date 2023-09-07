import { defineConfig } from "sanity";
import StudioNavbar from "./components/StudioNavbar";
import { deskTool } from "sanity/desk";
// import {
//   deskStructure,
//   defaultDocumentNodeResolver,
// } from "./src/structure/deskStructure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";
import StudioLogo from "./components/StudioLogo";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { getDefaultDocumentNode } from "./structure";
import { giphyAssetSourcePlugin } from "sanity-plugin-asset-source-giphy";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATSET;

export default defineConfig({
  basePath: "/studio",
  name: "sarika_content_studio",
  title: "Sarika Content Studio",
  projectId: "ofijchud",
  dataset: "production",

  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode,
      // structure, // not requiredResolver,
    }),
    visionTool(),
    unsplashImageAsset(),
    giphyAssetSourcePlugin({
      apiKey: "KTDbSKHLVdK6mBjofucmSI7ebXTezkBL",
    }),
  ],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: StudioLogo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
