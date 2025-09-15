import React from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import { motion } from "motion/react";

const Suprise = () => {
  const { width, height } = useWindowSize();
  return (
    <div className="min-h-[450px] mx-auto mt-20 bg-white w-11/12 rounded-lg overflow-hidden">
      <Confetti width={width} height={height} />

      <motion.h1
        className="my-5 mr-5 text-blue-500 font-bold text-2xl"
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
      >
        عارف كسبت معانا ايه ؟
      </motion.h1>
      <motion.h2
        className="text-2xl mr-5 font-bold "
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
      >
        مكرونة بشااااامييييل !
      </motion.h2>
      <video
        playsInline
        controls
        autoPlay={true}
        className="w-11/12 h-[300px] mx-auto my-10 rounded-2xl"
      >
        <source src="/suprise.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Suprise;
