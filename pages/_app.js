import '../styles/globals.scss'
import { ThemeProvider } from "@material-tailwind/react";
import { Nav } from '../components/headers/Nav';
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Nav/>
      <Component {...pageProps} />
    </ThemeProvider>
  )

}

export default MyApp
