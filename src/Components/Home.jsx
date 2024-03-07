//assests import

import { motion } from "framer-motion";
export function Home() {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(100, 100, 100, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "#000814",
    },
  };
  return (
    <>
      <section className="w-full grid-flow-row grid-rows-auto ml-1	z-2 border-accentylt overflow-hidden">
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
            delay: 1.5,
          }}
          className="w-full h-1/2 pl flex flex-col justify-center"
        >
          <p className="pl drop-shadow-xl text-9xl tracking-wider smartphone:text-lg text-accentylt vt323">
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
            delay: 2.5,
          }}
          className="pl p-7 z-10 row-start-2 flex flex-col justify-start"
        >
          <p className="pl drop-shadow-xl text-5xl tracking-wide laptop:text-3xl text-accentylt vt323">
            👋 Hi! My name is Mohd Bilal <br /> and I&#x27;m a Frontend web
            developer
          </p>
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
                default: { delay: 4, duration: 2.5, ease: "easeInOut" },
                fill: { delay: 4, duration: 3 , ease: [1, 0, 0.8, 1] },
              }}
            />
          </motion.svg>
        </span>
      </section>
    </>
  );
}
