import urlFor from "@/lib/urlFor";
import { blocksToText } from "@/functions/portable2plain";

export function RecipeSchema(data: RecipeData) {
  const instructions_text = blocksToText(data.instructions);
  const ingredients_list: Array<string> = [];
  data.ingredient.map((ingredient) => {
    ingredients_list.push(
      `${ingredient.wholeNumber ?? ""}${ingredient.fraction ?? ""} ${
        ingredient.unit ?? ""
      } ${ingredient.ingredient.name}`
    );
  });

  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    author: data.chef.name,
    cookTime: `PT${data.time}M`,
    datePublished: data.publishedAt,
    description: data.headline,
    image: urlFor(data.mainImage).url(),
    recipeIngredient: ingredients_list,
    // interactionStatistic: {
    //   "@type": "InteractionCounter",
    //   interactionType: "http://schema.org/Comment",
    //   userInteractionCount: "5",
    // }, THis code is for the like button
    name: data.name,
    nutrition: {
      "@type": "NutritionInformation",
      calories: `${data.nutritional.calories} calories`,
      carbohydrateContent: `${data.nutritional.carbs} grams carbs`,
      proteinContent: `${data.nutritional.protein} grams of protein`,
      fatContent: `${data.nutritional.fatContent} grams fat`,
    },
    prepTime: `PT${data.time}M`,
    recipeInstructions: `${instructions_text}`,
    recipeYield: `${data.portion} portions`,
  };
}
