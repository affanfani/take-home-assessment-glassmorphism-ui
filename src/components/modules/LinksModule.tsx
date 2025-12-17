import { LinkIcon } from '../icons'

export function LinksModule() {
  return (
    <div className="glass-card module-card">
      <div className="module-header">
        <LinkIcon />
        <h4>Links</h4>
      </div>
      <button className="ghost-btn small">Add link</button>
    </div>
  )
}
