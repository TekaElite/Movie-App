import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../assets/fetch";
import {
  TvIcon,
  home,
  logout,
  movie,
  show,
  calender,
  bookmark,
  star,
  arrow,
  tickets,
  list,
  Preview,
  list1,
} from "../utilis";

const Dashboard = () => {
  let { id } = useParams();
  console.log(id);

  const [movieDetails, setMovieDetails] = useState([]);
  const release_date = new Date(movieDetails.release_date).toUTCString();

  useEffect(() => {
    const getMovieDetails = async function () {
      try {
        const data = await fetchData(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`
        );
        // form
        const details = await data;

        await setMovieDetails(details);
      } catch (err) {
        console.error(err);
      }
    };

    getMovieDetails();
  }, []);

  return (
    <div className="flex justify-center items-center font-poppins w-screen">
      <div className="w-fit  h-fit border-[1px]  border-borderpruple rounded-3">
        <div className="py-[52px]">
          <div className="flex gap-6 items-center  justify-center  ">
            <img src={TvIcon} className="" />
          </div>
          <div className="font-poppins pt-[105px] px-[42px]  flex flex-col gap-12 ">
            <div className="flex  gap-4">
              <img src={home} />
              <h1 className="text-xl font-semibold text-lightgrey ">Home</h1>
            </div>
            <div className="flex   gap-4">
              <img src={movie} />
              <h1 className="text-xl font-semibold text-lightgrey ">Movies</h1>
            </div>
            <div className="flex   gap-4">
              <img src={show} />
              <h1 className="text-xl font-semibold text-lightgrey ">
                Tv series
              </h1>
            </div>
            <div className="flex  gap-4">
              <img src={calender} />
              <h1 className="text-xl font-semibold text-lightgrey ">
                Upcoming
              </h1>
            </div>
            <div className="rounded-[20px] border-[1px] border-borderred bg-bgrey w-[170px]  ">
              <div className="py-[42px] px-4 items-center flex flex-col gap-2.5">
                <p className="text-[15px] text-myblack font-semibold">
                  Play movie quizes and earn free tickets
                </p>
                <p className="text-lightgrey text-xs font-medium">
                  {" "}
                  50k people are playing now
                </p>
                <button className=" rounded-[30px] bg-borderred w-[112px] h-[30px] text-xs text-textred font-medium">
                  Start playing
                </button>
              </div>
            </div>
            <div className="flex  gap-4">
              <img src={logout} />
              <h1 className="text-xl font-semibold text-lightgrey ">Logout</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 h-fit w-fit px-8 ">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
            className="w-fit rounded-3xl h-96"
          ></img>
        </div>
        <div className="flex min-w-fit  pt-10  justify-between">
          <div className="flex gap-3 items-center">
            <h1 className="text-lg lg:text-[23px] font-semibold text-textgrey">
              <span data-testid="movie-title">{movieDetails.title}</span> •{" "}
              <span data-testid="movie-release-date">{release_date}</span> •
              PG-13 •
              <span data-testid="movie-runtime">{movieDetails.runtime}</span>
            </h1>

            <div className="flex gap-3">
              <button className="w-[84px] h-[30px] rounded-[15px]  border-[1px] border-borderwhite text-[15px] text-textpurple font-medium ">
                {" "}
                Action
              </button>
              <button className="w-[84px] h-[30px] rounded-[15px]  border-[1px] border-borderwhite text-[15px] text-textpurple font-medium ">
                {" "}
                Drama
              </button>
            </div>
          </div>
          <div className="flex  items-center justify-center  gap-2">
            <img src={star} />
            <div className="text-xl font-medium text-textwhite flex gap-1  justify-center items-center">
              {" "}
              <p className="text-2xl font-medium text-lightgrey">8.5</p>{" "}
              <span>| 350k</span>
            </div>
          </div>
        </div>
        <div className="pt-6 flex   lg:flex gap-5  lg:max-w-[400px] ">
          <div>
            <p
              data-testid="movie-overview"
              className=" text-base max-w-[700px] lg:text-xl text-darktext"
            >
              {movieDetails.overview}
            </p>

            <div className="flex flex-col gap-8 pt-9">
              <p className="text-darktext flex items-center gap-2">
                Director :{" "}
                <span className="text-textred">Joseph Kosinski </span>
              </p>
              <p className="text-darktext flex items-center gap-2">
                Writers:{" "}
                <span className="text-textred">
                  Jim Cash, Jack Epps Jr, Peter Craig{" "}
                </span>
              </p>
              <p className="text-darktext flex items-center gap-2">
                Stars :{" "}
                <span className="text-textred">
                  Tom Cruise, Jennifer Connelly, Miles Teller{" "}
                </span>
              </p>
            </div>
            <div className="pt-8 flex items-center">
              <button className="text-xl font-medium  bg-textred  text-white rounded-[10px] w-[253px] h-[55px]">
                Top rated movie #65
              </button>
              <button className="text-darktext p-3   border-[1px] rounded-[10px]  border-blightgrey bg-blightgrey text-xl font-medium w-[400px] h-[55px] flex items-center justify-between">
                <p>Awards 9 nominations</p>
                <img src={arrow} />
              </button>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-3">
              <button className="text-xl font-medium flex gap-2 justify-center items-center  bg-textred  text-white rounded-[10px] w-[290px] h-[55px]">
                <img src={tickets} /> <p>See Showtimes</p>
              </button>
              <button className="text-xl font-medium flex gap-2 justify-center items-center text-darktext  bg-borderred border-[1px] border-textred   rounded-[10px] w-[290px] h-[55px]">
                <img src={list} /> <p>More watch options</p>
              </button>
            </div>
            <div className="pt-[33px] w-[290px]">
              <img src={Preview} className="absolute w-[290px]" />
              <div>
                <button className=" relative  top-[142px]  flex justify-center items-center text-white  rounded-[10px] h-[42px]  bg-bp backdrop-blur-[2px] ">
                  <img src={list1} className="" />{" "}
                  <p className="text-sm  font-medium">
                    {" "}
                    The Best Movies and Shows in September
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
