import type { QuickLinkModule } from "../../state/eventState";

export function AnnouncementsModule({ module }: { module: QuickLinkModule }) {
  return (
    <div className="glass-card module-card">
      <h3>{module.label}</h3>
      <div className="module-content">
        <p>Send announcements and updates to your event attendees.</p>
      </div>
    </div>
  );
}
