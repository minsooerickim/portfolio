import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link';

import { ThemeButton } from './ThemeButton';

export function Nav() {
    const { data: session } = useSession();
    const handleSignin = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        signIn()
    }

    const handleSignout = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        signOut()
    }
    return(
        <header className="lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2">
            <div className="flex-1 flex justify-between items-center">
            <a href="/" className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
                <img className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400" src="https://i.imgur.com/y72AJR2.png" alt="Minsoo Kim"/>
                <p>Minsoo Kim</p>
            </a>
            </div>

            <nav>
                <ul className="lg:flex items-center justify-between text-base pt-4 lg:pt-0">
                    <li className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-orange-700"><Link href="/">Home</Link></li>
                    <li className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-orange-700"><Link href="/Projects">Projects</Link></li>
                    <li className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-orange-700"><Link href="/Experience">Experience</Link></li>
                    {session && <a href="#" onClick={handleSignout} className="bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign out</a>  }
                    {!session && <a href="#" onClick={handleSignin} className="bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</a>  }
                    <div className="p-4">
                        <ThemeButton />
                    </div>
                </ul>
            </nav>
        </header>
    )
}