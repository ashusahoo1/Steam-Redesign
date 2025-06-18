import React from "react";
// import HoverCard from "@darenft/react-3d-hover-card";
const CategoryCards = (props) => {
  return (
    <div
      className={`group relative w-[90%] xl:h-[230px] xl:w-[380px] cursor-pointer rounded-lg `}
    >
      <img
        src={props.image}
        alt="Category image"
        className="h-full w-full object-fill rounded-lg "
      />
      <div
        className={`absolute h-full w-full top-0 ${props.shadow} rounded-lg `}
      >
        <div className=" relative text-[20px] h-full xl:text-[35px] font-[700] uppercase bottom-0 text-center w-full rounded-lg">
          <h1 className="absolute bottom-0 w-full group-hover:bottom-[37%] group-hover:scale-125 transition-all duration-500">{props.text}</h1>
        </div>
      </div>
    </div>
  );
};

export default CategoryCards;
