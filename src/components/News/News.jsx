import Slider from "./Slider"

const News = () => {
  return (
    <>
    <div id="container" className="bg-black text-white pt-4 min-[1600px]:w-[1536px] min-[1600px]:m-auto">
    <h1 className="md:text-[50px] text-[20px] text-center font-bold font-customBatmanAlternate md:ml-24 md:text-left xl:-skew-x-12 w-fit mx-auto md:mx-0">NEWS & TRENDING</h1>
    <Slider></Slider>
    </div>
    </>
  )
}

export default News