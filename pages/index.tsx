import Head from 'next/head'
import Header from '../components/Header'
import { useSession } from 'next-auth/react'

import Landing from '@/pages/sections/landing'
import { Page } from '@/components/Page/Page'
import SpeedDial from '@/components/SpeedDial'
import Welcome from '@/components/Welcome'
import MobileNav from '@/components/NavBar/MobileNav'

export default function Home() {
  return (
    // <span className='flex px-4 w-full bg-pattern bg-repeat bg-contain'>
    <>
      <div className='justify-center flex align-center p-4 md:p-20'><Welcome /></div>
      <div className='flex flex-col w-full items-center'>
          <Landing />
      </div>
    </>
    // </span>
  )
}
