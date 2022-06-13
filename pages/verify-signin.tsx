import { Page } from '@/components/Page/Page'

export default function verifySignin() {
  return (
    <Page title='verify sign in'>
      <section className='flex flex-col w-full my-24 justify-center items-center text-center'>
        <h1>Verify Email</h1>
        <p className='mb-10'>
            Please check your e-mail to finish logging in!
        </p>
      </section>
    </Page>
  )
}