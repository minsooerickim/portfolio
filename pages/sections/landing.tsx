import Head from 'next/head'
import { useSession } from 'next-auth/react'

import Header from '@/components/Header'
import { Page } from '@/components/Page/Page'

export default function Landing() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return(
    <div className="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-orange-700">
      <img src="/assets/Colored-Shapes.svg" className="w-full" />
      <div className="flex justify-center -mt-8">
          <img src="https://i.imgur.com/y72AJR2.png" className="w-6/12 rounded-full border-solid  border-2 -mt-3"/>
      </div>
    <div className="text-center px-3 pb-6 pt-2">
      <h3 className="text-sm bold font-sans">Minsoo Kim</h3>
      <p className="mt-2 font-sans font-light">Hello, I love coding!</p>
    </div>
      <div className="flex justify-center pb-3">
        <div className="text-center mr-3 border-r pr-3">
          <h2>4</h2>
          <span>Projects</span>
        </div>
        <div className="text-center">
          <h2>20</h2>
          <span>Tools</span>
        </div>
      </div>
   </div>
  )
  {/* return (
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
  ) */}
}