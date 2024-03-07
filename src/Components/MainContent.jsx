import { motion, AnimatePresence } from "framer-motion";
import { useWindowSize } from "@uidotdev/usehooks";
export function MainContent() {
  const icon1 = {
    hidden: {
      pathLength: 0,
      fill: "rgba(100, 100, 100, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(100, 100, 100, 0)",
    },
  };
  const size=useWindowSize();
  console.log(`width  ${size.width}  ${size.height} h`)
  return (
    <>
      <div className="h-full w-full flex justify-start items-start">
        <div className="w-fit ">
        <AnimatePresence>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 190 824"
            className="item"
          >
            <motion.path
              d={`m 20 0 v ${size.height-200} h ${size.width-50} v 330`}
              variants={icon1}
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              transition={{
                default: { delay: 0.5, duration: 1.5, ease: "easeInOut" },
                fill: { delay: 4, duration: 3, ease: [1, 0, 0.8, 1] },
              }}
            />
          </motion.svg>
        </AnimatePresence>
        </div>
        <motion.div
        initial={{
          x:-200,
          opacity:0
        }}
        whileInView={{
          x:0,
          opacity:1
        }}
        transition={{
          delay:1,
          ease:"easeInOut"
        }}
        className="backdrop-blur-lg text-white w-3/4 h-2/5 text-start text-2xl p-4 my-auto">{" Well, here I am, a BTech student deeply passionate about web development, I embody a genuine enthusiasm for crafting exceptional digital experiences. You can call me an enthusiast workaholic, or maybe just a web wizard in the making. With a relentless passion for coding and creating. I'm on mission to keep ethical standards in check while sprinkling a dash of creativity into every project, all about delivering results that make your jaw drop and your users say 'Wow'. So, if you want a web developer who's a little too excited about crafting digital magic, you've found your guy."} </motion.div>
      </div>
    </>
  );
}
