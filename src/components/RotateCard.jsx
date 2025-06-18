import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const TrialCard = (props) => {
  return (
    <div className="group-hover:top-0 transition-all group-hover:bg-black/80 duration-500 absolute h-full w-full top-[100%] text-white">
      <div className="h-full flex-col flex justify-evenly">
        <h1 className="text-[20px] font-[700]">{props.title}</h1>
        <p className="text-[8px] w-full text-left px-2 text-gray-300 h-[73px] overflow-hidden z-10">
          {props.desc}
        </p>
        <div className="flex w-full items-center justify-between px-3">
          <p className="font-[600]">$59.99</p>
          <div className="hover:text-red-700 bg-slate-800 py-[0.30rem] px-2 rounded-md flex items-center justify-center">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-[12px] hover:scale-125 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrialCard;
