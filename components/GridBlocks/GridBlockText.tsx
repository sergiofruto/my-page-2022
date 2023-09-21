import Link from "next/link";
import styles from "./GridBlockText.module.scss";
import { BsArrowUpRightCircle } from "react-icons/bs";

const GridBlockText = ({ title, subtitle, link }) => {
  return (
    <a href={link} className={styles["link-container"]}>
      <h2 className={styles["title"]}>{title}</h2>
      <p className={styles["subtitle"]}>{subtitle}</p>
      <BsArrowUpRightCircle className={styles["icon"]} />
    </a>
  );
};

export default GridBlockText;
