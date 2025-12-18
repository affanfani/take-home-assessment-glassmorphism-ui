import { PhotoGalleryModule } from "./PhotoGalleryModule";
import { LinksModule } from "./LinksModule";
import { PrivacyModule } from "./PrivacyModule";
import { AnnouncementsModule } from "./AnnouncementsModule";
import type { QuickLinkModule } from "../../state/eventState";

export const MODULE_RENDERERS: Record<
  string,
  React.FC<{ module: QuickLinkModule }>
> = {
  photoGallery: PhotoGalleryModule,
  links: LinksModule,
  privacy: PrivacyModule,
  announcements: AnnouncementsModule,
};
