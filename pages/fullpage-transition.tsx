import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Poppins } from "@next/font/google";
import Layout from "../components/Layout";
import Header from "../components/Fullpage/Header";
import Banner from "../components/Fullpage/Banner";
import Loader from "../components/Fullpage/Loader";
import Image from "next/image";

// const poppins = Poppins();
const poppins = Poppins({ weight: ["300", "500"], subsets: ["latin"] });

const PullpageTransition = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <Layout title="Fullpage Transition" theme="light">
      <div className={poppins.className}>
        <AnimatePresence>
          {loading ? (
            <motion.div key="loader">
              <Loader setLoading={setLoading} />
            </motion.div>
          ) : (
            <>
              <Header />
              <Banner />
              {!loading && (
                <div className="transition-image final">
                  <img src="./fullpage-images/image-2.webp" alt="banner" />
                </div>
              )}
            </>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default PullpageTransition;
