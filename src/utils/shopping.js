import recipes from "../data/recipes.js";

export const aisles = [
  "Hortifruti",
  "Carnes e ovos",
  "Laticínios",
  "Mercearia",
];

// Soma os ingredientes das receitas do plano: o mesmo ingrediente na mesma unidade vira um item só.
export function buildShoppingList(plan) {
  console.log("somando a lista de compras…");

  const items = [];

  Object.values(plan).forEach((ids) => {
    ids.forEach((id) => {
      const recipe = recipes.find((item) => item.id == id);

      if (recipe != undefined) {
        recipe.ingredients.forEach((ingredient) => {
          const key = `${ingredient.name}|${ingredient.unit}`;
          const found = items.find((item) => item.key == key);

          if (found) {
            found.quantity = found.quantity + ingredient.quantity;
          } else {
            items.push({ ...ingredient, key });
          }
        });
      }
    });
  });

  return items;
}
