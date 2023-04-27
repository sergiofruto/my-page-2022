import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header/Header";

type Props = {
  children?: ReactNode;
  title?: string;
  theme?: string;
};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = (
  { children, title = "This is the default title" }: Props,
  theme = "dark"
) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
  </>
);

export default Layout;
