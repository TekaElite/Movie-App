import React from "react";
import MovieCards from "./movieCards";

export default function SearchResult(props) {
  return (
    <section className="px-4 md:px-16 pb-10 absolute bg-myred shadow-2xl shadow-primary-200 top-0 left-0 w-10/12 h-fit z-50">
      <aside className="text-primary-100 flex justify-between items-center mt-16 md:mt-28 mb-3 sm:mb-5 md:mb-10 px-3">
        <h2 className="text-xl md:text-4xl font-bold">Search Results</h2>
        {/* <Icon
            icon="iconoir:cancel"
            className="text-3xl md:text-5xl cursor-pointer"
            onClick={ctx.hide}
          /> */}
      </aside>

      <aside className="grid grid-col-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-10 md:gap-y-24">
        {props.items.map((item, i) => (
          <MovieCards item={item} key={i + 1} />
        ))}
      </aside>
    </section>
  );
}
