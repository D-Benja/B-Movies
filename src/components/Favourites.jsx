import React from "react";
import { Link } from "react-router-dom";
import { default as star_filled } from "../assets/star-filled.png";
import { isLogged } from "../utils/isLogged";

const Favourites = (props) => {
  return (
    <>
      {!isLogged() ? (
        <div
          className="flex justify-center items-center h-96
        "
        >
          <p className="text-center text-2xl font-bold">
            You need to be logged in to see your favourites
          </p>
        </div>
      ) : (
        <div>
          <h2 className="mb-10 text-xl">Favourites</h2>
          {props.favourites.length > 0 ? (
            <div className="grid grid-cols-4 gap-y-10 justify-items-center">
              {props.favourites?.map((movie) => (
                <div className="border w-72 rounded-xl relative" key={movie.id}>
                  <img src={movie.img} alt="movie" className="rounded-xl" />
                  <button
                    className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm absolute flex justify-center items-center top-4 right-4 p-1"
                    onClick={props.handleFavourites}
                    data-movie-id={movie.id}
                  >
                    <img src={star_filled} alt="" />
                  </button>
                  <div className="p-4 mb-20">
                    <h5 className="text-xl font-medium mb-3 h-14">
                      {movie.title}
                    </h5>
                    <p className="font-light text-sm max-h-20 overflow-auto">
                      {movie.overview}
                    </p>
                  </div>
                  <Link
                    to={`/detail?movie_id=${movie.id}`}
                    className="pl-4 absolute bottom-0"
                  >
                    <button className="bg-slate-500 text-white py-3 px-6 rounded-lg mb-6 ">
                      View Details
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <h3 className="text-xl">
                wow...it seems like u doesn't have any favorite movies
              </h3>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Favourites;
