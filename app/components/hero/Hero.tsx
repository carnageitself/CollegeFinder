import "../../Extra/style.css"
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
}

  return (
    <div className="h-{100} w-full">
      <div className="grid grid-cols-2 ">
        <div className="ml-5 relative main__center" >
          <h1 className="text-3xl text-center"> "Unlock Your Potential, Embrace Your Future: Your Journey Starts Here !"</h1>
          <div className="custom__btn mt-5"><a className="anchor" href="#"> Register</a></div>
        </div>
        <div className="img">
          <Image src="./leftmain.svg" width={600} height={600} alt="img" className="transform -scale-x-100"/>
        </div>
      </div>
    </div>
  )
}

export default Hero;