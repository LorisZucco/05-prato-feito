import RecipeFilters from "../RecipeFilters";
import RecipeList from "../RecipeList";

import recipes from "../../data/recipes";

export default function RecipeSection({ plan, onToggleRecipe }) {
  return (
    <section className="recipes" aria-labelledby="recipes-title">
      <div className="section-head">
        <h2 id="recipes-title">Receitas</h2>
        <p className="hint">
          {recipes.length} pratos · marque os dias em cada receita
        </p>
      </div>

      <RecipeFilters />

      <RecipeList
        recipes={recipes}
        plan={plan}
        onToggleRecipe={onToggleRecipe}
      />
    </section>
  );
}
