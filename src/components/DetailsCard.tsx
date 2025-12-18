import { useSetRecoilState } from "recoil";
import {
  dateModalOpenState,
  locationModalOpenState,
} from "../state/eventState";
import { useEventApi } from "../backend/eventApi";
import { EMOJIS, INPUT_PLACEHOLDERS } from "../constants/constantVariables";

interface DetailsCardProps {
  disabled?: boolean;
}

export function DetailsCard({ disabled = false }: DetailsCardProps) {
  const { event, updateEvent } = useEventApi();
  const setDateModalOpen = useSetRecoilState(dateModalOpenState);
  const setLocationModalOpen = useSetRecoilState(locationModalOpenState);

  return (
    <div className="glass-card spaced">
      <div
        className="row clickable"
        onClick={() => !disabled && setDateModalOpen(true)}
      >
        <span className="emoji">{EMOJIS.CALENDAR}</span>
        <div className="row-content">
          <div className={`text-input subtle ${disabled ? "disabled" : ""}`}>
            {event.dateTime || INPUT_PLACEHOLDERS.DATE_TIME}
          </div>
        </div>
      </div>
      <hr className="divider" />
      <div
        className="row clickable"
        onClick={() => !disabled && setLocationModalOpen(true)}
      >
        <span className="emoji">{EMOJIS.LOCATION}</span>
        <div className="row-content">
          <div className={`text-input subtle ${disabled ? "disabled" : ""}`}>
            {event.location || (
              <span className="text-input subtle">
                {INPUT_PLACEHOLDERS.LOCATION}
              </span>
            )}
          </div>
        </div>
      </div>
      <hr className="divider" />
      <div className="row clickable">
        <span className="emoji">{EMOJIS.MONEY}</span>
        <input
          className="text-input subtle"
          type="number"
          placeholder={INPUT_PLACEHOLDERS.COST_PER_PERSON}
          value={event.costPerPerson}
          onChange={(e) =>
            updateEvent({
              costPerPerson: e.target.value,
            })
          }
          disabled={disabled}
        />
      </div>
    </div>
  );
}
