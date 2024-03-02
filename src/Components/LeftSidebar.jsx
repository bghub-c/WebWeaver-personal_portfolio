import PropTypes from "prop-types";
import { useState } from "react";

function LeftSidebar(props) {
  const [initial, setInitial] = useState(true);

  const toggleSidebar = () => {
    const sidebar = document.getElementById("leftSidebar");
    if (initial) {
      sidebar.classList.add("trans");
    } else {
      sidebar.classList.remove("trans");
    }
    setInitial(!initial);
  };
  return (
    <div
      id="leftSidebar"
      className=" fixed top-1/3 left-0 z-10 flex flex-row justify-center items-center w-fit ml-1  transition-all duration-700 transs"
    >
      <ul className="rounded-sm  flex flex-col justify-center backdrop-blur-xl backdrop-brightness-75 shadow-xl">
        <li className="w-fit p-3 h-1/5 text-white">hello</li>
        <li className="w-fit p-3 h-1/5 text-white">this</li>
        <li className="w-fit p-3 h-1/5 text-white">is</li>
        <li className="w-fit p-3 h-1/5 text-white">the</li>
        <li className="w-fit p-3 h-1/5 text-white">left</li>
      </ul>
      {initial ? (
        <button
          className={`ml-1 rounded-full w-2/5 border-2 border-dashed border-bk ${props.col3} transition-all duration-300 hover:translate-x-[-1px] hover:translate-y-[-2px] hover:rounded-full hover:shadow-[1px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-full active:shadow-none`}
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,112H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168a8,8,0,0,1,0,16Z"></path>
          </svg>
        </button>
      ) : (
        <button
          className={`ml-1 rounded-full w-2/5 border-2 border-dashed border-bk ${props.col3}  d90429 hover:translate-x-[-1px] hover:translate-y-[-2px] hover:rounded-full hover:shadow-[1px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-full active:shadow-none`}
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,109.66-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,173.66,133.66Z"></path>
          </svg>
        </button>
      )}
    </div>
  );
}

LeftSidebar.propTypes = {
  col3: PropTypes.string.isRequired,
};

export default LeftSidebar;
