import {
  aboutIcon,
  favouriteIcon,
  friendsIcon,
  gamepadIcon,
  helpIcon,
  homeIcon,
  logoutIcon,
  notificationIcon,
  peopleIcon,
  settingsIcon,
  tvShowIcon,
  videoCameraIcon,
} from "../assets/index.js";

export const SidebarMenuItems = [
  {
    name: "Home",
    path: "/",
    icon: homeIcon,
    exact: true,
  },
  {
    name: "Favourites",
    path: "/favourites",
    icon: favouriteIcon,
  },
  {
    name: "Friends",
    path: "/friends",
    icon: friendsIcon,
  },
  {
    name: "Notifications",
    path: "/notifications",
    icon: notificationIcon,
  },
];

export const SidebarCategoryItems = [
  {
    name: "Movies",
    path: "/list",
    icon: videoCameraIcon,
  },
  {
    name: "TV Shows",
    path: "/tv-shows",
    icon: tvShowIcon,
  },
  {
    name: "People",
    path: "/people",
    icon: peopleIcon,
  },
  {
    name: "Games",
    path: "/games",
    icon: gamepadIcon,
    new: true,
  },
];

export const SidebarGeneralItems = [
  {
    name: "Settings",
    path: "/settings",
    icon: settingsIcon,
  },
  {
    name: "Help",
    path: "/help",
    icon: helpIcon,
  },
  {
    name: "About",
    path: "/about",
    icon: aboutIcon,
  },
  {
    name: "Sign Out",
    path: "/login",
    icon: logoutIcon,
  },
];
