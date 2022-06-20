import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Header() {
  const { data: session } = useSession()

  return (
    <div>
      <h2>Hello! I'm Minsoo</h2>
      {!session && <p>Feel free to interact with the site by signing in</p>}
    </div>
  )
}
