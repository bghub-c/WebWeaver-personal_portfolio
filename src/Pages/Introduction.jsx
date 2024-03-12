import { motion } from "framer-motion";

import pfp from '../assets/billu.jpg'
export function Introduction() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-full w-screen -top-2 flex justify-center bg-zinc-100"
      >
        <div className="w-4/5">
            <h1 className="text-8xl coolfont ml-12 mt-60 text-zinc-800">Hello There!</h1>
            <h2 className="text-4xl mt-20 text-zinc-800"> Well, here I am, a BTech student deeply passionate about web development, I embody a genuine enthusiasm for crafting exceptional digital experiences.</h2>
            <div className="w-full mt-12 grid grid-flow-col"> 
            <p className="text-zinc-700 text-5xl mt-8">{" You can call me an enthusiast workaholic, or maybe just a web wizard in the making. With a relentless passion for coding and creating. I'm on mission to keep ethical standards in check while sprinkling a dash of creativity into every project, all about delivering results that make your jaw drop and your users say 'Wow'. So, if you want a web developer who's a little too excited about crafting digital magic, you've found your guy."}</p>
            <img className="w-full h-1/2" src={pfp} alt="" />
            </div>
        </div>
        
      </motion.section>
    </>
  );
}