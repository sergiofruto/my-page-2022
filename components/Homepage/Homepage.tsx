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
          <h2 className={styles.intro}>
            Hi, I'm Sergio -- Frontend Developer with a passion for building
            beautiful and functional user interfaces.
          </h2>
        </div>
      </div>
      <div className={styles.div2}>
        <div className={styles["inner-box"]}>
          <a href="">
            <BsGithub size="2.4rem" color="var(--txt-color)"></BsGithub>
          </a>
        </div>
      </div>
      <div className={styles.div3}>
        <div className={styles["inner-box"]}>
          <a href="">
            <BsLinkedin size="2.4rem" color="var(--txt-color)"></BsLinkedin>
          </a>
        </div>
      </div>
      <div className={styles.div4}>
        <div className={styles["inner-box"]}>
          <a href="">
            <BsStackOverflow
              size="2.4rem"
              color="var(--txt-color)"
            ></BsStackOverflow>
          </a>
        </div>
      </div>
      <div className={styles.div5}>
        <div className={styles["inner-box"]}>
          <GridBlockText
            title="Get in touch"
            subtitle="Currently available for hire"
            link="/contact"
          ></GridBlockText>
        </div>
      </div>
      <div className={styles.div6}>
        <div className={styles["inner-box"]}>
          <GridBlockImage image="./grid-assets/te-op1.png"></GridBlockImage>
        </div>
      </div>
      <div className={styles.div7}>
        <div className={styles["inner-box"]}>
          <GridBlockText
            title="Examples"
            subtitle="Collection of layout examples"
            link="/examples"
          ></GridBlockText>
        </div>
      </div>
      <div className={styles.div8}>
        <div className={styles["inner-box"]}>
          <GridBlockText
            title="Experiments"
            subtitle="Testing some tech here"
            link="/experiments"
          ></GridBlockText>
        </div>
      </div>
      <div className={styles.div9}>
        <div className={styles["inner-box"]}>
          <GridBlockImage image=""></GridBlockImage>
        </div>
      </div>
      {/* <div className={styles.div10}>
        <div className={styles["inner-box"]}>
          <GridBlockImage image="./grid-assets/te-op1.png"></GridBlockImage>
        </div>
      </div> */}
      <div className={styles.div11}>
        <div className={styles["inner-box"]}>
          <GridBlockImage image="https://creatorspace.imgix.net/users/clibr89wo00cbqq01vifatbjy/E8OvqyHz1UsPkgW0-CB%25201%2520rgb.png?w=750&h=750"></GridBlockImage>
        </div>
      </div>
      <div className={styles.div12}>
        <div className={styles["inner-box"]}></div>
      </div>
    </div>
  );
};

export default Homepage;
