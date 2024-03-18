import { motion } from "framer-motion" 
import { HandWaving, LinkedinLogo,InstagramLogo, ArrowCircleUpRight, ArrowCircleUp } from "@phosphor-icons/react"
import { useState } from "react";

export function Futter(){
    const [linkhover, changestate ]=useState(false);
    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    }
return(
    <div className="bg-black w-screen h-fit flex text-whitee  justify-center">
    <section  id="Footer" className="flex justify-between items-center smartphone:flex-col  border-white mb-4  w-8/12 smartphone:w-full">
        <div className="ml-5 p-2 mt-7 smartphone:items-center">
        <motion.h1 initial={{y:10, opacity:0.5 }} whileInView={{y:0, opacity:1}} transition={{delay:0.6, type:"tween"}} className="flex smartphone:flex-col smartphone:text-7xl items-end smartphone:items-center text-8xl ubuntu">Drop a hello!<HandWaving className="ml-2 smartphone:hidden" size={100} weight="duotone" /></motion.h1>
        <motion.h2 initial={{y:10, opacity:0.5 }} whileInView={{y:0, opacity:1}} transition={{delay:0.7, type:"tween"}} className="text-2xl smartphone:text-lg text-center smartphone:ml-0 py-3 ibm-plex">Lets create dope stuff together!</motion.h2>
        </div>
        <div className="flex flex-col justify-start smartphone:justify-center">
        <ul className="flex smartphone:justify-center ">
            <li className="h-full w-1/5 mr-3 backdrop-brightness-200 text-white transition-all ease-in-out duration-200 hover:scale-105 hover:-translate-y-1 hover:text-insta p-3/4"><InstagramLogo size={32} weight="duotone" /></li>
            <li className="h-full w-1/5 mx-3 backdrop-brightness-200 text-white transition-all ease-in-out duration-200 hover:scale-105 hover:-translate-y-1 hover:text-lnkin  p-3/4"><LinkedinLogo size={32} weight="duotone" /></li> 
        </ul>
        <a href="mailto:mohammadbilal.mail@gmail.com" onMouseEnter={() => {
              changestate(true);
            }} onMouseLeave={() => {
                changestate(false);
              }} className= {` flex mt-4 ibm-plexregular hover:text-yellow-500`}>Email me here<ArrowCircleUpRight className={`mx-1 transition-all duration-300 ${linkhover?"translate-x-1 -translate-y-1":""}`} size={25} weight="duotone" /></a>
       </div>
    </section>
 <ArrowCircleUp onClick={handleScrollToTop} className="fixed opacity-15 hover:opacity-100 transition-all bottom-20 right-4" size={32} weight="duotone" />

    </div>
)
}