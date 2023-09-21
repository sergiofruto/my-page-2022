import styles from "./GridBlockImage.module.scss";

const GridBlockImage = ({ image }) => {
  return (
    <div
      className={styles["grid-block-image"]}
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default GridBlockImage;
