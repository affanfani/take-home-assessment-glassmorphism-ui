import { useSetRecoilState } from 'recoil'
import { dateModalOpenState, locationModalOpenState } from '../state/eventState'
import { useEventApi } from '../backend/eventApi'

export function DetailsCard() {
  const { event, updateEvent } = useEventApi()
  const setDateModalOpen = useSetRecoilState(dateModalOpenState)
  const setLocationModalOpen = useSetRecoilState(locationModalOpenState)

  return (
    <div className="glass-card spaced">
      <div className="row clickable" onClick={() => setDateModalOpen(true)}>
        <span className="emoji">🗓️</span>
        <div className="row-content">
          <div className="text-input subtle">{event.dateTime || 'Date and time'}</div>
        </div>
      </div>
      <hr className="divider" />
      <div className="row clickable" onClick={() => setLocationModalOpen(true)}>
        <span className="emoji">📍</span>
        <div className="row-content">
          <div className="text-input subtle">
            {event.location || <span className="text-input subtle">Add Location</span>}
          </div>
        </div>
      </div>
      <hr className="divider" />
      <div className="row clickable">
        <span className="emoji">💵</span>
        <input
            className="text-input subtle"
            placeholder="Cost per person"
            value={event.costPerPerson}
            onChange={(e) =>
              updateEvent({
                costPerPerson: e.target.value,
              })
            }
          />
      </div>
    </div>
  )
}


