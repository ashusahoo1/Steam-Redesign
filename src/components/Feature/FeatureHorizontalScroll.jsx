import React, { useEffect } from "react";
// import { Link, Element } from "react-scroll";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { FaHeart, FaWindows, FaApple } from "react-icons/fa";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const EldenVideoRef = useRef(null);
  const SpidermanVideoRef = useRef(null);
  const FortniteVideoRef = useRef(null);
  const [isHoveredElden, setIsHoveredElden] = useState(false);
  const [isHoveredSpiderman, setIsHoveredSpiderman] = useState(false);
  const [isHoveredFortnite, setIsHoveredFortnite] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-69.3%"]);

  const HandleMouseEnterElden = () => {
    const video = EldenVideoRef.current;
    setIsHoveredElden(true);
    video.play();
  };

  const HandleMouseLeaveElden = () => {
    const video = EldenVideoRef.current;
    setIsHoveredElden(false);
    video.pause();
  };

  const HandleMouseEnterSpiderman = () => {
    const video = SpidermanVideoRef.current;
    setIsHoveredSpiderman(true);
    video.play();
  };

  const HandleMouseLeaveSpiderman = () => {
    const video = SpidermanVideoRef.current;
    setIsHoveredSpiderman(false);
    video.pause();
  };

  const HandleMouseEnterFortnite = () => {
    const video = FortniteVideoRef.current;
    setIsHoveredFortnite(true);
    video.play();
  };

  const HandleMouseLeaveFortnite = () => {
    const video = FortniteVideoRef.current;
    setIsHoveredFortnite(false);
    video.pause();
  };

  return (
    <>
      <section
        className="relative h-[300vh] hidden xl:block"
        ref={targetRef}
        // name="scroll-to-element"
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden ">
          <motion.div style={{ x }} className="flex gap-[500px]">
            <div className=" flex bg-[#121212] w-[1068px] h-[620px]  justify-around items-center">
              <div className="text-white w-[45%] h-[95%]  relative flex flex-col gap-4">
                <img src="./eldenring_new.png" alt="" className="w-[50%]" />
                <img
                  src="./EldenRingBorder.png"
                  alt=""
                  className="absolute top-[65px] left-[-32px]"
                />
                <p className="w-[100%] text-left font-customMotiveThin text-[14px] ">
                  Elden Ring is an action role-playing game developed by
                  FromSoftware and published by Bandai Namco Entertainment. Set
                  in a vast, open-world environment called the Lands Between,
                  the game offers players a richly detailed universe filled with
                  dark lore, challenging combat, and intricate landscapes.
                </p>
                <div className="flex gap-6 ">
                  <img
                    src="./ELDENRING_12_4K.jpg"
                    alt=""
                    className="w-[45%] rounded-3xl"
                  />
                  <img
                    src="./ELDENRING_05_4K.jpg"
                    alt=""
                    className="w-[45%] rounded-3xl"
                  />
                </div>
                <div className="flex gap-5 w[35%] flex-wrap">
                  <div className=" bg-[#62626273] py-2 px-6 rounded-xl hover:bg-[#626262] font-customMotiveMedium">
                    RPG
                  </div>
                  <div className=" bg-[#62626273] py-2 px-6 rounded-xl hover:bg-[#626262] font-customMotiveMedium">
                    DARK
                  </div>
                  <div className=" bg-[#62626273] py-2 px-6 rounded-xl hover:bg-[#626262] font-customMotiveMedium">
                    FANTASY
                  </div>
                  <div className=" bg-[#62626273] py-2 px-6 rounded-xl hover:bg-[#626262] font-customMotiveMedium">
                    SOUL
                  </div>
                </div>
                <div className="flex gap-12 items-center ">
                  <div className=" bg-[#62626273] py-3 px-4 flex items-center gap-3 font-customMotiveMedium text-xl rounded-xl ">
                    WISHLIST{" "}
                    <FaHeart className="text-xl hover:text-[#FF0000] hover:scale-125 transition-all duration-300 cursor-pointer" />
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="font-customMotiveBold text-white text-xl">
                      $50.00
                    </div>
                    <button className="bg-[#24FF0047]/[28%] px-5 py-2 border-[3px] border-[#70FF00] text-[#70FF00] font-customBatmanAlternate text-xl leading-5 rounded-3xl hover:bg-[#24FF0047]/[45%] ">
                      BUY NOW
                    </button>
                  </div>
                </div>
                <div className="flex gap-5 justify-end items-center mr-8">
                  <FaWindows className="text-3xl relative top-[3px] hover:text-white text-gray-600 cursor-pointer" />
                  <FaApple className="text-4xl hover:text-white text-gray-600 cursor-pointer" />
                </div>
              </div>
              <div
                className="text-white w-[40%] h-[85%] relative flex justify-center flex-col "
                onMouseEnter={HandleMouseEnterElden}
                onMouseLeave={HandleMouseLeaveElden}
              >
                {!isHoveredElden && (
                  <img
                    src="./EldenRingPoster2.jpeg"
                    alt=""
                    className={`h-[100%] w-[100%] object-cover object-custom-EldenRing absolute inset-0 transition-all duration-1000 ease-in-out ${
                      isHoveredElden ? "opacity-0" : "opacity-100"
                    }`}
                  />
                )}
                <video
                  src="./videos/EldenRing.mp4"
                  ref={EldenVideoRef}
                  muted
                  loop
                  className={`w-[100%] h-[80%] object-cover  transition-all duration-1000 ease-in-out ${
                    isHoveredElden ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </div>

            <div className=" flex bg-[#121212] w-[1068px] h-[620px] mx-auto my-auto justify-around items-center">
              <div className="text-white w-[45%] h-[95%]  relative flex flex-col gap-5 pt-5">
                <img
                  src="./spiderman/Marvel_Spider-Man_2_logo.webp"
                  alt=""
                  className="w-[50%]"
                />
                <p className="w-[100%] text-left font-customMotiveThin text-[14px] ">
                  Spider-Men, Peter Parker and Miles Morales, return for an
                  exciting new adventure in the critically acclaimed Marvel's
                  Spider-Man franchise for the PS5 console. Marvel's Spider-Man
                  2 out now!
                </p>
                <div className="flex gap-6 ">
                  <img
                    src="./spiderman/MilesPeter.jpg"
                    alt=""
                    className="w-[45%] rounded-3xl"
                  />
                  <img
                    src="./spiderman/ss_ad14a7daa190cb150fbb070afc70bc64d66a5e2e.600x338.jpg"
                    alt=""
                    className="w-[45%] rounded-3xl"
                  />
                </div>
                <div className="flex gap-3 w[75%] flex-wrap">
                  <div className=" bg-[#62626273] py-2 px-6 rounded-xl hover:bg-[#626262] font-customMotiveMedium">
                    SUPERHERO
                  </div>
                  <div className=" bg-[#62626273] py-2 px-6 rounded-xl hover:bg-[#626262] font-customMotiveMedium">
                    ACTION
                  </div>
                  <div className=" bg-[#62626273] py-2 px-6 rounded-xl hover:bg-[#626262] font-customMotiveMedium">
                    STEALTH
                  </div>
                  <div className=" bg-[#62626273] py-2 px-6 rounded-xl hover:bg-[#626262] font-customMotiveMedium">
                    COMBAT
                  </div>
                </div>
                <div className="flex gap-12 items-center ">
                  <div className=" bg-[#62626273] py-3 px-4 flex items-center gap-3 font-customMotiveMedium text-xl rounded-xl ">
                    WISHLIST{" "}
                    <FaHeart className="text-xl hover:text-[#FF0000] hover:scale-125 transition-all duration-300 cursor-pointer" />
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="font-customMotiveBold text-white text-xl">
                      $50.00
                    </div>
                    <button className="bg-[#24FF0047]/[28%] px-5 py-2 border-[3px] border-[#70FF00] text-[#70FF00] font-customBatmanAlternate text-xl leading-5 rounded-3xl hover:bg-[#24FF0047]/[45%] ">
                      BUY NOW
                    </button>
                  </div>
                </div>
                <div className="flex gap-5 justify-end items-center mr-8">
                  <FaWindows className="text-3xl relative top-[3px] hover:text-white text-gray-600 cursor-pointer" />
                  <FaApple className="text-4xl hover:text-white text-gray-600 cursor-pointer" />
                </div>
              </div>
              <div
                className="text-white w-[40%] h-[85%] relative flex justify-center flex-col "
                onMouseEnter={HandleMouseEnterSpiderman}
                onMouseLeave={HandleMouseLeaveSpiderman}
              >
                {!isHoveredSpiderman && (
                  <img
                    src="./spiderman/MainImg.jpg"
                    alt=""
                    className={`h-[100%] w-[100%] object-cover object-custom-EldenRing absolute inset-0 transition-all duration-500 ease-in-out ${
                      isHoveredSpiderman ? "opacity-0" : "opacity-100"
                    }`}
                  />
                )}
                <video
                  src="./videos/Spiderman.mp4"
                  ref={SpidermanVideoRef}
                  muted
                  loop
                  className={`w-[100%]  object-cover  transition-all duration-500 ease-in-out ${
                    isHoveredSpiderman ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </div>

            <div className=" flex bg-[#121212] w-[1068px] h-[620px] mx-auto my-auto justify-around items-center">
              <div className="text-white w-[45%] h-[95%]  relative flex flex-col gap-4">
                <img
                  src="./Fortnite/fortniteLogo2.png"
                  alt=""
                  className="w-[45%]"
                />
                <p className="w-[100%] text-left font-customMotiveThin text-[14px] ">
                  Fortnite is a popular battle royale game developed by Epic
                  Games, featuring fast-paced action, creative building
                  mechanics, and vibrant graphics, attracting millions of
                  players worldwide with its dynamic gameplay and frequent
                  updates.
                </p>
                <div className="flex gap-6 ">
                  <img
                    src="./Fortnite/Fortnite1.webp"
                    alt=""
                    className="w-[45%] rounded-3xl"
                  />
                  <img
                    src="./Fortnite/Fortnite2.jpeg"
                    alt=""
                    className="w-[45%] rounded-3xl"
                  />
                </div>
                <div className="flex gap-5 w[75%] flex-wrap">
                  <div className=" bg-[#62626273] py-2 px-6 rounded-xl hover:bg-[#626262] font-customMotiveMedium">
                    ESPORTS
                  </div>
                  <div className=" bg-[#62626273] py-2 px-6 rounded-xl hover:bg-[#626262] font-customMotiveMedium">
                    SURVIVAL
                  </div>
                  <div className=" bg-[#62626273] py-2 px-6 rounded-xl hover:bg-[#626262] font-customMotiveMedium">
                    SHOOTER
                  </div>
                  <div className=" bg-[#62626273] py-2 px-6 rounded-xl hover:bg-[#626262] font-customMotiveMedium">
                    TACTICAL
                  </div>
                </div>
                <div className="flex gap-12 items-center ">
                  <div className=" bg-[#62626273] py-3 px-4 flex items-center gap-3 font-customMotiveMedium text-xl rounded-xl ">
                    WISHLIST{" "}
                    <FaHeart className="text-xl hover:text-[#FF0000] hover:scale-125 transition-all duration-300 cursor-pointer" />
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="font-customMotiveBold text-white text-xl">
                      $50.00
                    </div>
                    <button className="bg-[#24FF0047]/[28%] px-5 py-2 border-[3px] border-[#70FF00] text-[#70FF00] font-customBatmanAlternate text-xl leading-5 rounded-3xl hover:bg-[#24FF0047]/[45%] ">
                      BUY NOW
                    </button>
                  </div>
                </div>
                <div className="flex gap-5 justify-end items-center mr-8">
                  <FaWindows className="text-3xl relative top-[3px] hover:text-white text-gray-600 cursor-pointer" />
                  <FaApple className="text-4xl hover:text-white text-gray-600 cursor-pointer" />
                </div>
              </div>
              <div
                className="text-white w-[40%] h-[85%] relative flex justify-center flex-col "
                onMouseEnter={HandleMouseEnterFortnite}
                onMouseLeave={HandleMouseLeaveFortnite}
              >
                {!isHoveredFortnite && (
                  <img
                    src="./Fortnite/MainImg.png"
                    alt=""
                    className={`h-[100%] w-[100%] object-cover object-custom-EldenRing absolute inset-0 transition-all duration-1000 ease-in-out ${
                      isHoveredFortnite ? "opacity-0" : "opacity-100"
                    }`}
                  />
                )}
                <video
                  src="./videos/Fortnite.mp4"
                  ref={FortniteVideoRef}
                  muted
                  loop
                  className={`w-[100%]  object-cover  transition-all duration-1000 ease-in-out ${
                    isHoveredFortnite ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* <Link to="scroll-to-element" spy={true} smooth={true} duration={1000} className="text-white">
        Scroll to Element
      </Link> */}

      <div className="text-white xl:hidden flex flex-col gap-2 justify-center items-center">
        <div className="bg-[#121212] w-[85%] h-[800px] mx-auto my-12 flex flex-col justify-between py-7 items-center">
          <div className=" w-[85%] h-[48%]">
            <img
              src="./EldenRingPoster2.jpeg"
              alt=""
              className="w-[100%] h-[100%] object-cover object-custom-EldenRing"
            />
          </div>
          <div className="w-[85%] h-[48%]">
            <div className="text-white w-[100%] h-[100%]  relative flex flex-col gap-4">
              <img src="./eldenring_new.png" alt="" className="w-[50%]" />
              <img
                src="./EldenRingBorder.png"
                alt=""
                className="absolute top-[40px] left-[-20px]"
              />
              <div className="flex gap-6 ">
                <img
                  src="./ELDENRING_12_4K.jpg"
                  alt=""
                  className="w-[45%] rounded-3xl"
                />
                <img
                  src="./ELDENRING_05_4K.jpg"
                  alt=""
                  className="w-[45%] rounded-3xl"
                />
              </div>
              <div className="flex gap-3 w[95%] ">
                <div className=" bg-[#62626273] py-2 px-6 rounded-xl hover:bg-[#626262] font-customMotiveMedium">
                  RPG
                </div>
                <div className=" bg-[#62626273] py-2 px-6 rounded-xl hover:bg-[#626262] font-customMotiveMedium">
                  DARK
                </div>
                <div className=" bg-[#62626273] py-2 px-6 rounded-xl hover:bg-[#626262] font-customMotiveMedium">
                  SOUL
                </div>
              </div>
                <div className=" bg-[#62626273] py-3 px-4 flex items-center gap-3 font-customMotiveMedium text-xl rounded-xl w-fit">
                  WISHLIST{" "}
                  <FaHeart className="text-xl hover:text-[#FF0000] hover:scale-125 transition-all duration-300 cursor-pointer" />
                </div>
                <div className="flex gap-3 items-center ml-3">
                  <div className="font-customMotiveBold text-white text-xl">
                    $50.00
                  </div>
                  <button className="bg-[#24FF0047]/[28%] px-5 py-2 border-[3px] border-[#70FF00] text-[#70FF00] font-customBatmanAlternate text-xl leading-5 rounded-3xl hover:bg-[#24FF0047]/[45%] ">
                    BUY NOW
                  </button>
                </div>
              
              <div className="flex gap-5 justify-end items-center mr-8">
                <FaWindows className="text-3xl relative top-[3px] hover:text-white text-gray-600 cursor-pointer" />
                <FaApple className="text-4xl hover:text-white text-gray-600 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#121212] w-[85%] h-[800px] mx-auto my-12 flex flex-col justify-between py-7 items-center">
          <div className=" w-[85%] h-[48%]">
            <img
              src="./spiderman/MainImg.jpg"
              alt=""
              className="w-[100%] h-[100%] object-cover object-custom-EldenRing"
            />
          </div>
          <div className="w-[85%] h-[48%]">
            <div className="text-white w-[100%] h-[100%]  relative flex flex-col gap-4">
              <img src="./spiderman/Marvel_Spider-Man_2_logo.webp" alt="" className="w-[50%]" />
              
              <div className="flex gap-6 ">
                <img
                  src="./spiderman/ss_ad14a7daa190cb150fbb070afc70bc64d66a5e2e.600x338.jpg"
                  alt=""
                  className="w-[45%] rounded-3xl"
                />
                <img
                  src="./spiderman/MilesPeter.jpg"
                  alt=""
                  className="w-[45%] rounded-3xl"
                />
              </div>
              <div className="flex gap-3 w[95%] ">
                <div className=" bg-[#62626273] py-2 px-6 rounded-xl hover:bg-[#626262] font-customMotiveMedium">
                ACTION
                </div>
                <div className=" bg-[#62626273] py-2 px-6 rounded-xl hover:bg-[#626262] font-customMotiveMedium">
                STEALTH
                </div>
               
              </div>
                <div className=" bg-[#62626273] py-3 px-4 flex items-center gap-3 font-customMotiveMedium text-xl rounded-xl w-fit">
                  WISHLIST{" "}
                  <FaHeart className="text-xl hover:text-[#FF0000] hover:scale-125 transition-all duration-300 cursor-pointer" />
                </div>
                <div className="flex gap-3 items-center ml-3">
                  <div className="font-customMotiveBold text-white text-xl">
                    $50.00
                  </div>
                  <button className="bg-[#24FF0047]/[28%] px-5 py-2 border-[3px] border-[#70FF00] text-[#70FF00] font-customBatmanAlternate text-xl leading-5 rounded-3xl hover:bg-[#24FF0047]/[45%] ">
                    BUY NOW
                  </button>
                </div>
              
              <div className="flex gap-5 justify-end items-center mr-8">
                <FaWindows className="text-3xl relative top-[3px] hover:text-white text-gray-600 cursor-pointer" />
                <FaApple className="text-4xl hover:text-white text-gray-600 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#121212] w-[85%] h-[800px] mx-auto my-12 flex flex-col justify-between py-7 items-center">
          <div className=" w-[85%] h-[48%]">
            <img
              src="./Fortnite/MainImg.png"
              alt=""
              className="w-[100%] h-[100%] object-cover object-custom-EldenRing"
            />
          </div>
          <div className="w-[85%] h-[48%]">
            <div className="text-white w-[100%] h-[100%]  relative flex flex-col gap-4">
              <img src="./Fortnite/fortniteLogo2.png" alt="" className="w-[50%]" />
              
              <div className="flex gap-6 ">
                <img
                  src="./Fortnite/Fortnite1.webp"
                  alt=""
                  className="w-[45%] rounded-3xl"
                />
                <img
                  src="./Fortnite/Fortnite2.jpeg"
                  alt=""
                  className="w-[45%] rounded-3xl"
                />
              </div>
              <div className="flex gap-3 w[95%] ">
                <div className=" bg-[#62626273] py-2 px-6 rounded-xl hover:bg-[#626262] font-customMotiveMedium">
                ESPORTS
                </div>
                <div className=" bg-[#62626273] py-2 px-6 rounded-xl hover:bg-[#626262] font-customMotiveMedium">
                SHOOTER
                </div>
               
              </div>
                <div className=" bg-[#62626273] py-3 px-4 flex items-center gap-3 font-customMotiveMedium text-xl rounded-xl w-fit">
                  WISHLIST{" "}
                  <FaHeart className="text-xl hover:text-[#FF0000] hover:scale-125 transition-all duration-300 cursor-pointer" />
                </div>
                <div className="flex gap-3 items-center ml-3">
                  <div className="font-customMotiveBold text-white text-xl">
                    $50.00
                  </div>
                  <button className="bg-[#24FF0047]/[28%] px-5 py-2 border-[3px] border-[#70FF00] text-[#70FF00] font-customBatmanAlternate text-xl leading-5 rounded-3xl hover:bg-[#24FF0047]/[45%] ">
                    BUY NOW
                  </button>
                </div>
              
              <div className="flex gap-5 justify-end items-center mr-8">
                <FaWindows className="text-3xl relative top-[3px] hover:text-white text-gray-600 cursor-pointer" />
                <FaApple className="text-4xl hover:text-white text-gray-600 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalScrollCarousel;
