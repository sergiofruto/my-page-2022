import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { motion } from "framer-motion";

type Props = {
  children?: ReactNode
  title?: string
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> |{' '}
        {/* <Link href="/users">Users List</Link> |{' '} */}
        <a href="/api/users">Users API</a>
      </nav>
    </header>
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear'
      }}
    >
      {children}
    </motion.div>
  </>
)

export default Layout
