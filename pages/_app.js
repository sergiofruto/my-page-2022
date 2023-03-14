import { useState, useEffect } from 'react';
import { Montserrat } from '@next/font/google'
import '../styles/global.css';
// import 'tailwindcss/tailwind.css'
import { motion, AnimatePresence } from 'framer-motion';

const montserrat = Montserrat({
  subsets: ['latin'],
  }
);

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.main className={montserrat.className}>
        <Component {...pageProps} />
      </motion.main>
    </AnimatePresence>
  );
}