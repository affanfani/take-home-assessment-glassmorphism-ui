import { useModulesApi } from "../backend/eventApi";
import { useState, useRef, useEffect } from "react";
import { BUTTON_LABELS } from "../constants/constantVariables";

interface QuickLinksRowProps {
  disabled?: boolean;
}

export function QuickLinksRow({ disabled = false }: QuickLinksRowProps) {
  const { modules, toggleModule } = useModulesApi();
  const [showAll, setShowAll] = useState<boolean>(false);
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkOverflow = () => {
      const hasOverflow =
        container.scrollHeight > container.clientHeight ||
        container.scrollWidth > container.clientWidth;
      setIsOverflowing(hasOverflow);
    };
    checkOverflow();

    const resizeObserver = new ResizeObserver(checkOverflow);
    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, [modules]);

  const visibleModules = showAll ? modules : modules.slice(0, -1);
  const showMoreBtn = isOverflowing && modules.length > 0;

  return (
    <div className="quick-links-row" ref={containerRef}>
      {visibleModules.map((mod) =>
        !mod.active ? (
          <button
            key={mod.id}
            type="button"
            className={`pill-btn ${mod.active ? "pill-active" : ""}`}
            onClick={() => !disabled && toggleModule(mod.id)}
            disabled={disabled}
          >
            + {mod.label}
          </button>
        ) : null,
      )}
      {showMoreBtn && (
        <button
          type="button"
          className="pill-btn muted-pill"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? BUTTON_LABELS.SHOW_LESS : BUTTON_LABELS.SHOW_MORE}
        </button>
      )}
    </div>
  );
}
