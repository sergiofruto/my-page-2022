import { useState } from "react";
import styles from "./Header.module.css";
import classNames from "classnames";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";

import ShowcaseControls from "../ShowcaseControls/ShowcaseControls";

import AnimatedMenu from "./AnimatedMenu/AnimatedMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={classNames(styles["nav-logo-section"])}>
          <Link href="/">
            <span className={styles["logo-initials"]}>SF</span>
          </Link>
        </div>
        <div className={styles["nav-theme-switch"]}>
          <BiMenuAltRight size="2.2rem" onClick={() => toggleMenu()} />
        </div>
      </nav>
      <AnimatedMenu isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
