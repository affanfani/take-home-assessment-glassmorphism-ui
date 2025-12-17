import { PhotoGalleryModule } from './PhotoGalleryModule.tsx'
import { LinksModule } from './LinksModule'
import { PrivacyModule } from './PrivacyModule'
import { AnnouncementsModule } from './AnnouncementsModule'
import type { QuickLinkModuleType } from '../../state/eventState'
export const MODULE_RENDERERS: Record<
  QuickLinkModuleType,
  React.FC<{ module: any }>
> = {
  photoGallery: PhotoGalleryModule,
  links: LinksModule,
  privacy: PrivacyModule,
  announcements: AnnouncementsModule,
}
