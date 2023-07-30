import Link from "next/link";
import React from "react";
import logo from "../../../public/next.svg"

interface navItem {
  id: number;
  title: string;
  url: string;
}

interface User {
  id: number;
  name: string;
}

const Navbar: React.FC = () => {

  const currentuser: User = {
    id: 1,
    name: "Yash Harale",
  }

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
    <div className="navbar w-full h-20 bg-[#121212] text-white flex justify-between items-center absolute">
        <div className="left ml-10">
          <Link href="/">
          <img src={logo} alt="" className="cursor-pointer h-12 w-12"/>
          </Link>
        </div>
        <div className="center">
          {nav.map((item) => (
            <Link key={item.id} href={item.url} className="p-10 text-lg uppercase">{item.title}</Link>
          ))}
        </div>
        <div className="right mr-10">
          <button>{currentuser ? "Log out": "Log in" }</button>
        </div>
      </div>
  );
};

export default Navbar;
