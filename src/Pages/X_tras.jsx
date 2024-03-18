export function X_tras(){
    const cards = [
        {
          url: "./assests/IMG_20210105_092430 (1).jpg",
          title: "Title 1",
          id: 1,
        },
        {
          url: "./assests/IMG_20210314_182747 (5).jpg",
          title: "Title 2",
          id: 2,
        },
        {
          url: "../assets/IMG_20210314_182747 (5).jpg",
          title: "Title 3",
          id: 3,
        },
      ];
    return(<section id="xtramain" className="flex flex-col items-center bg-whitee text-black w-screen h-full">
        <section className="w-11/12 bg-red-600 flex flex-col items-center justify-center">
        <div id="text">
            <h1>Photography</h1>
            <h2>Scroll Down to see the work</h2>
        </div>
        <div id="pics" className=" flex flex-wrap gap-1 justify-center items-center">
           {cards.map((card)=>{
                return(
                    <div key={card.id} className="w-full bg-white">
                            <img key={card.id} src={card.url} alt={`image-${card.id}`} className="w-full h-full" />
                            <h1>{card.title}</h1>
                    </div>

                )
           })}
        </div>
        </section>
        <section className="w-11/12 bg-blue-400">
        Bodybuilding
        </section>
    </section>)
}