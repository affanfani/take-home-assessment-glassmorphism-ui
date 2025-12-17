import { useEventApi } from '../backend/eventApi'

export function CostPerPersonCard() {
  const { event, updateEvent } = useEventApi()

  return (
    <div className="glass-card">
      <div className="row">
        <span className="emoji">💰</span>
        <div className="row-content">
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
    </div>
  )
}

export function CapacityCard() {
  const { event, updateEvent } = useEventApi()

  return (
    <div className="glass-card">
      <div className="row">
        <span className="emoji">🎟️</span>
        <div className="row-content">
          <input
            className="text-input subtle"
            placeholder="Add capacity"
            value={event.capacity}
            onChange={(e) =>
              updateEvent({
                capacity: e.target.value,
              })
            }
          />
        </div>
      </div>
    </div>
  )
}


