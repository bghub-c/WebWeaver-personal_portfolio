import { DownloadSimple, UploadSimple, Stack } from "@phosphor-icons/react";
import { m, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
export function Skills() {
  const [skills, setSkills] = useState([]);
  const [pushes, setpushes] = useState(0);
  const popy= window.innerWidth<=720?85:200;
  const skillval = [
    {
      title: "HTML",
      id: 1,
    },
    {
      title: "CSS",
      id: 2,
    },
    {
      title: "JS",
      id: 3,
    },
    {
      title: "TailwindCSS",
      id: 4,
    },
    {
      title: "Git/Github",
      id: 5,
    },
    {
        title: "React.js",
        id: 6,
      },
      {
        title: "Framer Motion",
        id: 7,
      },
  ];

  const pushSkill = () => {
    if(pushes<7){
        setpushes(pushes + 1);
    setSkills([
      ...skills,
      { id: skillval[pushes].id, title: skillval[pushes].title },
    ]);}
  };

  const popSkill = () => {
    if(pushes>0&&pushes<8){
    setpushes(pushes - 1);
    setSkills(skills.slice(0, -1));}
    };

  return (
    <>
      <m.section initial={{opacity:0}} animate={{opacity:1}} transition={{ delay: 0.75, duration: 0.50, ease:"easeInOut" }} className=" w-11/12 smartphone:w-full h-screen mx-auto flex flex-col justify-start ite text-bg2">
        <div id="heading" className="text-7xl smartphone:text-6xl smartphone:text-center mt-5 ubuntu">
          <h1 className="smartphone:text-center">
            My Skill <span className="text-accent1">{'"Stack"'}</span>  
          </h1>
          <h2 className="text-2xl smartphone:justify-center smartphone:text-xl mt-4 ml-8 smartphone:ml-4 flex">Try pushing skills into the stack <Stack size={32} className="mx-2" weight="duotone" /></h2>
        </div>
        <div
          id="buttons"
          className="flex justify-center  text-4xl smartphone:text-xl  mt-9 "
        >
          <button
            onClick={popSkill}
            className="flex group justify-center items-center h-fit mx-auto smartphone:mx-4 py-2 rounded-2xl border-2 border-dashed border-black bg-bk font-semibold  text-whitee transition-all duration-500  hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none shadow-lg"
          >
            pop(<span className="transition-all duration-700 group-hover:text-accent1">skill</span>) <UploadSimple size={"12%"} className="mx-5 smartphone:mx-1 group-hover:-translate-y-1 transition-all duration-500" />
          </button>
          <button
            onClick={pushSkill}
            className="flex group justify-center items-center h-fit mx-auto smartphone:mx-4 py-2 rounded-2xl border-2 border-dashed border-black bg-bk  font-semibold  text-whitee transition-all duration-500 hover:translate-y-[4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none shadow-lg"
          >
            push(<span className="transition-all duration-700 group-hover:text-accent1">skill</span>) <DownloadSimple size={"12%"} className="mx-5 smartphone:mx-1 group-hover:translate-y-1 transition-all duration-500"/>
          </button>
        </div>
        <section
          id="stack"
          className="mx-auto mt-[100px]"
        >
          <div className="relative transition-transform ease-in-out w-72 h-72">
            <div className=" inset-0  flex flex-col-reverse items-center justify-end">
            <AnimatePresence>
              {skills.map((skill) => (
                <React.Fragment key={skill.id}> 
                    <m.span initial={{opacity:0,y:-1*popy}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-1*popy}} className=" flex flex-col-reverse ">
                  <div className="w-56 h-6 rad border-2 -translate-y-2 -mb-10 border-bg1"></div>
                  <div className="w-56  bg-w1 z-10 translate-y-1 border-x-2 border-bg1 flex justify-center items-end">
                    <h1 className="ibm-plexmid text-3xl text-center smartphone:text-2xl text-accent1 mt-4 mb-2 translate-y-1">
                      {skill.title}
                    </h1>
                  </div>
                  <div
                    className={`w-56 h-6 rad ${
                      skill.id === pushes ? "border-4 bg-bg1" : "border-b-4"
                    } border-bg1 z-20 translate-y-4`}
                  ></div></m.span>
                </React.Fragment>
              ))}</AnimatePresence>
            </div>
          </div>
        </section>
      </m.section>
    </>
  );
}
