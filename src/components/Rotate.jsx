import React from "react";
import "./rotate.css";
import TrialCard from "./RotateCard";

const Trial = () => {
  return (
    <>
      <div id="banner" className="relative max-lg:hidden">
        <div id="slider" style={{ "--quantity": 10 }} >
          <div
            id="item"
            style={{ "--position": 1 }}
            className="relative group overflow-hidden rounded-lg"
          >
            <img src="./capsule_616x353.jpg" alt="" />
            <TrialCard
              title="DOTA 2"
              desc=" Every day, millions of players worldwide enter battle as one
                  of over a hundred Dota heroes. And no matter if it's their
                  10th hour of play or 1,000th, there's always something new to
                  discover. With regular updates that ensure a constant
                  evolution of gameplay, features, and heroes, Dota 2 has taken
                  on a life of its own."
            />
          </div>
          <div id="item" style={{ "--position": 2 }} className="relative group overflow-hidden rounded-lg">
            <img src="./capsule_616x353 (2).jpg" alt="" />
            <TrialCard
              title="PUBG"
              desc="Play PUBG: BATTLEGROUNDS for free. Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds. Squad up and join the Battlegrounds for the original Battle Royale experience that only PUBG: BATTLEGROUNDS can provide."
            />
          </div>
          <div id="item" style={{ "--position": 3 }} className="relative group overflow-hidden rounded-lg">
            <img src="./capsule_616x353 (3).jpg" alt="" />
            <TrialCard
              title="BALDUR'S GATE"
              desc="Baldur's Gate is a series of role-playing video games set in the Forgotten Realms Dungeons & Dragons campaign setting. The series has been divided into two sub-series, known as the Bhaalspawn Saga and the Dark Alliance, both taking place mostly within the Western Heartlands, but the Bhaalspawn Saga extends to Amn and Tethyr. The Bhaalspawn Saga was critically acclaimed for using pausable realtime gameplay, which is credited with revitalizing the computer role-playing game (CRPG) genre."
            />
          </div>
          <div id="item" style={{ "--position": 4 }} className="relative group overflow-hidden rounded-lg">
            <img src="./capsule_616x353 (4).jpg" alt="" />
            <TrialCard
              title="APEX LEGENDS"
              desc="Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale."
            />
          </div>
          <div id="item" style={{ "--position": 5 }} className="relative group overflow-hidden rounded-lg">
            <img src="./capsule_616x353 (5).jpg" alt="" />
            <TrialCard
              title="NARAKA"
              desc="Dive into the legends of the Far East in NARAKA: BLADEPOINT; team up with friends in fast-paced melee fights for a Battle Royale experience unlike any other. Find your playstyle with a varied cast of heroes with unique skills. More than 20 million players have already joined the fray, play free now!"
            />
          </div>
          <div id="item" style={{ "--position": 6 }} className="relative group overflow-hidden rounded-lg">
            <img src="./capsule_616x353 (6).jpg" alt="" />
            <TrialCard
              title="CHAINED TOGETHER"
              desc="Chained Together is a premium adventure game developed and published by Anegar Games. This PC game invites you on an exhilarating journey across diverse worlds, each presenting unique challenges and obstacles. It offers a range of difficulty game modes, providing you with opportunities to test your skills. Whether you're a novice seeking a manageable challenge or a seasoned gamer craving the ultimate test, these varied difficulty modes cater to different skill levels."
            />
          </div>
          <div id="item" style={{ "--position": 7 }} className="relative group overflow-hidden rounded-lg">
            <img src="./capsule_616x353 (7).jpg" alt="" />
            <TrialCard
              title="WUKONG"
              desc="Black Myth: Wukong is an action RPG rooted in Chinese mythology. You shall set out as the Destined One to venture into the challenges and marvels ahead, to uncover the obscured truth beneath the veil of a glorious legend from the past."
            />
          </div>
          <div id="item" style={{ "--position": 8 }} className="relative group overflow-hidden rounded-lg">
            <img src="./capsule_616x353 (8).jpg" alt="" />
            <TrialCard
              title="ONCE HUMAN"
              desc="Once Human is a multiplayer open-world survival game set in a strange, post-apocalyptic future. Unite with friends to fight monstrous enemies, uncover secret plots, compete for resources, and build your own territory. Once, you were merely human. Now, you have the power to remake the world."
            />
          </div>
          <div id="item" style={{ "--position": 9 }} className="relative group overflow-hidden rounded-lg">
            <img src="./capsule_616x353 (1).jpg" alt="" />
            <TrialCard
              title="COUNTER STRIKE"
              desc="For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS story is about to begin. This is Counter-Strike 2."
            />
          </div>
          <div id="item" style={{ "--position": 10 }} className="relative group overflow-hidden rounded-lg">
            <img src="./header.jpg" alt="" />
            <TrialCard
              title="DRAGON BALL Z"
              desc="Relive the story of Goku and other Z Fighters in DRAGON BALL Z: KAKAROT! Beyond the epic battles, experience life in the DRAGON BALL Z world as you fight, fish, eat, and train with Goku, Gohan, Vegeta and others."
            />
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Trial;
