//Rota Paralela e Interceptação de Rota

import photoGet from '@/actions/photo-get'
import FeedModal from '@/components/feed/feed-modal'
import { notFound } from 'next/navigation'

type PhotoIdParams = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: PhotoIdParams) {
  const { data } = await photoGet(String(params.id))
  if (!data) return { title: 'Fotos' }
  return {
    title: data.photo.title
  }
}

export default async function PhotoIdPage({ params }: PhotoIdParams) {
  const { data } = await photoGet(String(params.id))
  if (!data) return notFound()
  return <FeedModal photo={data} />
}
