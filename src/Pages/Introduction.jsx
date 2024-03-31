import { m } from "framer-motion";
import pfp from "../assets/billu.jpg";
export function Introduction() {
  window.scrollTo({top:0})
  return (
    <>
      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.50, ease:"easeInOut" }}
        className="h-full w-screen flex justify-center bg-bg2 text-w1"
      >
        <div className="w-1/2 smartphone:w-11/12">
          <div className="overflow-hidden">
          <m.h1 initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.5, duration: 0.5, ease: "easeInOut", type:"spring" }} className="text-7xl smartphone:text-4xl coolfont ml-6 mt-56 laptop:mt-36 smartphone:mt-16  flex items-end tracking-widest drop-shadow-text-lg">
            Hello There <span className="text-accent1 ml-4 h-full">!</span>
          </m.h1></div><div className="overflow-hidden">
          <m.h2
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.7, duration: 0.5, ease: "easeInOut", type:"spring" }}
            className=" mt-16 laptop:mt-14 text-3xl laptop:text-2xl smartphone:text-lg smartphone:text-center tracking-normal  ubuntu"
          >
            Ahoy! <span className="coolfont mr-2 ml-2 text-accent1 tracking-widest">Mohd Bilal</span>, your web wizard from Lucknow, India. <br className="smartphone:hidden" />
            <span className=" tracking-widestestcum ml-1">Crafting</span>,{" digital marvels? You bet! Join me, and"} <br className="smartphone:hidden" /> {"let's "}
            <span className=" tracking-widestestcum ml-1 ">weave wonders</span> together. Cheers!
          </m.h2></div>
          <m.div
            initial={{ y: 300, opacity:0.45 }}
            animate={{ y: 0, opacity:1 }}
            transition={{ delay: 1.95, duration: 0.75, ease: "easeInOut", type:"tween" }}
            className="w-full mt-12 grid grid-flow-col smartphone:grid-flow-row smartphone:text-center tracking-tight"
          >
            <p className="  text-2xl laptop:text-lg smartphone:text-xl tracking-tighter mt-6 smartphone:mt-1 ibm-plexregular leading-10">
            Consider me your go-getter enthusiast
              or your friendly neighborhood web wizard. {"I'm"} all about coding and creating with gusto, infusing every project with a splash of creativity while keeping ethics in check.<span className="tracking-wide font-semibold text-accent1">
                {" My mission?"}
              </span>  To deliver jaw-dropping results that make both you and your users say 
              
              <span className="tracking-wide text-accent1 font-bold">
                {" 'Wow'"}
              </span>
              {".So, if you're after a web developer who's totally hooked on crafting digital magic, look no further—I'm your guy!"}
            </p>
            <div className="smartphone:mt-10 smartphone:flex justify-center">
              <img
                className="h-3/4 translate-x-14 -translate-y-24 laptop:translate-x-10 laptop:-translate-y-14 smartphone:translate-x-0 smartphone:translate-y-0 rounded-sm grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden"
                src={pfp}
                alt=""
              />
            </div>
          </m.div>
        </div>
      </m.section>
    </>
  );
}
