import React from "react";
import { ImSearch } from "react-icons/im";
import { GrContact } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import { BsFillQuestionCircleFill } from "react-icons/bs";

const Navbar = ({CurrentClr}) => {
  return (
    <>
      <div className={`${CurrentClr} h-[582.5px] w-[83px] rounded-[50px] backdrop-blur-md flex flex-col gap-8 items-center ml-5 pt-2 border-[3px] border-black`}>
        <img src="./SteamLogo.png" alt="" className="w-16" />
        {/* <IoHome className='w-8 h-8 text-white'/>
        <BsFillQuestionCircleFill className='w-8 h-8 text-white'/> */}
        <div className="flex flex-col justify-around items-center gap-4">
          <h2 className="text-white font-customMotiveMedium cursor-pointer text-[14px] hover:underline decoration-white decoration-2 underline-offset-4 ">
            HOME
          </h2>
          <h2 className="text-white font-customMotiveMedium cursor-pointer text-[14px] hover:underline decoration-white decoration-2 underline-offset-4">
            FEATURE
          </h2>
          <h2 className="text-white font-customMotiveMedium cursor-pointer text-[14px] hover:underline decoration-white decoration-2 underline-offset-4">
            BROWSE
          </h2>
          <h2 className="text-white font-customMotiveMedium cursor-pointer text-[14px] hover:underline decoration-white decoration-2 underline-offset-4">
            OFFERS
          </h2>
          <h2 className="text-white font-customMotiveMedium cursor-pointer text-[14px] hover:underline decoration-white decoration-2 underline-offset-4">
            NEWS
          </h2>
        </div>
        <div className="h-[1px] w-[80%] bg-white" />
        <ImSearch className="w-6 h-6 text-white hover:scale-110" />
        <GrContact className="w-6 h-6 text-white hover:scale-110" />
        <div className="w-[80%] h-[120px] bg-black rounded-[50px] flex flex-col p-2 items-center">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
            <img
              src="./User.jpeg"
              alt=""
              className="object-cover w-[100%] h-[100%] hover:scale-110"
            />
          </div>
          <div className="mt-3">
            <h4 className="text-white font-customMotiveBold text-[12px]">
              USER
            </h4>
            <h4 className="text-white font-customMotiveBold text-[12px]">
              100$
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
