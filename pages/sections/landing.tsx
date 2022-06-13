import Head from 'next/head'
import Header from '@/components/Header'
import { Page } from '@/components/Page/Page'
import { useSession, signIn } from 'next-auth/react'
import Avatar from '@mui/material/Avatar';
import Accordian from '@/components/Accordian'
import ProfileCard from '@/components/ProfileCard'
import { LottieWrapper } from '@/components/LottieWrapper';

import hi from '../../lotties/hi.json'

export default function Landing() {
  return(
    <div className='grid grid-cols-2 px-14 items-center'>
      <div className='border-r-2 border-text'><ProfileCard /></div>
      <div>
        <LottieWrapper animationData={hi} height={'60%'} width={'60%'}/>
        <div className=' max-h-fit'><Accordian /></div>
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