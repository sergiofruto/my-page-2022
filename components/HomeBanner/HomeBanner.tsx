import React, { use, useState } from "react";
import Typist from "react-typist";
import { Typewriter, Cursor } from "react-simple-typewriter";
import { useTypewriter } from "react-simple-typewriter";

import { motion, AnimatePresence } from "framer-motion";

const HomeBanner = () => {
  const [showCursor, setShowCursor] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const handleType = (count: number) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    setSecond(true);
    console.log(`Done after 1 loops!`);
    console.log(second);
  };

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
                cursor
                cursorStyle="_"
                loop={1}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onType={handleType}
              />
            </span>
          </h1>
          <h2>
            <span className="subtitle">
              <Typewriter
                words={[
                  "frontend developer",
                  "ui specialist",
                  "css lover",
                  "frontend developer",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
                onLoopDone={handleDone}
                onType={handleType}
              />
              {/* {second ? (
                <Typewriter
                  words={["frontend developer", "ui specialist", "css lover"]}
                  loop={5}
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                  onLoopDone={handleDone}
                  onType={handleType}
                />
              ) : null} */}
            </span>
          </h2>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeBanner;
