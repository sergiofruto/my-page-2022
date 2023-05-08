import '../styles/global.css';
import '../styles/sass/main.scss';
import classNames from 'classnames';
import { ThemeProvider } from 'next-themes';
import { Montserrat } from '@next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

const montserrat = Montserrat({
  subsets: ['latin'],
  }
);

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <motion.div className={classNames('app-container', montserrat.className)}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
};