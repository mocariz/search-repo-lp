import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Search a Github Repository</title>
      <link rel="shortcut icon" href="/img/icon-512.png" />
      <link rel="apple-touch-icon" href="/img/icon-512.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="description"
        content="A simple page to search a github repository basic information"
      />
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default App
