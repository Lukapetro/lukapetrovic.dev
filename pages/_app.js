import 'styles/globals.css'

import Maintenance from './maintenance';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  if (process.env.NEXT_PUBLIC_MAINTENANCE === 'true') {
    return <Maintenance />;
  }
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
