import React, { useEffect, useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { getMovieDetail } from "../services/getMovieDetail";

const Detail = () => {
  const [searchParams] = useSearchParams();
  const [movieDetails, setMovieDetails] = useState([]);

  const token = sessionStorage.getItem("token");
  const movie_id = searchParams.get("movie_id");

  useEffect(() => {
    getMovieDetail(movie_id).then((res) => {
      setMovieDetails(res.data);
    });
  }, [movie_id]);

  return (
    <>
      {!token ? (
        <Navigate to="/" />
      ) : (
        <section className="flex">
          <div className="flex-1">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
              alt="backdrop"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-medium mb-1">{movieDetails.title}</h1>
            <h2 className="mb-6 text-lg text-gray-500">
              {movieDetails.tagline}
            </h2>
            <p className="font-light mb-10">{movieDetails.overview}</p>
            <div className="mb-14">
              <h2 className="mb-6">Genres{}</h2>
              {movieDetails.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="mx-2 py-2 px-4 border rounded-xl text-sm font-light"
                >
                  {genre.name}
                </span>
              ))}
            </div>
            <div className="flex mb-10">
              <div className="flex-1">
                <h2 className="mb-2">Production Companies</h2>
                <ul>
                  {movieDetails.production_companies?.map((company) => (
                    <li
                      key={company.id}
                      className="mx-2 py-2 px-4 text-sm font-light"
                    >
                      {company.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h2 className="mb-2">Production Countries</h2>
                <ul>
                  {movieDetails.production_countries?.map((country) => (
                    <li
                      key={country.id}
                      className="mx-2 py-2 px-4 text-sm font-light"
                    >
                      {country.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <span>
              <h2 className="">Release Date</h2>
              {movieDetails.release_date}
            </span>
          </div>
        </section>
      )}
    </>
  );
};

export default Detail;
