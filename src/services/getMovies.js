import axios from "axios";

export const getMovies = async () => {
    const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

    const res = await axios
        .get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1}`);
    return res;
}