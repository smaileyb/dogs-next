'use client'

import React, { useEffect, useState } from 'react'
import styles from './photo-comments-form.module.css'
import { useFormState, useFormStatus } from 'react-dom'
import SendIcon from '@/icons/send-icon'
import ErrorMessage from '../helper/error-message'
import commentPost from '@/actions/comment-post'
import { Comment } from '@/actions/photo-get'

const PhotoCommentsForm = ({
  single,
  id,
  setComments
}: {
  id: number
  single: boolean
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>
}) => {
  const [state, action] = useFormState(commentPost, {
    ok: false,
    data: null,
    error: ''
  })

  function FormButton() {
    const { pending } = useFormStatus()
    return (
      <button type="submit" className={styles.button} disabled={pending}>
        <SendIcon />
      </button>
    )
  }

  useEffect(() => {
    if (state.ok && state.data) {
      setComments(comments => [...comments, state.data])
      setComment('')
    }
  }, [state, setComments])

  const [comment, setComment] = useState('')

  return (
    <form
      action={action}
      className={`${styles.form} ${single ? styles.single : ''}`}
    >
      <input type="hidden" name="id" id="id" value={id} />
      <textarea
        className={styles.textarea}
        name="comment"
        id="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      ></textarea>
      <FormButton />
      <ErrorMessage error={state.error} />
    </form>
  )
}

export default PhotoCommentsForm
