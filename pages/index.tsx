import Head from 'next/head'
import Header from '../components/Header'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <div>
      <Head>
        <title>Nextjs | Next-Auth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1>Authentication in Next.js app using Next-Auth</h1>
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
               <p>Please Sign in</p>
               <img src="https://cdn.dribbble.com/users/759083/screenshots/6915953/2.gif" alt="" />
               <p>GIF by <a href="https://dribbble.com/shots/6915953-Another-man-down/attachments/6915953-Another-man-down?mode=media">Another man</a> </p>
              </>
           }
         </div>
      </main>
      <div>
        <div>Next + Tailwind ❤️</div>
        <p>
          Next and Tailwind CSS are a match made in heaven, check out this article on how
          you can combine these two for your next app.
        </p>
      </div>
    </div>
  )
}