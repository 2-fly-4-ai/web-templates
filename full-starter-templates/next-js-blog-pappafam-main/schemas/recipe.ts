import { defineField, defineType } from "sanity";

export default {
  name: "recipe",
  title: "Recipe",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Recipe Name",
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
      name: "headline",
      title: "Headline",
      type: "string",
    }),
    defineField({
      name: "nutritional",
      title: "Nutritional Estimates Per 100 grams",
      type: "object",
      fields: [
        {
          name: "calories",
          title: "Calories",
          type: "number",
        },
        {
          name: "carbs",
          title: "Carbohydrates",
          type: "number",
        },
        {
          name: "protein",
          title: "Protein",
          type: "number",
        },
        {
          name: "fatContent",
          title: "Fat Content",
          type: "number",
        },
      ],
    }),

    defineField({
      name: "time",
      title: "Time Estimate",
      type: "string",
      options: {
        list: ["15", "30", "45", "60", "75", "90", "105", "120", "135", "150"],
      },
    }),
    defineField({
      name: "portion",
      title: "Portion Estimate",
      type: "string",
      options: {
        list: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      },
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "reference",
      to: [{ type: "seo" }],
    }),

    defineField({
      name: "chef",
      title: "Chef",
      type: "reference",
      to: { type: "chef" },
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),

    defineField({
      name: "mainImage",
      title: "Recipe Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "ingredient",
      title: "Ingredient",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Ingredient",
              name: "ingredient",
              type: "reference",
              to: [{ type: "ingredient" }],
            },
            {
              name: "wholeNumber",
              title: "Whole Numbers",
              type: "number",
            },
            {
              name: "fraction",
              title: "Fraction Amount",
              type: "string",
              options: {
                list: ["1/2", "1/3", "1/4", "3/4", "2/3"],
              },
            },
            {
              name: "unit",
              title: "Unit",
              type: "string",
              options: {
                list: ["grams", "cup", "Tbsp.", "tsp.", "lb"],
              },
            },
          ],
          preview: {
            select: {
              title: "ingredient.name",
              name: "ingredient.name",
              media: "ingredient.image",
              fraction: "fraction",
              unit: "unit",
            },
            prepare({
              title,
              subtitle,
              media,
              fraction = "(No fraction set)",
              unit = "(No unit set)",
            }) {
              return {
                title,
                subtitle: `${fraction} ${unit}`,
                media,
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: "intro",
      title: "Intro",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "ingredientsOverview",
      title: "Ingredients Overview",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "youtubelinkid",
      title: "YouTubeLinkID",
      type: "string",
    }),
    defineField({
      name: "faq",
      title: "faq",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "instructions",
      title: "Instructions",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "likes",
      title: "Likes",
      type: "number",
    }),
  ],
  initialValue: {
    likes: 0,
  },
};
