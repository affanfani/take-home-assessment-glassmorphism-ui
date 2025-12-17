import { useRecoilValue } from 'recoil'
import { modulesState } from '../state/eventState'
import { MODULE_RENDERERS } from './modules/registry'
export function ModulesRenderer() {
  const modules = useRecoilValue(modulesState)

  return (
    <div className="modules-stack">
      {modules
        .filter((m) => m.active)
        .map((module) => {
          const Renderer = MODULE_RENDERERS[module.type]
          if (!Renderer) return null

          return <Renderer key={module.id} module={module} />
        })}
    </div>
  )
}
