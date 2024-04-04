'use server'

import { PASSWORD_RESET } from '@/functions/api'
import apiError from '@/functions/api-error'
import { redirect } from 'next/navigation'

export default async function passwordReset(state: {}, formData: FormData) {
  const password = formData.get('password') as string | null
  const login = formData.get('login') as string | null
  const key = formData.get('key') as string | null

  try {
    if (!login || !key || !password) {
      throw new Error('Dados inválidos')
    }
    if (password.length < 6) {
      throw new Error('A senha deve ter mais de 6 caracteres.')
    }
    const { url } = PASSWORD_RESET()
    const response = await fetch(url, {
      method: 'POST',
      body: formData
    })
    if (!response.ok) throw new Error('Não autorizado.')
  } catch (error: unknown) {
    return apiError(error)
  }
  redirect('/login')
}
