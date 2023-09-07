import { groq } from "next-sanity";
export const POST_LIST_QUERY = groq`
*[_type=="post"]{
  ...,
  author->,
  categories[]->,
} | order(_createdAt desc)
`;
