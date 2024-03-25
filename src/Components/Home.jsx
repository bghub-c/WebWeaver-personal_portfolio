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
      <section className=" w-full h-fit grid-flow-row grid-rows-auto ml-1	z-5 overflow-hidden">
        <m.span
          layout
          initial={{
            y: -500,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration:0.5,
            delay: 1.5,
            ease:"easeInOut"
          }}
          className=" w-full h-1/2 pl flex flex-col justify-center"
        >
          <p className=" drop-shadow-text-lg smartphone:drop-shadow-2xl text-8xl tracking-wider smartphone:text-3xl text-accent3 ubuntu">
            {"Such a delight to see you here!"}
          </p>
        </m.span>
        <m.span
          initial={{
            y: 300,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration:0.5,
            delay: 2,
            ease:"easeInOut"
          }}
          className=" p-7 z-10 row-start-2 flex flex-col justify-start "
        >
          <p className="pl-20 smartphone:pl-0 drop-shadow-xl text-3xl smartphone:text-sm tracking-wide text-bg1 font-semibold ibm-plexregular ">
          👋 Hey! {"I'm"} Mohd Bilal, <br /> your go-to for awesome interactions and all things frontend. <br /> {"Let's"}  create digital magic together! <br /><span className="text-2xl smartphone:text-sm font-semibold pt-12 ">Ready to dive in? 🚀</span></p>
        </m.span>
        <span className="grid place-content-center bg-w1">
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
                default: { delay: 3, duration: 2.5, ease: "easeInOut" },
                fill: { delay: 3.5, duration: 3 , ease: [1, 0, 0.8, 1] },
              }}
            />
          </m.svg>
        </span>
      </section>
    </>
  );
}
