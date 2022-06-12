import { motion } from 'framer-motion';
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link';

import { ThemeButton } from './ThemeButton';
import Switch from '@/components/NavBar/switch'

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
        <header className="lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2 sticky top-0 bg-accent z-50 rounded-lg">
            <div className="flex-1 flex justify-between items-center">
            <a href="/" className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
                {/* <img className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400" src="https://i.imgur.com/y72AJR2.png" alt="Minsoo Kim"/> */}
                <p>Minsoo Kim</p>
            </a>
            </div>

            <nav>
                <ul className="lg:flex items-center justify-between text-base pt-4 lg:pt-0">
                    <motion.li 
                        whileHover={{ scale:1.05 }}
                        whileTap={{ scale: 0.995 }}
                        transition={{ ease: 'easeInOut', duration: 0.1 }}
                        className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-orange-700"><Link href="/">Home</Link></motion.li>
                    <motion.li 
                        whileHover={{ scale:1.05 }}
                        whileTap={{ scale: 0.995 }} 
                        transition={{ ease: 'easeInOut', duration: 0.1 }}
                        className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-orange-700"><Link href="/Projects">Projects</Link></motion.li>
                    <motion.li 
                        whileHover={{ scale:1.05 }}
                        whileTap={{ scale: 0.995 }}
                        transition={{ ease: 'easeInOut', duration: 0.1 }}
                        className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-orange-700"><Link href="/Experience">Experience</Link></motion.li>
                    {session && <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.995 }} transition={{ ease: 'easeInOut', duration: 0.1 }} onClick={handleSignout} className="bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">Sign out</motion.a>  }
                    {!session && <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.995 }} transition={{ ease: 'easeInOut', duration: 0.1 }} onClick={handleSignin} className="bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">Sign in</motion.a>  }
                    <div className="p-4">
                        {/* <ThemeButton /> */}
                        <Switch/>
                    </div>
                </ul>
            </nav>
        </header>
    )
}