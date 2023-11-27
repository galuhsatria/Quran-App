import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
const DaftarSurah = () => {
  const [surah, getSurah] = useState("");
  const api = "https://equran.id/api/surat";

  useEffect(() => {
    getAllSurah();
  }, []);

  const getAllSurah = () => {
    axios
      .get(api)
      .then((response) => {
        const allSurah = response.data;
        getSurah(allSurah);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full  items-center  rounded-md" style={{ cursor: "pointer" }}>
      {surah
        ? surah.map((surah, index) => {
            const { nomor, nama, arti, nama_latin, jumlah_ayat, tempat_turun } = surah;
            return (
              <Link key={index} className="flex bg-white mx-2 my-2  h-20 gap-3 items-center justify-between px-3 py-1 rounded-md border" to={`/surah/${nomor}`}>
                <div className="flex gap-3">
                  <div className="relative w-10  flex justify-center items-center">
                    <img src="https://i.ibb.co/RC0C8r2/number.png" alt="" className="absolute" />
                    <p className="text-sm">{nomor}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold">{nama_latin}</p>
                      <p className="text-sm overflow-auto">({arti.slice(0, 12) + (arti.length > 12 ? "..." : "")})</p>
                    </div>
                    <p className="flex items-center text-primary">
                      {tempat_turun} <BsDot /> {jumlah_ayat}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-arabic font-bold">{nama}</p>
                </div>
              </Link>
            );
          })
        : null}
    </div>
  );
};

export default DaftarSurah;
