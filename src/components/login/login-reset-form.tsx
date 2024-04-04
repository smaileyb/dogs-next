'use client'

import { useFormState, useFormStatus } from 'react-dom'
import Button from '@/components/forms/button'
import Input from '../forms/input'
import ErrorMessage from '../helper/error-message'
import { useEffect, useState } from 'react'
import styles from './login-form.module.css'
import passwordReset from '@/actions/password-reset'

function FormButton() {
  const { pending } = useFormStatus()
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Resetando..</Button>
      ) : (
        <Button>Resetar senha</Button>
      )}
    </>
  )
}

export default function ResetPasswordForm({
  keyToken,
  login
}: {
  keyToken: string
  login: string
}) {
  const [state, action] = useFormState(passwordReset, {
    ok: false,
    error: '',
    data: null
  })

  useEffect(() => {
    if (state.ok) {
      setTimeout(() => {
        window.location.href = '/login'
      }, 3000)
    }
  }, [state.ok])

  return (
    <form action={action} className={styles.form}>
      <Input label="Nova Senha" name="password" type="password" />
      <input type="hidden" name="key" value={keyToken} />
      <input type="hidden" name="login" value={login} />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  )
}
