import { useEventApi } from '../backend/eventApi'
import { INPUT_PLACEHOLDERS } from '../constants/constantVariables'

export function NameCard() {
  const { event, updateEvent } = useEventApi()
  return (
      <input
        name="eventName"
        className="page-title text-input title"
        placeholder={INPUT_PLACEHOLDERS.EVENT_NAME}
        value={event.name}
        onChange={(e) => updateEvent({ name: e.target.value })}
      />
  )
}


