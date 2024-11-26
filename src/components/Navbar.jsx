import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
function Navbar() {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20  text-white bg-black fixed px-4">
      <div>
        <h1 className=" text-5xl font-signature ml-2">Omadbek</h1>
      </div>
      {/* Navbar links */}
      <ul className="hidden md:flex ">
        {links.map(({ id, link }) => (
          <li className=" px-4 cursor-pointer capitalize font-medium  text-gray-500 hover:scale-105 duration-200" key={id}>
            <Link to={`${link}`} smooth duration={1500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      {/* Navbar showMenu */}
      <div onClick={() => setNav((prev) => !prev)} className=" block md:hidden cursor-pointer pr-4 z-10 text-gray-500">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {/* Navbar menu*/}
      {nav && (
        <ul className="flex flex-col justify-center items-center  absolute top-0 left-0 w-full h-screen  bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li className=" px-4 py-6 text-4xl cursor-pointer capitalize  hover:rotate-6  duration-500" key={id}>
              <Link onClick={() => setNav((prev) => !prev)} to={`${link}`} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
