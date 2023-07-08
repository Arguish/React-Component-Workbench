import React, { useState } from "react";
import { motion } from "framer-motion";

import useWrite from "../../Hooks/useWrite";

const Game = () => {
  const [clic, setclic] = useState({ x: 0, y: 0 });
  const [mdown, setmdown] = useState({ x: 0, y: 0 });
  const [mdup, setmdup] = useState({ x: 0, y: 0 });

  const [text1] = useWrite(lorem);
  const [text2] = useWrite(lorem);
  const [text3] = useWrite(lorem);

  const userCliked = (e) => {
    setclic({ x: e.clientX, y: e.clientY });
  };
  const userD = (e) => {
    setmdown({ x: e.clientX, y: e.clientY });
    setmdup({ x: e.clientX, y: e.clientY });
  };
  const userU = (e) => {
    setmdup({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="m-0 h-[50vh] w-[50vw] border-2 border-slate-400 rounded-lg"
      onMouseDown={userD}
      onMouseUp={userU}
      onMouseMove={(e) => {
        userCliked(e);
      }}
    >
      <div className="text-white">{text1}</div>
      <div className="text-white">{text2}</div>
      <div className="text-white">{text3}</div>
      <div
        className=" h-12 aspect-square  border-4 border-red-600 absolute cursor-none"
        style={{
          top: mdown.y - 24,
          left: mdown.x - 24,
          width: mdup.x - mdown.x,
          height: mdup.y - mdown.y,
        }}
      />
      <motion.div
        transition={{ type: "spring" }}
        className=" h-12 aspect-square rounded-full border-4 border-red-600 absolute cursor-none"
        style={{ top: clic.y - 24, left: clic.x - 24 }}
      />
    </div>
  );
};

export default Game;

const lorem =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa est sunt quod, beatae illo dolor quidem dolores earum perspiciatis assumenda! Sint, repellendus. Porro vitae quidem aspernatur quasi minima nostrum fuga.";
