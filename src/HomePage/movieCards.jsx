import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  TvIcon,
  menu,
  IMDB,
  tomato,
  play,
  poster1,
  series,
  favorite,
  facebook,
  instagram,
  twitter,
  youtube,
} from "../utilis";

export default function movieCards(props) {
  const [date, setDate] = useState("");
  useEffect(() => {
    const dayt = new Date(props.item.release_date).toUTCString();
    setDate(dayt);
  }, [props]);

  return (
    <Link to={`/Movies/${props.item.id}`}>
      <div data-testid="movie-card" className="max-w-[230px]  ">
        <img
          src={`https://image.tmdb.org/t/p/original${props.item.poster_path}`}
          data-testid="movie-poster"
          alt={props.item.title}
          className=""
        />{" "}
        {/* <div className="flex justify-between relative top-2 left-2 right-2">
                        <img src={series} />
                        <img src={favorite} />
                    </div> */}{" "}
        <div className="flex flex-col gap-3 pt-3">
          <h1
            data-testid="movie-release-date"
            className="text-darkgrey text-xs font-bold"
          >
            {date}
          </h1>
          <h1
            data-testid="movie-title"
            className="text-mypurple text-lg font-bold"
          >
            {props.item.title}
          </h1>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <img src={IMDB} />
              <span className="text-sm">86.0/100</span>
            </div>
            <div className="flex gap-2 items-center">
              <img src={tomato} />
              <span className="text-xs ">97%</span>
            </div>
          </div>
          <h1 className="text-darkgrey text-xs font-bold">
            {" "}
            Action, Adventure, Horror{" "}
          </h1>
        </div>
      </div>
    </Link>
  );
}
