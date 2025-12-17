import { ArrowIcon } from "./icons/ArrowIcon";

export function PhoneDraftBar() {
  return (
    <div className="glass-card thin-row">
      <div className="row">
        <span className="emoji">📱</span>
        <div className="row-content">
          <input
            className="text-input subtle"
            placeholder="Enter phone number to save the draft"
          />
        </div>
        <button className="btn icon-pill" type="button" aria-label="More options">
          <ArrowIcon/>
        </button>
      </div>
    </div>
  )
}


