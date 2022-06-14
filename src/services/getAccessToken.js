import axios from "axios";

export const getAccessToken = async (email, password) => {
    const res = await axios
        .post("http://challenge-react.alkemy.org", { email, password });
    return res;
}

