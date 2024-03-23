import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowCircleRight } from "@phosphor-icons/react";
import { m, LazyMotion, domAnimation } from "framer-motion";

export function Routesgrid() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const animation = {
    initial: { y: 10 },
    Inview: { y: 0 },
  };
  return (
    <>
      <LazyMotion features={domAnimation}>
        <m.div
          id="Maingrid"
          initial={{ opacity: 0.85 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="app2  h-screen w-screen grid grid-cols-8 grid-rows-8 gap-3 smartphone:p-5 smartphone:mt-24 smartphone:flex flex-col"
        >
          <Link
            to="/Introduction"
            className="smartphone:h-1/4 flex flex-col row-start-2 col-start-2 col-span-4 row-span-3 rounded-xl hover:rounded-sm transition-all duration-500 ease-in-out"
          >
            <m.section variants={animation}
              initial="initial"
              whileInView={hasAnimated ? "":"Inview"}
              transition={{ delay: 0.4, type: "spring", duration: 0.5 }}
              id="abt"
              className="bg-bk group h-full text-whitee flex justify-between items-center rounded-sm hover:rounded-xl transition-all duration-500 ease-in-out"
            >
              <div className="flex flex-col smartphone:my-3 smartphone:items-center smartphone:justify-center">
                <h1
                  className={` text-7xl smartphone:text-5xl drop-shadow-xl text-zinc-700 laptop:mt-auto smartphone:mx-5 mx-14
                  group-hover:translate-x-3 transition-all duration-300 ease-in-out`}
                >
                  About <span className="text-accent">Me!</span>
                </h1>
                <h2
                  className={`text-lg laptop:text-md text-zinc-700 mb-auto smartphone:mx-5 mx-20 flex gap-1 items-center 
                group-hover:translate-x-5 transition-all duration-300 ease-in-out`}
                >
                  Lets get personal!
                  <ArrowCircleRight
                    size={32}
                    className={`text-accent opacity-85 transition-all ease-in-out duration-300 group-hover:translate-x-3`}
                    weight="duotone"
                  />
                </h2>
              </div>
              <img
                src="https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_23.png"
                className={`h-full smartphone:h-1/2 drop-shadow-2xl transition-all duration-300 ease-in-out 
              group-hover:scale-105`}
                alt="hh"
              />
            </m.section>
          </Link>
          <Link
            to="/TalentArsenal"
            className="smartphone:h-1/4 row-start-2 col-start-6 col-span-2 row-span-3 rounded-sm hover:rounded-xl transition-all duration-500 ease-in-out"
          >
            <m.section
              initial="initial"
              whileInView={hasAnimated ? "":"Inview"}
              variants={animation}
              transition={{ delay: 1, type: "spring", duration: 0.5 }}
              id="skills"
              className="group bg-bkgg text-bk h-full flex flex-col rounded-sm hover:rounded-xl transition-all duration-500 ease-in-out"
            >
              <h1
                className={`my-1  laptop:text-5xl  smartphone:text-5xl  mt-auto mx-10 smartphone:mx-6 group-hover:translate-x-2
               transition-all duration-300 ease-in-out`}
              >
                Skill <span className="text-whitee">Palette</span>
              </h1>
              <h2
                className={`text-md  mb-auto mx-14 smartphone:mx-10 flex gap-2 items-center group-hover:translate-x-4
               transition-all duration-300 ease-in-out`}
              >
                Skills I Bring to the Table
                <ArrowCircleRight
                  className={`text-accent transition-all ease-in-out duration-300 group-hover:translate-x-2`}
                  size={32}
                  weight="duotone"
                />
              </h2>
            </m.section>
          </Link>
          <Link
            to="/Extras"
            className="smartphone:h-1/4 row-start-5 col-start-2 col-span-2 row-span-3 rounded-sm hover:rounded-xl transition-all duration-500 ease-in-out"
          >
            <m.section
              initial="initial"
              whileInView={hasAnimated ? "":"Inview"}
              variants={animation}
              transition={{ delay: 1.5, type: "spring", duration: 0.5 }}
              id="projects"
              className="group bg-bkgg text-bk flex flex-col h-full row-start-5 col-start-2 col-span-2 row-span-3 rounded-sm hover:rounded-xl transition-all duration-500 ease-in-out"
            >
              <h1
                className={`my-1 laptop:text-5xl  smartphone:text-5xl  mt-auto mx-10 smartphone:mx-6  group-hover:translate-x-2 transition-all duration-300 ease-in-out`}
              >
                X-<span className="text-whitee">Tras</span>
              </h1>
              <h2
                className={`text-md mb-auto mx-14 smartphone:mx-10 flex gap-2 items-center group-hover:translate-x-4 transition-all duration-300 ease-in-out`}
              >
                Stuff that I&#x27;m into
                <ArrowCircleRight
                  className={`text-accent opacity-85 transition-all ease-in-out duration-300 group-hover:translate-x-2`}
                  size={32}
                  weight="duotone"
                />
              </h2>
            </m.section>
          </Link>
          <Link
            to="/Work"
            className="smartphone:h-1/4 flex flex-col row-start-5 col-start-4 col-span-4 row-span-3 rounded-xl hover:rounded-sm transition-all duration-500 ease-in-out"
          >
          <m.section
            initial="initial"
            whileInView={hasAnimated ? "":"Inview"}
            variants={animation}
            onAnimationComplete={() => setHasAnimated(false)}
            transition={{ delay: 2, type: "spring", duration: 0.5 }}
            id="Work"
            className="group bg-bk text-whitee  flex flex-col h-full rounded-sm hover:rounded-xl transition-all duration-500 ease-in-out"
          >
            <h1
              className={` my-1  text-7xl smartphone:text-5xl  laptop:mt-auto smartphone:mx-5  mx-14 group-hover:translate-x-2 transition-all duration-300 ease-in-out`}
            >
              My<span className="text-accent"> Work</span>
            </h1>
            <h2
              className={`text-md  smartphone:mx-8 mx-20 mb-auto flex gap-2 items-center group-hover:translate-x-4 transition-all duration-300 ease-in-out`}
            >
              Work that I&#x27;m into
              <ArrowCircleRight
                className={`text-accent opacity-85 transition-all ease-in-out duration-700 group-hover:translate-x-2`}
                size={32}
                weight="duotone"
              />
            </h2>
          </m.section> </Link>
        </m.div>
      </LazyMotion>
    </>
  );
}
