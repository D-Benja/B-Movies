import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { default as star } from "../assets/star.png";
import { default as star_filled } from "../assets/star-filled.png";
import { isInFavourite } from "../utils/isInFavourite";
import { isLogged } from "../utils/isLogged";
import { getSearchResults } from "../services/getSearchResults";

const SearchResults = (props) => {
  const [moviesResults, setMoviesResults] = useState([]);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  useEffect(() => {
    getSearchResults(keyword).then((res) => {
      setMoviesResults(res.data.results);
    });
  }, [keyword]);

  return moviesResults.length > 0 ? (
    <>
      <h2 className="mb-10 text-xl">Search keyword: {keyword}</h2>
      <div className="grid grid-cols-4 gap-y-10">
        {moviesResults.map((movie) => (
          <div className="border w-72 rounded-xl relative" key={movie.id}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : "https://via.placeholder.com/300x450"
              }
              alt="movie"
              className="rounded-xl"
            />
            {isLogged() && (
              <button
                className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm absolute flex justify-center items-center top-4 right-4 p-1"
                onClick={props.handleFavourites}
                data-movie-id={movie.id}
              >
                <img
                  src={
                    isInFavourite(movie.id, props.favourites)
                      ? star_filled
                      : star
                  }
                  alt=""
                />
              </button>
            )}
            <div className="p-4 mb-20">
              <h5 className="text-xl font-medium mb-3 h-14">{movie.title}</h5>
              <p className="font-light text-sm max-h-20 overflow-auto">
                {movie.overview}
              </p>
            </div>
            <Link
              to={`/detail?movie_id=${movie.id}`}
              className="ml-4 absolute bottom-0 mb-6"
            >
              <button className="bg-slate-500 text-white py-3 px-6 rounded-lg">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  ) : (
    <h2 className="mb-10 text-xl">No movies results for: {keyword}</h2>
  );
};

export default SearchResults;
