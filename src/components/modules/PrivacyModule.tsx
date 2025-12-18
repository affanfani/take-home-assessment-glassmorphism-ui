import { useRecoilState } from "recoil";
import {
  eventState,
  type PrivacySettings,
  type QuickLinkModule,
} from "../../state/eventState";

interface PrivacyModuleProps {
  module: QuickLinkModule;
}

export function PrivacyModule({ module }: PrivacyModuleProps) {
  const [event, setEvent] = useRecoilState(eventState);

  const privacy = (event.moduleData?.privacy || {
    allowGuestPhotos: true,
    allowComments: true,
    showGuestList: false,
    dataRetention: "30days",
  }) as PrivacySettings;

  const updatePrivacySetting = (
    key: keyof PrivacySettings,
    value: PrivacySettings[keyof PrivacySettings],
  ) => {
    setEvent((prev) => ({
      ...prev,
      moduleData: {
        ...prev.moduleData,
        privacy: {
          ...privacy,
          [key]: value,
        },
      },
    }));
  };

  return (
    <div className="glass-card module-card">
      <div className="module-header">
        <span className="emoji">🔒</span>
        <h4>{module.label}</h4>
      </div>

      <p className="module-description">
        Control privacy settings and data handling for your event.
      </p>

      <div className="privacy-settings">
        <div className="privacy-item">
          <label className="privacy-label">
            <input
              type="checkbox"
              checked={privacy.allowGuestPhotos}
              onChange={(e) =>
                updatePrivacySetting("allowGuestPhotos", e.target.checked)
              }
              className="privacy-checkbox"
            />
            <span>Allow guests to upload photos</span>
          </label>
          <p className="privacy-hint">
            Guests can contribute photos to the event gallery
          </p>
        </div>

        <div className="privacy-item">
          <label className="privacy-label">
            <input
              type="checkbox"
              checked={privacy.allowComments}
              onChange={(e) =>
                updatePrivacySetting("allowComments", e.target.checked)
              }
              className="privacy-checkbox"
            />
            <span>Allow guest comments</span>
          </label>
          <p className="privacy-hint">
            Guests can leave comments on event pages
          </p>
        </div>

        <div className="privacy-item">
          <label className="privacy-label">
            <input
              type="checkbox"
              checked={privacy.showGuestList}
              onChange={(e) =>
                updatePrivacySetting("showGuestList", e.target.checked)
              }
              className="privacy-checkbox"
            />
            <span>Show guest list to attendees</span>
          </label>
          <p className="privacy-hint">Guests can see who else is attending</p>
        </div>

        <div className="privacy-item">
          <label className="privacy-label">
            <span>Data retention period</span>
          </label>
          <select
            value={privacy.dataRetention}
            onChange={(e) =>
              updatePrivacySetting(
                "dataRetention",
                e.target.value as PrivacySettings["dataRetention"],
              )
            }
            className="privacy-select"
          >
            <option value="immediate">Delete immediately after event</option>
            <option value="30days">Keep for 30 days</option>
            <option value="90days">Keep for 90 days</option>
          </select>
          <p className="privacy-hint">
            How long we store event data after the event ends
          </p>
        </div>
      </div>

      <div className="privacy-footer">
        <p className="privacy-notice">
          Your privacy settings help protect attendee data and ensure compliance
          with privacy regulations.
        </p>
      </div>
    </div>
  );
}
