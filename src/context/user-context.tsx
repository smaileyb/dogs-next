'use client'

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
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
  return (
    <UserContext.Provider value={{ user: userState, setUser: setUserState }}>
      {children}
    </UserContext.Provider>
  )
}
