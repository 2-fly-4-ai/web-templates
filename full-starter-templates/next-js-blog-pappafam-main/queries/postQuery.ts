import { groq } from "next-sanity";

export const POST_QUERY = groq`
*[_type=="post" && slug.current == $slug][0]
{
  body,
  ...,
  author->,
  categories[]->,
  body,

}
`;
