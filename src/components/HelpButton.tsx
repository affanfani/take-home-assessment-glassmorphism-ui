//not used yet
import { ChatIcon } from './icons/ChatIcon'

export function HelpButton() {
  return (
    <div className="help-button">
      <span className="tooltip">Need help?</span>
      <button className="circle-btn solid" aria-label="Open help">
        <ChatIcon />
      </button>
    </div>
  )
}


