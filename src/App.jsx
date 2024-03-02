import './App.css'
import { Code } from "@phosphor-icons/react"
import { motion } from 'framer-motion'

import { Home } from './Components/Home'
import { About } from './Components/About'
import { LeftSidebar } from './Components/LeftSidebar'
function App() {

  return (
    <div
        id="mainwrapper"
        className="h-full flex flex-col items-center justify-center selection:bg-black selection:text-muted scroll-smooth"
      >
        <LeftSidebar/>
      <motion.div
      className='absolute w-2/6 -right-24 top-0 text-accentylt z-1'
      layout
      initial={{
        x:2000,
        opacity:0
      }}
      animate={{
        x:50,
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
      </motion.div> 
      <div className='w-screen h-screen flex justify-center items-center py-4 px-16'>
      <Home />
      </div>
      <div className='w-screen h-screen '>
      <About></About>
      </div>
    
    
    </div>
  )
}

export default App
