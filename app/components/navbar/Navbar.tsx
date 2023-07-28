import Link from "next/link";
import { title } from "process";
import React from "react";

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
    <div className="navbar w-full h-20 bg-[#121212] text-white">
      <div className="navbarContainer flex items-center justify-between">
        <div className="left">
          <img src="" alt="" />
        </div>
        <div className="center">
          {nav.map((item) => (
            <Link key={item.id} href={item.url}>{item.title}</Link>
          ))}
        </div>
        <div className="right">
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
