import PropTypes  from "prop-types";
import { m } from "framer-motion" ;
import { HandWaving, LinkedinLogo,InstagramLogo, ArrowCircleUpRight, ArrowCircleUp } from "@phosphor-icons/react"

export function Futter({loc}){
    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    }
    console.log(loc)
return(
    <div className={`${loc?"w-11/12 mt-5 border-y bg-w1 text-bg1":" bg-bg3 text-bg2 "} mx-auto border-whitee h-fit flex  justify-center`}>
    <section  id="Footer" className="flex justify-between items-center smartphone:flex-col  border-white mb-4  w-8/12 smartphone:w-full">
        <div className="group ml-5 p-2 mt-7 smartphone:items-center">
        <m.h1 initial={{y:10, opacity:0.5 }} whileInView={{y:0, opacity:1}} transition={{delay:0.6, type:"tween"}} className="flex smartphone:flex-col smartphone:text-5xl items-end smartphone:items-center text-8xl ubuntu">Drop a hello!<HandWaving className="transition-colors duration-300 ml-2 smartphone:hidden  group-hover:text-green-900" size={100} weight="duotone" /></m.h1>
        <m.h2 initial={{y:10, opacity:0.5 }} whileInView={{y:0, opacity:1}} transition={{delay:0.7, type:"tween"}} className="text-2xl smartphone:text-md text-center smartphone:ml-0 py-3 ibm-plex">Lets create dope stuff together!</m.h2>
        </div>
        <div className="flex flex-col justify-start smartphone:justify-center">
        <ul className="flex smartphone:justify-center ">
            <li className="h-full w-1/5 mr-3 transition-all ease-in-out duration-200 hover:scale-105 hover:-translate-y-1 hover:text-insta p-3/4"><InstagramLogo size={32} weight="duotone" /></li>
            <li className="h-full w-1/5 mx-3 transition-all ease-in-out duration-200 hover:scale-105 hover:-translate-y-1 hover:text-lnkin  p-3/4"><LinkedinLogo size={32} weight="duotone" /></li> 
        </ul>
        <a href="mailto:mohammadbilal.mail@gmail.com?subject=Hi%20Bilal%20-%20[%20Edit%20according%20to%20your%20needs%20]%20"
  className= {`group flex mt-4 ibm-plexregular hover:text-green-900 hover:font-semibold transition-all duration-300`}>Email me here<ArrowCircleUpRight className="mx-1 transition-all duration-500  group-hover:translate-x-1 group-hover:-translate-y-1" size={25} weight="duotone" /></a>
       </div>
    </section>
 <ArrowCircleUp onClick={handleScrollToTop} className="fixed opacity-15 hover:opacity-100 transition-all bottom-20 right-4" size={32} weight="duotone" />

    </div>
)
}
Futter.propTypes = {
    loc: PropTypes.bool,
  };