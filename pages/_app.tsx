import { SessionProvider } from "next-auth/react"
import type { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { Nav } from "@/components/Nav"
import Nav2  from '@/components/Nav2'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Nav />
      {/* <Nav2 /> */}
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp