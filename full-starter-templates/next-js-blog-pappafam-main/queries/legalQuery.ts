import { groq } from "next-sanity";

export const LEGAL_QUERY = groq`
*[_type=="legal" && slug.current == $slug][0]
{
  ...,
  text,
}
`;
