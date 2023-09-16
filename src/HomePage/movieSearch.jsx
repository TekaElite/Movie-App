import { useState, useEffect } from "react";
import MovieCards from "./movieCards";

export default function movieSearch(props) {
  return (
    <div className="lg:pt-11 pt-6 px-24">
      <div className="md:grid lg:grid md:grid-cols-3 md:gap-5 lg:grid-cols-3 xl:grid xl:grid-cols-4  sm:grid sm:grid-cols-2 sm:gap-60 flex flex-col justify-center items-center">
        {props.items.map((item, i) => (
          <MovieCards key={i + 1} item={item} />
        ))}
      </div>
    </div>
  );
}
