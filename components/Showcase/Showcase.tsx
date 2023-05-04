//create a slider react component
import React, { useState } from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import HorizontalSlider from "../HorizontalSlider/HorizontalSlider";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Showcase.module.css";
import classNames from "classnames";

const Showcase = () => {
  const [index, setindex] = useState(0);

  const components = [<HomeBanner />, <HorizontalSlider />];

  const variants = {
    initial: {
      x: 200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -200,
      opacity: 0,
    },
  };

  return (
    <div className={styles["showcase-container"]}>
      <div className={styles["showcase-slider"]}>
        <AnimatePresence>
          <motion.div
            key={index}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={classNames(styles["showcase-slide"])}
          >
            {components[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Showcase;
