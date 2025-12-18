import { useModulesApi } from "../backend/eventApi";
import { useState } from "react";
import { BUTTON_LABELS } from "../constants/constantVariables";

interface QuickLinksRowProps {
  disabled?: boolean;
}

export function QuickLinksRow({ disabled = false }: QuickLinksRowProps) {
  const { modules, toggleModule } = useModulesApi();
  const [showAll, setShowAll] = useState<boolean>(false);

  const inactiveModules = modules.filter((m) => !m.active);
  const visibleModules = showAll
    ? inactiveModules
    : inactiveModules.slice(0, 3);
  const showMoreBtn = inactiveModules.length > 3;

  return (
    <div className="quick-links-row">
      {visibleModules.map((mod) => (
        <button
          key={mod.id}
          type="button"
          className={`pill-btn ${mod.active ? "pill-active" : ""}`}
          onClick={() => !disabled && toggleModule(mod.id)}
          disabled={disabled}
        >
          + {mod.label}
        </button>
      ))}
      {showMoreBtn && (
        <button
          type="button"
          className={`pill-btn muted-pill ${disabled ? "disabled" : ""}`}
          onClick={() => !disabled && setShowAll(!showAll)}
          disabled={disabled}
          aria-disabled={disabled}
        >
          {showAll ? BUTTON_LABELS.SHOW_LESS : BUTTON_LABELS.SHOW_MORE}
        </button>
      )}
    </div>
  );
}
