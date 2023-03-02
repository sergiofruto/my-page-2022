import { useState, useEffect } from 'react';
import { Montserrat } from '@next/font/google'
import '../styles/global.css';
import { AnimatePresence } from 'framer-motion';
import Router from "next/router";
import PageLoader from "../components/PageLoader";

const montserrat = Montserrat({
  subsets: ['latin'],
  }
);

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </AnimatePresence>
  );
}