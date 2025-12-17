import { useEventApi } from '../backend/eventApi'

export function NameCard() {
  const { event, updateEvent } = useEventApi()
  return (
    <div className="glass-card">
      <input
        name="eventName"
        className="text-input title"
        placeholder="Name your event"
        value={event.name}
        onChange={(e) => updateEvent({ name: e.target.value })}
      />
    </div>
  )
}


