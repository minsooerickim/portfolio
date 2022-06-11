import { SessionProvider } from "next-auth/react"
import type { AppProps } from 'next/app'
import { DefaultSeo } from "next-seo"
import { ThemeProvider } from 'next-themes'

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { Nav } from "@/components/NavBar/Nav"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s - Minsoo Kim"
        openGraph={{
            type: 'website',
            locale: 'en_IE',
            description: 'The personal website for Minsoo Kim, developer.',
            site_name: 'Minsoo Kim | Minsoo.dev',
            images: [],
        }}
      />
      <SessionProvider session={pageProps.session}>
        <ThemeProvider defaultTheme = 'system'>
          <Nav />
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}

export default MyApp