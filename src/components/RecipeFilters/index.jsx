import "./recipe-filters.css";

import { Search } from "lucide-react";

const categories = ["Todas", "Almoço", "Jantar", "Leve", "Até 20 min"];

export default function RecipeFilters() {
  return (
    <div className="toolbar">
      <label className="search">
        <Search size={18} />
        <input
          type="search"
          aria-label="Buscar receita"
          placeholder="Buscar por receita ou ingrediente"
        />
      </label>

      <div className="chips">
        {categories.map((category) => (
          <button
            key={category}
            className={category == "Todas" ? "chip is-active" : "chip"}
            aria-pressed={category == "Todas"}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
