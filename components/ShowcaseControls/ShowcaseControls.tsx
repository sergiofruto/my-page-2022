import React, { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import styles from "../Showcase/Showcase.module.css";

const ShowcaseControls = () => {
  const [index, setindex] = useState(0);
  const components = ["comp1", "comp2", "comp3"];

  const handleLeftClick = () => {
    index === 0 ? setindex(components.length - 1) : setindex(index - 1);
  };

  const handleRightClick = () => {
    index === components.length - 1 ? setindex(0) : setindex(index + 1);
  };

  return (
    <div className={styles["showcase-controls"]}>
      <button className={styles["showcase-button"]} onClick={handleRightClick}>
        <BsChevronRight size={"3rem"} color={"var(--txt-color)"} />
      </button>
      <button className={styles["showcase-button"]} onClick={handleLeftClick}>
        <BsChevronLeft size={"3rem"} color={"var(--txt-color)"} />
      </button>
    </div>
  );
};

export default ShowcaseControls;
