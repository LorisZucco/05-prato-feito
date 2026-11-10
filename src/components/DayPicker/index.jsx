import "./day-picker.css";

import days from "../../data/days";

export default function DayPicker({
  recipeId,
  recipeName,
  plan,
  onToggleRecipe,
}) {
  return (
    <div
      className="day-picker"
      role="group"
      aria-label={`Planejar ${recipeName}`}
    >
      <span className="day-picker-label">Planejar para</span>

      <div className="day-chips">
        {days.map((day) => (
          <button
            key={day.key}
            className="day-chip"
            aria-label={day.name}
            aria-pressed={plan[day.key].includes(recipeId)}
            onClick={() => onToggleRecipe(day.key, recipeId)}
          >
            {day.short}
          </button>
        ))}
      </div>
    </div>
  );
}
