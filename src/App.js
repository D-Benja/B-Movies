import { Routes, Route } from "react-router-dom";
import { useFavourites } from "./hooks/useFavourites";

import Login from "./components/Auth/Login";
import List from "./components/List";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Detail from "./components/Detail";
import SearchResults from "./components/SearchResults";
import Favourites from "./components/Favourites";
import SideBar from "./components/Layout/SideBar";
import Home from "./pages/Home";

function App() {
  const [favourites, handleFavourites] = useFavourites();

  return (
    <>
      <div className="flex w-full h-screen">
        <SideBar />
        <Header favourites={favourites} />
        <div className="container ml-auto mr-10">
          <div className="flex flex-col mt-32 min-h-[calc(100%-8rem)]">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route
                path="/list"
                element={
                  <List
                    handleFavourites={handleFavourites}
                    favourites={favourites}
                  />
                }
              />
              <Route path="/detail" element={<Detail />} />
              <Route
                path="/results"
                element={
                  <SearchResults
                    favourites={favourites}
                    handleFavourites={handleFavourites}
                  />
                }
              />
              <Route
                path="/favourites"
                element={
                  <Favourites
                    favourites={favourites}
                    handleFavourites={handleFavourites}
                  />
                }
              />
            </Routes>
            <div className="w-full mt-auto">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
