import "./App.css";
import { motion } from "framer-motion";
import { Navbar } from "./Components/Navbar";
import { Introduction } from "./Pages/Introduction";
import { Routesgrid } from "./Pages/Routesgrid";
import { Skills } from "./Pages/Skills"
import { Routes, Route, useLocation  } from "react-router-dom";
import {AnimatePresence} from "framer-motion"
function App() {
  const location=useLocation();
  return (
    <><Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.25 }}
        id="mainwrapper"
        className="w-screen h-full relative text-white bg-zinc-300 flex flex-col  selection:bg-black selection:text-muted scroll-smooth"
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
