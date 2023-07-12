import '../styles/globals.scss'
import { ThemeProvider } from "@material-tailwind/react";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )

}

export default MyApp
