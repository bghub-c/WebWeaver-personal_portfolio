export function Navbar(){
    return(
        <>
        <nav className="w-screen h-nav flex pl-4 tablet:flex-col justify-between items-center sticky top-0 text-black">
            <h1 className="vt323h text-bkgggg text-5xl">MohdBilal</h1>
            <ul className="flex ">
                <li className="h-full w-1/5 m-3 backdrop-blur-lg backdrop-brightness-50 p-3/4">1st</li>
                <li className="h-full w-1/5 m-3 backdrop-blur-lg backdrop-brightness-50 p-3/4">2nd</li>
                <li className="h-full w-1/5 m-3 backdrop-blur-lg backdrop-brightness-50 p-3/4">3rd</li>
                <li className="h-full w-1/5 m-3 backdrop-blur-lg backdrop-brightness-50 p-3/4">4th</li>
                <li className="h-full w-1/5 m-3 backdrop-blur-lg backdrop-brightness-50 p-3/4">5th</li>
            </ul>
        </nav>
        </>
    )
}