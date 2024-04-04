import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Minha Conta'
}

export default async function AccountPage() {
  return (
    <main>
      <h1>Account</h1>
    </main>
  )
}
