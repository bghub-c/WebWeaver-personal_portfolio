import "./App.css";

import { Home } from "./Components/Home";
import { About } from "./Components/About";
function App() {
  return (
    <div
      id="mainwrapper"
      className="w-screen text-white h-full flex flex-col items-center justify-center selection:bg-black selection:text-muted scroll-smooth"
    >
      <div className="absolute w-screen h-screen top-0 text-accentylt z-1">
        <svg
        className="hover:text-white transition-all duration-700 "
          id="visual"
          viewBox="0 0 1440 824"
          width="100vw"
          height="100vh"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <g >
            <g transform="translate(800, 40) rotate(65) scale(0.5)">
              <path
                d="M0 -129.5L112.2 64.8L-112.2 64.8Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.2%"
              ></path>
            </g>
            <g transform="translate(650 45) rotate(25)">
              <path
                d="M0 -129.5L112.2 64.8L-112.2 64.8Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.2%"
              ></path>
            </g>
            <g transform="translate(267 490)">
              <rect
                x="-50"
                y="-50"
                width="100"
                height="100"
                fill="#297EA6"
              ></rect>
            </g>
            <g transform="translate(750 600)">
              <circle
                cx="0"
                cy="0"
                r="150"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.2%"
              ></circle>
            </g>
            <g transform="translate(380 120) rotate(20)">
              <rect
                x="-30"
                y="-30"
                width="55"
                height="55"
                stroke="currentColor"
                fill="none"
              ></rect>
            </g>
            <g transform="translate(45 120) ">
              <circle
                cx="0"
                cy="0"
                r="100"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              ></circle>
            </g>
            <g transform="translate(595 300) rotate(78)">
              <rect
                x="-20"
                y="-20"
                width="30"
                height="30"
                stroke="currentColor"
                fill="none"
              ></rect>
            </g>
            <g transform="translate(750 200)">
              <circle
                cx="0"
                cy="0"
                r="30"
                stroke="currentColor"
                fill="none"
              ></circle>
            </g>
            <g transform="translate(150 450)">
              <rect
                x="-25"
                y="-25"
                width="50"
                height="50"
                stroke="currentColor"
                fill="none"
              ></rect>
            </g>
          </g>
        </svg>
      </div>

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
      <div className="w-screen h-screen flex justify-center items-center">
        <Home />
      </div>
      <div className="w-screen h-screen ">
        <About></About>
      </div>
    </div>
  );
}

export default App;
