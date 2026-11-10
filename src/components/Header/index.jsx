import "./header.css";

import { CalendarDays, Moon } from "lucide-react";

export default function Header({ plannedCount }) {
  return (
    <header className="header">
      <a className="brand" href="#">
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <circle cx="20" cy="20" r="19" fill="var(--brand)" />
          <circle cx="20" cy="20" r="13.5" fill="var(--surface)" />
          <circle cx="21.5" cy="19" r="5.2" fill="var(--corn)" />
        </svg>
        Prato Feito
      </a>

      <div className="header-actions">
        <span className="week-badge">
          <CalendarDays size={15} />
          <span>
            <strong>{plannedCount}</strong>{" "}
            {plannedCount == 1 ? "prato" : "pratos"}
            <span className="long"> na semana</span>
          </span>
        </span>

        <button className="icon-button" aria-label="Mudar para o tema escuro">
          <Moon size={20} />
        </button>
      </div>
    </header>
  );
}
