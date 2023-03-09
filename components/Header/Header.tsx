import styles from './Header.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import { BsGithub } from "react-icons/bs";
import { BsStackOverflow } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

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
          <svg
            className={styles["nav-logo"]}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
              clipRule="evenodd"
            />
            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
          </svg>
        </div>
        {/* <div className={classNames(styles["nav-link-section"], styles["nav-section"])}>
          <a href="">about</a>
          <a href="">work</a>
        </div> */}
        <div
          className={classNames(
            styles["nav-social-section"],
            styles["nav-section"]
          )}
        >
          <Link href="https://github.com/sergiofruto">
            <BsGithub size="2rem" />
          </Link>
          <Link href="https://stackoverflow.com/users/5463321/sergio-fruto">
            <BsStackOverflow size="2rem" />
          </Link>
          <Link href="https://www.linkedin.com/in/sergio-fruto/">
            <BsLinkedin size="2rem" />
          </Link>
        </div>
        <div
          className={classNames(
            styles["nav-contact-section"],
            styles["nav-section"]
          )}
        >
          <a href="">Get in touch</a>
        </div>
      </nav>
    </header>
  );
}

export default Header