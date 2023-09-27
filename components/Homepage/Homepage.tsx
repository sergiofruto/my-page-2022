import Link from "next/link";
import styles from "./Homepage.module.scss";
import GridBlockImage from "../GridBlocks/GridBlockImage";
import GridBlockText from "../GridBlocks/GridBlockText";

import {
  BsGithub,
  BsStackOverflow,
  BsLinkedin,
  BsArrowUpRightCircle,
} from "react-icons/bs";

const Homepage = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.div1}>
        <div className={styles["inner-box"]}>
          <Link
            href="https://www.patrik-huebner.com/creative-coding/beyond-data/"
            target="_blank"
            style={{ height: "100%", width: "100%" }}
          >
            <GridBlockImage image="./grid-assets/morph-app.png" />
          </Link>
        </div>
      </div>
      <div className={styles.div2}>
        <div className={styles["inner-box"]}>
          <GridBlockImage image="https://images.analogue.co/3-multi-layout-reflection-v2.7bece88f96c9a53f1383fe67901918e1.png?auto=format&w=4000&q=100&s=90219c0742874fdcc4fa550102ed6d11"></GridBlockImage>
        </div>
      </div>
      <div className={styles.div3}>
        <div className={styles["inner-box"]}>
          <GridBlockImage image="https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"></GridBlockImage>
        </div>
      </div>
      <div className={styles.div4}>
        <div className={styles["inner-box"]}>
          <GridBlockImage image="https://creatorspace.imgix.net/users/clibr89wo00cbqq01vifatbjy/E8OvqyHz1UsPkgW0-CB%25201%2520rgb.png?w=750&h=750"></GridBlockImage>
        </div>
      </div>
      <div className={styles.div5}>
        <div className={styles["inner-box"]}>
          <h2 className={styles.intro}>
            Hi, I'm Sergio -- Frontend Developer with a passion for building
            beautiful and functional user interfaces.
          </h2>
        </div>
      </div>
      <div className={styles.div6}>
        <div className={styles["inner-box"]}>
          <GridBlockImage image="https://images.ui8.net/uploads/keeper_preview_04_1676966781326.png"></GridBlockImage>
        </div>
      </div>
      <div className={styles.div7}>
        <div className={styles["inner-box"]}>
          <Link
            href="/cases/pdp-nike-shoe"
            style={{ height: "100%", width: "100%" }}
          >
            <GridBlockImage image="https://cdn.shopify.com/s/files/1/0564/0398/4463/files/AURORA_DD8959-113_PHSYD002-2000.png?v=1695632655"></GridBlockImage>
          </Link>
        </div>
      </div>
      <div className={styles.div8}>
        <div className={styles["inner-box"]}>
          <a href="">
            <BsGithub size="1.5rem" color="var(--txt-color)"></BsGithub>
          </a>
        </div>
      </div>
      <div className={styles.div9}>
        <div className={styles["inner-box"]}>
          <a href="">
            <BsLinkedin size="1.5rem" color="var(--txt-color)"></BsLinkedin>
          </a>
        </div>
      </div>
      <div className={styles.div10}>
        <div className={styles["inner-box"]}>
          <a href="">
            <BsStackOverflow
              size="1.5rem"
              color="var(--txt-color)"
            ></BsStackOverflow>
          </a>
        </div>
      </div>
      <div className={styles.div11}>
        <div className={styles["inner-box"]}>
          <GridBlockText
            title="Get in touch"
            subtitle="Currently available for hire"
            link="/contact"
          ></GridBlockText>
        </div>
      </div>
      <div className={styles.div12}>
        <div className={styles["inner-box"]}>
          <GridBlockText
            title="Examples"
            subtitle="Collection of layout examples"
            link="/examples"
          ></GridBlockText>
        </div>
      </div>
      <div className={styles.div13}>
        <div className={styles["inner-box"]}>
          <GridBlockText
            title="Experiments"
            subtitle="Testing some tech here"
            link="/experiments"
          ></GridBlockText>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
