import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const SellerCards = (props) => {
  return (
    <div className='w-[400px] max-sm:w-[270px] flex bg-[#1E1E1E] text-white gap-6 max-sm:gap-2 rounded-lg ml-8'>
         <div className='w-[60%] h-full cursor-pointer'>
            <img src={props.image} alt="Game image" className='h-full w-full rounded-lg'/>
         </div>
         <div className='h-full w-[30%] flex flex-col gap-3 mt-2 max-sm:gap-2'>
            <h1 className='uppercase text-[22px] max-sm:text-[15px] font-[700] xl:pl-3 truncate w-full'>{props.title}</h1>
            <div className='w-full h-[30%] flex gap-4 pl-5 max-sm:pl-2'>
              <img src="/Vector.png" alt="android" className='h-7 max-sm:h-4'/>
              <img src="/Apple.png" alt="apple" className='h-7 max-sm:h-4'/>
          </div>
          <div className='flex gap-2'>
             <h2 className='text-[20px] max-sm:text-[15px] font-[700]'>{props.price}</h2>
             <div className="h-fit w-fit py-2 px-4 max-sm:px-3 max-sm:py-0 rounded-lg bg-[#1E2329] hover:bg-slate-700 hover:text-red-600 cursor-pointer">
          <FontAwesomeIcon
            icon={faHeart}
            className="text-[12px] xl:text-[20px] hover:scale-125 transition-all duration-500"
          />
        </div>
          </div>
         </div>
    </div>
  )
}

export default SellerCards