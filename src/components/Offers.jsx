import React, { useState } from "react";
import OfferCards from "./OfferCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Title from "./Title";

const Offers = () => {
  const [rotate, setRotate] = useState(false);

  const handleMouseEnter = () => {
    setRotate(true);
  };

  const handleMouseLeave = () => {
    setRotate(false);
  };
  return (
    <section className="w-full bg-black  h-screen text-white">
      <Title title="Special offers" button="Browse More" />
      <div className="h-[80%] w-[97%] flex max-sm:flex-col items-center justify-center gap-4 mt-6 xl:mt-3 mx-auto">
        <div
          className={`group xl:h-[95%] xl:w-[45%] h-[50%] w-[85%] bg-[#1E1E1E] rounded-xl transition-all duration-300 ease-linear ${
            rotate ? "[transform:rotateY(360deg)]" : ""
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="h-full w-full flex items-center relative justify-center xl:text-[30px] text-[25px] text-[#9eb2cb] uppercase group-hover:hidden ">
            <div className="absolute h-full w-full top-0">
              <img
                src="/807cea8cfe0d06bd3420646526b6e6fc9c3d051a.jpg"
                alt=""
                className="h-full w-full"
              />
              <div className="absolute flex items-center justify-center w-full h-full bg-black/70 top-0">
                <h1 className="hidden xl:contents">Hover to Reveal</h1>
                <h1 className="xl:hidden">Click to Reveal</h1>
              </div>
            </div>
            <h1 className="hidden xl:contents">Hover to Reveal</h1>
            <h1 className="xl:hidden">Click to Reveal</h1>
          </div>
          <div className="hidden group-hover:contents">
            <div className="w-full h-[80%] ">
              <img
                src="/807cea8cfe0d06bd3420646526b6e6fc9c3d051a.jpg"
                alt=""
                className="h-full w-full rounded-xl cursor-pointer"
              />
            </div>
            <div className="h-[20%] w-full flex items-center justify-around">
              <img
                src="/Vector.png"
                alt=""
                className="xl:h-10 xl:w-20 h-4 w-5 cursor-pointer"
              />
              <p className="xl:text-[20px] text-[15px] text-[#76808C] ">
                Until Nov 2
              </p>
              <button className="h-fit xl:py-2 xl:px-5 p-2 hover:bg-[#A1CD44] bg-lime-400 xl:rounded-2xl max-sm:rounded-lg text-[20px] max-sm:text-[12px] font-[700] text-black">
                -20%
              </button>
              <div className="flex flex-col text-[25px] max-sm:text-[15px]">
                <h2 className="line-through text-[#76808C]">$59.99</h2>
                <h2 className="text-lime-400 hover:underline cursor-pointer">
                  $47.99
                </h2>
              </div>
              <div className="h-fit w-fit py-2 px-4 max-sm:py-1 rounded-lg bg-[#1E2329] hover:bg-slate-700 hover:text-red-600 cursor-pointer">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-[12px] xl:text-[20px] hover:scale-125 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:h-[95%] h-[50%]  xl:w-[45%] w-[85%]  flex flex-col items-center justify-between ">
          <OfferCards
            image="/0509a72db089f1426ae9021253518db70972bd7c.jpg"
            validity="Until Nov 2"
            prevPrice="$50.00"
            currPrice="$47.59"
            discount="-20%"
          />
          <OfferCards
            image="/aec76f05630abc8d00af9254bd613266fd57d489.jpg"
            validity="Until Nov 2"
            prevPrice="$50.00"
            currPrice="$47.59"
            discount="-20%"
          />
        </div>
      </div>
    </section>
  );
};

export default Offers;
