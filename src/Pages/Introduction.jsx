import { motion } from "framer-motion";
import pfp from '../assets/billu.jpg'
export function Introduction() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-full w-screen flex justify-center bg-black"
      >
        <div className="w-1/2">
            <h1  className="text-8xl coolfont ml-6 mt-60 text-whitee flex items-end">Hello There <span className="text-redd ml-4">!</span></h1>
            <motion.h2 initial={{y:300}} animate={{y:0}} transition={{delay:.80, duration:0.3, type:"spring" }} className=" mt-16 text-4xl text-whitee ubuntu">I am <span className="coolfont mr-2 text-redd">Mohd Bilal</span>, a B.Tech student deeply passionate about<br /><span className=" tracking-widestestcum ">web development</span>, I embody a genuine <span className=" tracking-widestestcum ">enthusiasm</span>  for crafting exceptional digital experiences.</motion.h2>
            <motion.div initial={{y:320}} animate={{y:0}} transition={{delay:1.2, duration:0.4, type:"spring" }} className="w-full mt-12 grid grid-flow-col smartphone:grid-flow-row"> 
            <p className="text-whitee  text-2xl tracking-tighter mt-6 ibm-plexregular leading-10">{" You can call me an"} <span className="text-redd">{"enthusiast workaholic"}</span>{", or maybe just a web wizard in the making. With a relentless passion for coding and creating. I'm on mission to keep ethical standards in check while sprinkling a dash of creativity into every project, all about delivering results that make your jaw drop and your users say "}<span className="tracking-wide text-redd font-semibold">{"'Wow'"}</span>{".So, if you want a web developer who's a little too excited about crafting digital magic, you've found your guy."}</p>
            <div> <img className="h-3/4 translate-x-16 -translate-y-5 rounded-lg grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden" src={pfp} alt="" /></div>
            </motion.div>
        </div>
      </motion.section>
    </>
  );
}