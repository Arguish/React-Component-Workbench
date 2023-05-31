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

const ResultSummary = () => {
  console.log(window.innerWidth > 768);
  return (
    <motion.div animate={window.innerWidth > 768 ? "desk" : "mov"}>
      <motion.div
        //variants={itemVariants}
        transition={{ ease: "easeOut", duration: 1 }}
        className=" bg-white md:rounded-xl  flex flex-col md:flex-row "
      >
        <div className="w-64 min-w-64 p-4 bg-gradient-to-b from-purple-700 to-indigo-700 rounded-t-none rounded-b-xl md:rounded-xl text-center text-white flex flex-col items-center md:justify-around">
          <p className="text-xs text-white text-opacity-70">Your result</p>
          <div className="m-2 md:my-4 rounded-full bg-gradient-to-b from-purple-800 to-indigo-800 aspect-square w-1/3 md:w-1/2 p-2 flex flex-col justify-center box-content text-center">
            <h1 className="font-bold text-3xl">76</h1>
            <h6 className="text-xs text-white text-opacity-70">of 100</h6>
          </div>
          <h3 className="mt-2 text-lg">Great</h3>
          <p className="text-xs text-white text-opacity-70">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            nemo autem quae nulla in qui voluptatibus delectus recusandae.
          </p>
        </div>
        <motion.div
          animate={{ opacity: [0, 0.75, 1] }}
          variants={itemVariants}
          transition={{
            ease: "easeOut",
            duration: 1.5,
            opacity: { delay: 0.5 },
          }}
          className="w-64 p-4 flex flex-col  md:justify-around"
        >
          <h3 className="font-bold text-lg">Summary</h3>
          <StatComp title="Reaction" points={80} color={1} />
          <StatComp title="Memory" points={92} color={2} />
          <StatComp title="Verbal" points={61} color={3} />
          <StatComp title="Visual" points={72} color={4} />
          <button className="block w-full bg-slate-700 text-white rounded-full py-2 mt-4 hover:bg-slate-600 ">
            Contiune
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ResultSummary;

const StatComp = ({ title = "Default", points = 0, color = 4 }) => {
  const swatches = [
    { text: "text-slate-600", bg: "bg-slate-100" },
    { text: "text-red-600", bg: "bg-red-100" },
    { text: "text-yellow-600", bg: "bg-yellow-100" },
    { text: "text-green-600", bg: "bg-green-100" },
    { text: "text-indigo-600", bg: "bg-indigo-100" },
  ][color];
  return (
    <div
      className={`flex justify-between ${swatches.bg} ${swatches.text} rounded p-2 m-2`}
    >
      <h1>
        <span>{["⚫", "🔴", "🟡", "🟢", "🟣"][color]}</span>

        {title}
      </h1>
      <h2 className={`font-bold text-black`}>
        {points}
        <span className="font-normal text-slate-700 text-opacity-80">
          / 100
        </span>
      </h2>
    </div>
  );
};
