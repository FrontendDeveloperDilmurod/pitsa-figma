import tepladom from "../assets/tepladim.jpg";
import prompt from "../assets/prompt.jpg";
import udevs from "../assets/udevs.png";
import meals from "../assets/meals.jpg";
import quiz from "../assets/quiz.jpg";
import pizza from "../assets/pizza.png"

function Portfolio() {
  const portfoilios = [
    {
      id: 1,
      src: tepladom,
      link: "https://tepladom.vercel.app/",
      code: "https://github.com/Omadbek04/tepladom",
    },
    {
      id: 2,
      src: prompt,
      link: "https://promptopiya-olive.vercel.app/",
      code: "https://gitlab.com/abdullayevomadbek709/promptopiya",
    },
    {
      id: 3,
      src: udevs,
      link: "https://udevs-eight.vercel.app/",
      code: "https://github.com/Omadbek04/udevs.io",
    },
    {
      id: 4,
      src: meals,
      link: "https://vue-search-meals.vercel.app/",
      code: "https://github.com/Omadbek04/Search-meals",
    },
    {
      id: 5,
      src: quiz,
      link: "https://quiz-app-psi-puce-87.vercel.app/",
      code: "https://github.com/Omadbek04/quiz-app",
    },
    {
      id: 6,
      src: pizza,
      link:"https://abdullayevorderpizza.netlify.app/",
      code:"https://github.com/Omadbek04/OrderPizza",
    },
  ];
  return (
    <div name="portfolio" className=" bg-gradient-to-b from-black to-gray-800  text-white w-full md:h-screen">
      <div className=" max-w-screen-lg p-4  mx-auto  flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl inline font-bold border-b-4 border-gray-500">Portfolio</p>
          <p className=" py-6">Check out some of my work right here</p>
        </div>
        <div className=" grid  sm:grid-cols-2 md:grid-cols-3  gap-8 px-12 sm:p-0">
          {portfoilios.map(({ id, src, link, code }) => (
            <div key={id} className=" shadow-md  shadow-gray-500 rounded-lg">
              <img src={src} alt="" className=" object-cover w-full h-[160px] rounded-md duration-300  hover:scale-105 cursor-pointer" />
              <div className=" flex  justify-center items-center">
                <a className=" w-1/2 px-6 py-3 duration-300 hover:scale-105" target="_blank" href={link}>
                  Demo
                </a>
                <a className=" w-1/2 px-6 py-3 duration-300 hover:scale-105" href={code}>
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
