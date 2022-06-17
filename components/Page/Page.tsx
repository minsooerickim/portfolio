import Head from 'next/head'
import { Layout } from './Layout'

interface Props {
  children: React.ReactNode | React.ReactNode[]
  title?: string
  description?: string
}

export function Page({ title, children, description }: Props) {
  return (
    <Layout title={title} description={description}>
      <Head>
        <title>Minsoo Kim { title && ('| ' + title) }</title>
      </Head>
      <section className='flex flex-col w-full justify-center items-center'>
        {children}
      </section>
    </Layout>
  )
}
