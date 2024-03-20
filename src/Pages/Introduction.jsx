import { motion } from "framer-motion";
import pfp from "../assets/billu.jpg";
export function Introduction() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.75, duration: 0.75, type: "spring" }}
        className="h-full w-screen flex justify-center bg-black"
      >
        <div className="w-1/2 smartphone:w-11/12">
          <h1 className="text-7xl smartphone:text-4xl coolfont ml-6 mt-60 smartphone:mt-16 text-whitee flex items-end">
            Hello There <span className="text-redd ml-4 h-full">!</span>
          </h1>
          <motion.h2
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            transition={{ delay: 2.25, duration: 0.5, type: "spring" }}
            className=" mt-16 text-3xl smartphone:text-lg smartphone:text-center text-whitee ubuntu"
          >
            Ahoy! <span className="coolfont mr-2 ml-2 text-redd">Mohd Bilal</span>, your web wizard from Lucknow, India. <br className="smartphone:hidden" />
            <span className=" tracking-widestestcum ml-1">Crafting</span>,{" digital marvels? You bet! Join me, and"} <br className="smartphone:hidden" /> {"let's "}
            <span className=" tracking-widestestcum ml-1 ">weave wonders</span> together. Cheers!
          </motion.h2>
          <motion.div
            initial={{ y: 320 }}
            animate={{ y: 0 }}
            transition={{ delay: 2.75, duration: 0.5, type: "spring" }}
            className="w-full mt-12 grid grid-flow-col smartphone:grid-flow-row smartphone:text-center"
          >
            <p className="text-whitee  text-2xl smartphone:text-xl tracking-tighter mt-6 smartphone:mt-1 ibm-plexregular leading-10">
            Consider me your go-getter enthusiast
              or your friendly neighborhood web wizard. {"I'm"} all about coding and creating with gusto, infusing every project with a splash of creativity while keeping ethics in check.<span className="tracking-wide text-redd">
                {" My mission?"}
              </span>  To deliver jaw-dropping results that make both you and your users say 
              
              <span className="tracking-wide text-redd font-semibold">
                {" 'Wow'"}
              </span>
              {".So, if you're after a web developer who's totally hooked on crafting digital magic, look no further—I'm your guy!"}
            </p>
            <div className="smartphone:mt-10 smartphone:flex justify-center">
              <img
                className="h-3/4 translate-x-14 -translate-y-24 smartphone:translate-x-0 smartphone:translate-y-0 rounded-sm grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden"
                src={pfp}
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
