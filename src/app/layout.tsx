import type { Metadata } from 'next'
import './globals.css'
import { secondaryFont } from '@/functions/fonts'

export const metadata: Metadata = {
  title: 'Dogs Next',
  description: 'Rede social para cachorros'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={secondaryFont.variable}>{children}</body>
    </html>
  )
}
