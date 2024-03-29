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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.80, ease: "easeInOut" }}
          className="app2 bg-bg1  h-screen w-screen grid grid-cols-8 grid-rows-8 gap-3 smartphone:p-5 smartphone:mt-24 smartphone:flex flex-col"
        >
          <Link
            to="/Introduction"
            className="smartphone:h-1/4 flex flex-col row-start-2 col-start-2 col-span-4 row-span-3 "
          >
            <m.section variants={animation}
              initial="initial"
              whileInView={hasAnimated ? "":"Inview"}
              transition={{ delay: 0.3, type: "spring", duration: 0.2 }}
              id="abt"
              className="bg-gradient-to-br from-white to-w2 group h-full text-bg1 flex justify-between items-center rounded-xl hover:rounded-sm transition-all duration-100 ease-in-out"
            >
              <div className="flex flex-col smartphone:my-3 smartphone:items-center smartphone:justify-center">
                <h1
                  className={`text-7xl laptop:text-6xl smartphone:text-5xl drop-shadow-2xl text-whitee laptop:mt-auto smartphone:mx-5 mx-14
                  group-hover:translate-x-3 transition-all duration-300 ease-in-out ubuntu tracking-wide`}
                >
                  About <span className="text-accent1">Me!</span>
                </h1>
                <h2
                  className={`text-xl laptop:text-lg smartphone:text-sm  mb-auto smartphone:mx-5 mx-20 flex gap-1 items-center 
                group-hover:translate-x-5 transition-all duration-500 ease-in-out ibm-plexmid tracking-tighter`}
                >
                  Lets get personal!
                  <ArrowCircleRight
                    size={32}
                    className={`text-accent1lt opacity-85 transition-all ease-in-out duration-300 group-hover:translate-x-3`}
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
            className="smartphone:h-1/4 row-start-2 col-start-6 col-span-2 row-span-3"
          >
            <m.section
              initial="initial"
              whileInView={hasAnimated ? "":"Inview"}
              variants={animation}
              transition={{ delay: 0.9, type: "spring", duration: 0.2 }}
              id="skills"
              className="group bg-gradient-to-br from-bg2 to-bg1 text-w2 h-full flex flex-col rounded-xl hover:rounded-sm transition-all duration-100 ease-in-out"
            >
              <h1
                className={`my-1  text-6xl laptop:text-5xl  smartphone:text-5xl  mt-auto mx-10 laptop:mx-6 smartphone:mx-6 group-hover:translate-x-2
               transition-all duration-300 ease-in-out ubuntu tracking-wider`}
              >
                Skill <span className="text-accent2">Stack</span>
              </h1>
              <h2
                className={`text-lg smartphone:text-sm  laptop:text-sm mb-auto ml-14 laptop:ml-10 smartphone:mx-10 flex gap-2 items-center group-hover:translate-x-4
               transition-all duration-300 ease-in-out ibm-plexmid tracking-tighter`}
              >
                Skills I Bring to the Table
                <ArrowCircleRight
                  className={`text-accent2lt transition-all ease-in-out duration-300 group-hover:translate-x-2`}
                  size={32}
                  weight="duotone"
                />
              </h2>
            </m.section>
          </Link>
          <Link
            to="/Extras"
            className="smartphone:h-1/4 row-start-5 col-start-2 col-span-2 row-span-3"
          >
            <m.section
              initial="initial"
              whileInView={hasAnimated ? "":"Inview"}
              variants={animation}
              transition={{ delay: 1.4, type: "spring", duration: 0.2 }}
              id="projects"
              className="group bg-gradient-to-br from-accent2 to-accent2lt text-w2 flex flex-col h-full row-start-5 col-start-2 col-span-2 row-span-3 rounded-xl hover:rounded-sm transition-all duration-100 ease-in-out"
            >
              <h1
                className={`my-1 text-6xl laptop:text-5xl  smartphone:text-5xl  mt-auto mx-10 laptop:mx-6 smartphone:mx-6  group-hover:translate-x-2 transition-all duration-300 ease-in-out ubuntu tracking-wider`}
              >
                X-<span className="text-bg1">Tras</span>
              </h1>
              <h2
                className={`text-lg smartphone:text-sm laptop:text-sm mb-auto ml-14 laptop:ml-10 smartphone:mx-10 flex gap-2 items-center group-hover:translate-x-4 transition-all duration-500 ease-in-out ibm-plexmid tracking-tight`}
              >
                Stuff that I&#x27;m into
                <ArrowCircleRight
                  className={`text-bg2 opacity-85 transition-all ease-in-out duration-300 group-hover:translate-x-2`}
                  size={32}
                  weight="duotone"
                />
              </h2>
            </m.section>
          </Link>
          <Link
            to="/Work"
            className="smartphone:h-1/4 flex flex-col row-start-5 col-start-4 col-span-4 row-span-3"
          >
          <m.section
            initial="initial"
            whileInView={hasAnimated ? "":"Inview"}
            variants={animation}
            onAnimationComplete={() => setHasAnimated(false)}
            transition={{ delay: 1.9, type: "spring", duration: 0.2 }}
            id="Work"
            className="group h-full bg-gradient-to-br from-accent1lt to-accent1 text-w1  flex flex-col justify-center rounded-xl hover:rounded-sm transition-all duration-500 ease-in-out"
          >
            <div className="flex flex-col smartphone:my-3 smartphone:justify-center">
                <h1
                  className={`text-7xl laptop:text-6xl smartphone:text-5xl drop-shadow-2xl text-whitee laptop:mt-auto smartphone:mx-5 mx-14
                  group-hover:translate-x-3 transition-all duration-300 ease-in-out ubuntu tracking-wider`}
                >
                  My <span className="text-bg2">Work</span>
                </h1>
                <h2
                  className={`text-xl laptop:text-lg smartphone:text-sm  mb-auto mt-2 smartphone:mx-8 mx-20 flex gap-1 items-center 
                  group-hover:translate-x-5 transition-all duration-300 ease-in-out ibm-plexmid tracking-tighter`}
                >
                  My Creative Endeavors
                  <ArrowCircleRight
                    size={32}
                    className={`text-bg3 opacity-85 transition-all ease-in-out duration-300 group-hover:translate-x-3`}
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
