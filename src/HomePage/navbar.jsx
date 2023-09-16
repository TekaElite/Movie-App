import React, { useState, useEffect } from "react";

import { TvIcon, menu } from "../utilis/index";
const navbar = (props) => {
  const [inputVal, setInputVal] = useState("");

  const [navColor, setNavColor] = useState("transparent");

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 0) {
        setNavColor("var(--rose-700, #BE123C)");
      } else {
        setNavColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const searchMovies = async function (e) {
    e.preventDefault();
    props.search(inputVal);
  };

  return (
    <div className="flex  justify-center ">
      <div
        style={{ backgroundColor: navColor }}
        className="  fixed w-[90%]  rounded-3xl top-2  px-3 md:px-0 py-3  gap-5 md:flex-row md:items-center   z-40 "
      >
        <div className="flex gap-6 items-center justify-between px-4  ">
          <img src={TvIcon} className="cover" />

          <div className="relative  flex justify-center items-center">
            <form
              onSubmit={searchMovies}
              className="w-full md:w-[400px] xl:w-[525px] h-9 px-2.5 py-1.5 rounded-md border  justify-between items-center gap-2.5 flex  "
            >
              <input
                value={inputVal}
                onChange={(e) => setInputVal((prev) => e.target.value)}
                type="text"
                placeholder="What do you want to watch?"
                className=" p-2.5 text-base h-5  w-[90%] text-mywhite bg-transparent outline-none "
              />
              <div className="absolute  right-3 top-1/2 -translate-y-1/2 p-4 ">
                {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-1 "
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
                          stroke="white"
                        />
                      </svg> */}
              </div>
            </form>
          </div>
          <div className="flex items-center gap-7">
            <h1 className="text-base font-semibold text-white">Sign in</h1>
            <img src={menu} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
