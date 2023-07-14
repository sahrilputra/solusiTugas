import '../styles/globals.scss'
import { ThemeProvider } from "@material-tailwind/react";
import { Nav } from '../components/headers/Nav';
import { FloatIcons } from '../components/floatingIcon';
import { Footers } from '../components/footers';
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Nav/>
      <FloatIcons/>
      <Component {...pageProps} />

      <Footers />
    </ThemeProvider>
  )

}

export default MyApp
