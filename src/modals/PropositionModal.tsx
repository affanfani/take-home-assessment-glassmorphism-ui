//not used yet
import { useRecoilState } from 'recoil'
import { modalOpenState } from '../state/eventState'

export function PropositionModal() {
  const [isOpen, setIsOpen] = useRecoilState(modalOpenState)

  if (!isOpen) return null

  return (
    <div className="modal-backdrop" onClick={() => setIsOpen(false)}>
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <div className="modal-header">
          <span className="emoji large">⚡</span>
          <span className="modal-title">You're about to miss out!</span>
        </div>
        <p className="modal-body">
          By creating your event, you unlock powerful features like:
        </p>
        <div className="feature-list">
          {[
            { icon: '💰', text: 'Sell tickets or collect donations — for FREE!!' },
            { icon: '🎫', text: 'Track who purchased the tickets' },
            { icon: '💵', text: 'See how much money you will be making from this event' },
          ].map((f) => (
            <div className="feature" key={f.text}>
              <span className="emoji">{f.icon}</span>
              <span>{f.text}</span>
            </div>
          ))}
        </div>
        <p className="modal-footnote">
          Want more? <strong>Go live</strong> with your event to discover more features
        </p>
        <div className="modal-actions">
          <button className="primary-btn">Try it out</button>
          <button className="ghost-btn danger" onClick={() => setIsOpen(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}


