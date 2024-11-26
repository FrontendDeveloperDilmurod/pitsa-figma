import { Link } from "react-scroll";
import hero from "../assets/home.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
function Home() {
  return (
    <div name="home" className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">
      <div className="  max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className=" flex flex-col justify-center  h-full">
          <h2 className=" text-4xl sm:text-7xl text-white font-bold">I'm a Frontend Developer</h2>
          <p className=" text-gray-500 py-4 max-w-md">It's been a year since I got into programming. My goal is to become a senior developer and participate in more projects.</p>
          <div>
            <Link to="portfolio" smooth duration={500} className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio
              <span className="  group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={hero} alt="my profile" className=" rounded-2xl  mx-auto md:w-full" />
        </div>
      </div>
    </div>
  );
}

export default Home;
