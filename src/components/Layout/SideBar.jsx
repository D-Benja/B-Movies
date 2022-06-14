import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { arrowRightIcon } from "../../assets";
import {
  SidebarCategoryItems,
  SidebarGeneralItems,
  SidebarMenuItems,
} from "../../data/sideBarData";
import { isActiveLink } from "../../utils/isActiveLink";

const SideBar = () => {
  const location = useLocation();

  return (
    <nav className="fixed left-0 top-0 w-72 h-full bg-[#161A1D] text-[#f2f2f2] z-20">
      <div className="m-6 h-full">
        <h1 className="mb-6 text-2xl text-center">Movies page</h1>
        <div className="mb-6 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D3D3D3]/90 to-transparent" />
        <div>
          <h2 className="text-xs mb-5">MENU</h2>
          <ul className="flex flex-col space-y-6">
            {SidebarMenuItems.map((item, index) => (
              <li key={index} className="relative">
                {isActiveLink(item.path, location) ? (
                  <>
                    <span className="h-full absolute w-[3px] bg-red-600 blur-sm -left-3" />
                    <span className="h-full absolute w-[2px] bg-red-600 rounded-full -left-3" />
                  </>
                ) : (
                  ""
                )}
                <div className="flex justify-between p-1">
                  <div className="flex items-center space-x-6 relative">
                    <img src={item.icon} alt="" className="w-5" />
                    <NavLink
                      to={item.path}
                      className="font-light text-xs tracking-wide"
                    >
                      {item.name}
                    </NavLink>
                  </div>
                  {isActiveLink(item.path, location) ? (
                    <img src={arrowRightIcon} alt="" className="w-4" />
                  ) : (
                    ""
                  )}
                  {item.name === "Notifications" && (
                    <div className="absolute w-5 h-5 bg-[#BA181B] rounded-full right-0 text-sm flex justify-center items-center">
                      3
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-6 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D3D3D3]/20 to-transparent" />
        <div className="">
          <h2 className="text-xs mb-5">CATEGORY</h2>
          <ul className="flex flex-col space-y-6">
            {SidebarCategoryItems.map((item, index) => (
              <li key={index} className="relative">
                {isActiveLink(item.path, location) ? (
                  <span className="h-full absolute w-[2px] bg-red-600 -left-3" />
                ) : (
                  ""
                )}
                <div className="flex justify-between p-1">
                  <div className="flex items-center space-x-6 relative">
                    <img src={item.icon} alt="" className="w-5" />
                    <NavLink
                      to={item.path}
                      className="font-light text-xs tracking-wide"
                    >
                      {item.name}
                    </NavLink>
                  </div>
                  {isActiveLink(item.path, location) ? (
                    <img src={arrowRightIcon} alt="" className="w-4" />
                  ) : (
                    ""
                  )}
                  {item.new ? (
                    <span className="absolute right-0 bg-[#8b8b8b] text-xs rounded-full px-2 py-1">
                      New
                    </span>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-6 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D3D3D3]/20 to-transparent" />
        <div className="">
          <h2 className="text-xs mb-5">GENERAL</h2>
          <ul className="flex flex-col space-y-6">
            {SidebarGeneralItems.map((item, index) => (
              <li key={index} className="relative">
                {isActiveLink(item.path, location) ? (
                  <span className="h-full absolute w-[2px] bg-red-600 -left-3" />
                ) : (
                  ""
                )}
                <div className="flex justify-between p-1">
                  <div className="flex items-center space-x-6 relative">
                    <img src={item.icon} alt="" className="w-5" />
                    <NavLink
                      to={item.path}
                      className="font-light text-xs tracking-wide"
                    >
                      {item.name}
                    </NavLink>
                  </div>
                  {isActiveLink(item.path, location) ? (
                    <img src={arrowRightIcon} alt="" className="w-4" />
                  ) : (
                    ""
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
