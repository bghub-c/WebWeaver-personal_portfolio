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
import { Work } from "./Pages/Work";
function App() {
  const { scrollY } = useScroll();
  const bgcole=useTransform(scrollY, [0, 800], ["#fffcf2", "rgb(0,4,6)"]);
  console.log(bgcole) 
  const location = useLocation();
  const divdisplay = location.pathname == "/" ? "view" : "hidden";
  return (
    <>
    <LazyMotion features={domAnimation}>
      <Navbar loc={location.pathname != "/"}/>
      <m.div style={{  backgroundColor:bgcole }} className={`transition-all duration-100 app -z-50 bg-bk ease-in-out w-full h-full fixed top-0 flex items-end ${divdisplay}`}>
        <Home />
      </m.div>
      <div className={`h-screen ${divdisplay}`}></div>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        id="mainwrapper"
        className="transform-gpu  w-screen h-full relative flex flex-col scroll-smooth"
      >
        <AnimatePresence>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Routesgrid />}></Route>
            <Route path="/Introduction" element={<Introduction />}></Route>
            <Route path="/TalentArsenal" element={<Skills />}></Route>
            <Route path="/Extras" element={<X_tras />}></Route>
            <Route path="/Work" element={<Work />}></Route>
          </Routes>
        </AnimatePresence>
      </m.div>
      <Futter loc={location.pathname != "/"}/></LazyMotion>
    </>
  );
}

export default App;
