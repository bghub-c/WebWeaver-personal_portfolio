import { motion } from "framer-motion"
import { InstagramLogo, UserCircle,TwitterLogo,GithubLogo,LinkedinLogo  } from "@phosphor-icons/react";

export function Navbar(){
    return(
        <>
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
        className="w-screen h-nav backdrop-blur-xl text-white flex tablet:flex-col justify-between items-center sticky top-0">
            <h1 className="vt323h  text-5xl">{"</ "}MohdBilal{">"}</h1>
            <ul className="flex backdrop-blur-lg">
                <li className="h-full w-1/5 m-3 backdrop-brightness-200 text-white transition-all ease-in-out duration-200 hover:scale-105 hover:-translate-y-1 hover:text-insta p-3/4"><InstagramLogo size={32} weight="duotone" /></li>
                <li className="h-full w-1/5 m-3 backdrop-brightness-200 text-white transition-all ease-in-out duration-200 hover:scale-105 hover:-translate-y-1 hover:text-lnkin  p-3/4"><LinkedinLogo size={32} weight="duotone" /></li>
                <li className="h-full w-1/5 m-3 backdrop-brightness-200 text-white transition-all ease-in-out duration-200 hover:scale-105 hover:-translate-y-1 hover:text-zinc-300  p-3/4"><GithubLogo size={32} weight="duotone" /></li>
                <li className="h-full w-1/5 m-3 backdrop-brightness-200 text-white transition-all ease-in-out duration-200 hover:scale-105 hover:-translate-y-1 hover:text-blue-600  p-3/4"><TwitterLogo size={32} weight="duotone" /></li>
                <li className="h-full w-1/5 m-3 backdrop-brightness-200 text-white transition-all ease-in-out duration-200 hover:scale-105 hover:-translate-y-1 hover:text-watspp p-3/4"><UserCircle size={32} weight="duotone" /></li>
            </ul>
        </motion.nav>
        </>
    )
}