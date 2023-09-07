import { groq } from "next-sanity";
export const POST_LIST_QUERY = groq`
*[_type=="post"]{
  ...,
  author->,
  categories[]->,
} | order(_createdAt desc)
`;

export const RECIPE_LIST_QUERY = groq`
*[_type=="recipe"]{
  ...,
  ingredient[]{
      _key,
      unit,
      wholeNumber,
      fraction,
      
      ingredient->{
        name,
        image
      }
    },
} | order(_createdAt desc)
`;
