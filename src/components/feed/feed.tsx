import FeedPhotos from './feed-photos'
import { Photo } from '@/actions/photos-get'

export default async function Feed({ photos }: { photos: Photo[] }) {
  return (
    <div>
      <FeedPhotos photos={photos} />
    </div>
  )
}
