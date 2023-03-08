//create a slider react component
import React, { useState } from 'react';
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeBannerTest from "../HomeBannerTest/HomeBannerTest";
import HorizontalSlider from "../HorizontalSlider/HorizontalSlider";
import { motion, AnimatePresence } from "framer-motion";
import styles from './Showcase.module.css';
import classNames from 'classnames';

const Showcase = () => {
  const [index, setindex] = useState(0);

  const components = [
    <HomeBanner />,
    <HorizontalSlider />,
    <HomeBannerTest />
  ];

  const handleLeftClick = () => {
    index === 0 ? setindex(components.length - 1) : setindex(index - 1);
  };

  const handleRightClick = () => {
    index === components.length - 1 ? setindex(0) : setindex(index + 1);
  };

  const variants = {
    initial: {
      x: 200,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1
    },
    exit: {
      x: -200,
      opacity: 0 
    }
  }

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
      <div className={styles["showcase-controls"]}>
        <button
          className={styles["showcase-button"]}
          onClick={handleRightClick}
        >
          <BsChevronRight size={"3rem"} color={"FFFFFF"} />
        </button>
        <button 
          className={styles["showcase-button"]} 
          onClick={handleLeftClick}>
          <BsChevronLeft size={"3rem"} color={"FFFFFF"} />
        </button>
      </div>
    </div>
  );
};

export default Showcase;