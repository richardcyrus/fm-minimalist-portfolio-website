import Head from 'next/head'
import '../styles/globals.scss'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon-32x32.png' />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/modern-css-reset/dist/reset.min.css'
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
