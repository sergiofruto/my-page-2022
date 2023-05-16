import styles from "./Header.module.css";
import classNames from "classnames";
import Link from "next/link";
import {
  BsGithub,
  BsStackOverflow,
  BsLinkedin,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import ShowcaseControls from "../ShowcaseControls/ShowcaseControls";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={classNames(styles["nav-logo-section"])}>
          <Link href="/">
            <span className={styles["logo-initials"]}>SF</span>
          </Link>
        </div>
        <div className={classNames(styles["nav-social-section"])}>
          <Link
            className={styles["nav-link"]}
            href="https://github.com/sergiofruto"
          >
            <BsGithub size="2.2rem" />
          </Link>
          <Link
            className={styles["nav-link"]}
            href="https://stackoverflow.com/users/5463321/sergio-fruto"
          >
            <BsStackOverflow size="2.2rem" />
          </Link>
          <Link
            className={styles["nav-link"]}
            href="https://www.linkedin.com/in/sergio-gabriel-fruto-41084645/"
          >
            <BsLinkedin size="2.2rem" />
          </Link>
          <a
            className={styles["nav-link"]}
            href="mailto:fruto.sergio@gmail.com"
          >
            <BsFillEnvelopeFill size="2.2rem" />
          </a>
        </div>
        <div className={styles["nav-theme-switch"]}>
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
};

export default Header;
