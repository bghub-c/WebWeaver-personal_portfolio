import "./App.css";
import { motion } from "framer-motion";
import { Navbar } from "./Components/Navbar";
import { Futter } from "./Components/Futter";
import { Introduction } from "./Pages/Introduction";
import { Routesgrid } from "./Pages/Routesgrid";
import { Home } from "./Components/Home";
import { Skills } from "./Pages/Skills";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, useScroll, useTransform } from "framer-motion";
function App() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 1080], [1, 1.02]);
  const location = useLocation();
  const divdisplay = location.pathname == "/" ? "view" : "hidden";
  return (
    <>
      <Navbar loc={location.pathname != "/"}/>
      <motion.div
        style={{ scale }}
        className={`app transition-all duration-300 ease-in-out w-full h-full fixed top-0 -z-10 flex items-end ${divdisplay}`}
      >
        <Home />
      </motion.div>
      <div className={`h-screen ${divdisplay}`}></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.25 }}
        id="mainwrapper"
        className="w-screen h-full relative text-white bg-black flex flex-col scroll-smooth"
      >
        <AnimatePresence>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Routesgrid />}></Route>
            <Route path="/Introduction" element={<Introduction />}></Route>
            <Route path="/TalentArsenal" element={<Skills />}></Route>
          </Routes>
        </AnimatePresence>
      </motion.div>
      <Futter></Futter>
    </>
  );
}

export default App;
