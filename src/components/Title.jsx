import React from 'react'

const Title = (props) => {
  return (
    <div className="flex items-center justify-between px-2 xl:px-14  w-full h-fit pt-5 uppercase">
    <h1 className="cursor-pointer xl:-skew-x-12 h-fit w-full text-center xl:text-left xl:w-fit text-[20px] xl:ml-11 xl:text-[50px] font-customBatmanAlternate font-bold">
      {props.title}
    </h1>
    {/* <button classNameName="xl:py-2 xl:px-6 -skew-x-12 border-2 border-white hidden xl:flex bg-[#1E1E1E] xl:rounded-xl uppercase ">
      {props.button}
    </button> */}
    <div className='-skew-x-12 hidden xl:contents'>
    <a href="#_" className="relative -skew-x-12 px-5 py-3 overflow-hidden font-medium text-gray-400 bg-[#1E1E1E] border border-gray-100 rounded-md group">
<span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-100 group-hover:w-full ease"></span>
<span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-500 border-b-2 border-gray-100 group-hover:w-full ease"></span>
<span className="absolute top-0 left-0 w-full h-0 transition-all duration-700 delay-200 bg-gray-100 group-hover:h-full ease"></span>
<span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-700 delay-200 bg-gray-100 group-hover:h-full ease"></span>
<span className="absolute inset-0 w-full h-full duration-700 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
<span className="relative transition-colors duration-700 delay-200 group-hover:text-white ease text-xl font-customBatmanAlternate">{props.button}</span>
</a>
</div>
  </div>
  )
}

export default Title