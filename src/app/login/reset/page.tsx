import ResetPasswordForm from '@/components/login/login-reset-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resete sua senha',
  description: 'Obtenha uma nova senha para sua rede social DOGS!'
}

type ResetSearchParams = {
  searchParams: {
    key: string
    login: string
  }
}

export default async function ResetPage({ searchParams }: ResetSearchParams) {
  return (
    <div className="animeLeft">
      <h1 className="title">Resete a senha</h1>
      <ResetPasswordForm
        keyToken={searchParams.key}
        login={searchParams.login}
      />
    </div>
  )
}
