import axios from "axios";

export const getSearchResults = async (keyword) => {
    const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

    const res = await axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${keyword}`);
    return res;
}