import { useState, useRef, useEffect} from 'react';
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import styles from './HorizontalSlider.module.css';

const HorizontalSlider = () => {
  const mediaArr = [
    {
      name: "placeholder",
      img: "https://images.unsplash.com/photo-1678263093715-ba00dc80520f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    },
    {
      name: "placeholder",
      img: "https://images.unsplash.com/photo-1668018064529-76c9849d6e0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
    },
    {
      name: "placeholder",
      img: "https://images.unsplash.com/photo-1669630814501-9b0dd220a763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
    },
    {
      name: "placeholder",
      img: "https://images.unsplash.com/photo-1672487914895-73be33e58283?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "placeholder",
      img: "https://images.unsplash.com/photo-1672818640506-d5fb6372ed40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
    },
    {
      name: "placeholder",
      img: "https://images.unsplash.com/photo-1671627185063-9a7ec403574d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2032&q=80",
    },
    {
      name: "placeholder",
      img: "https://plus.unsplash.com/premium_photo-1672088104722-5ac457f1d289?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
    },
    {
      name: "placeholder",
      img: "https://images.unsplash.com/photo-1672080070747-9b28b4b403af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
    },
    {
      name: "placeholder",
      img: "https://images.unsplash.com/photo-1673031288723-f198cd527b97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    },
    {
      name: "placeholder",
      img: "https://images.unsplash.com/photo-1671347020855-8f35d210ee9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80",
    },
  ];

  const [sliderWidth, setSliderWidth] = useState(0);
  const sliderRef = useRef();

  const containerVariants = {
    hidden: { x: 300, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { x: 300, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { delay: 0.5 }},
  };

  useEffect(() => {
    const node = sliderRef.current as any;
    const sliderScrollWidth = node.scrollWidth;
    const sliderScrollOffsetWidth = node.offsetWidth;

    sliderScrollWidth && sliderScrollOffsetWidth
      ? setSliderWidth(sliderScrollWidth - sliderScrollOffsetWidth)
      : "";
  }, []);

  return (
    <div className={styles["slider"]} ref={sliderRef}>
      <motion.ul
        drag="x"
        dragConstraints={{ right: 0, left: -sliderWidth }}
        whileTap={{ cursor: "grabbing" }}
        className={styles["slider-inner"]}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {mediaArr.map((media) => (
          <motion.li
            className={styles["slider-item"]}
            key={media.img}
            variants={childVariants}
          >
            <motion.img
              src={media.img}
              alt={media.name}
            />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
 
export default HorizontalSlider;