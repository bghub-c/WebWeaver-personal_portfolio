import "./App.css";

import { Home } from "./Components/Home";
import { About } from "./Components/About";
function App() {
  return (
    <div
      id="mainwrapper"
      className="w-screen text-white h-full flex flex-col items-center justify-center selection:bg-black selection:text-muted scroll-smooth"
    >
      

      {/* 
     import { Code } from "@phosphor-icons/react"
import { motion } from 'framer-motion'
     <motion.div
      className='  absolute w-2/6 -right-24 top-0 text-accentylt z-1'
      layout
      initial={{
        x:0,
        opacity:0
      }}
      animate={{
        x:0,
        opacity:1
      }}
      transition={{
        type: "spring",
      }}
      >
      <Code
      size={"100%"}
      weight="light"
      />
      </motion.div>  */}
      <div className="app w-screen h-screen flex justify-start items-end">
        <Home />
      </div>
      <div className="w-screen h-screen ">
        <About></About>
      </div>
    </div>
  );
}

export default App;
