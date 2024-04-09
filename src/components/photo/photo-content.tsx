'use client'
import PhotoComments from './photo-comments'
import styles from './photo-content.module.css'
import PhotoDelete from './photo-delete'
import { useUserContext } from '@/context/user-context'
import { PhotoData } from '@/actions/photo-get'
import Image from 'next/image'
import Link from 'next/link'

const PhotoContent = ({
  data,
  single
}: {
  data: PhotoData
  single: boolean
}) => {
  const { photo, comments } = data
  const { user } = useUserContext()

  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} width={1000} height={1000} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user && user.username === photo.author ? (
              <PhotoDelete id={String(photo.id)} />
            ) : (
              <Link href={`/profile/${photo.author}`}>@{photo.author}</Link>
            )}

            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link href={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} Kg</li>
            <li>
              {photo.idade} {Number(photo.idade) > 1 ? 'Anos' : 'Ano'}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments single={single} id={photo.id} comments={comments} />
    </div>
  )
}

export default PhotoContent
