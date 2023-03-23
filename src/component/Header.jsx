import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  return (
    <div className="bg-primary pt-8 pb-2 mb-4 mt-3 rounded-lg px-4 mx-3" id="header">
      <div>
        <img src="https://i.ibb.co/vQkH8JM/alquran-logo.png" alt="" className="m-auto w-64 z-10" />
        <Search />
        <div className="flex gap-2 justify-center pb-4">
        <Link to={`/surah/36`} className="bg-white font-semibold px-3  py-2 rounded-full">Yasin</Link>
        <Link to={`/surah/40`} className="bg-white font-semibold px-3  py-2 rounded-full">An-Naba</Link>
        <Link to={`/surah/78`} className="bg-white font-semibold px-3  py-2 rounded-full">Ar-Rahman</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
