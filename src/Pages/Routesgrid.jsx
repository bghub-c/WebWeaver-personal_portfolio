import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowCircleRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export function Routesgrid() {
  const [initiall, change] = useState(false);
  const [initial1, change1] = useState(false);
  const [initial2, change2] = useState(false);
  const [initial3, change3] = useState(false);
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className="app2 h-screen w-screen grid grid-cols-8 grid-rows-8 gap-3 smartphone:p-5 smartphone:mt-24 smartphone:flex flex-col"
      >
        <Link
          to="/Introduction"
          className="bg-red-600 smartphone:h-1/4 flex flex-col row-start-2 col-start-2 col-span-4 row-span-3 rounded-xl hover:rounded-sm transition-all duration-500 ease-in-out"
        >
          <section
            id="abt"
            onMouseOver={() => {
              change(true);
            }}
            onMouseLeave={() => {
              change(false);
            }}
            className="bg-white  h-full text-slate-950 flex justify-between items-center  rounded-xl hover:rounded-sm transition-all duration-500 ease-in-out"
          >
            <div className="flex flex-col smartphone:my-3 smartphone:items-center smartphone:justify-center">
              <h1
                className={` text-7xl smartphone:text-5xl drop-shadow-xl text-zinc-700 laptop:mt-auto smartphone:mx-5 mx-14 ${
                  initiall ? "translate-x-3" : ""
                } transition-all duration-700 ease-in-out`}
              >
                About <span className="text-red-600">Me!</span>
              </h1>
              <h2
                className={`text-lg laptop:text-md text-zinc-700 mb-auto smartphone:mx-5 mx-20 flex gap-1 items-center ${
                  initiall ? "translate-x-5" : ""
                } transition-all duration-700 ease-in-out`}
              >
                Lets get personal!!
                <ArrowCircleRight
                  size={32}
                  className={`text-red-600 transition-all ease-in-out duration-700 ${
                    initiall ? "translate-x-3" : ""
                  }`}
                  weight="duotone"
                />
              </h2>
            </div>
            <img
              src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_23.png"
              className={`h-full smartphone:h-1/2 drop-shadow-2xl transition-all duration-700 ease-in-out ${
                initiall ? "scale-105" : ""
              }`}
              alt="hh"
            />
          </section>
        </Link>
        <Link
          to="/TalentArsenal"
          className="smartphone:h-1/4 row-start-2 col-start-6 col-span-2 row-span-3 rounded-xl hover:rounded-sm transition-all duration-500 ease-in-out"
        >
          <section
            id="skills"
            onMouseOver={() => {
              change1(true);
            }}
            onMouseLeave={() => {
              change1(false);
            }}
            className="bg-zinc-900 h-full flex flex-col rounded-xl hover:rounded-sm transition-all duration-500 ease-in-out"
          >
            <h1
              className={`my-1 text-white laptop:text-5xl  smartphone:text-5xl  mt-auto mx-10 smartphone:mx-6 ${
                initial1 ? "translate-x-2" : "translate-x0"
              } transition-all duration-700 ease-in-out`}
            >
              Skill <span className="text-blue-500">Palette</span>
            </h1>
            <h2
              className={`text-md text-white mb-auto mx-14 smartphone:mx-10 flex gap-2 items-center ${
                initial1 ? "translate-x-4" : "translate-x0"
              } transition-all duration-700 ease-in-out`}
            >
              Skills I Bring to the Table
              <ArrowCircleRight
                className={`text-blue-500 transition-all ease-in-out duration-700 ${
                  initial1 ? "translate-x-2" : "translate-x0 "
                }`}
                size={32}
                weight="duotone"
              />
            </h2>
          </section>
        </Link>
        <Link className="smartphone:h-1/4 row-start-5 col-start-2 col-span-2 row-span-3 rounded-xl hover:rounded-sm transition-all duration-500 ease-in-out">
          <section
            id="projects"
            className="bg-blue-500 flex flex-col h-full row-start-5 col-start-2 col-span-2 row-span-3 rounded-xl hover:rounded-sm transition-all duration-500 ease-in-out"
            onMouseOver={() => {
              change2(true);
            }}
            onMouseLeave={() => {
              change2(false);
            }}
          >
            <h1
              className={`my-1 laptop:text-5xl  smartphone:text-5xl text-white mt-auto mx-10 smartphone:mx-6  ${
                initial2 ? "translate-x-2" : "translate-x0"
              } transition-all duration-700 ease-in-out`}
            >
              X-<span className="text-zinc-900">Tras</span>
            </h1>
            <h2
              className={`text-md text-white mb-auto mx-14 smartphone:mx-10 flex gap-2 items-center ${
                initial2 ? "translate-x-4" : "translate-x0"
              } transition-all duration-700 ease-in-out`}
            >
              Stuff that I&#x27;m into
              <ArrowCircleRight
                className={`text-zinc-900 transition-all ease-in-out duration-700 ${
                  initial2 ? "translate-x-2" : "translate-x0 "
                }`}
                size={32}
                weight="duotone"
              />
            </h2>
          </section>
        </Link>
        <section
          id="Work"
          className="bg-red-600 smartphone:h-1/4 flex flex-col row-start-5 col-start-4 col-span-4 row-span-3 rounded-xl hover:rounded-sm transition-all duration-500 ease-in-out"
          onMouseOver={() => {
            change3(true);
          }}
          onMouseLeave={() => {
            change3(false);
          }}
        >
          <h1
            className={` my-1 text-white text-7xl smartphone:text-5xl  laptop:mt-auto smartphone:mx-5  mx-14 ${
              initial3 ? "translate-x-2" : "translate-x0"
            } transition-all duration-700 ease-in-out`}
          >
            My<span className="text-zinc-800"> Work</span>
          </h1>
          <h2
            className={`text-md  text-white  smartphone:mx-8 mx-20 mb-auto flex gap-2 items-center ${
              initial3 ? "translate-x-4" : "translate-x0"
            } transition-all duration-700 ease-in-out`}
          >
            Work that I&#x27;m into
            <ArrowCircleRight
              className={`text-zinc-800 transition-all ease-in-out duration-700 ${
                initial3 ? "translate-x-2" : "translate-x0 "
              }`}
              size={32}
              weight="duotone"
            />
          </h2>
        </section>
      </motion.div>
    </>
  );
}
