import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { Nav } from '@/components/NavBar/Nav'
import Footer from '@/components/Footer'
import SpeedDial from '@/components/SpeedDial'
import MobileNav from '@/components/NavBar/MobileNav'

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
        <ThemeProvider>
          <Nav />
          <Component {...pageProps} />
          <div className="fixed right-0 bottom-0 pb-14 md:p-4 z-10">
            <SpeedDial />
          </div>
          <div className="fixed bottom-0 z-10  translate-x-2/4 pb-4">
            <MobileNav />
          </div>
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}

export default MyApp
