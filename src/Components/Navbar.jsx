import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { InstagramLogo, Download,TwitterLogo,GithubLogo,LinkedinLogo,ArrowCircleLeft  } from "@phosphor-icons/react";
export function Navbar({loc}){
    console.log(loc)
    return(
        <div className="flex ">
        <Link to="/" className={`${loc?"view":"hidden"} text-white hover:text-green-500 flex justify-center items-center`} ><ArrowCircleLeft size={32} weight="duotone" /></Link>
        <motion.nav 
        initial={{
            y:-200
        }}
        animate={{
            y:0
        }}
        transition={{
            duration:0.5,
            delay:0.5,
            ease:"easeInOut"
        }}
        className="w-screen h-nav backdrop-blur-xl pb-1 text-white flex tablet:flex-col justify-between items-center sticky top-0">
            <h1 className="ubuntu transition-all text-5xl"> <span className="text-zinc-200 pr-3" >{"<"}</span>MohdBilal<span className="text-zinc-200 pl-5">{"/>"}</span> </h1>
            <ul className="flex backdrop-blur-lg">
                <li className="h-full w-1/5 m-3 backdrop-brightness-200 text-white transition-all ease-in-out duration-200 hover:scale-105 hover:-translate-y-1 hover:text-insta p-3/4"><InstagramLogo size={32} weight="duotone" /></li>
                <li className="h-full w-1/5 m-3 backdrop-brightness-200 text-white transition-all ease-in-out duration-200 hover:scale-105 hover:-translate-y-1 hover:text-lnkin  p-3/4"><LinkedinLogo size={32} weight="duotone" /></li>
                <li className="h-full w-1/5 m-3 backdrop-brightness-200 text-white transition-all ease-in-out duration-200 hover:scale-105 hover:-translate-y-1 hover:text-zinc-500  p-3/4"><GithubLogo size={32} weight="duotone" /></li>
                <li className="h-full w-1/5 m-3 backdrop-brightness-200 text-white transition-all ease-in-out duration-200 hover:scale-105 hover:-translate-y-1 hover:text-blue-500  p-3/4"><TwitterLogo size={32} weight="duotone" /></li>
                <li className="h-full my-3 backdrop-brightness-200 text-black ubuntu transition-all ease-in-out duration-700 hover:text-black hover:bg-watspp w-full bg-whitee rounded-full overflow-hidden"><a href="/Resume (4).pdf" download className="flex gap-1  items-center text-sm pl-2">Download resume<Download className="bg-watspp p-1" size={32} weight="duotone" /></a></li>
            </ul>
        </motion.nav>
        </div>
    )
}
Navbar.propTypes = {
    loc: PropTypes.bool.isRequired,
  };