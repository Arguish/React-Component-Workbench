import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  desk: (i) => ({
    width: [0, 270, 256],
  }),
  mov: (i) => ({
    height: [0, 350, 340],
  }),
};

const RatingComp = () => {
  const BP = () => (window.innerWidth > 768 ? "desk" : "mov");
  return (
    <motion.div animate={BP()}>
      <motion.div
        animate={{ scale: [0, 1.2, 1] }}
        className="w-80 aspect-square rounded-xl bg-gradient-to-b from-slate-700 to-slate-900 p-5 box-content"
      >
        <h2 className="text-xl bg-slate-800 bg-opacity-70 rounded-full max-w-min p-3">
          🌟
        </h2>
        <h1 className="text-3xl text-white font-semibold my-4">
          How did we do?
        </h1>
        <p className="text-sm text-gray-500 font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias ab
          aspernatur ducimus velit magnam delectus nisi quam eligendi!
        </p>
        <div className="flex justify-between my-9">
          <button className="text-xl text-gray-500 bg-slate-700 rounded-full p-3 px-5 hover:bg-amber-600 hover:text-white focus:bg-slate-400 focus:text-white">
            1
          </button>
          <button className="text-xl text-gray-500 bg-slate-700 rounded-full p-3 px-5 hover:bg-amber-600 hover:text-white focus:bg-slate-400 focus:text-white">
            2
          </button>
          <button className="text-xl text-gray-500 bg-slate-700 rounded-full p-3 px-5 hover:bg-amber-600 hover:text-white focus:bg-slate-400 focus:text-white">
            3
          </button>
          <button className="text-xl text-gray-500 bg-slate-700 rounded-full p-3 px-5 hover:bg-amber-600 hover:text-white focus:bg-slate-400 focus:text-white">
            4
          </button>
          <button className="text-xl text-gray-500 bg-slate-700 rounded-full p-3 px-5 hover:bg-amber-600 hover:text-white focus:bg-slate-400 focus:text-white">
            5
          </button>
        </div>
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="block w-full bg-amber-600 text-white rounded-full my-4 py-3 hover:bg-amber-500 active:bg-white active:text-amber-500"
        >
          Submit
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default RatingComp;
