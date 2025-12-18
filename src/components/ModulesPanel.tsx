import { useModulesApi } from "../backend/eventApi";
import { useSetRecoilState } from "recoil";
import { toastState } from "../state/eventState";
import { ToastType } from "../constants/constantVariables";

export function ModulesPanel() {
  const { modules } = useModulesApi();
  const active = modules.filter((m) => m.active);

  const setToast = useSetRecoilState(toastState);

  const handleCustomize = () => {
    setToast({
      message: "This will be used for advanced customization for the event.",
      type: ToastType.SUCCESS,
    });
  };

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
        <button
          className="plugin-action btn"
          type="button"
          onClick={handleCustomize}
        >
          <span className="emoji">🎲</span>
          <span className="label">Customize</span>
        </button>
      </div>
    </div>
  );
}
