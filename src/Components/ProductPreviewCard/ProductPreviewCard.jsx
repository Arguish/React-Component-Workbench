import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ProductPreviewCard = () => {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.1, 1] }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.5 }}
        className="w-64 lg:w-[500px] lg:h-96 rounded-lg bg-white flex flex-col lg:flex-row"
      >
        <img
          className="rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg aspect-video lg:aspect-auto lg:w-1/2 object-cover"
          src="https://picsum.photos/200"
          alt=""
        />
        <div className="m-4 flex flex-col lg:w-1/2 lg:justify-around ">
          <p className="text-gray-400 font-mono text-xs">Perfume</p>
          <p className="my-2 font-serif font-bold text-2xl leading-5">
            Gabriell Esence <br /> Eau De Parfum
          </p>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
            excepturi, vel
          </p>
          <hr className="my-4 border-transparent " />
          <div className="flex align-top my-2">
            <span className="font-bold text-2xl text-green-700">$149.99</span>
            <span className="mx-4 line-through  text-gray-400  text-xs">
              $169.99
            </span>
          </div>
          <button className="py-2 block w-full rounded text-white text-sm bg-green-700">
            Add to Cart
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default ProductPreviewCard;
