export function X_tras(){
    const cards = [
        {
          url: 'src/Pages/assets/IMG_20210105_092430 (1).jpg',
          title: "Title 1",
          subtitle: "kuch bhi",
          css: "w-96 p-4",
          divcss:"w-1/2",
          id: 1,
        },
        {
            url: 'src/Pages/assets/IMG_2386.jpg',
            title: "Title 2",
            subtitle: "kuch bhi",
            css: "w-96 overflow-hidden p-4",
            divcss:"w-1/2",
            id: 2,
          },
          {
            url: 'src/Pages/assets/IMG_20210314_182747 (5).jpg',
            title: "Title 13",
            subtitle: "kuch bhi",
            css: "w-96 overflow-hidden p-4",
            divcss:"w-1/2",
            id: 3,
          },
          {
            url: 'src/Pages/assets/IMG_20221104_181302_078.jpg',
            title: "Title 14",
            subtitle: "kuch bhi",
            css: "w-96 overflow-hidden p-4",
            divcss:"w-1/2",
            id: 4,
          },
          {
            url: 'src/Pages/assets/IMG_20240313_031952_169.jpg',
            title: "Title 15",
            subtitle: "kuch bhi",
            css: "w-96 overflow-hidden p-4",
            divcss:"w-1/2",
            id: 5,
          },
          {
            url: 'src/Pages/assets/PXL_20220119_042449211.jpg',
            title: "Title 16",
            subtitle: "kuch bhi",
            css: "w-96 overflow-hidden p-4",
            divcss:"w-1/2",
            id: 6,
          },
          {
            url: 'src/Pages/assets/PXL_20230625_173016981~2.jpg',
            title: "Title 17",
            subtitle: "kuch bhi",
            css: "w-96 overflow-hidden p-4",
            divcss:"w-1/2",
            id: 7,
          },
          {
            url: 'src/Pages/assets/PXL_20220715_090429594~2.jpg',
            title: "Title 18",
            subtitle: "kuch bhi",
            css: "w-96 overflow-hidden p-4",
            divcss:"w-1/2",
            id: 8,
          },
          {
            url: 'src/Pages/assets/Remini20211224162741784.jpg',
            title: "Title 19",
            subtitle: "kuch bhi",
            css: "w-96 overflow-hidden p-4",
            divcss:"w-1/2",
            id: 9,
          },
      ];
    return(<section id="xtramain" className="flex flex-col items-center bg-whitee text-black w-screen h-full">
        <section id="photography" className="w-11/12 bg-red-600  items-center justify-center">
        <div id="text">
            <h1>Photography</h1>
            <h2>Scroll Down to see the work</h2>
        </div>
        <div id="pics" className="flex flex-wrap gap-5 justify-center items-center">
           {cards.map((card)=>{
                return(
                    <div key={card.id} className="flex w-fit h-96 flex-col bg-white">
                            <div style={{backgroundImage:`url(${card.url})`}} className="w-96 h-96 m-4 mb-10 bg-cover bg-no-repeat"></div>
                            <h1 className="">{card.title}</h1>
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