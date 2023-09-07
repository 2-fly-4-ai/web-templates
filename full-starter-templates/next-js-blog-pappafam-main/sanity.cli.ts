import { defineCliConfig } from "sanity/cli";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATSET;

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});
