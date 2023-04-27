import styles from "./Header.module.css";
import classNames from "classnames";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { BsStackOverflow } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <div
          className={classNames(
            styles["nav-logo-section"],
            styles["nav-section"]
          )}
        >
          <Link href="/">
            <span className={styles["logo-initials"]}>SF</span>
          </Link>
        </div>
        <div
          className={classNames(
            styles["nav-social-section"],
            styles["nav-section"]
          )}
        >
          <Link href="https://github.com/sergiofruto">
            <BsGithub size="1rem" />
          </Link>
          <Link href="https://stackoverflow.com/users/5463321/sergio-fruto">
            <BsStackOverflow size="1rem" />
          </Link>
          <Link href="https://www.linkedin.com/in/sergio-fruto/">
            <BsLinkedin size="1rem" />
          </Link>
          <ThemeSwitch />
        </div>
        <div
          className={classNames(
            styles["nav-contact-section"],
            styles["nav-section"]
          )}
        >
          <a href="mailto:someone@example.com">
            <HiMenuAlt3 size="2rem" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
