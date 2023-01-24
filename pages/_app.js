import { Montserrat } from '@next/font/google'
import '../styles/global.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  }
)

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <>
    {/* <style jsx global>{`
      html {
        font-family: ${montserrat.style.fontFamily};
      }
    `}</style> */}
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  </>
}