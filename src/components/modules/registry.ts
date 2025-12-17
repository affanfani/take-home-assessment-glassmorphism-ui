import { PhotoGalleryModule } from './PhotoGalleryModule'
import { LinksModule } from './LinksModule'
import { PrivacyModule } from './PrivacyModule'
import { AnnouncementsModule } from './AnnouncementsModule'

export const MODULE_RENDERERS: Record<
  string,
  React.FC<{ module: any }>
> = {
  photoGallery: PhotoGalleryModule,
  links: LinksModule,
  privacy: PrivacyModule,
  announcements: AnnouncementsModule,
}
