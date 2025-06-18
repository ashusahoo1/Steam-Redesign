import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaWindows, FaApple, FaHeart } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Pagination, Keyboard } from "swiper/modules";

function Slider() {
  let NewsContent = [
    {
      image:"./News/manor-lords.jpg",
      heading: "Manor Lords is on Sale!",
      desc: "Manor Lords combines deep city-building, strategic battles, and intricate economic simulations in a medieval setting. As a lord, you'll manage the growth of your village into a flourishing city, handle resources, and expand your territory through strategic conquests.",
    },
    {
      image: "./News/F1.jpg",
      heading: "F1® Manager 24 - OUT NOW!",
      desc: "The time has come to create your own F1® legacy - F1® Manager 24 is out now! F1® Manager 24 is the most comprehensive F1 management experience to date.",
    },
    {
      image:
        "./News/Tekken8.jpg",
      heading: "Lidia is now available in early access",
      desc: "Lidia Sobieska is the latest Character added to TEKKEN 8! She is now available in early access for Playable Character Year 1 Pass holders for 72 hours 🤜🤛",
    },
    {
      image: "./News/Helldivers2.jpg",
      heading: "Unleash more Liberty with Helldivers 2!",
      desc: " We are bringing greater variety to our content. From objectives to enemies and planets, we are delivering a ton of new content for both our Helldivers on the battlefield. ",
    },
    {
      image: "./News/StreetFighter.webp",
      heading: "New details on Terry, the second Year 2 character!",
      desc: "Terry makes his first appearance in this trailer that features him in action in World Tour. Terry will be the second character of Year 2 and is scheduled to release this autumn!",
    },
  ];

  return (
    <>
      {/* for mobile screens */}
      <div className="">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Keyboard]}
          keyboard={{ enabled: true, onlyInViewport: true }}
          centeredSlides={true}
          initialSlide={2}
          className="mySwiper w-[90%] pt-[20px] pb-[50px]"
        >
          {NewsContent.map((elem, index) => (
            <SwiperSlide
              className="w-80 sm:w-[440px] sm:h-[600px] h-[690px]  md:w-[500px] text-[18px] bg-[#1E1E1E] flex-col align-middle md:h-[530px]"
              key={elem.index}
            >
              <div
                className="h-[60%] w-[100%] "
                style={{
                  backgroundImage: `url(${elem.image})`,
                  backgroundSize: "cover", 
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                 
                }}
              >
                <img
                  src={elem.image}
                  alt={elem.heading}
                  className="h-[100%] object-contain "
                  style={{ backdropFilter: "blur(15px)"}}
                />
              </div>
              <div className="flex">
                <div className="pt-2 pl-4 pr-4 pb-2 w-[80%]">
                  <h2 className="font-customMotiveBold text-[27px] mb-2 xl:leading-10 leading-8">
                    {elem.heading}
                  </h2>
                  <p className="text-[12.5px] leading-4 mb-4">{elem.desc}</p>
                  <div className="flex gap-3 ">
                    <FaWindows className="text-2xl hover:text-white text-gray-600 cursor-pointer" />
                    <FaApple className="text-3xl  relative bottom-[6px] hover:text-white text-gray-600 cursor-pointer" />
                  </div>
                </div>
                <div className="bg-[#222B36] w-14 h-14 mr-3 sm:ml-3 sm:mt-5 md:ml-5 mt-3 md:mt-5 flex justify-center items-center rounded-full">
                  <FaHeart className="text-2xl hover:text-[#FF0000] hover:text-3xl transition-all duration-300 cursor-pointer" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
