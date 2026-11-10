import recipes from "../data/recipes.js";

export const emptyPlan = {
  seg: [],
  ter: [],
  qua: [],
  qui: [],
  sex: [],
  sab: [],
  dom: [],
};

// As receitas de um dia, na ordem em que foram marcadas. Id que não existe mais é ignorado.
export function recipesOfDay(plan, dayKey) {
  const ids = plan[dayKey] || [];
  return ids
    .map((id) => recipes.find((recipe) => recipe.id == id))
    .filter((recipe) => recipe != undefined);
}

function allPlanned(plan) {
  let all = [];

  Object.keys(plan).forEach((dayKey) => {
    all = [...all, ...recipesOfDay(plan, dayKey)];
  });

  return all;
}

export function countPlanned(plan) {
  return allPlanned(plan).length;
}

export function plannedMinutes(plan) {
  return allPlanned(plan).reduce((total, recipe) => total + recipe.minutes, 0);
}
