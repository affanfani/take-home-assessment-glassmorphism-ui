import { useEventApi } from "../backend/eventApi";
import { INPUT_PLACEHOLDERS } from "../constants/constantVariables";

interface DescriptionCardProps {
  disabled?: boolean;
}

export function DescriptionCard({ disabled = false }: DescriptionCardProps) {
  const { event, updateEvent } = useEventApi();

  return (
    <div className="glass-card">
      <textarea
        className="text-area"
        placeholder={INPUT_PLACEHOLDERS.EVENT_DESCRIPTION}
        value={event.description}
        onChange={(e) =>
          updateEvent({
            description: e.target.value,
          })
        }
        disabled={disabled}
      />
    </div>
  );
}
