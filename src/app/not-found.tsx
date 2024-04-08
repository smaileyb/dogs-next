import Link from 'next/link'

export default function NotFound() {
  return (
    <section
      className="container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '4rem'
      }}
    >
      <h1 className="title">Página não encontrada.</h1>
      <Link href={'/'} className="button">
        Volte para a página principal.
      </Link>
    </section>
  )
}
