import Head from 'next/head'
import Header from '../components/Header'
import { useSession } from 'next-auth/react'

import Landing from '@/pages/sections/landing'
import { Page } from '@/components/Page/Page'
import SpeedDial from '@/components/SpeedDial'

export default function Home() {
  const { data: session, status } = useSession()

  return (
    <span className='flex px-4 w-full bg-pattern bg-repeat bg-contain'>
      <Page title='Home'>
          <Landing />
          {/* <SpeedDial /> */}
      </Page>
    </span>
  )
}
