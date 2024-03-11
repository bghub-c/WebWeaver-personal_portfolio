import { Introduction } from "../Pages/Introduction";
import { Routesgrid } from "../Pages/Routesgrid";
import { Skills } from "../Pages/Skills"
import { Routes, Route, useLocation  } from "react-router-dom";
import {AnimatePresence} from "framer-motion"
export function MainContent() {
  const location=useLocation();
  return (
    <AnimatePresence >
    <Routes location={location} key={location.key}>
    <Route path="/" element={ <Routesgrid /> }></Route>
    <Route path="/Introduction" element={<Introduction />}></Route>
    <Route path="/TalentArsenal" element={<Skills />}></Route>
    </Routes>
    </AnimatePresence>
  );
}