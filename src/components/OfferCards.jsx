import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const OfferCards = (props) => {
  const [rotate, setRotate] = useState(false);

  const handleMouseEnter = () => {
    setRotate(true);
  };

  const handleMouseLeave = () => {
    setRotate(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group w-[100%] h-[48%] bg-[#1E1E1E] transition-all duration-500 flex rounded-xl relative ${rotate ? '[transform:rotateX(360deg)]' : ''}`}
    >
      <div className="h-full w-full xl:text-[25px] text-[20px] uppercase text-[#9eb2cb] flex items-center justify-center group-hover:hidden">
        <div className={`w-full h-full text-center relative`}>
        <img src={props.image} alt="" className="w-full h-full"/>
        <div className="absolute flex items-center justify-center w-full h-full bg-black/70 top-0">
        <h1 className="hidden xl:contents">Hover to Reveal</h1>
        <h1 className="xl:hidden">Click to Reveal</h1>
        </div>
        </div>
      </div>
      <div className="hidden group-hover:contents">
        <div className="h-[100%] w-[70%]">
          <img
            src={props.image}
            alt="image"
            className="h-full w-full rounded-lg cursor-pointer"
          />
        </div>
        <div className="absolute xl:right-[18%] xl:top-[43%] right-[14%] top-[40%] max-sm:text-[12px] rotate-90 h-fit w-fit my-auto -ml-6 text-[#76808C] ">
          <h1>{props.validity}</h1>
        </div>
        <div className="h-full flex flex-col w-[30%] items-center pl-3  max-sm:justify-evenly xl:mt-[4px]  justify-center">
          <img src="/Vector.png" alt="" className="xl:h-[30px] xl:w-[40px] h-[12px] w-[16px] cursor-pointer " />
          <button className="hover:bg-[#A1CD44] bg-lime-400  text-black xl:px-4 xl:py-2 p-1 max-sm:px-2 xl:rounded-2xl rounded-lg font-[700] text-[12px] xl:text-[20px] xl:mt-2 mt-[2px]">
            {props.discount}
          </button>
          <p className="text-[#76808C] line-through text-[13px] xl:text-[22px]">
            {props.prevPrice}
          </p>
          <p className="text-lime-400 hover:underline text-[13px] xl:text-[22px] cursor-pointer">
            {props.currPrice}
          </p>
          <div className="h-fit w-fit xl:py-2 xl:px-4 p-1 max-sm:px-3 rounded-lg bg-[#1E2329] hover:bg-slate-700 hover:text-red-600 cursor-pointer ">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-[14px] xl:text-[20px] hover:scale-125 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCards;