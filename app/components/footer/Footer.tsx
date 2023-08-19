import "../../Extra/style.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="footer w-{100} h-{100} p-20 grid grid-cols-2">
      <div className="logo ml-30">
        {" "}
        <Image
          src="/logo.png"
          width={60}
          height={100}
          alt="logo"
          className="cursor-pointer"
        />
        
      </div>
      <div className="grid grid-cols-1 ">
        <ul className="text-md text-center">
          <li className="text-black pb-5 hover:border-b-black-{5px} ">
            <a href="/">Home</a>
          </li>
          <li className="text-black pb-5 transition-all">
            <a href="/admission">Admission</a>
          </li>
          <li className="text-black pb-5 transition-all">
            <a href="/topcolleges">Top Colleges</a>
          </li>
          <li className="text-black pb-5 transition-all">
            <a href="/about">About us</a>
          </li>
          <li className="text-black pb-5 transition-all">
            <a href="/contact">Contact us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
