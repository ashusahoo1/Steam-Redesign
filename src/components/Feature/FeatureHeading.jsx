import React from 'react'
import styles from './FeatureHeading.module.css'

const FeatureHeading = () => {
  return (
    <div>
      {/* <h1
        className="md:text-[130px] text-[30px] text-center font-bold font-customBatmanAlternate md:ml-24 md:text-left text-transparent hover:text-zinc-600 w-fit underline decoration-2 underline-offset-[20px] decoration-dotted mb-12"
        style={{ WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "white" }}
      >
        Featured Games
      </h1> */}
      <div className='text-white mt-5 whitespace-nowrap overflow-x-hidden overflow-y-hidden xl:h-[250px]  h-[50px] px-[50px] pb-0'>
      <h1 className={`xl:text-[150px] text-[30px] inline-block mr-[90px] font-customBatmanAlternate ${styles.FG}`}>Featured <span className={`${styles.Stroke}`}>Games</span> </h1>
      <h1 className={`xl:text-[150px] text-[30px] inline-block mr-[90px] font-customBatmanAlternate ${styles.FG}`}>Featured <span className={`${styles.Stroke}`}>Games</span> </h1>
      <h1 className={`xl:text-[150px] text-[30px] inline-block mr-[90px] font-customBatmanAlternate ${styles.FG}`}>Featured <span className={`${styles.Stroke}`}>Games</span> </h1>
      </div>
      
    </div>
  )
}

export default FeatureHeading