import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Futter } from "./Components/Futter";
import { Introduction } from "./Pages/Introduction";
import { Routesgrid } from "./Pages/Routesgrid";
import { Home } from "./Components/Home";
import { Skills } from "./Pages/Skills";
import { X_tras } from "./Pages/X_tras";
import { Routes, Route, useLocation } from "react-router-dom";
import { m, AnimatePresence, useScroll, useTransform, LazyMotion, domAnimation } from "framer-motion";
function App() {
  const { scrollY } = useScroll();
  const scalee=useTransform(scrollY, [0, 1080], [1, 1.02]); 
  const location = useLocation();
  const scale = location.pathname == "/" ? scalee : 0; 
  const divdisplay = location.pathname == "/" ? "view" : "hidden";
  return (
    <>
    <LazyMotion features={domAnimation}>
      <Navbar loc={location.pathname != "/"}/>
      <m.div style={{  scale }} className={`app transition-all duration-300 ease-in-out w-full h-full fixed top-0 -z-10 flex items-end ${divdisplay}`}>
        <Home />
      </m.div>
      <div className={`h-screen ${divdisplay}`}></div>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.25 }}
        id="mainwrapper"
        className="transform-gpu  w-screen h-full relative text-white bg-black flex flex-col scroll-smooth"
      >
        <AnimatePresence>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Routesgrid />}></Route>
            <Route path="/Introduction" element={<Introduction />}></Route>
            <Route path="/TalentArsenal" element={<Skills />}></Route>
            <Route path="/Extras" element={<X_tras />}></Route>
          </Routes>
        </AnimatePresence>
      </m.div>
      <Futter></Futter></LazyMotion>
    </>
  );
}

export default App;
