import { defineField, defineType } from "sanity";

export default defineType({
  name: "chef",
  title: "Chef",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Chef's Name",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    }),
  ],
});
