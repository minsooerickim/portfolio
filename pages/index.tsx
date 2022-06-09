import Head from 'next/head'
import Header from '../components/Header'
import { useSession } from 'next-auth/react'

import Landing from '@/pages/sections/landing'

export default function Home() {
  const { data: session, status } = useSession()

  return (
    <span className='flex justify-center px-4 w-full bg-pattern bg-repeat bg-contain'>
      <Landing />
    </span>
  )
}
