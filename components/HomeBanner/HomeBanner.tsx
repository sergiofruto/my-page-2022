import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence } from "framer-motion";

const HomeBanner = () => {
  const [second, setSecond] = useState(false);

  const handleDone = () => {
    setSecond(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => setSecond(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="banner-container">
      <motion.div>
        <div className="layer-0">
          <div className="sphere-1"></div>
          <div className="sphere-2"></div>
          <div className="sphere-3"></div>
        </div>
        <div className="layer-1">
          <h1>
            <span className="title">HI, </span>
            <span className="title">
              <Typewriter
                words={["I'M SERGIO FRUTO"]}
                loop={1}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
              />
            </span>
          </h1>
          {second ? (
            <h2>
              <span className="subtitle">
                <Typewriter
                  words={[
                    "frontend developer",
                    "ui specialist",
                    "css lover",
                    "frontend developer",
                  ]}
                  loop={1}
                  cursor
                  cursorStyle="_"
                  cursorBlinking
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </h2>
          ) : null}
        </div>
      </motion.div>
    </div>
  );
};

export default HomeBanner;
