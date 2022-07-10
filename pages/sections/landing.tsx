import { useSession, signIn, signOut } from 'next-auth/react'
import Accordian from '@/components/Accordian'
import ProfileCard from '@/components/ProfileCard'
import { LottieWrapper } from '@/components/LottieWrapper'

import hi from '../../lotties/hi.json'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Landing() {
  const { data: session } = useSession()
  const handleSignin = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    signIn()
  }

  const handleSignout = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    signOut()
  }
  return (
    <motion.div
      className="h-screen lg:h-full lg:grid grid-cols-2 px-11 lg:px-14 items-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="flex lg:hidden justify-center pb-4">
        {session && (
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: '#278274' }}
            whileTap={{ scale: 0.995 }}
            transition={{ ease: 'easeInOut', duration: 0.1 }}
            onClick={handleSignout}
            className="bg-text focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0 cursor-pointer"
          >
            Sign out
          </motion.a>
        )}
        {!session && (
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: '#278274' }}
            whileTap={{ scale: 0.995 }}
            transition={{ ease: 'easeInOut', duration: 0.1 }}
            onClick={handleSignin}
            className="bg-text focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0 cursor-pointer"
          >
            Sign in
          </motion.a>
        )}
      </div>
      <motion.div
        className="pb-20 lg:pb-0 lg:border-r-2 border-text"
        variants={item}
      >
        <ProfileCard />
      </motion.div>
      <motion.div variants={item}>
        <LottieWrapper animationData={hi} height={'60%'} width={'60%'} />
        <div className="max-h-fit pb-20">
          <Accordian />
        </div>
      </motion.div>
    </motion.div>
  )
}
