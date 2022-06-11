import Head from 'next/head'
import { Layout } from './Layout'

interface Props {
  /** Content of the page. */
  children: React.ReactNode | React.ReactNode[]
  /** Title of the page displayed in the head tag. */
  title?: string
}

export function Page({ title, children }: Props) {
  return (
    <Layout>
      <Head>
        <title>Minsoo Kim { title && ('| ' + title) }</title>
      </Head>
      <section className='flex flex-col w-full justify-center items-center'>
        {children}
      </section>
    </Layout>
  )
}
