import { DownloadSimple, UploadSimple, Stack } from "@phosphor-icons/react";
import { m, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
export function Skills() { 
//} window.scrollTo({top:0})
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
      <m.section initial={{opacity:0}} animate={{opacity:1}} transition={{ delay: 0.75, duration: 0.50, ease:"easeInOut" }} className="laptop:h-full w-11/12 smartphone:w-full h-full mx-auto flex flex-col justify-start  text-w1">
        <div id="heading" className="overflow-hidden w-full h-full text-7xl smartphone:text-6xl smartphone:text-center mt-5 laptop:mb-4 ubuntu">
          <m.h1 initial={{
            y: 200,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            duration:0.5, delay: 1.2,ease:"easeInOut", type:"spring" 
          }} className="smartphone:text-center tracking-widest smartphone:tracking-wider">
            My Skill <span className="text-accent2">{'"Stack"'}</span>  
          </m.h1>
          <m.h2 initial={{
            y: 200,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            duration:0.5, delay: 1.3,ease:"easeInOut", type:"spring" }} className="text-2xl smartphone:justify-center smartphone:text-xl mt-4  ml-8 smartphone:ml-4 flex tracking-wider">Try pushing skills into the stack <Stack size={32} className="mx-2 text-accent2lt" weight="duotone" /></m.h2>
        </div>
        <m.div
        initial={{
          y: 200, opacity:0.75
        }}
        animate={{
          y: 0,opacity:1
        }}
        transition={{
          duration:0.5, delay: 1.7, ease:"easeInOut", type:"tween"
        }}
          id="buttons"
          className="flex justify-center  text-4xl laptop:text-2xl smartphone:text-xl mt-14 laptop:mt-4">
          <button
            onClick={popSkill}
            className="flex group justify-center items-center  h-fit mx-auto smartphone:mx-3 py-4 smartphone:py-2 laptop:py-2  px-14 smartphone:px-4  rounded-2xl  text-bg2 tracking-wide bg-w1 font-semibold transition-all duration-500  hover:translate-y-[-4px] hover:rounded-xl hover:shadow-[4px_4px_0px_white] shadow-sm shadow-w1 active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none drop-shadow-2xl">
            pop(<span className="transition-all duration-700 group-hover:text-accent2lt px-1 ">skill</span>) <UploadSimple size={"100%"} className="mx-5 w-10 laptop:w-8 smartphone:w-6 smartphone:mx-1 group-hover:-translate-y-1 transition-all duration-500" />
          </button>
          <button
            onClick={pushSkill}
            className="flex group justify-center items-center h-fit mx-auto smartphone:mx-3 py-4 laptop:py-2 smartphone:py-2 px-14 smartphone:px-4  rounded-2xl text-bg2 tracking-wide bg-w1  font-semibold transition-all duration-500 hover:translate-y-[4px] hover:rounded-xl hover:shadow-[4px_4px_0px_white] shadow-sm shadow-w1 active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            push(<span className="transition-all duration-700 group-hover:text-accent2lt px-1">skill</span>) <DownloadSimple size={"100%"} className="mx-5 w-10 laptop:w-8 smartphone:w-6 smartphone:mx-1 group-hover:translate-y-1 transition-all duration-500"/>
          </button>
        </m.div>
        <section
          id="stack"
          className="mx-auto mt-[100px] mb-[100px] "
        >
          <div className="relative transition-transform ease-in-out w-72 h-72">
            <div className=" inset-0  flex flex-col-reverse items-center justify-end">
            <AnimatePresence>
              {skills.map((skill) => (
                <React.Fragment key={skill.id}> 
                    <m.span initial={{opacity:0,y:-1*popy}} animate={{opacity:1,y:0,z:pushes}} exit={{opacity:0,y:-1*popy}} className=" flex flex-col-reverse ">
                  <div className="w-56 laptop:w-  h-6 rad border-2 -translate-y-2 -mb-10 bg-w1 border-accent2"></div>
                  <div className="w-56  bg-w1 z-10 translate-y-1 border-x-2 border-accent2 flex justify-center items-end">
                    <h1 className="ibm-plexmid text-3xl text-center smartphone:text-2xl laptop:text-lg text-accent2lt mt-4 mb-2 translate-y-1">
                      {skill.title}
                    </h1>
                  </div>
                  <div
                    className={`w-56 h-6 rad ${
                      skill.id === pushes ? "border-4 " : "border-b-4 "
                    } border-accent2 bg-bg3 z-20 translate-y-4`}
                  ></div></m.span>
                </React.Fragment>
              ))}</AnimatePresence>
            </div>
          </div>
        </section>
        <section className="h-screen laptop:mt-32 mt-44"></section>
      </m.section>
    </>
  );
}
