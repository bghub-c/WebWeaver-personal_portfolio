import { motion } from "framer-motion"

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
            delay:0.5
        }}
        className="w-screen h-nav  text-white flex tablet:flex-col justify-between items-center sticky top-0">
            <h1 className="vt323h  text-5xl">{"</ "}MohdBilal{">"}</h1>
            <ul className="flex backdrop-blur-lg">
                <li className="h-full w-1/5 m-3 backdrop-brightness-200 text-white p-3/4">1st</li>
                <li className="h-full w-1/5 m-3 backdrop-brightness-200 text-white p-3/4">2nd</li>
                <li className="h-full w-1/5 m-3 backdrop-brightness-200 text-white p-3/4">3rd</li>
                <li className="h-full w-1/5 m-3 backdrop-brightness-200 text-white p-3/4">4th</li>
                <li className="h-full w-1/5 m-3 backdrop-brightness-200 text-white p-3/4">5th</li>
            </ul>
        </motion.nav>
        </>
    )
}