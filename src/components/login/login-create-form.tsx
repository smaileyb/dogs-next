'use client'

import { useFormState, useFormStatus } from 'react-dom'
import Button from '@/components/forms/button'
import Input from '../forms/input'
import ErrorMessage from '../helper/error-message'
import { useEffect } from 'react'
import styles from './login-form.module.css'
import userPost from '@/actions/user-post'

function FormButton() {
  const { pending } = useFormStatus()
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Cadastrando..</Button>
      ) : (
        <Button>Cadastrar</Button>
      )}
    </>
  )
}

export default function CreateAccountForm() {
  const [state, action] = useFormState(userPost, {
    ok: false,
    error: '',
    data: null
  })

  useEffect(() => {
    if (state.ok) {
      window.location.href = '/account'
    }
  }, [state.ok])

  return (
    <form action={action} className={styles.form}>
      <Input label="Usuário" name="username" type="text" />
      <Input label="E-mail" name="email" type="text" />
      <Input label="Senha" name="password" type="password" />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  )
}
