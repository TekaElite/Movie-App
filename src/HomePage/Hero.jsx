import React from "react";
import { IMDB, tomato, play } from "../utilis/index";
export default function Hero() {
  return (
    <div>
      <div className="pt-24 md:flex  justify-between items-center ">
        <div className="lg:max-w-[404px] ">
          <h1 className="text-white text-4xl lg:text-5xl font-bold">
            {" "}
            John Wick 3 : Parabellum{" "}
          </h1>
          <div className="pt-4 flex gap-8">
            <div className="flex gap-2">
              <img src={IMDB} />
              <span className="text-xs text-white">86.0/100</span>
            </div>
            <div className="flex gap-2 items-center">
              <img src={tomato} />
              <span className="text-xs text-white">97%</span>
            </div>
          </div>
          <p className="text-white text-sm font-medium pt-4 max-w-[303px]">
            {" "}
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.{" "}
          </p>
          <div className="pt-4 pb-7 lg:pb-[157px]">
            <button className="rounded-md bg-myred w-44 h-9 gap-2 flex items-center px-4 ">
              <img src={play} />
              <p className="text-sm font-bold text-white">WATCH TRAILER</p>
            </button>
          </div>
        </div>
        <div className="flex pb-4 justify-center md:flex-col gap-2.5">
          <span className="text-darkgrey text-xs font-bold">1</span>
          <span className="text-darkgrey text-xs font-bold">2</span>
          <span className="text-darkgrey text-xs font-bold">3</span>
          <span className="text-darkgrey text-xs font-bold">4</span>
          <span className="text-darkgrey text-xs font-bold">5</span>
        </div>
      </div>
    </div>
  );
}
