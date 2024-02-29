import './App.css'
import { Code } from "@phosphor-icons/react"
import { motion } from 'framer-motion'

import { Home } from './Components/Home'
import { About } from './Components/About'
function App() {

  return (
    <div
        id="mainwrapper"
        className="h-full flex flex-col items-center justify-center selection:bg-black selection:text-muted scroll-smooth"
      >

      <motion.div
      className='absolute w-2/6 -right-24 top-0 text-accentylt z-1'
      initial={{
        y:-200
      }}
      animate={{
        y:-95
      }}
      transition={{
        duration: 2.5,
        type: "spring",
        mass:5
      }}
      >
      <Code
      size={"100%"}
      weight="light"
      />
      </motion.div> 
      <div className='w-screen h-screen flex justify-center items-center py-px'>
      <Home />
      </div>
      <div className='w-screen h-screen py-px'>
      <About />
      </div>
    
    
    </div>
  )
}

export default App
