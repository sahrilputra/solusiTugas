import '../styles/globals.scss'
import { ThemeProvider } from "@material-tailwind/react";
import { Nav } from '../components/headers/Nav';
import { FloatIcons } from '../components/floatingIcon';
import { Footers } from '../components/footers';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Solusi Tugasku</title>
        <meta name="description" content="Jasa Joki Tugas Akuntansi Terbaik" />
        <link rel="icon" href="/logo.png" />
        {/* Add more meta tags as needed */}
      </Head>
      <Nav />
      <FloatIcons />
      <Component {...pageProps} />

      <Footers />
    </ThemeProvider>
  )

}

export default MyApp
