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
              className="bg-gradient-to-br from-white to-bkgg group h-full text-whitee flex justify-between items-center rounded-sm hover:rounded-xl transition-all duration-500 ease-in-out"
            >
              <div className="flex flex-col smartphone:my-3 smartphone:items-center smartphone:justify-center">
                <h1
                  className={`text-7xl smartphone:text-5xl drop-shadow-2xl text-whitee laptop:mt-auto smartphone:mx-5 mx-14
                  group-hover:translate-x-3 transition-all duration-300 ease-in-out ubuntu`}
                >
                  About <span className="text-accent">Me!</span>
                </h1>
                <h2
                  className={`text-xl smartphone:text-sm  mb-auto smartphone:mx-5 mx-20 flex gap-1 items-center 
                group-hover:translate-x-5 transition-all duration-500 ease-in-out ibm-plexmid`}
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
              className="group bg-gradient-to-tr from-bkgg to-white text-whitee h-full flex flex-col rounded-sm hover:rounded-xl transition-all duration-500 ease-in-out"
            >
              <h1
                className={`my-1  text-6xl  smartphone:text-5xl  mt-auto mx-10 smartphone:mx-6 group-hover:translate-x-2
               transition-all duration-300 ease-in-out ubuntu`}
              >
                Skill <span className="text-bkgg">Stack</span>
              </h1>
              <h2
                className={`text-lg smartphone:text-sm  mb-auto mx-14 smartphone:mx-10 flex gap-2 items-center group-hover:translate-x-4
               transition-all duration-300 ease-in-out ibm-plexmid`}
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
              className="group bg-gradient-to-bl from-bkgg to-white text-whitee flex flex-col h-full row-start-5 col-start-2 col-span-2 row-span-3 rounded-sm hover:rounded-xl transition-all duration-500 ease-in-out"
            >
              <h1
                className={`my-1 text-6xl  smartphone:text-5xl  mt-auto mx-10 smartphone:mx-6  group-hover:translate-x-2 transition-all duration-300 ease-in-out ubuntu`}
              >
                X-<span className="text-bkgg">Tras</span>
              </h1>
              <h2
                className={`text-lg smartphone:text-sm mb-auto mx-14 smartphone:mx-10 flex gap-2 items-center group-hover:translate-x-4 transition-all duration-500 ease-in-out ibm-plexmid`}
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
            className="group h-full bg-gradient-to-tl from-white to-bkgg text-whitee  flex flex-col justify-center rounded-sm hover:rounded-xl transition-all duration-500 ease-in-out"
          >
            <div className="flex flex-col smartphone:my-3 smartphone:justify-center">
                <h1
                  className={`text-7xl smartphone:text-5xl drop-shadow-2xl text-whitee laptop:mt-auto smartphone:mx-5 mx-14
                  group-hover:translate-x-3 transition-all duration-300 ease-in-out ubuntu`}
                >
                  My <span className="text-accent">Work</span>
                </h1>
                <h2
                  className={`text-xl smartphone:text-sm  mb-auto smartphone:mx-8 mx-20 flex gap-1 items-center 
                  group-hover:translate-x-5 transition-all duration-300 ease-in-out ibm-plexmid`}
                >
                  My Creative Endeavors
                  <ArrowCircleRight
                    size={32}
                    className={`text-accent opacity-85 transition-all ease-in-out duration-300 group-hover:translate-x-3`}
                    weight="duotone"
                  />
                </h2>
              </div>
          </m.section> </Link>
        </m.div>
      </LazyMotion>
    </>
  );
}
