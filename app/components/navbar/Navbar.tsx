// import { motion } from "framer-motion"
// import Link from "next/link";
// import React from "react";
// // import "../../Extra/style.css"
// interface navItem {
//   id: number;
//   title: string;
//   url: string;
// }

// interface User {
//   id: number;
//   name: string;
// }

// const Navbar: React.FC = () => {
//   const currentuser: User = {
//     id: 1,
//     name: "Yash Harale",
//   };

//   const nav: navItem[] = [
//     {
//       id: 1,
//       title: "Home",
//       url: "/",
//     },
//     { id: 2, title: "Top Colleges", url: "/topcolleges" },
//     {
//       id: 3,
//       title: "Admission",
//       url: "/admission",
//     },
//     {
//       id: 4,
//       title: "About",
//       url: "/about",
//     },
//     {
//       id: 5,
//       title: "Contact",
//       url: "/contact",
//     },
//   ];

//   return (
//     <div className="navbar w-full h-20 bg-slate-300 text-white flex justify-between items-center ">
//       <div className="left ml-10">
//         <Link href="/">
//           <Image src="/logo.png" width={60} height={100} alt="logo" className="cursor-pointer h-12 w-12" />
//         </Link>
//       </div>
//       <div className="center">
//         {nav.map((item) => (
//           <Link
//             key={item.id}
//             href={item.url}
//             className="p-10 text-[16px] font-bold uppercase xs:flex columns-1 navbar"
//           >
//             {item.title}
//           </Link>
//         ))}
//       </div>
//       <div className="right mr-10 font-bold">
//         <button className="bg-gray-500 rounded-md p-2">{currentuser ? "Log out" : "Log in"}</button>
//       </div>
//     </div>
//   );
// };

// export default Navbar

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, stagger } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
interface User {
  id: number;
  name: string;
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const currentUser: User = {
    id: 1,
    name: "Yash Harale",
  };
  return (
    <nav className="bg-gray-400 p-4 content-center">
      <motion.div
        className="container mx-auto flex justify-between items-center"
        initial={{ opacity: 0, y: -10, }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        exit={{ opacity: 0, y: -10, x: -15 }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-white font-bold text-xl">
          <Image
            src="/logo.png"
            width={60}
            height={100}
            alt="logo"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            href="#"
            className="text-white hover:text-gray-800 hover:bg-slate-50 p-2 rounded-md  transition-all"
          >
            Home
          </Link>
          <Link
            href="/admission"
            className="text-white   hover:text-gray-800 hover:bg-slate-50 p-2 rounded-md transition-all"
          >
            Admission
          </Link>
          <Link
            href="/topcolleges"
            className="text-white  hover:text-gray-800 hover:bg-slate-50 p-2 rounded-md transition-all"
          >
            Top College
          </Link>

          <Link
            href="/about"
            className="text-white hover:text-gray-800 hover:bg-slate-50 p-2 rounded-md transition-all"
          >
            About us
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-gray-800 hover:bg-slate-50 p-2 rounded-md transition-all"
          >
            Contact us
          </Link>
          <button className="bg-gray-500 rounded-md px-5 py-2 text-white  items-center">
            {currentUser ? "Log out" : "Log in"}
          </button>
        </div>

        <div className="md:hidden">
          {/* Mobile menu button */}
          <button className="text-white" onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </motion.div>
      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="md:hidden mt-2 space-y-2 text-center"
          >
            <Link href="#" className="block text-white hover:text-gray-300">
              Home
            </Link>
            <Link
              href="/admission"
              className="block text-white hover:text-gray-300"
            >
              Admission
            </Link>
            <Link
              href="/topcollege"
              className="block text-white hover:text-gray-300"
            >
              Top College
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-gray-300"
            >
              About us
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-gray-300"
            >
              Contact us
            </Link>
            <button className="bg-gray-500 rounded-md px-5 py-2 text-white  items-center">
              {currentUser ? "Log out" : "Log in"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
