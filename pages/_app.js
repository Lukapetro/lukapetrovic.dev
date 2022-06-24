import 'styles/globals.css'

import Maintenance from './maintenance';
import { ThemeProvider } from 'next-themes';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }) {
  if (process.env.NEXT_PUBLIC_MAINTENANCE === 'true') {
    return <Maintenance />;
  }
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
