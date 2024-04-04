import LostPasswordForm from '@/components/login/login-lost-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Esqueceu sua senha?',
  description: 'Recupere sua senha na rede social DOGS!'
}

export default async function LostPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>
      <LostPasswordForm />
    </div>
  )
}
