import { defineField, defineType } from "sanity";

export default defineType({
  name: "seo",
  title: "seo",
  type: "document",
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta/SEO Title",
      type: "string",
    }),
    defineField({
      name: "keywords",
      title: "keywords",
      type: "string",
    }),
    defineField({
      name: "synonyms",
      title: "synonyms",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
