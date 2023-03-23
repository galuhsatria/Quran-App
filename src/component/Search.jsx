import React, { useState, useEffect } from "react";
import { BsDot } from "react-icons/bs";
import axios from "axios";
import { Link } from "react-router-dom";

const Search = () => {
  const [surah, getSurah] = useState("");
  const [search, setSearch] = useState("");
  const [show, setShow] = useState("hidden");
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

  const handleKeyDown = (e) => {
    if (e > 0) {
      setShow("block");
    } else {
      setShow("hidden");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center m-auto my-10 px-2" id="searchElement">
      <div className="bg-white m-auto p-3 rounded-md w-full relative">
        <input
          type="text"
          name="search"
          className="outline-none border-none w-full"
          id="search"
          onChange={(e) => {
            setSearch(e.target.value);
            handleKeyDown(e.target.value.length);
          }}
          placeholder="Search surah"
        />
        <div className={`${show} absolute h-max max-h-96 overflow-scroll overflow-x-hidden bg-white w-full left-0  z-10 px-2`} id="searchSurah">
          {surah
            ? surah
                .filter((surah) => {
                  if (search === "") {
                    return surah;
                  } else if (surah.nama_latin.toLowerCase().includes(search.toLowerCase())) {
                    return surah;
                  }
                })
                .map((surah, index) => {
                  return (
                    <Link to={`/surah/${surah.nomor}`} className="flex gap-3 mt-5" style={{ cursor: "pointer" }} key={index}>
                      <div className="relative w-10  flex justify-center items-center">
                        <img src="../../public/image/number.png" alt="" className="absolute" />
                        <p className="text-sm">{surah.nomor}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-bold">{surah.nama_latin}</p>
                          {/* <p className="text-sm overflow-auto">({surah.englishNameTranslation})</p> */}
                        </div>
                        <p className="flex items-center text-primary">
                          {surah.tempat_turun} <BsDot /> {surah.jumlah_ayat}
                        </p>
                      </div>
                    </Link>
                  );
                })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Search;
