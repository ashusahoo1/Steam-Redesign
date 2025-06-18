import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FaThumbsUp, FaHeart } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { Pagination, Keyboard, Autoplay } from "swiper/modules";
import "./HomeSlider.css";

const HomeSlider = ({ SetCurrentBg, BgArray }) => {
  const handleSlideChange = (swiper) => {
    SetCurrentBg(swiper.activeIndex);
  };

  const HomeSliderContent = [
    { BgImg: "./GodOfWarPoster1.jpg", tags: ["RPG", "Action", "Adventure"] },
    { BgImg: "./gta-5-poster.jpg", tags: ["Crime", "Action", "Open World"] },
    { BgImg: "./SekiroPoster.jpg", tags: ["Ninja", "Action", "Souls-Like"] },
    {
      BgImg: "./FC24poster1.webp",
      tags: ["Football", "Sports", "Multiplayer"],
    },
  ];

  return (
    <>
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
            src="./cover-1920-bd460362.jpg"
            alt=""
            className="w-[100%] h-[100%] object-cover opacity-90 "
          />
          <button className="w-16 h-16 rounded-full bg-black z-10 absolute top-[10%] left-[7.5%] transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center border-[3px] border-[#1A83FF]">
            <FaThumbsUp className="text-[26px] z-20 transition-all duration-300 hover:text-[#1A83FF] hover:scale-110 cursor-pointer text-white" />
          </button>
          <div className="flex z-10 absolute top-[10%] left-[23%] transform -translate-x-1/2 -translate-y-1/2 gap-10">
            <div className="bg-black/75 hover:bg-black/85 border-[3px] border-[#285E6E] rounded-[30px] text-white py-1 px-3">
              Sci-Fi
            </div>
            <div className="bg-black/75 hover:bg-black/85 border-[3px] border-[#285E6E] rounded-[30px] text-white py-1 px-3">
              RPG
            </div>
            <div className="bg-black/75 hover:bg-black/85 border-[3px] border-[#285E6E] rounded-[30px] text-white py-1 px-3">
              Adventure
            </div>
          </div>
            <img
              src="./logo-franchise-black-en@2x-06852b64.png"
              alt=""
              className="w-[700px] h-[180px] z-10 absolute top-[37%] left-[6%]"
            />
            <div className="flex items-center gap-5 z-10 absolute top-[77.5%] left-[6%]">
              <div className="flex justify-around items-center w-[320px] h-[80px] rounded-3xl bg-black/50 z-10  border-[3px]">
                <button className="bg-[#24FF0047]/[28%] w-32 h-12 border-[3px] border-[#70FF00] text-[#70FF00] font-customBatmanAlternate text-xl leading-5 rounded-3xl hover:bg-[#24FF0047]/[45%] ">
                  BUY
                  <br />
                  NOW
                </button>
                <div className="font-customMotiveBold text-white text-3xl">
                  $50
                </div>
                <div className="font-customMotiveBold text-white text-2xl line-through decoration-2">
                  $100
                </div>
              </div>
              <div className="flex justify-around items-center w-[105px] h-[105px] rounded-full bg-black/50 z-10  border-[3px] font-customMotiveBold text-white text-2xl leading-7">
                50%
                <br />
                OFF
              </div>
            </div>
            <div className="flex absolute z-10 gap-6 top-[82%] left-[84%]">
              <button className="w-16 h-16 rounded-full bg-black z-10 flex justify-center items-center border-[3px] border-[#1A83FF]">
                <FaHeart className="text-[25px] z-20 transition-all duration-300 text-white hover:text-[#FF0000] hover:scale-110 cursor-pointer" />
              </button>
              <button className="w-16 h-16 rounded-full bg-black z-10  flex justify-center items-center border-[3px] border-[#1A83FF]">
                <MdOutlineMenu className="text-[35px] z-20 text-[#FFB800] hover:scale-110 cursor-pointer transition-all duration-300" />
              </button>
            </div>
        </SwiperSlide>
        {HomeSliderContent.map((Content) => (
          <SwiperSlide className="h-[600px] rounded-3xl overflow-hidden  relative shadow-md">
            <img
              src={Content.BgImg}
              alt=""
              className="w-[100%] h-[100%] object-cover opacity-90 "
            />
            <button className="w-16 h-16 rounded-full bg-black z-10 absolute top-[10%] left-[7.5%] transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center border-[3px] border-[#1A83FF]">
              <FaThumbsUp className="text-[26px] z-20 transition-all duration-300 hover:text-[#1A83FF] hover:scale-110 cursor-pointer text-white" />
            </button>
            <div className="flex z-10 absolute top-[10%] left-[23.5%] transform -translate-x-1/2 -translate-y-1/2 gap-10">
              {Content.tags.map((tag) => (
                <div className="bg-black/75 hover:bg-black/85 border-[3px] border-[#285E6E] rounded-[30px] text-white py-1 px-3 cursor-pointer">
                  {tag}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-5 absolute top-[86%] left-[22%] transform -translate-x-1/2 -translate-y-1/2   ">
              <div className="flex justify-around items-center w-[320px] h-[80px] rounded-3xl bg-black/50 z-10  border-[3px]">
                <button className="bg-[#24FF0047]/[28%] w-32 h-12 border-[3px] border-[#70FF00] text-[#70FF00] font-customBatmanAlternate text-xl leading-5 rounded-3xl hover:bg-[#24FF0047]/[45%] ">
                  BUY
                  <br />
                  NOW
                </button>
                <div className="font-customMotiveBold text-white text-3xl">
                  $50
                </div>
                <div className="font-customMotiveBold text-white text-2xl line-through decoration-2">
                  $100
                </div>
              </div>
              <div className="flex justify-around items-center w-[105px] h-[105px] rounded-full bg-black/50 z-10  border-[3px] font-customMotiveBold text-white text-2xl leading-7">
                50%
                <br />
                OFF
              </div>
            </div>
            <div className="flex absolute gap-6 top-[82%] left-[84%]">
              <button className="w-16 h-16 rounded-full bg-black z-10 flex justify-center items-center border-[3px] border-[#1A83FF]">
                <FaHeart className="text-[25px] z-20 transition-all duration-300 text-white hover:text-[#FF0000] hover:scale-110 cursor-pointer" />{" "}
              </button>
              <button className="w-16 h-16 rounded-full bg-black z-10  flex justify-center items-center border-[3px] border-[#1A83FF]">
                <MdOutlineMenu className="text-[35px] z-20 text-[#FFB800] hover:scale-110 cursor-pointer transition-all duration-300" />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeSlider;
