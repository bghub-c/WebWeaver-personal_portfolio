//assests import
import { m } from "framer-motion";
export function Home() { 
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(10, 10, 10, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "#252422",
    },
  };
  return (
    <>
      <section className=" w-full h-fit grid-flow-row grid-rows-auto ml-1 smartphone:ml-0	z-5 overflow-hidden">
        <m.span
          layout
          initial={{
            y: -120,
          }}
          animate={{
            y: [-110,0]
          }}
          transition={{
            duration:0.7,
            type:"tween",
            delay: 1.5,
            ease:"easeInOut"
          }}
          className=" w-full h-1/2 pl-32 smartphone:pl-4 flex flex-col justify-center"
        >
          <p className=" drop-shadow-text-lg smartphone:drop-shadow-2xl text-8xl tracking-wider smartphone:text-3xl text-accent3 ubuntu">
            {"Such a delight to see you here!"}
          </p>
        </m.span>
        <m.span
          initial={{
            y: 400,
          }}
          animate={{
            y: [230,0]
          }}
          transition={{
            duration:0.7,
            type:"tween",
            delay: 2,
            ease:"backInOut"
          }}
          className=" p-8 z-10 row-start-2 flex flex-col justify-start "
        >
          <p className="pl-28 z-10 smartphone:pl-0 drop-shadow-xl text-3xl smartphone:text-sm tracking-tight text-bg1 font-semibold ibm-plexregular ">
          👋 Hey! {"I'm"} Mohd Bilal, <br /> your go-to for awesome interactions and all things frontend. <br /> {"Let's"}  create digital magic together! <br /><span className="text-2xl smartphone:text-sm font-semibold pt-12 ">Ready to dive in? 🚀</span></p>
        </m.span>
        <span className="grid place-content-center z-50 bg-w1">
          <m.svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            viewBox="0 0 300 300"
            className="item "
          >
            <m.path
              d="m 170 20 v 150 l 30 -10 l -30 50 l -30 -50 l 30 10 v -150 h 0 "
              variants={icon}
              initial="hidden"
              animate="visible"
              whileHover="visible"
              transition={{
                default: { delay: 2, duration: 2.5, ease: "easeInOut" },
                fill: { delay: 2.5, duration: 2 , ease: [1, 0, 0.8, 1] },
              }}
            />
          </m.svg>
        </span>
      </section>
    </>
  );
}
