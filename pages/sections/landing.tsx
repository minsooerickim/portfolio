import Head from 'next/head'
import Header from '@/components/Header'
import { Page } from '@/components/Page/Page'
import { useSession, signIn } from 'next-auth/react'
import Avatar from '@mui/material/Avatar'
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
  return (
    <motion.div
      className="h-screen md:h-full md:grid grid-cols-2 px-11 md:px-14 items-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="pb-20 md:pb-0 md:border-r-2 border-text"
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
