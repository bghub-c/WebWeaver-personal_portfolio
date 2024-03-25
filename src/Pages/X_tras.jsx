import { m, useScroll, useTransform } from "framer-motion";
import { InstagramLogo } from "@phosphor-icons/react";
import { useRef, useEffect,useMemo } from "react";
export function X_tras() { window.scrollTo({top:0})
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const sc=window.innerWidth<720?0:0.02;
  const x =useTransform(scrollYProgress, [sc, 1], ["1%", "-85%"]);

  const cards = useMemo(() => [
    { url: "/picc1.jpeg", title: "Sunshine Bloom", subtitle: "kuch bhi", id: 1 },
    { url: "/picc2.jpg", title: "Puppy Joy", subtitle: "kuch bhi", id: 2 },
    { url: "/picc4.jpg", title: "Mahek", subtitle: "", id: 3 },
    { url: "/picc5.jpg", title: "Golden Departure", subtitle: "kuch bhi", id: 4 },
    { url: "/picc6.jpg", title: "Crimson Arch", subtitle: "kuch bhi", id: 5 },
    { url: "/picc7.jpg", title: "Market Moments", subtitle: "kuch bhi", id: 6 },
    { url: "/picc8.jpg", title: "Eerie Timepiece", subtitle: "kuch bhi", id: 7 },
    { url: "/picc9.jpg", title: "Pup Gathering", subtitle: "kuch bhi", id: 8 },
    { url: "/picc10.jpg", title: "Red beauty", subtitle: "kuch bhi", id: 9 },
    { url: "/picc11.jpg", title: "Sunny Bloom", subtitle: "kuch bhi", id: 10 },
  ], []);
  useEffect(() => {
    cards.forEach((card) => {
      const img = new Image();
      img.src = card.url;
    });
  }, [cards]);

  return (
      <m.section
        initial={{opacity: 0}} animate={{opacity: 1}} transition={{ delay: 0.75, duration: 0.50, ease:"easeInOut" }} id="xtramain"
        className="flex flex-col items-center justify-center bg-bg2 text-w1 w-screen h-full">
        <section
          id="photography"className="w-11/12">
          <section ref={targetRef} className="relative h-[450vh] smartphone:h-[500vh]">
            <section id="text" className="overflow-hidden">
              <m.h1 initial={{y: 300,}}animate={{y: 0,}}
            transition={{duration:0.5, delay: 1.5, ease:"easeInOut" }} className="text-8xl smartphone:text-5xl m-16 smartphone:m-10 mt-32 smartphone:mt-10 coolfont tracking-widest smartphone:tracking-wider">Photography</m.h1>
              <m.h2 initial={{ y: 400,  }} animate={{ y: 0, }}
            transition={{
              duration:0.5,
              delay: 2,
              ease:"easeInOut"
            }} className="text-3xl w-full smartphone:text-xl ml-24 smartphone:ml-16 ubuntu tracking-wide smartphone:tracking-normal"> <span className="text-accent2lt">:)</span> Some clicks that {"I'm"} proud of <span className="hidden text-w1 smartphone:flex mt-5 ml-5 text-sm">(Swipe down to see them slide)</span></m.h2>
            </section>
            <div className="sticky top-0 mt-8 flex h-1/5 items-center overflow-hidden">
              <m.div style={{x}}  className="flex gap-4 smartphone:gap-2 transition-transform ease-out duration-300 transform-gpu">
                {cards.map((card) => (
                  <div key={card.id} className="group rounded-md relative h-[600px] w-[400px] smartphone:h-[500px] smartphone:w-[256px] overflow-hidden">
                    <img src={card.url} loading="lazy" className="absolute w-full h-full object-cover inset-0 z-0 transition-all duration-500 ease-in-out group-hover:scale-110" alt={card.title}/>
                    <div className="absolute bottom-2 left-2 z-10 place-content-center translate-y-24 group-hover:-translate-y-2 grid transition-transform duration-700 ease-in-out">
                      <p className="bg-gradient-to-bl from-black/20 to-white/0 p-4 text-2xl font-black text-w1 backdrop-blur-sm">
                        {card.title}
                      </p>
                    </div>
                  </div>
                ))}
              </m.div>
            </div>
          </section>
          <section className=" mx-auto w-11/12 h-screen flex justify-center items-center text-whitee">
        <h1 className="flex flex-col justify-center items-center text-5xl smartphone:text-lg ibm-plexregular tracking-tight"> I post cool stuff here <a href="https://www.instagram.com/mohd.bilal__?igsh=MW9ydDcwcTR4dmVjaQ==" className="group flex items-center justify-center transition-all duration-700 ease-in-out my-4 hover:text-insta tracking-tighter"><InstagramLogo size={"13%"} weight="duotone" className="mx-2 transition-transform ease-in-out group-hover:scale-105" /> @mohd.bilal__</a></h1>
        </section>
        </section>
      </m.section>
  );
}
