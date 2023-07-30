
import Link from "next/link";
import React from "react";
import logo from "../../../public/next.svg"
import Image from "next/image";

interface navItem {
  id: number;
  title: string;
  url: string;
}

const Navbar: React.FC = () => {


  const nav: navItem[] = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    { id: 2, title: "Top Colleges", url: "/topcolleges" },
    {
      id: 3,
      title: "Admission",
      url: "/admission",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
  ];

  return (
    <div className="navbar w-full h-20 bg-[#121212] text-white flex justify-between items-center">
        <div className="left ml-10">
          <Link href="/">
          <Image src={logo} alt="" className="cursor-pointer h-12 w-12"/>
          </Link>
        </div>
        <div className="center">
          {/* {nav.map((item) => ( */}
            <Link  href={'/'} className="p-10 text-lg uppercase">Home</Link>
            <Link  href={'/topcolleges'} className="p-10 text-lg uppercase">TopColleges</Link>

            <Link  href={'/admission'} className="p-10 text-lg uppercase">Admission</Link>
            <Link  href={'/about'} className="p-10 text-lg uppercase">About</Link>
            <Link  href={'/contact'} className="p-10 text-lg uppercase">Contact</Link>

          {/* ))} */}
        </div>
        <div className="right mr-10">
          <button>Log out</button>
        </div>
      </div>
  );
};

export default Navbar;
