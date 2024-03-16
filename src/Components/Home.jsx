//assests import
import { motion } from "framer-motion";
export function Home() {
  
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(10, 10, 10, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "#edf2f4",
    },
  };
  return (
    <>
      <section className="w-full  h-fit grid-flow-row grid-rows-auto ml-1	z-5 overflow-hidden">
        <motion.span
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
            duration:0.55,
            delay: 1,
            ease:"easeInOut"
          }}
          className="w-full h-1/2 pl flex flex-col justify-center"
        >
          <p className="pl drop-shadow-xl text-9xl tracking-wider smartphone:text-lg text-whitee ubuntu">
            {"Nice To See You!"}
          </p>
        </motion.span>
        <motion.span
          initial={{
            y: 500,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration:0.6,
            delay: 1.5,
            ease:"easeInOut"
          }}
          className="pl p-7 z-10 row-start-2 flex flex-col justify-start"
        >
          <p className="pl text-3xl tracking-wide laptop:text-2xl text-whitee font-semibold ibm-plexregular ">
          👋 Hey! {"I'm"} Mohd Bilal, <br /> your go-to for awesome interactions and all things frontend. <br /> {"Let's"}  create digital magic together! <br /><span className="text-2xl font-semibold pt-12 ">Ready to dive in? 🚀</span></p>
        </motion.span>
        <span className="grid place-content-center">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            viewBox="0 0 300 300"
            className="item "
          >
            <motion.path
              d="m 170 20 v 150 l 30 -10 l -30 50 l -30 -50 l 30 10 v -150 h 0 "
              variants={icon}
              initial="hidden"
              animate="visible"
              whileHover="visible"
              transition={{
                default: { delay: 2, duration: 2.5, ease: "easeInOut" },
                fill: { delay: 2, duration: 3 , ease: [1, 0, 0.8, 1] },
              }}
            />
          </motion.svg>
        </span>
      </section>
    </>
  );
}
