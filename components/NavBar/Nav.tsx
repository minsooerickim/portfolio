import { motion } from 'framer-motion';
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link';

import Switch from '@/components/NavBar/switch'
import { LottieWrapper } from '../LottieWrapper';
import profile from '../../lotties/profile.json'

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
        <header className="bg-background lg:px-16 px-6 flex flex-wrap items-center lg:py-0 sticky top-0 z-50">
            <div className="flex-1 flex justify-between items-center">
            <a href="/" className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
                <LottieWrapper animationData={profile} width={'30%'} height={'30%'}/>
                <p className='text-normalText font-bold'>Minsoo Kim</p>
            </a>
            </div>

            <nav>
                <ul className="lg:flex items-center justify-between text-base pt-4 lg:pt-0">
                    <motion.li 
                        whileHover={{ scale:1.05 }}
                        whileTap={{ scale: 0.995 }}
                        transition={{ ease: 'easeInOut', duration: 0.1 }}
                        className="cursor-pointer lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-text"><Link href="/"><span className='text-text'>Home</span></Link></motion.li>
                    <motion.li 
                        whileHover={{ scale:1.05 }}
                        whileTap={{ scale: 0.995 }} 
                        transition={{ ease: 'easeInOut', duration: 0.1 }}
                        className="cursor-pointer lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-text"><Link href="/Projects"><span className='text-text'>Projects</span></Link></motion.li>
                    <motion.li 
                        whileHover={{ scale:1.05 }}
                        whileTap={{ scale: 0.995 }}
                        transition={{ ease: 'easeInOut', duration: 0.1 }}
                        className="cursor-pointer lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-text"><Link href="/Experience"><span className='text-text'>Experience</span></Link></motion.li>
                    {session && <motion.a whileHover={{ scale: 1.05, backgroundColor: '#278274' }} whileTap={{ scale: 0.995 }} transition={{ ease: 'easeInOut', duration: 0.1 }} onClick={handleSignout} className="bg-text focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0 cursor-pointer">Sign out</motion.a>  }
                    {!session && <motion.a whileHover={{ scale: 1.05, backgroundColor: '#278274' }} whileTap={{ scale: 0.995 }} transition={{ ease: 'easeInOut', duration: 0.1 }} onClick={handleSignin} className="bg-text focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0 cursor-pointer">Sign in</motion.a>  }
                    <div className="p-4">
                        {/* <ThemeButton /> */}
                        <Switch/>
                    </div>
                </ul>
            </nav>
        </header>
    )
}