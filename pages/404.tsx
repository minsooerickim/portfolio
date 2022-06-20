import { Page } from '@/components/Page/Page'
import Link from 'next/link'

export default function Error404() {
  return (
    <Page title="404" description="page not found">
      <section className="flex flex-col w-full my-24 justify-center items-center text-center">
        <h1>404</h1>
        <p className="mb-10">
          The page you&apos;re looking for does not exist.
        </p>
        <Link href="/">
          <a>Go Back to Homepage</a>
        </Link>
      </section>
    </Page>
  )
}
