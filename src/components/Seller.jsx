import React from "react";
import SellerCards from "./SellerCards";
import Marquee from "react-fast-marquee";

const Seller = () => {
  return (
    <section className="w-full bg-black">
      <div className=" flex items-center justify-between px-2 xl:px-14  w-full h-fit pt-5">
        <h1 className="h-fit cursor-pointer  text-white w-full text-center xl:text-left xl:w-fit text-[20px] xl:text-[50px] font-customBatmanAlternate xl:-skew-x-12 font-bold xl:ml-11">
          TOP SELLERS
        </h1>
      </div>
      <div className="xl:hidden">
      <Marquee
        autoFill="true"
        className="overflow-hidden w-[90%] mx-auto py-3 text-white flex items-center justify-center xl:mt-3"
        play="true"
        pauseOnHover="true"
        pauseOnClick="true"
        gradient="true"
        gradientColor="black"
        gradientWidth="10%"
        delay={0}
        loop={0}
      >
        <SellerCards
          image="./capsule_616x353 (7).jpg"
          title="Wukong"
          price="$53.99"
        />
        <SellerCards
          image="./capsule_616x353 (6).jpg"
          title="chained together"
          price="$53.99"
        />
        <SellerCards
          image="./capsule_616x353.jpg"
          title="DOTA 2"
          price="$53.99"
        />
        <SellerCards
          image="./capsule_616x353 (5).jpg"
          title="Naraka"
          price="$53.99"
        />
        <SellerCards
          image="./capsule_616x353 (4).jpg"
          title="Apex"
          price="$53.99"
        />
        <SellerCards
          image="./capsule_616x353 (3).jpg"
          title="Baldur's"
          price="$53.99"
        />
        <SellerCards
          image="./capsule_616x353 (8).jpg"
          title="once human"
          price="$53.99"
        />
        <SellerCards
          image="./capsule_616x353 (2).jpg"
          title="pubg"
          price="$53.99"
        />
        <SellerCards
          image="./capsule_616x353 (7).jpg"
          title="Wukong"
          price="$53.99"
        />
        <SellerCards
          image="./capsule_616x353 (6).jpg"
          title="chained together"
          price="$53.99"
        />
        <SellerCards
          image="./capsule_616x353.jpg"
          title="DOTA 2"
          price="$53.99"
        />
        <SellerCards
          image="./capsule_616x353 (5).jpg"
          title="Naraka"
          price="$53.99"
        />
        <SellerCards
          image="./capsule_616x353 (4).jpg"
          title="Apex"
          price="$53.99"
        />
        <SellerCards
          image="./capsule_616x353 (3).jpg"
          title="Baldur's"
          price="$53.99"
        />
        <SellerCards
          image="./capsule_616x353 (8).jpg"
          title="once human"
          price="$53.99"
        />
        <SellerCards
          image="./capsule_616x353 (2).jpg"
          title="pubg"
          price="$53.99"
        />
        <SellerCards
          image="./capsule_616x353 (7).jpg"
          title="Wukong"
          price="$53.99"
        />
        <SellerCards
          image="./capsule_616x353 (6).jpg"
          title="chained together"
          price="$53.99"
        />
        <SellerCards
          image="./capsule_616x353.jpg"
          title="DOTA 2"
          price="$53.99"
        />
        <SellerCards
          image="./capsule_616x353 (5).jpg"
          title="Naraka"
          price="$53.99"
        />
        <SellerCards
          image="./capsule_616x353 (4).jpg"
          title="Apex"
          price="$53.99"
        />
        <SellerCards
          image="./capsule_616x353 (3).jpg"
          title="Baldur's"
          price="$53.99"
        />
        <SellerCards
          image="./capsule_616x353 (8).jpg"
          title="once human"
          price="$53.99"
        />
        <SellerCards
          image="./capsule_616x353 (2).jpg"
          title="pubg"
          price="$53.99"
        />
      </Marquee>
      </div>
    </section>
  );
};

export default Seller;
