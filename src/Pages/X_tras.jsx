import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export function X_tras() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  const cards = [
    {
      url: "src/Pages/assets/pic1.jpg",
      title: "Title 1",
      subtitle: "kuch bhi",
      id: 1,
    },
    {
      url: "src/Pages/assets/pic2.jpg",
      title: "Title 12",
      subtitle: "kuch bhi",
      id: 2,
    },
    {
      url: "src/Pages/assets/pic3.jpg",
      title: "Title 13",
      subtitle: "kuch bhi",
      id: 3,
    },

    {
      url: "src/Pages/assets/pic4.jpg",
      title: "Title 14",
      subtitle: "kuch bhi",
      id: 4,
    },
    {
      url: "src/Pages/assets/pic5.jpg",
      title: "Title 15",
      subtitle: "kuch bhi",
      id: 5,
    },
    {
      url: "src/Pages/assets/pic6.jpg",
      title: "Title 16",
      subtitle: "kuch bhi",
      id: 6,
    },
    {
      url: "src/Pages/assets/pic7.jpg",
      title: "Title 17",
      subtitle: "kuch bhi",
      id: 7,
    },
    {
      url: "src/Pages/assets/pic8.jpg",
      title: "Title 18",
      subtitle: "kuch bhi",
      id: 8,
    },
    {
      url: "src/Pages/assets/pic9.jpg",
      title: "Title 19",
      subtitle: "kuch bhi",
      id: 9,
    },
  ];
  return (
    <section
      id="xtramain"
      className="flex flex-col items-center justify-center bg-black text-whitee w-screen h-full"
    >
      <section
        id="photography"
        className="w-11/12  items-center justify-center"
      >
        <section ref={targetRef} className="relative h-[300vh] smartphone:h-[500vh]">
        <div id="text">
          <h1 className="text-8xl smartphone:text-4xl m-16 smartphone:m-10  mt-32 smartphone:mt-10  coolfont">Photography</h1>
          <h2 className="text-3xl smartphone:text-lg ml-24 smartphone:ml-16  ubuntu">:) Some clicks that {"I'm"} proud of</h2>
        </div>
          <div className="sticky top-0 flex h-1/5 items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-4">
              {cards.map((card) => {
                return (
                  <div
                    key={card.id}
                    className="group rounded-sm relative h-[500px] w-[500px] smartphone:h-[500px] smartphone:w-[350px] overflow-hidden bg-neutral-200"
                  >
                    <div
                      style={{
                        backgroundImage: `url(${card.url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className="absolute inset-0 z-0 transition-transform duration-100 ease-in-out group-hover:scale-110"
                    ></div>
                    <div className={` absolute bottom-2 left-2 z-10 place-content-center translate-y-24 group-hover:-translate-y-2 grid transition-transform duration-300 ease-in-out`}>
                      <p className="bg-gradient-to-bl from-black/20 to-white/0 p-4 text-2xl font-black uppercase text-white backdrop-blur-xl">
                        {card.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>
        <section className="w-11/12 h-screen bg-blue-400">kuch aur</section>
      </section>
    </section>
  );
}
