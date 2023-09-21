import Link from "next/link";
import styles from "../Header.module.css";
import ThemeSwitch from "../../ThemeSwitch/ThemeSwitch";

import { AnimatePresence, motion } from "framer-motion";

import {
  BsGithub,
  BsStackOverflow,
  BsLinkedin,
  BsFillEnvelopeFill,
} from "react-icons/bs";

import { BiMenuAltRight } from "react-icons/bi";

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const SocialLinks = () => (
  <>
    <Link className={styles["nav-link"]} href="https://github.com/sergiofruto">
      <BsGithub size="2.2rem" />
      <span className={styles["nav-link-label"]}>Github</span>
    </Link>
    <Link
      className={styles["nav-link"]}
      href="https://www.linkedin.com/in/sergio-gabriel-fruto-41084645/"
    >
      <BsLinkedin size="2.2rem" />
      <span className={styles["nav-link-label"]}>LinkedIn</span>
    </Link>
    <Link
      className={styles["nav-link"]}
      href="https://stackoverflow.com/users/5463321/sergio-fruto"
    >
      <BsStackOverflow size="2.2rem" />
      <span className={styles["nav-link-label"]}>StackOverflow</span>
    </Link>
    <a className={styles["nav-link"]} href="mailto:fruto.sergio@gmail.com">
      <BsFillEnvelopeFill size="2.2rem" />
      <span className={styles["nav-link-label"]}>Email</span>
    </a>
    <ThemeSwitch />
  </>
);

const AnimatedMenu = ({ isMenuOpen }) => {
  return (
    // <div className={styles["nav-menu"]}>
    <AnimatePresence>
      <motion.div
        className={styles["nav-menu"]}
        animate={isMenuOpen ? "open" : "closed"}
        variants={variants}
      >
        <ul>
          <li className={styles["nav-menu-item"]}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles["nav-menu-item"]}>
            <Link href="/projects">Projects</Link>
          </li>
          {/* <li className={styles["nav-menu-item"]}>
            <Link href="/contact">Contact</Link>
          </li> */}
        </ul>
        <div className={styles["social-links-container"]}>
          <SocialLinks></SocialLinks>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedMenu;
