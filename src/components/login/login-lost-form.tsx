'use client'

import { useFormState, useFormStatus } from 'react-dom'
import Button from '@/components/forms/button'
import Input from '../forms/input'
import ErrorMessage from '../helper/error-message'
import { useEffect, useState } from 'react'
import styles from './login-form.module.css'
import passwordLost from '@/actions/password-lost'

function FormButton() {
  const { pending } = useFormStatus()
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando..</Button>
      ) : (
        <Button>Enviar</Button>
      )}
    </>
  )
}

export default function LostPasswordForm() {
  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: '',
    data: null
  })

  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(window.location.href.replace('lost', 'reset'))
  }, [])

  useEffect(() => {
    if (state.ok) {
      setTimeout(() => {
        window.location.href = '/login'
      }, 3000)
    }
  }, [state.ok])

  return (
    <form action={action} className={styles.form}>
      <Input label="E-mail / Usuário" name="login" type="text" />
      <input type="hidden" name="url" value={url} />
      <ErrorMessage error={state.error} />
      {state.ok ? (
        <p style={{ color: '#4c1' }}>E-mail enviado.</p>
      ) : (
        <FormButton />
      )}
    </form>
  )
}
