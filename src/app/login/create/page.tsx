import CreateAccountForm from '@/components/login/login-create-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crie sua conta',
  description: 'Crie sua conta na rede social DOGS!'
}

export default async function CreatePage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <CreateAccountForm />
    </div>
  )
}
