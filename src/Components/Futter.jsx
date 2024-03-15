import { HandWaving, LinkedinLogo,InstagramLogo } from "@phosphor-icons/react"
export function Futter(){
return(
    <div className="bg-black w-screen flex text-whitee  justify-center">
    <section id="Footer" className="flex justify-between items-center  border-white  w-8/12">
        <div className="ml-5 p-2 mt-7">
        <h1 className="flex items-end text-8xl ubuntu">Drop a hello!<HandWaving className="ml-2" size={100} weight="duotone" /></h1>
        <h2 className="text-2xl ml-8 py-3">Lets crete dope stuff together!</h2>
        </div>
        <div>
        <ul className="flex ">
            <li className="h-full w-1/5 m-3 backdrop-brightness-200 text-white transition-all ease-in-out duration-200 hover:scale-105 hover:-translate-y-1 hover:text-insta p-3/4"><InstagramLogo size={32} weight="duotone" /></li>
            <li className="h-full w-1/5 m-3 backdrop-brightness-200 text-white transition-all ease-in-out duration-200 hover:scale-105 hover:-translate-y-1 hover:text-lnkin  p-3/4"><LinkedinLogo size={32} weight="duotone" /></li> 
        </ul>
        <a href="mailto:mohammadbilal.mail@gmail.com">yahan tap crow!</a>
       </div>
    </section>
    </div>
)
}