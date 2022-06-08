import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Header () {
  const { data: session } = useSession();

  const handleSignin = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    signIn()
  }

  const handleSignout = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    signOut()
  }

  return (
    <div className='header'>
      <Link href='/'>
        <a className='logo'>Minsoo Kim</a>
      </Link>
      {session && <a href="#" onClick={handleSignout} className="btn-signin">Sign out</a>  }
      {!session && <a href="#" onClick={handleSignin}  className="btn-signin">Sign in</a>  }
    </div>
  )
}