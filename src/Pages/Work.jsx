export function Work() { window.scrollTo({top:0})
  const projects = [
    {
      
        id:1,
      title: "Portfoio",
      subtitle: "Aur cheezain daalo beyy",
      skills: "",
    },
    {
        id:2,
        title: "ParallaxLandingPAge",
        subtitle: "Aur cheezain daalo beyy",
        skills: "",
      },
      {
        id:3,
        title: "Url shortener",
        subtitle: "Aur cheezain daalo beyy",
        skills: "",
      },
      {
        id:4,
        title: "Music player",
        subtitle: "Aur cheezain daalo beyy",
        skills: "",
      },
  ];
  return (
    <>
      <section className="w-screen h-full flex flex-col justify-start items-center text-bg2">
        {projects.map((project) => (
          <section
            key={project.id}
            id="Currentproject"
            className="bg-black text-white smartphone:flex smartphone:flex-col grid gap-2 grid-cols-6 w-11/12 smartphone:w-full h-fit p-6"
          >
            <div className="col-span-4 rounded-lg overflow-hidden bg-red-600">
              <img
                src="/public/Lpg.gif"
                alt=""
                className="h-[700px] smartphone:h-[250px]"
              />
            </div>
            <div className="col-span-2 ">
              <h1 className="text-5xl mx-3">{project.title}</h1>
              <h2>{project.subtitle}</h2>
            </div>
          </section>
        ))}
      </section>
    </>
  );
}
