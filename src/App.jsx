import "./App.css";
import { useTransform, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";

function App() {
  const { scrollY }=useScroll();
  const scaale=useTransform(scrollY, [0,824], [1,1.05]);
  const bgcol = useTransform(scrollY, [0,750], ["rgb(255,255,255)", "#000814"]);
  return (
    <div id="mainwrapper" className="w-screen h-full relative text-white  flex flex-col  selection:bg-black selection:text-muted scroll-smooth">
      <Navbar />
        <motion.div
          style={{backgroundColor:bgcol,  scale:scaale }}
          transition={{
            duration:2,
            type:'spring'
          }}
          
          className="transition-color fixed top-0 -z-30 app w-full h-screen flex justify-start items-end"
          id="home"
        >
          <Home />
        </motion.div>
        <div className="h-screen w-scree">
        </div>
      <div id="Otherparts" className="w-screen h-screen bg-bkgggg">
        {/* Your other content here */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. ...
      </div>
    </div>
  );
}

export default App;
