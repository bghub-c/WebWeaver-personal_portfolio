import { motion } from 'framer-motion'
export function About(){
    
  const spaneleh = (s,classes) => {
    return <span className={classes}>{s}</span>;
  };
  const spanelef = (s,classes) => {
    return <span className={classes}>{s}</span>;
  };
          return (
            <motion.section
        className="w-11/12  z-20 grid grid-rows-2 backdrop-blur-sm backdrop-brightness-100 hover:rounded-2xl duration-200 border-l border-r border-accentylt transition-all"
        initial={{
          scale:0,
        }}
        animate={{
          scale:1,
        }}
        transition={{
          duration: 1.5,
          type: "spring"
        }}
      >
        <span className=" flex flex-col opacity-100">
          {spaneleh("<h2 id='Hello_world'>","text-3xl text-white mt-10 ml-10 vt323h")}
          <p className="pl-16 p-5 text-6xl text-accentylt vt323">{"Hii!!"}</p>
          {spanelef("</ h2>","text-3xl text-white mb-10 ml-10 vt323")}
        </span>
        <span className=" flex flex-col opacity-100">
        {spaneleh("<h1 id='Yupp!_It's_me'>","text-3xl text-white mt-10 ml-10 vt323h")}
          <p className="pl-14 p-5 text-7xl text-accentylt vt323">
            {"I'm Mohd Bilal"} 
            <br />A passionate web developer 
          </p>
          {spanelef("</ h1>", "text-3xl text-white mb-10 ml-10 vt323h")}
        </span>
      </motion.section>
          )
}