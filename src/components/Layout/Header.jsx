import React from "react";
import { Link } from "react-router-dom";
import { isLogged } from "../../utils/isLogged";
import SearchBar from "../SearchBar";
import UserAccount from "../UserAccount";

console.log(isLogged());

const Header = (props) => {
  return (
    <header className="w-full fixed z-10 pl-72">
      <div className="h-20 bg-[#0B090A]/90 backdrop-blur-sm text-white flex justify-end items-center space-x-10 pr-20">
        <SearchBar />
        {isLogged() ? (
          <UserAccount />
        ) : (
          <Link
            to="/login"
            className="bg-white text-black py-3 px-6 rounded-3xl font-medium hover:bg-gray-200 hover:text-black"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
