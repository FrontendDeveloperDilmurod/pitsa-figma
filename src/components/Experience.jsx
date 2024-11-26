import React from "react";
import css from "../assets/css.svg";
import b from "../assets/b.svg";
import git from "../assets/git.svg";
import gitlab from "../assets/gitlab.svg";
import html from "../assets/html.svg";
import reactImage from "../assets/react.svg";
import sass from "../assets/sass.svg";
import ta from "../assets/ta.svg";
import js from "../assets/js.svg";
import ts from "../assets/ts.svg";
import next from "../assets/next.svg"
import vue from "../assets/vue.svg"
function Experience() {
  const tech = [
    {
      id: 1,
      src: html,
      title: "HTMl",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: sass,
      title: "Sass",
      style: "shadow-rose-400",
    },
    {
      id: 4,
      src: b,
      title: "Bootstrap",
      style: "shadow-violet-500",
    },
    {
      id: 5,
      src: ta,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-500",
    },
    {
      id: 8,
      src: ts,
      title: "TypeScript",
      style: "shadow-sky-500",
    },
    {
      id: 9,
      src: git,
      title: "Git",
      style: "shadow-orange-600",
    },
    {
      id: 10,
      src: gitlab,
      title: "GitLab",
      style: "shadow-orange-500",
    },
    {
      id: 11,
      src: next,
      title: "Next.js",
      style: "shadow-orange-600",
    },
    {
      id: 12,
      src: vue,
      title: "Vue.js",
      style: "shadow-green-500",
    },
  ];
  return (
    <div name="experience" className=" bg-gradient-to-b from-gray-800 to-black   w-full    ">
      <div className=" max-w-screen-lg p-4 flex flex-col justify-center text-white  w-full h-full mx-auto">
        <div>
          <p className="text-4xl   border-b-4 font-bold border-gray-500 p-2 inline">Experience</p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8  text-center  py-8  px-12 sm:px-0">
          {tech.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md  hover:scale-105 duration-500  py-2 rounded-lg ${style}`}>
              <img src={src} alt={`technologie ${title}`} className="w-20 mx-auto " />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
