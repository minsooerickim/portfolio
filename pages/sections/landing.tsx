import Head from 'next/head'
import { useSession } from 'next-auth/react'

import Header from '@/components/Header'
import { Page } from '@/components/Page/Page'

export default function Landing() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <Page title='Home'>
      <div className='text-center'>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>
          <div>
            {loading && <div>Loading...</div>}
            {
              session &&
                <>
                <p style={{ marginBottom: '10px' }}> Welcome, {session.user!.name ?? session.user!.email}</p> <br />
                <img src={session.user!.image!} alt="" />
                </>
              }
            {
              !session &&
                <>
                <img src="https://cdn.dribbble.com/users/759083/screenshots/6915953/2.gif" alt="" />
                <p>GIF by <a href="https://dribbble.com/shots/6915953-Another-man-down/attachments/6915953-Another-man-down?mode=media">Another man</a> </p>
                </>
            }
          </div>
        </main>
      </div>
    </Page>
  )
}