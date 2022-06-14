import axios from "axios";

export const getMovieDetail = async (id) => {
    const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

    const res = await axios
        .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
    return res;
}