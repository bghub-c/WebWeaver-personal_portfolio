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
      <section
        className="hidden w-3/4 h-5/6	 z-2 backdrop-blur-md border-l border-accentylt"
      >
        
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
          delay:1.95
          }}
        className="w-full h-1/2 pl flex flex-col justify-center">
          {spaneleh("<h2 id='Hello_world'>","text-3xl laptop:text-xl text-white vt323h")}
          <p className="pl text-3xl smartphone:text-lg text-accentylt vt323">{"Hii!!"}</p>
          {spanelef("</ h2>","text-3xl laptop:text-xl text-white vt323h")}
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
          delay:2.10
          }} 
        className="z-10 row-start-2 flex flex-col justify-start">
        {spaneleh("<h1 id='Yupp!_It's_me'>","text-3xl laptop:text-xl  text-white mt-10 ml-10 vt323h")}
          <p className="pl  text-7xl laptop:text-3xl text-accentylt vt323">
            I&#x27;m Mohd Bilal
            <br />A passionate web developer 
          </p>
          {spanelef("</ h1>", "text-3xl laptop:text-xl  text-white mb-10 ml-10 vt323h")}
        </motion.span>
        <span className="z-10 flex flex-col opacity-100">
          
        </span>
      </section>
    </>
  );
}
