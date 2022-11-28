import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react'
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
      <Analytics />
    </>
  )
}

export default MyApp
