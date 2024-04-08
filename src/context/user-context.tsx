'use client'

import logout from '@/actions/logout'
import validateToken from '@/actions/validate-token'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'

type IUserContext = {
  user: User | null
  setUser: Dispatch<SetStateAction<User | null>>
}

type User = {
  id: number
  email: string
  username: string
  nome: string
}

const UserContext = createContext<IUserContext | null>(null)

export const useUserContext = () => {
  const context = useContext(UserContext)
  if (context === null)
    throw new Error('useContext deve estar dentro do provider')
  return context
}

export function UserContextProvider({
  children,
  user
}: {
  children: ReactNode
  user: User | null
}) {
  const [userState, setUserState] = useState<User | null>(user)

  //validação do token
  useEffect(() => {
    async function validate() {
      const { ok } = await validateToken()
      if (!ok) await logout()
    }
    if (userState) validate()
  }, [userState])

  return (
    <UserContext.Provider value={{ user: userState, setUser: setUserState }}>
      {children}
    </UserContext.Provider>
  )
}
