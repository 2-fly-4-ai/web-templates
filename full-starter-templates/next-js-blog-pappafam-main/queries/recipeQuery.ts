export const RECIPE_QUERY = `*[_type == "recipe" && slug.current == $slug][0]{
  body,
"headings": body[length(style) == 2 && string::startsWith(style, "h")],
  _id,
  name,
  slug,
  time,
  portion,
  headline,
  mainImage,
  chef->,
  intro,
  nutritional,
  youtubelinkid,
  ingredientsOverview,
  faq,
  publishedAt,
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
  instructions,
  likes
}`;
