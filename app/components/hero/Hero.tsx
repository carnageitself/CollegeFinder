"use client";
import { motion } from "framer-motion";
import "../../Extra/style.css";
import Image from "next/image";
import React from "react";
interface User {
  id: number;
  name: string;
}

const Hero: React.FC = () => {
  const currentuser: User = {
    id: 1,
    name: "Yash Harale",
  };
  const animatedWord =
    "Unlock Your Potential, Embrace Your Future: Your Journey Starts Here ";

  return (
    <div className="h-{100} w-full ">
      <div className="flex items-center justify-center  md:flex-row sm:flex-col res">
        <motion.div
          className="m-5 "
          initial={{ opacity: 0, x: -10 }}
          animate={{ x: -10, y: -10, opacity: 1 }}
          transition={{ delay: 0.9 }}
          exit={{ x: 0, y: 0, opacity: 0 }}
        >
          <h1 className="text-3xl text-center top-[40%] relative">
            {" "}
            "Unlock Your Potential, Embrace Your Future: Your Journey Starts
            Here !"
          </h1>
          <div className="top-[40%] relative pt-5 flex justify-center">
            <button className="bg-gray-500 rounded-md px-5 py-2 text-white   items-center ">
              {" "}
              Register
            </button>
          </div>
        </motion.div>
        <motion.div
          className="m-6 flex justify-center items-center sm:columns-1 "
          initial={{ opacity: 0, x: 10, y: 0 }}
          animate={{ x: 10, y: 15, opacity: 1 }}
          transition={{ delay: 0.4 }}
          exit={{ x: 0, y: 0, opacity: 0 }}
        >
          <Image
            src="./leftmain.svg"
            width={600}
            height={600}
            alt="img"
            className="transform -scale-x-100 "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
