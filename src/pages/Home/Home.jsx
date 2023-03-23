import React from "react";
import DaftarSurah from "../../component/DaftarSurah";
import Header from "../../component/Header";

const Home = () => {
  return (
    <div className="mr-0 items-center m-auto w-full lg:px-20 sm:px-5">
      <Header/>
      <DaftarSurah />
    </div>
  );
};

export default Home;
