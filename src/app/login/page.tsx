import LoginForm from '@/components/login/login-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logue na sua conta',
  description: 'Logue na sua conta na rede social DOGS!'
}

export default async function LoginPage() {
  return (
    <section className={`animeLeft`}>
      <h1 className="title">Login</h1>
      <LoginForm />
    </section>
  )
}
