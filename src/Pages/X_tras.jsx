import { m, useScroll, useTransform, LazyMotion, domAnimation } from "framer-motion";
import { useRef, useEffect,useMemo } from "react";
export function X_tras() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x =useTransform(scrollYProgress, [0.20, 1], ["1%", "-85%"]);

  const cards = useMemo(() => [
    {
      url: "/picc1.jpeg",
      title: "Title 1",
      subtitle: "kuch bhi",
      id: 1,
    },
    {
      url: "/picc2.jpg",
      title: "Title 12",
      subtitle: "kuch bhi",
      id: 2,
    },
    {
      url: "/picc4.jpg",
      title: "Title 13",
      subtitle: "kuch bhi",
      id: 3,
    },

    {
      url: "/picc5.jpg",
      title: "Title 14",
      subtitle: "kuch bhi",
      id: 4,
    },
    {
      url: "/picc6.jpg",
      title: "Title 15",
      subtitle: "kuch bhi",
      id: 5,
    },
    {
      url: "/picc7.jpg",
      title: "Title 16",
      subtitle: "kuch bhi",
      id: 6,
    },
    {
      url: "/picc8.jpg",
      title: "Title 17",
      subtitle: "kuch bhi",
      id: 7,
    },
    {
      url: "/picc9.jpg",
      title: "Title 18",
      subtitle: "kuch bhi",
      id: 8,
    },
    {
      url: "/picc10.jpg",
      title: "Title 19",
      subtitle: "kuch bhi",
      id: 9,
    },
    {
      url: "/picc11.jpg",
      title: "Title 20",
      subtitle: "kuch bhi",
      id: 10,
    },
    {
      url: "/picc12.jpg",
      title: "Title 21",
      subtitle: "kuch bhi",
      id: 11,
    },
    {
      url: "/picc13.jpg",
      title: "Title 22",
      subtitle: "kuch bhi",
      id: 12,
    },{
      url: "/picc3.jpg",
      title: "Title 23",
      subtitle: "kuch bhi",
      id: 13,
    },{
      url: "/picc15.jpg",
      title: "Title 24",
      subtitle: "kuch bhi",
      id: 14,
    },{
      url: "/picc16.jpg",
      title: "Title 25",
      subtitle: "kuch bhi",
      id: 15,
    },{
      url: "/picc17.jpg",
      title: "Title 26",
      subtitle: "kuch bhi",
      id: 16,
    },{
      url: "/picc18.jpg",
      title: "Title 27",
      subtitle: "kuch bhi",
      id: 17,
    },{
      url: "/picc19.jpg",
      title: "Title 28",
      subtitle: "kuch bhi",
      id: 18,
    },{
      url: "/picc20.jpg",
      title: "Title 29",
      subtitle: "kuch bhi",
      id: 19,
    },
  ], []);
  useEffect(() => {
    cards.forEach((card) => {
      const img = new Image();
      img.src = card.url;
    });
  }, [cards]);

  return (
    <LazyMotion features={domAnimation}>
      <m.section
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.75, ease: "easeInOut"}}
        id="xtramain"
        className="flex flex-col items-center justify-center bg-black text-whitee w-screen h-full"
      >
        <section
          id="photography"
          className="w-11/12 items-center justify-center"
        >
          <section ref={targetRef} className="relative h-[300vh] smartphone:h-[500vh]">
            <div id="text">
              <h1 className="text-8xl smartphone:text-5xl m-16 smartphone:m-10 mt-32 smartphone:mt-10 coolfont">Photography</h1>
              <h2 className="text-3xl smartphone:text-xl ml-24 smartphone:ml-16 ubuntu">:) Some clicks that {"I'm"} proud of</h2>
            </div>
            <div className="sticky top-0 mt-8 flex h-1/5 items-center overflow-hidden">
              <m.div style={{x}} className="flex gap-4 transition-transform ease-in-out duration-100 transform-gpu">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className="group rounded-sm relative h-[500px] w-[350px] smartphone:h-[500px] smartphone:w-[250px] overflow-hidden bg-neutral-200"
                  >
                    <img
                      src={card.url}
                      loading="lazy"
                      className="absolute w-full h-full object-cover inset-0 z-0 transition-all duration-500 ease-in-out group-hover:scale-110"
                      alt={card.title}
                    />
                    <div className="absolute bottom-2 left-2 z-10 place-content-center translate-y-24 group-hover:-translate-y-2 grid transition-transform duration-700 ease-in-out">
                      <p className="bg-gradient-to-bl from-black/20 to-white/0 p-4 text-2xl font-black uppercase text-white backdrop-blur-xl">
                        {card.title}
                      </p>
                    </div>
                  </div>
                ))}
              </m.div>
            </div>
          </section>
          <section className="w-11/12 h-screen bg-blue-400">kuch aur</section>
        </section>
      </m.section>
    </LazyMotion>
  );
}
