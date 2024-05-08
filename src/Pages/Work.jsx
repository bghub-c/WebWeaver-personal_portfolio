import {m} from "framer-motion"
import { FileHtml, Atom,FramerLogo, Waves, FileCss, FileJs, Barricade } from "@phosphor-icons/react";
export function Work() {  window.scrollTo({top:0})
  const projects = [
    {
      id: 1,
      title: "Portfoio",
      src: "/PortfolioCollage.jpg",
      subtitle:
        "Crafted with React.js and Tailwind CSS with beautiful animations with Framer motion featuring my expertise and project highlights.",
      skills: <><Atom size={38} weight="duotone" className="mx-1 group-hover:text-react group-hover:scale-105 transition-all duration-300" /> <FramerLogo size={38} weight="duotone" className="mx-1 group-hover:text-w2 group-hover:scale-105 transition-all duration-300" /> <Waves size={32} weight="duotone" className="mx-1 group-hover:text-blue-300 group-hover:scale-105 transition-all duration-300" /> </>,
      colour: "bg-bg3",
      colourtext: "text-w1",
    },
    {
      id: 2,
      title: "ParallaxLandingPAge",
      src: "/photo.jpg",
      subtitle:
        "Designed using HTML, Tailwind CSS, and JavaScript to create captivating parallax effects that enhance user engagement and elevate the visual appeal.",
        skills: <><FileHtml size={32} weight="duotone" className="mx-1 group-hover:text-w1 group-hover:scale-105 transition-all duration-300"  /> <FileCss size={32} weight="duotone" className="mx-1 group-hover:text-w1 group-hover:scale-105 transition-all duration-300" /> <FileJs size={32} weight="duotone" className="mx-1 group-hover:text-w1 group-hover:scale-105 transition-all duration-300"  /></> ,      colour: "bg-bg1",
      colourtext: "text-zinc-300",
    },
    {
      id: 3,
      title: "Url shortener",
      src: "/Url_Shortener.png",
      subtitle:
        "Utilizing HTML, Tailwind CSS, JavaScript, and API integration for efficient link management.",
      skills: <><FileHtml size={32} weight="duotone" className="mx-1 group-hover:text-bg1 group-hover:scale-105 transition-all duration-300"  /> <FileCss size={32} weight="duotone" className="mx-1 group-hover:text-bg1 group-hover:scale-105 transition-all duration-300" /> <FileJs size={32} weight="duotone" className="mx-1 group-hover:text-bg1 group-hover:scale-105 transition-all duration-300"  /></>,
      colour: "bg-green-500",
      colourtext: "text-w1",
    },
    {
      id: 4,
      title: "Music player",
      src: "/MusicPlayer.png",
      subtitle: "Developed using HTML, Tailwind CSS, and Howler.js.",
      skills: <><FileHtml size={32} weight="duotone" className="mx-1 group-hover:text-w1 group-hover:scale-105 transition-all duration-300"  /> <FileCss size={32} weight="duotone" className="mx-1 group-hover:text-w1 group-hover:scale-105 transition-all duration-300" /> <FileJs size={32} weight="duotone" className="mx-1 group-hover:text-w1 group-hover:scale-105 transition-all duration-300"  /></> ,
      colour: "bg-w1",
      colourtext: "text-bg1",
    },
  ];
  return (
    <>
      <m.section  initial={{opacity:0}} animate={{opacity:1}} transition={{ delay: 0.75, duration: 1, ease:"easeInOut" }}
       className="relative w-screen h-full flex flex-col justify-start items-center text-bg2">
        {projects.map((project) => (
          <section
            key={project.id}
            id="Currentproject"
            className="relative flex smartphone:flex-col w-full px-2 smartphone:h-[350px] h-screen ubuntu"
          >
            <section
              id="1st"
              className={`group relative flex flex-col justify-center items-center z-20 w-1/2 h-full ${project.colourtext}`}
            >
              <div
                className={`absolute w-full h-full ${project.colour} opacity-75`}
              ></div>
              <div id="text" className="w-[400px] smartphone:w-[150px] z-30">
                <h1 className="text-5xl smartphone:text-3xl">0{project.id}</h1>
                <h2 className="text-3xl smartphone:text-xl pt-3">
                  {project.title}
                </h2>
                <h3 className="text-xl smartphone:text-sm pt-1 ">
                  {project.subtitle}
                </h3>
                <div id="techstack">
                    <div
                      className="flex flex-row mt-3"
                    >
                      {project.skills}
                    </div>
                  
                </div>
              </div>
            </section>
            <section id="2nd" className="w-1/2">
            </section>
            <img
              src={project.src}
              className="absolute  h-full w-full z-10 object-fill "
              alt=""
            />
          </section>
        ))}
      </m.section>
    </>
  );
}
