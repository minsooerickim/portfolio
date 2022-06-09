import { SessionProvider } from "next-auth/react"
import type { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { Nav } from "@/components/Page/Nav"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Nav />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp