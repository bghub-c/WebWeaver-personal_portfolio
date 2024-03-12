import "./App.css";
import { useTransform, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { MainContent } from "./Components/MainContent";

function App() {
  const { scrollY } = useScroll();
  const scaale = useTransform(scrollY, [0, 824], [1, 1.02]);
  const bgcol = useTransform(
    scrollY,
    [0, 1000],
    ["rgb(250,250,250)", "#000814"]
  );
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.25 }}
        id="mainwrapper"
        className="w-screen h-full relative text-white  flex flex-col  selection:bg-black selection:text-muted scroll-smooth"
      >
        <Navbar />
        <motion.div
          style={{ backgroundColor: bgcol, scale: scaale }}
          transition={{
            duration: 0.25,
            ease: "easeInout",
            type: "spring",
          }}
          className="transition-all fixed top-0 -z-10 app w-full h-screen flex justify-start items-end"
          id="home"
        >
          <Home />
        </motion.div>
        <div className="h-screen w-screen"></div>
        
        <div id="Otherparts" className="w-screen h-screen bg-slate-500">
        <MainContent />
        </div>
      </motion.div>
    </>
  );
}

export default App;
