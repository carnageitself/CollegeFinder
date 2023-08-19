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
const animatedWord="Unlock Your Potential, Embrace Your Future: Your Journey Starts Here " 

  return (
    <div className="h-{100} w-full">
      <div className="grid grid-cols-2 ">
        <motion.div className="m-5 relative main__center"

          initial={{ opacity: 0, x: -10}}
          animate={{ x: -10, y: -10 ,opacity:1}}
          transition={{ delay: 0.9 }}
          exit={{ x: 0, y: 0 ,opacity:0}}
        >
          <h1 className="text-3xl text-center">
            {" "}
            "Unlock Your Potential, Embrace Your Future: Your Journey Starts
            Here !"
          </h1>
          <div className="custom__btn mt-5">
            <a className="anchor" href="#">
              {" "}
              Register
            </a>
          </div>
        </motion.div>
        <motion.div
          className="img m-6 "
          initial={{ opacity: 0, x: 10,y:0}}
          animate={{ x: 10, y: 15 ,opacity:1}}
          transition={{ delay: .4 }}
          exit={{ x: 0, y: 0 ,opacity:0}}
        >
          <Image
            src="./leftmain.svg"
            width={600}
            height={600}
            alt="img"
            className="transform -scale-x-100"
          />
        </motion.div>
        
      </div>
    </div>
  );
};

export default Hero;


