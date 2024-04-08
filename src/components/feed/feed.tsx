'use client'

import { useEffect, useRef, useState } from 'react'
import FeedPhotos from './feed-photos'
import photosGet, { Photo } from '@/actions/photos-get'

export default function Feed({
  photos,
  user
}: {
  photos: Photo[]
  user?: 0 | string
}) {
  const [photosFeed, setPhotosFeed] = useState<Photo[]>(photos)
  const [actualPage, setActualPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [infinite, setInfinite] = useState(photos.length < 6 ? false : true)

  const fetching = useRef(false)

  function infiniteScroll() {
    if (fetching.current) return
    fetching.current = true
    setLoading(true)
    setTimeout(() => {
      setActualPage(currentPage => currentPage + 1)
      fetching.current = false
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    if (actualPage === 1) return
    async function getPagePhotos(page: number) {
      const actionData = await photosGet(
        { page, total: 6, user: 0 },
        {
          cache: 'no-store'
        }
      )
      if (actionData && actionData.data !== null) {
        const { data } = actionData
        setPhotosFeed(currentPhotos => [...currentPhotos, ...data])
        if (data.length < 6) setInfinite(false)
      }
    }
    getPagePhotos(actualPage)
  }, [actualPage])

  useEffect(() => {
    if (infinite) {
      window.addEventListener('scroll', infiniteScroll)
      window.addEventListener('wheel', infiniteScroll)
    } else {
      window.removeEventListener('scroll', infiniteScroll)
      window.removeEventListener('wheel', infiniteScroll)
    }
    return () => {
      window.removeEventListener('scroll', infiniteScroll)
      window.removeEventListener('wheel', infiniteScroll)
    }
  }, [infinite])

  return (
    <div>
      <FeedPhotos photos={photosFeed} />
      {loading && <p>Carregando</p>}
    </div>
  )
}
