'use client'

import React, { useEffect, useState } from 'react'
import FeedIcon from '@/icons/feed-icon'
import StatsIcon from '@/icons/stats.icon'
import AddIcon from '@/icons/add-icon'
import ExitIcon from '@/icons/exit-icon'
import styles from './account-header.module.css'
import { usePathname } from 'next/navigation'
import useMedia from '@/hooks/useMedia'
import Link from 'next/link'
import logout from '@/actions/logout'
import { useUserContext } from '@/context/user-context'

function getTitle(pathname: string) {
  switch (pathname) {
    case '/account/post':
      return 'Poste sua Foto'
    case '/account/stats':
      return 'Estatísticas'
    default:
      return 'Minha Conta'
  }
}

const AccountHeaderNav = () => {
  const mobile = useMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = useState(false)

  const pathname = usePathname()
  useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  const { setUser } = useUserContext()
  async function handleLogout() {
    await logout()
    setUser(null)
  }

  return (
    <header className={styles.header}>
      <h1 className="title">{getTitle(pathname)}</h1>
      {mobile && (
        <button
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <Link
          href="/account"
          className={pathname === '/account' ? 'active' : ''}
        >
          <FeedIcon /> {mobile && 'Minhas Fotos'}
        </Link>
        <Link
          href="/account/stats"
          className={pathname === '/account/stats' ? 'active' : ''}
        >
          <StatsIcon /> {mobile && 'Estatísticas'}
        </Link>
        <Link
          href="/account/post"
          className={pathname === '/account/post' ? 'active' : ''}
        >
          <AddIcon /> {mobile && 'Adicionar Foto'}
        </Link>
        <button onClick={handleLogout}>
          <ExitIcon />
          {mobile && 'Sair'}
        </button>
      </nav>
    </header>
  )
}

export default AccountHeaderNav
