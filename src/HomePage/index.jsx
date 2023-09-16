import React, { useState, useEffect } from "react";
import fetchData from "../assets/fetch";
import MovieCards from "./movieCards";
import MovieSearch from "./movieSearch";
import Footer from "./footer";
import Navbar from "./navbar";
import Hero from "./Hero";
import Modal from "../assets/Modal";

const HomePage = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [displaySearch, setDisplaySearch] = useState(false);
  const [searchItems, setSearchItems] = useState([]);

  useEffect(() => {
    const getTopTen = async function () {
      try {
        const data = await fetchData(
          "https://api.themoviedb.org/3/movie/top_rated"
        );
        // form
        const topTen = await data.results.splice(0, 10);
        // console.log(topTen);
        await setTopMovies(topTen);
      } catch (err) {
        console.error(err);
      }
    };

    getTopTen();
  }, []);

  const searchMovies = async function (name) {
    try {
      const data = await fetchData(
        `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`
      );
      const result = await data.results;
      await setSearchItems(result);
      setDisplaySearch(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  const hideSearchRes = () => {
    setDisplaySearch(false);
  };

  return (
    <div className=" w-screen font-Dmsans">
      {/* navigation */}
      <div>
        <Navbar search={searchMovies} />
      </div>

      {/* hero section */}
      <div className="bg-poster   w-screen bg-cover bg-center  min-h-fit lg:px-24 px-4">
        <Hero />
      </div>
      {/* main content */}
      <div className="lg:px-24 px-4  lg:pt-[70px] pt-12">
        <div className="flex justify-between">
          <h1 className="lg:text-4xl font-bold">Featured Movie</h1>
          <div className="flex gap-2 items-center">
            <span className="lg:text-lg  text-myred">See more </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M7.5 4.66668L13.3333 10.5L7.5 16.3333"
                stroke="#B91C1C"
              />
            </svg>
          </div>
        </div>
        <div className="lg:pt-11 pt-6">
          <div className="  md:grid lg:grid md:grid-cols-3 md:gap-5 lg:grid-cols-3 xl:grid xl:grid-cols-4  sm:grid sm:grid-cols-2 sm:gap-60 flex flex-col justify-center items-center ">
            {topMovies.map((movie, i) => (
              <MovieCards item={movie} key={i + 1} />
            ))}
          </div>
        </div>
      </div>
      {displaySearch && (
        <Modal hide={hideSearchRes} searchItems={searchItems} />
      )}
      {/* <MovieSearch items={searchItems} /> */}
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default HomePage;
