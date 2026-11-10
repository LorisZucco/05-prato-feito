import "./day-plate.css";

import { formatMinutes } from "../../utils/format";

export default function DayPlate({ day, dishes }) {
  const first = dishes[0];
  const minutes = dishes.reduce((total, dish) => total + dish.minutes, 0);

  return (
    <li className="day">
      <span className="day-name">{day.short}</span>

      {first ? (
        <div className="plate">
          <span className="plate-emoji">{first.emoji}</span>
          {dishes.length > 1 && (
            <span className="plate-extra">+{dishes.length - 1}</span>
          )}
        </div>
      ) : (
        <div className="plate is-empty" aria-hidden="true"></div>
      )}

      <p className={first ? "day-dish" : "day-dish is-free"}>
        {first ? first.name : "Livre"}
      </p>
      <p className="day-time">{first ? formatMinutes(minutes) : " "}</p>
    </li>
  );
}
