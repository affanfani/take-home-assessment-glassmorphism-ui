import { useEventApi } from '../backend/eventApi'

export function DescriptionCard() {
  const { event, updateEvent } = useEventApi()

  return (
    <div className="glass-card">
      <textarea
        className="text-area"
        placeholder="Describe your event"
        value={event.description}
        onChange={(e) =>
          updateEvent({
            description: e.target.value,
          })
        }
      />
    </div>
  )
}


