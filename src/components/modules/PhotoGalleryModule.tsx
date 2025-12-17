import type { QuickLinkModule } from '../../state/eventState'
import { GalleryIcon } from '../icons/GalleryIcon'
export function PhotoGalleryModule({ module }: { module: QuickLinkModule }) {
  return (
    <div className="glass-card module-card">
      <div className="module-header">
        <GalleryIcon />
        <h4>{module.label}</h4>
      </div>
      <p className="muted">Guests can view and upload photos.</p>
      <button className="ghost-btn small">Add photos</button>
    </div>
  )
}
