import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logoutIcon } from "../assets";
import useClickOutside from "../hooks/useClickOutside";

const UserAccount = () => {
  const [accountInfo, setAccountInfo] = useState(false);

  const closeUserModal = useClickOutside(() => {
    setAccountInfo(false);
  });

  return (
    <>
      <div ref={closeUserModal} className="relative">
        <button
          onClick={() => setAccountInfo(!accountInfo)}
          className="flex items-center space-x-5"
        >
          <div className="w-12 h-12 rounded-full bg-red-400" />
          <div className="flex items-center">
            <div className="">Username</div>
            <svg class="w-4 h-4 ml-2 fill-current" viewBox="0 0 20 20">
              <path
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
        {accountInfo && (
          <div
            className={`absolute bg-white rounded-lg shadow-lg z-10 right-0 w-full mt-1 animate-dropdown origin-top`}
          >
            <div className="flex flex-col space-y-5 p-5">
              <Link
                to="/profile"
                className="text-black font-medium hover:bg-[#161A1D] hover:text-[#f2f2f2] p-2 rounded-lg"
              >
                Profile
              </Link>
              <Link
                to="/settings"
                className="text-black font-medium hover:bg-[#161A1D] hover:text-[#f2f2f2] p-2 rounded-lg"
              >
                Settings
              </Link>
              <div className="flex items-center space-x-5">
                <img src={logoutIcon} alt="" className="w-5 h-5" />
                <Link
                  to="/logout"
                  className="text-black text-sm font-medium hover:bg-[#161A1D] hover:text-[#f2f2f2] p-2 rounded-lg"
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserAccount;
