export const isActiveLink = (path, location) => {
  const isHome = path.length === 1;

  return isHome ? location.pathname === path : location.pathname.includes(path);
};
