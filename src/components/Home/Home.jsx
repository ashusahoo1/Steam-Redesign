import React, { useState } from "react";
import HomeSlider from "./HomeSlider";
import Navbar from "./Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { FaThumbsUp, FaHeart } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Keyboard, Autoplay } from "swiper/modules";
import "./HomeSlider.css";

const Home = () => {
  const HomeRef = useRef(null);

  const handleSlideChange = (swiper) => {
    SetCurrentBg(swiper.activeIndex);
  };

  const { scrollYProgress } = useScroll({
    target: HomeRef,
    offset: ["1% start", "30% start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const transition = {
    duration: 0.6, // Duration of animation
    ease: "easeInOut", // Custom cubic Bezier easing
  };

  const BgArray = [
    { colour: "bg-[#AA0C01]/50", image: "./cover-1920-bd460362.jpg" },
    { colour: "bg-[#92A6BB]/30", image: "./GodOfWarPoster1.jpg" },
    { colour: "bg-[#ECA636]/50", image: "./gta-5-poster.jpg" },
    { colour: "bg-[#111318]/50", image: "./SekiroPoster.jpg" },
    { colour: "bg-[#5A6A75]/50", image: "./FC24poster1.webp" },
  ];

  const [CurrentBg, SetCurrentBg] = useState(0);

  return (
    <>
      <motion.div
        className="w-full min-h-screen relative hidden xl:block"
        ref={HomeRef}
        style={{ scale }}
        transition={transition}
      >
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat transform -scale-x-100 blur-[2px] transition-all duration-150 ease-in-out"
          style={{
            backgroundImage: `url(${BgArray[CurrentBg].image})`,
            zIndex: -1,
          }}
        />
        <div className="flex  items-center">
          <Navbar CurrentClr={BgArray[CurrentBg].colour} />
          <HomeSlider SetCurrentBg={SetCurrentBg} BgArray={BgArray} />
        </div>
      </motion.div>

      <div className="xl:hidden block text-white">
        <nav className="w-[full] h-[80px] bg-[#0E141B] flex justify-around items-center">
          <MdOutlineShoppingCart className="text-4xl" />
          <img src="./SteamLogo.png" alt="" className="w-14" />
          <IoIosMenu className="text-5xl" />
        </nav>
        <div className="w-[full] h-[60px] bg-[#AA0C01] flex justify-between items-center px-12">
          <FaChevronDown className="text-2xl" />
          <ImSearch className="text-2xl" />
        </div>
        <div className="">
        <Swiper
          slidesPerView={"1"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Keyboard, Autoplay]}
          keyboard={{ enabled: true, onlyInViewport: true }}
          onSlideChange={handleSlideChange}
          autoplay={{
            delay: 3000, // Delay between slides in ms
          }}
          // centeredSlides={true}
          className="mySwiper w-[92%] pt-10 pb-12"
        >
          <SwiperSlide className="h-[600px] rounded-3xl overflow-hidden  relative shadow-md">
            <img
              src="./product-cp77@2x-4a388c1d.jpg"
              alt=""
              className="w-[100%] h-[100%] object-cover opacity-90 "
            />
            <button className="w-14 h-14 rounded-full bg-black z-10 absolute top-[8%] left-[13%] transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center border-[3px] border-[#1A83FF]">
              <FaThumbsUp className="text-[23px] z-20 transition-all duration-300 hover:text-[#1A83FF] hover:scale-110 cursor-pointer text-white" />
            </button>
            
            <div className="flex items-center gap-5 z-10 absolute top-[82%] left-[6%]">
              <div className="flex justify-around items-center w-[220px] h-[80px] rounded-3xl bg-black/50 z-10  border-[3px]">
                <button className="bg-[#24FF0047]/[28%] w-20 h-12 border-[3px] border-[#70FF00] text-[#70FF00] font-customBatmanAlternate text-md leading-5 rounded-3xl hover:bg-[#24FF0047]/[45%] ">
                  BUY
                  <br />
                  NOW
                </button>
                <div className="font-customMotiveBold text-white text-2xl">
                  $50
                </div>
                <div className="font-customMotiveBold text-white text-lg line-through decoration-2">
                  $100
                </div>
              </div>
              <div className="flex justify-around items-center w-[80px] h-[80px] rounded-full bg-black/50 z-10  border-[3px] font-customMotiveBold text-white text-lg leading-7">
                50%
                <br />
                OFF
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[600px] rounded-3xl overflow-hidden  relative shadow-md">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/208/228/959/soufiane-idrassi-digital-art-god-of-war-4-tattoo-wallpaper-preview.jpg"
              alt=""
              className="w-[100%] h-[100%] object-cover opacity-90 "
            />
            <button className="w-14 h-14 rounded-full bg-black z-10 absolute top-[8%] left-[13%] transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center border-[3px] border-[#1A83FF]">
              <FaThumbsUp className="text-[23px] z-20 transition-all duration-300 hover:text-[#1A83FF] hover:scale-110 cursor-pointer text-white" />
            </button>
            
            <div className="flex items-center gap-5 z-10 absolute top-[82%] left-[6%]">
              <div className="flex justify-around items-center w-[220px] h-[80px] rounded-3xl bg-black/50 z-10  border-[3px]">
                <button className="bg-[#24FF0047]/[28%] w-20 h-12 border-[3px] border-[#70FF00] text-[#70FF00] font-customBatmanAlternate text-md leading-5 rounded-3xl hover:bg-[#24FF0047]/[45%] ">
                  BUY
                  <br />
                  NOW
                </button>
                <div className="font-customMotiveBold text-white text-2xl">
                  $50
                </div>
                <div className="font-customMotiveBold text-white text-lg line-through decoration-2">
                  $100
                </div>
              </div>
              <div className="flex justify-around items-center w-[80px] h-[80px] rounded-full bg-black/50 z-10  border-[3px] font-customMotiveBold text-white text-lg leading-7">
                50%
                <br />
                OFF
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[600px] rounded-3xl overflow-hidden  relative shadow-md">
            <img
              src="https://i.pinimg.com/736x/81/cf/90/81cf904e01e5de3aab0ede3eec267420.jpg"
              alt=""
              className="w-[100%] h-[100%] object-cover opacity-90 "
            />
            <button className="w-14 h-14 rounded-full bg-black z-10 absolute top-[8%] left-[13%] transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center border-[3px] border-[#1A83FF]">
              <FaThumbsUp className="text-[23px] z-20 transition-all duration-300 hover:text-[#1A83FF] hover:scale-110 cursor-pointer text-white" />
            </button>
            
            <div className="flex items-center gap-5 z-10 absolute top-[82%] left-[6%]">
              <div className="flex justify-around items-center w-[220px] h-[80px] rounded-3xl bg-black/50 z-10  border-[3px]">
                <button className="bg-[#24FF0047]/[28%] w-20 h-12 border-[3px] border-[#70FF00] text-[#70FF00] font-customBatmanAlternate text-md leading-5 rounded-3xl hover:bg-[#24FF0047]/[45%] ">
                  BUY
                  <br />
                  NOW
                </button>
                <div className="font-customMotiveBold text-white text-2xl">
                  $50
                </div>
                <div className="font-customMotiveBold text-white text-lg line-through decoration-2">
                  $100
                </div>
              </div>
              <div className="flex justify-around items-center w-[80px] h-[80px] rounded-full bg-black/50 z-10  border-[3px] font-customMotiveBold text-white text-lg leading-7">
                50%
                <br />
                OFF
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[600px] rounded-3xl overflow-hidden  relative shadow-md">
            <img
              src="https://i.redd.it/oz4xa3tp72841.jpg"
              alt=""
              className="w-[100%] h-[100%] object-cover opacity-90 "
            />
            <button className="w-14 h-14 rounded-full bg-black z-10 absolute top-[8%] left-[13%] transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center border-[3px] border-[#1A83FF]">
              <FaThumbsUp className="text-[23px] z-20 transition-all duration-300 hover:text-[#1A83FF] hover:scale-110 cursor-pointer text-white" />
            </button>
            
            <div className="flex items-center gap-5 z-10 absolute top-[82%] left-[6%]">
              <div className="flex justify-around items-center w-[220px] h-[80px] rounded-3xl bg-black/50 z-10  border-[3px]">
                <button className="bg-[#24FF0047]/[28%] w-20 h-12 border-[3px] border-[#70FF00] text-[#70FF00] font-customBatmanAlternate text-md leading-5 rounded-3xl hover:bg-[#24FF0047]/[45%] ">
                  BUY
                  <br />
                  NOW
                </button>
                <div className="font-customMotiveBold text-white text-2xl">
                  $50
                </div>
                <div className="font-customMotiveBold text-white text-lg line-through decoration-2">
                  $100
                </div>
              </div>
              <div className="flex justify-around items-center w-[80px] h-[80px] rounded-full bg-black/50 z-10  border-[3px] font-customMotiveBold text-white text-lg leading-7">
                50%
                <br />
                OFF
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[600px] rounded-3xl overflow-hidden  relative shadow-md">
            <img
              src="https://i.pinimg.com/736x/9e/34/6b/9e346b96aa14b0a72569bf1f04c7bca2.jpg"
              alt=""
              className="w-[100%] h-[100%] object-cover opacity-90 "
            />
            <button className="w-14 h-14 rounded-full bg-black z-10 absolute top-[8%] left-[13%] transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center border-[3px] border-[#1A83FF]">
              <FaThumbsUp className="text-[23px] z-20 transition-all duration-300 hover:text-[#1A83FF] hover:scale-110 cursor-pointer text-white" />
            </button>
           
            <div className="flex items-center gap-5 z-10 absolute top-[82%] left-[6%]">
              <div className="flex justify-around items-center w-[220px] h-[80px] rounded-3xl bg-black/50 z-10  border-[3px]">
                <button className="bg-[#24FF0047]/[28%] w-20 h-12 border-[3px] border-[#70FF00] text-[#70FF00] font-customBatmanAlternate text-md leading-5 rounded-3xl hover:bg-[#24FF0047]/[45%] ">
                  BUY
                  <br />
                  NOW
                </button>
                <div className="font-customMotiveBold text-white text-2xl">
                  $50
                </div>
                <div className="font-customMotiveBold text-white text-lg line-through decoration-2">
                  $100
                </div>
              </div>
              <div className="flex justify-around items-center w-[80px] h-[80px] rounded-full bg-black/50 z-10  border-[3px] font-customMotiveBold text-white text-lg leading-7">
                50%
                <br />
                OFF
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        </div>
      </div>
    </>
  );
};

export default Home;
