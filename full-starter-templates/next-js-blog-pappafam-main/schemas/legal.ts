import { defineField, defineType } from "sanity";

export default {
  name: "legal",
  title: "Legal",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Legal Page Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
};
