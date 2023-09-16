import React from "react";
import { facebook, instagram, twitter, youtube } from "../utilis/index";
export default function footer() {
  return (
    <div className="pt-[147px] pb-10 flex flex-col gap-6 lg:gap-9 justify-center items-center">
      <div>
        <ul className="flex items-center  gap-12">
          <li>
            <img src={facebook} />
          </li>
          <li>
            <img src={instagram} />
          </li>
          <li>
            <img src={twitter} />
          </li>
          <li>
            <img src={youtube} />
          </li>
        </ul>
      </div>
      <div>
        <ul className="text-sm gap-3 font-semibold lg:text-lg lg:font-bold text-mypurple flex lg:gap-12">
          <li>Conditions of Use</li>
          <li> Privacy & Policy</li>
          <li> Press Room</li>
        </ul>
      </div>
      <div>
        <p className=" text-sm font-semibold lg:text-lg lg:font-bold text-mygrey">
          {" "}
          © 2021 MovieBox by Adriana Eka Prayudha{" "}
        </p>
      </div>
    </div>
  );
}
