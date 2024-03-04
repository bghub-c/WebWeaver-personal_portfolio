//assests import

import { motion } from "framer-motion";
export function Home() {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };
  return (
    <>
      <section className="w-full grid-flow-row grid-rows-auto ml-1	z-2 border-accentylt overflow-hidden">
        <motion.span
          initial={{
            y: -100,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            delay: 1.95,
          }}
          className="w-full h-1/2 pl flex flex-col justify-center"
        >
          <p className="pl text-7xl smartphone:text-lg text-accentylt vt323">
            {"Nice To See You!"}
          </p>
        </motion.span>

        <motion.span
          initial={{
            y: 500,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            delay: 2.9,
          }}
          className="pl p-7 z-10 row-start-2 flex flex-col justify-start"
        >
          <p className="pl  text-7xl laptop:text-3xl text-accentylt vt323">
            👋 Hi! My name is Mohd Bilal <br /> and I&#x27;m a Frontend web
            developer
          </p>
        </motion.span>
        <span className="grid place-content-center">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            viewBox="0 0 700 824"
            className="item"
          >
            {/* m 290 0 v 200 h 160 l -180 150 l -170 -150 h 160 v -200 h 30  */}
            <motion.path
              d="m 290 0 v 200 h 160 l -180 150 l -170 -150 h 160 v -200 h 30"
              variants={icon}
              initial="hidden"
              animate="visible"
              whileHover="visible"
              transition={{
                default: {delay:4, duration: 2.5, ease: "easeInOut" },
                fill: {delay:4.4, duration: 3.5, ease: [1, 0, 0.8, 1] },
              }}
            />
          </motion.svg>
        </span>
      </section>
    </>
  );
}
