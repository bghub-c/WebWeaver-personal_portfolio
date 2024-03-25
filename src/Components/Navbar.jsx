import { m } from "framer-motion"; import { Link } from "react-router-dom"; import PropTypes from 'prop-types'; import { InstagramLogo, Download,TwitterLogo,GithubLogo,LinkedinLogo,ArrowCircleLeft  } from "@phosphor-icons/react";
export function Navbar({loc}){
    var accentcol="";
    
    switch(loc){
        case "/TalentArsenal":{ accentcol="text-accent2"; break}
        case "/Extras":{ accentcol="text-accent2lt"; break}
        case "/work":{ accentcol="text-accent2lt"; break}
        default:{{ accentcol="text-accent3"}}
    }
    console.log(accentcol)
    return(
        
        <div className="flex ">
        <Link to="/" className={`${loc!="/"?"view":"hidden"} backdrop-blur-xl backdrop-brightness-75 text-w1 hover:text-red-700 flex justify-center items-center`} ><ArrowCircleLeft size={32} weight="duotone" /></Link>
        <m.nav 
        initial={{
            y:-200
        }}
        animate={{
            y:0
        }}
        transition={{
            duration:0.5,
            delay:0.75,
            ease:"easeInOut"
        }}
        className={`w-screen h-nav backdrop-brightness-75 pb-2 transition-colors ${loc!="/"?"text-w1":"text-bg1"}   flex tablet:flex-col smartphone:flex-col justify-between items-center sticky top-0`}>
            <a href="/"><h1 className="ubuntu transition-all text-5xl"> <span className={`${accentcol} pr-3`} >{"<"}</span>MohdBilal<span className={`${accentcol} pl-5`}>{"/>"}</span> </h1></a>
            <ul className=" flex items-center">
                <li className="h-full w-1/5 m-3 backdrop-brightness-200  transition-all ease-in-out duration-200 hover:scale-105 hover:-translate-y-1 hover:text-insta p-3/4"> <a target="_blank" href="https://www.instagram.com/mohd.bilal__?igsh=MW9ydDcwcTR4dmVjaQ=="><InstagramLogo size={32} weight="duotone" /></a></li>
                <li className="h-full w-1/5 m-3 backdrop-brightness-200  transition-all ease-in-out duration-200 hover:scale-105 hover:-translate-y-1 hover:text-lnkin  p-3/4"> <a target="_blank" href="https://www.linkedin.com/in/mohd--bilal--?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><LinkedinLogo size={32} weight="duotone" /> </a></li>
                <li className="h-full w-1/5 m-3 backdrop-brightness-200  transition-all ease-in-out duration-200 hover:scale-105 hover:-translate-y-1 hover:text-zinc-500  p-3/4"> <a target="_blank" href="https://github.com/bghub-c"><GithubLogo size={32} weight="duotone" /> </a></li>
                <li className="h-full w-1/5 m-3 backdrop-brightness-200  transition-all ease-in-out duration-200 hover:scale-105 hover:-translate-y-1 hover:text-blue-500  p-3/4"> <a target="_blank" href=""><TwitterLogo size={32} weight="duotone" /> </a></li>
                <li className="h-full my-3 border-2 border-w1 ubuntu transition-all ease-in-out duration-700 hover:text-black hover:bg-watspp w-full bg-bk rounded-full overflow-hidden"><a href="/Mohd Bilal.pdf" download className="flex gap-1  items-center text-md smartphone:pr-2 pl-2">Resume<Download className=" p-1 smartphone:mr-0 mr-1" size={32} weight="duotone" /></a></li>
            </ul>
        </m.nav>
        </div>
    )
}
Navbar.propTypes = {
    loc: PropTypes.bool.isRequired,
  };