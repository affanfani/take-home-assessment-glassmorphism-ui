import { useModulesApi } from '../backend/eventApi'

export function QuickLinksRow() {
  const { modules, toggleModule } = useModulesApi()

  return (
    <div className="quick-links-row">
      {modules.map((mod) => (
        <button
          key={mod.id}
          type="button"
          className={`pill-btn ${mod.active ? 'pill-active' : ''}`}
          onClick={() => toggleModule(mod.id)}
        >
          + {mod.label}
        </button>
      ))}
      <button type="button" className="pill-btn muted-pill">
        Show more
      </button>
    </div>
  )
}


