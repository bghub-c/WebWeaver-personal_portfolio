//assests import

import { motion } from "framer-motion";
export function Home() {
  const spaneleh = (s,classes) => {
    return <span className={classes}>{s}</span>;
  };
  const spanelef = (s,classes) => {
    return <span className={classes}>{s}</span>;
  };
  return (
    <>
      <motion.section
        className="w-full h-full laptop:m-0 z-20 grid grid-rows-2 grid-cols-2 backdrop-blur-sm backdrop-brightness-100 hover:rounded-2xl duration-200 border-l overflow-hidden border-accentylt transition-all"
        layout
        initial={{
          opacity:0,
          x:-100
        }}
        whileInView={{
          opacity:1,
          x:0
        }}
        transition={{
          delay:1,
          ease:"backInout",
          type: "spring"
          }
        }
      >
        <div className="absolute inset-0 bg-white opacity-30 z-0"></div>
        <motion.span 
        initial={{
          opacity:0,
          x:-10
        }}
        animate={{
          opacity:1,
          x:10
        }}
        transition={{
          delay:2
          }}
        className="z-10 flex flex-col opacity-100">
          {spaneleh("<h2 id='Hello_world'>","text-3xl laptop:text-xl text-white mt-10 ml-10 vt323h")}
          <p className="pl  text-6xl laptop:text-5xl  text-accentylt vt323">{"Hii!!"}</p>
          {spanelef("</ h2>","text-3xl laptop:text-xl  text-white mb-10 ml-10 vt323")}
        </motion.span>
        <motion.span
        initial={{
          opacity:0,
          x:-10
        }}
        animate={{
          opacity:1,
          x:10
        }}
        transition={{
          delay:2.75
          }} 
        className="z-10 row-start-2 flex flex-col opacity-100">
        {spaneleh("<h1 id='Yupp!_It's_me'>","text-3xl laptop:text-xl  text-white mt-10 ml-10 vt323h")}
          <p className="pl  text-7xl laptop:text-5xl text-accentylt vt323">
            {"I'm Mohd Bilal"} 
            <br />A passionate web developer 
          </p>
          {spanelef("</ h1>", "text-3xl laptop:text-xl  text-white mb-10 ml-10 vt323h")}
        </motion.span>
        <span className="z-10 flex flex-col opacity-100">
          
        </span>
      </motion.section>
    </>
  );
}
