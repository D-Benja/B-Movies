import React from "react";
import swAlert from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";
import { searchIcon } from "../assets";

const SearchBar = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const keyword = e.target.keyword.value.trim();

    if (keyword.length === 0) {
      swAlert({
        title: "Error",
        text: "Please enter a keyword",
        icon: "error",
      });
    } else if (keyword.length < 4) {
      swAlert({
        title: "Error",
        text: "Please enter at least 4 characters",
        icon: "error",
      });
    } else {
      e.target.keyword.value = "";
      navigate(`/results?keyword=${keyword}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="group h-12 rounded-3xl p-1 bg-white flex justify-center items-center">
        <input
          type="text"
          name="keyword"
          className="border-none bg-transparent outline-none float-left p-0 text-black transition-all duration-500 ease-in-out leading-10 w-0 group-hover:w-60 group-hover:px-4"
          placeholder="Enter a keyword"
        />
        <button
          type="submit"
          className="text-white float-right w-10 h-10 rounded-full bg-[#B1A7A6] flex justify-center items-center transition-all duration-500 ease-in-out group-hover:bg-[#E5383B]"
        >
          <img src={searchIcon} alt="" className="w-4" />
        </button>
      </label>
    </form>
  );
};

export default SearchBar;
