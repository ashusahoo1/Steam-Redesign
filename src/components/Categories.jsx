import React from "react";
import Title from "./Title";
import CategoryCards from "./CategoryCards";

const Categories = () => {
  return (
    <section className="h-full w-full bg-black text-white">
      <Title title="Browse by category" button="more categories" />
      <div className="w-[97%] xl:w-[90%] rounded-lg py-3 h-fit mx-auto grid place-items-center gap-y-3 xl:gap-y-8 grid-cols-2 xl:grid-cols-3 xl:mt-6 bg-[#121212] pb-2 xl:pb-5 ">
        <CategoryCards
        text="Action"
          image="/action.webp"
          shadow="shadow-[inset_0px_-189px_160px_-160px_#ed8936]"
        />
        <CategoryCards
        text="Anime"
          image="/anime.webp"
          shadow="shadow-[inset_0px_-189px_160px_-160px_#e53e3e]"
        />
        <CategoryCards
        text="Multiplayer"
          image="multiplayer_coop.webp"
          shadow="shadow-[inset_0px_-189px_160px_-160px_#4299e1]"
        />
        <CategoryCards
        text="Sci-fi"
          image="science_fiction.webp"
          shadow="shadow-[inset_0px_-189px_160px_-160px_#975a16]"
        />
        <CategoryCards
        text="Simulator"
          image="simulation.webp"
          shadow="shadow-[inset_0px_-189px_160px_-160px_#38a169]"
        />
        <CategoryCards
        text="Stratergy"
          image="strategy.webp"
          shadow="shadow-[inset_0px_-189px_160px_-160px_#cbd5e0]"
        />
      </div>
    </section>
  );
};

export default Categories;
