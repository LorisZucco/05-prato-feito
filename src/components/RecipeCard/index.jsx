import "./recipe-card.css";

import { Clock, Flame, Users } from "lucide-react";

import DayPicker from "../DayPicker";

// A cor do topo do cartão vem da categoria da receita
const artClass = {
  Almoço: "lunch",
  Jantar: "dinner",
  Leve: "light",
};

export default function RecipeCard({ recipe, plan, onToggleRecipe }) {
  return (
    <article className="recipe-card">
      <div className={`recipe-art ${artClass[recipe.category]}`}>
        <span className="recipe-emoji">{recipe.emoji}</span>
        <span className="badge">{recipe.category}</span>
        {recipe.minutes <= 20 && <span className="badge is-quick">Rápida</span>}
      </div>

      <div className="recipe-body">
        <h3>{recipe.name}</h3>

        <ul className="recipe-meta">
          <li>
            <Clock size={14} />
            {recipe.minutes} min
          </li>
          <li>
            <Flame size={14} />
            {recipe.level}
          </li>
          <li>
            <Users size={14} />
            {recipe.servings} {recipe.servings == 1 ? "porção" : "porções"}
          </li>
        </ul>

        <DayPicker
          recipeId={recipe.id}
          recipeName={recipe.name}
          plan={plan}
          onToggleRecipe={onToggleRecipe}
        />
      </div>
    </article>
  );
}
