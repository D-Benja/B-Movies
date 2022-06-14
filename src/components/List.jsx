import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swAlert from "@sweetalert/with-react";
import { default as star } from "../assets/star.png";
import { default as star_filled } from "../assets/star-filled.png";
import { isInFavourite } from "../utils/isInFavourite";
import { isLogged } from "../utils/isLogged";
import { getMovies } from "../services/getMovies";

const List = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies()
      .then((res) => {
        const data = res.data;

        setMovies(data.results);
      })
      .catch((err) => {
        swAlert({
          title: "Something went wrong, try again later.",
          text: `Error: ${err}`,
          icon: "error",
        });
      });
  }, []);

  return (
    <>
      {!isLogged() ? (
        <div className="flex flex-col justify-center items-center space-y-16">
          <p className="text-center text-2xl font-bold">
            You need to be logged in to see your favourites
          </p>
          <Link to="/login">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-y-10 justify-items-center">
          {movies.map((movie) => (
            <div className="border w-72 rounded-xl relative" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="movie"
                className="rounded-xl"
              />
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
      )}
    </>
  );
};

export default List;
