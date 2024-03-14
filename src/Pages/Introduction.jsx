import { motion } from "framer-motion";

import pfp from '../assets/billu.jpg'
export function Introduction() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-full w-screen flex justify-center bg-zinc-800"
      >
        <div className="w-5/12">
            <h1  className="text-8xl coolfont ml-6 mt-60 text-whitee flex items-end">Hello There <span className="text-redd ml-4">!</span></h1>
            <motion.h2 initial={{y:300}} animate={{y:0}} transition={{delay:1.5}} className=" mt-16 text-4xl text-whitee ubuntu">I am <span className="coolfont mr-2 ">Mohd Bilal</span>, a BTech student deeply passionate about web development, I embody a genuine enthusiasm for crafting exceptional digital experiences.</motion.h2>
            <motion.div initial={{y:320}} animate={{y:0}} transition={{delay:1.6}} className="w-full mt-12 grid grid-flow-col smartphone:grid-flow-row"> 
            <p className="text-whitee  text-2xl tracking-tighter mt-6 ibm-plexregular">{" You can call me an enthusiast workaholic, or maybe just a web wizard in the making. With a relentless passion for coding and creating. I'm on mission to keep ethical standards in check while sprinkling a dash of creativity into every project, all about delivering results that make your jaw drop and your users say 'Wow'. So, if you want a web developer who's a little too excited about crafting digital magic, you've found your guy."}</p>
            <img className="w-full h-full translate-x-20" src={pfp} alt="" />
            </motion.div>
        </div>
        
      </motion.section>
    </>
  );
}