import { useState } from "react";
import { useRecoilState } from "recoil";
import { locationModalOpenState } from "../state/eventState";
import { useEventApi } from "../backend/eventApi";

export function LocationModal() {
  const [isOpen, setIsOpen] = useRecoilState(locationModalOpenState);
  const { event, updateEvent } = useEventApi();
  const [value, setValue] = useState(event.location);

  if (!isOpen) return null;

  const handleClose = () => {
    setValue(event.location);
    setIsOpen(false);
  };

  const handleSave = () => {
    updateEvent({ location: value });
    setIsOpen(false);
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modal-header">
          <span className="modal-title">Location</span>
          <button
            className="ghost-btn danger"
            type="button"
            aria-label="Close"
            onClick={handleClose}
          >
            ×
          </button>
        </div>
        <div className="modal-field">
          <input
            className="text-input title"
            placeholder="Enter location"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="detect-row">
          <div className="detect-icon">
            <svg
              className="icon"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
            </svg>
          </div>
          <div className="detect-text">
            <div className="label">Detect the location</div>
            <div className="hint">Using GPS</div>
          </div>
        </div>
        <div className="modal-actions">
          <button className="primary-btn" type="button" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
