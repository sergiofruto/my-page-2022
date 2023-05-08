// import {
//   BannerContainer,
//   Title,
//   Subtitle,
//   Sphere1,
//   Sphere2,
//   Sphere3,
//   Layer0,
//   Layer1,
// } from "./HomeBanner.styled";

import { motion, AnimatePresence } from "framer-motion";

const HomeBanner = () => {
  return (
    <motion.div>
      <div className="banner-container">
        <div className="layer-0">
          <div className="sphere-1"></div>
          <div className="sphere-2"></div>
          <div className="sphere-3"></div>
        </div>
        <div className="layer-1">
          <div className="title">
            <h1>
              {`HI, I'M Sergio Fruto`}
              <br />
              FRONTEND DEVELOPER
              <br />
            </h1>
            <h2>UI SPECIALIST</h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeBanner;
