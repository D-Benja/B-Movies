import { useEffect, useState } from "react";
import { isInFavourite } from "../utils/isInFavourite";

export function useFavourites() {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const localFavourites = localStorage.getItem("favourites");

        if (localFavourites !== null) {
        const favouritesMovies = JSON.parse(localFavourites);

        setFavourites(favouritesMovies);
        }
    }, []);

    const existingFavMovies = localStorage.getItem("favourites");

    let tempFavMovies;

    if (existingFavMovies === null) {
        tempFavMovies = []
    } else {
        tempFavMovies = JSON.parse(existingFavMovies)
    }
    
    const handleFavourites = (event) => {
    const movie = (event.currentTarget).parentElement;
    const movieData = {
        id: movie.querySelector("button").dataset.movieId,
        img: movie.querySelector("img").src,
        title: movie.querySelector("h5").innerText,
        overview: movie.querySelector("p").innerText,
    }

    if (!isInFavourite(movieData.id, tempFavMovies)) {
        tempFavMovies.push(movieData);
        localStorage.setItem("favourites", JSON.stringify(tempFavMovies));
        console.log("movie added to favourites");

        setFavourites(tempFavMovies);
    } else {
        tempFavMovies = tempFavMovies.filter((movie) => movie.id !== movieData.id)
        localStorage.setItem("favourites", JSON.stringify(tempFavMovies));
        console.log("movie removed from favourites");

        setFavourites(tempFavMovies);
    }

}

    return [favourites, handleFavourites];

}
