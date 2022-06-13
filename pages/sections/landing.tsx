import Head from 'next/head'
import Header from '@/components/Header'
import { Page } from '@/components/Page/Page'
import { useSession, signIn } from 'next-auth/react'
import Avatar from '@mui/material/Avatar';
import Accordian from '@/components/Accordian'
import ProfileCard from '@/components/ProfileCard'
import { motion } from 'framer-motion';

export default function Landing() {
  const { data: session, status } = useSession()
  const loading = status === "loading"
  const handleSignin = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    signIn()
  }
  return(
    <div>
      <div className='justify-center flex'>
        {loading && <div>Loading...</div>}
        {
          session &&
              <div className='justify-center flex'>
                <Avatar alt="Profile Picture" src={session.user!.image!} />
                
                {/* <p className='pl-2'>Welcome, {session.user!.name ?? session.user!.email}</p> */}
                <p className='pl-2'>Welcome {(session.user.name !== 'undefined') ? session.user.name : session.user.email } </p>
              </div>
        }
        {
          !session &&
          <>
            <p>
              Sign In to <span className="text-text">Interact!</span>
            </p>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.995 }} transition={{ ease: 'easeInOut', duration: 0.1 }} onClick={handleSignin} className="bg-text focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0 cursor-pointer">Sign in</motion.a>
          </>
        }
      </div>
      <div className='grid grid-cols-2'>
        <ProfileCard />
        <Accordian />
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