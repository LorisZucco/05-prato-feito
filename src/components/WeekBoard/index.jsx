import "./week-board.css";

import DayPlate from "../DayPlate";

import days from "../../data/days";
import { countPlanned, plannedMinutes, recipesOfDay } from "../../utils/plan";
import { formatMinutes } from "../../utils/format";

export default function WeekBoard({ plan }) {
  const total = countPlanned(plan);

  return (
    <section className="week" aria-labelledby="week-title">
      <div className="section-head">
        <h2 id="week-title">Sua semana</h2>
        <p className="hint">
          {total == 0
            ? "Nenhum prato ainda"
            : `${total} ${total == 1 ? "prato" : "pratos"} · ${formatMinutes(plannedMinutes(plan))} no fogão`}
        </p>
      </div>

      <ol className="week-days">
        {days.map((day) => (
          <DayPlate
            key={day.key}
            day={day}
            dishes={recipesOfDay(plan, day.key)}
          />
        ))}
      </ol>
    </section>
  );
}
