import { groq } from "next-sanity";

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
