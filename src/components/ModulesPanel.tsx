import { useModulesApi } from '../backend/eventApi'

export function ModulesPanel() {
  const { modules } = useModulesApi()
  const active = modules.filter((m) => m.active)

  return (
    <div className="modules-panel">
      {active.length > 0 && (
        <div className="active-modules">
          {active.map((mod) => (
            <div key={mod.id} className="active-module-pill">
              {mod.label}
            </div>
          ))}
        </div>
      )}
      <div className="glass-card plugin-card">
        <div className="plugin-hero">
          <div className="hero-overlay">
            <h3>Customize your</h3>
            <h3>event your way</h3>
          </div>
          <div className="hero-abstract hero-abstract-one" />
          <div className="hero-abstract hero-abstract-two" />
          <div className="hero-abstract hero-abstract-three" />
        </div>
        <div className="plugin-action btn">
          <span className="emoji">🎲</span>
          <span className="label">Customize</span>
        </div>
      </div>
    </div>
  )
}


