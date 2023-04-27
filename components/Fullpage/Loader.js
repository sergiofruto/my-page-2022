import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "./Image";


//variants
const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    }
  },
  exit: {

  }
};

const item = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 1.6, 
      ease: [0.68,-0.55,0.27,1.55],
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeIn',
      duration: 0.8,
    }
  }
}

const Loader = ({ setLoading }) => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 4000);
  //   return () => clearTimeout(timer);
  // });

  return (
    <div className='loader'>
      <motion.div 
        className='loader-inner'
        variants={container}
        initial={"hidden"}
        animate={"show"}
        exit={"exit"}
        onAnimationComplete={()=>setLoading(false)}
      >
        <ImageBlock variants={item} id='image-1' />
        <div className='transition-image'>
          <img
            src='./fullpage-images/image-2.webp'
            alt='random alt'
          />
        </div>
        <ImageBlock variants={item} id='image-3' />
        <ImageBlock variants={item} id='image-4' />
        <ImageBlock variants={item} id='image-5' />
      </motion.div>
    </div>
  );
};

export const ImageBlock = ({ id, variants }) => {
  return (
    <motion.div variants={variants} className={`image-block ${id}`}
      animate={{
        scale: 0.5,
        transition: {
          duration: 1,
        }
    }}>
      <Image
        src={`./fullpage-images/${id}.webp`}
        fallback={`./fullpage-images/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  );
};
export default Loader;
