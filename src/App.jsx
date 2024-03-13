import "./App.css";
import { motion } from "framer-motion";
import { Navbar } from "./Components/Navbar";
import { Introduction } from "./Pages/Introduction";
import { Routesgrid } from "./Pages/Routesgrid";
import { Home } from "./Components/Home"; 
import { Skills } from "./Pages/Skills"
import { Routes, Route, useLocation  } from "react-router-dom";
import {AnimatePresence , useScroll, useTransform} from "framer-motion"
function App() {
  const { scrollY }=useScroll();
  const background=useTransform(scrollY, [0,980], ["#8d99ae", "rgb(22,25,27)" ]);
  const scale=useTransform(scrollY, [0,1080], [1,1.02]);
  const location=useLocation();
  const divdisplay=location.pathname=="/"?"view":"hidden";
  return (
    <><Navbar />
    <motion.div  style={{backgroundColor:background , scale}} className={` transition-all duration-300 ease-in-out app w-full h-full fixed top-0 -z-10 flex items-end ${divdisplay}`}>
      <Home></Home>
    </motion.div>
    <div className={`h-screen ${divdisplay}`}></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.25 }}
        id="mainwrapper"
        className="w-screen h-full relative text-white bg-zinc-300 flex flex-col  selection:bg-black selection:text-muted YscrollYProgress-smooth"
      >
    <AnimatePresence >
    <Routes location={location} key={location.key}>
    <Route  path="/" element={ <Routesgrid /> }></Route>
    <Route path="/Introduction" element={<Introduction />}></Route>
    <Route path="/TalentArsenal" element={<Skills />}></Route>
    </Routes>
    </AnimatePresence>
      </motion.div>
    </>
  );
}

export default App;
