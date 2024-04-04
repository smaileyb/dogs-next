import AccountPhotoPost from '@/components/account/account-photo-post'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Postar | Minha Conta'
}

export const runtime = 'edge'

export default async function PostPage() {
  return <AccountPhotoPost />
}
