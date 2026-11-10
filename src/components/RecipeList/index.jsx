import "./recipe-list.css";

import RecipeCard from "../RecipeCard";

export default function RecipeList({ recipes, plan, onToggleRecipe }) {
  return recipes.length == 0 ? (
    <div className="empty-results">
      <p>Nenhuma receita encontrada.</p>
      <p className="hint">Tente outro nome ou ingrediente.</p>
    </div>
  ) : (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          plan={plan}
          onToggleRecipe={onToggleRecipe}
        />
      ))}
    </div>
  );
}
