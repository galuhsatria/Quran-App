import React, { useEffect, useState } from "react";
import { useParams ,Link} from "react-router-dom";
import axios from "axios";
import { BsDot } from "react-icons/bs";
import {AiOutlineArrowLeft} from "react-icons/ai";

const DetailSurah = () => {
  let { nomor } = useParams();
  const [surah, getSurah] = useState("");
  const api = `https://equran.id/api/surat/${nomor}`;

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

  let { nama, arti, jumlah_ayat, ayat, nama_latin, tempat_turun } = surah;

  let mapAyat;

  if (ayat) {
    mapAyat = ayat.map((ayat,index) => {
      return (
        <div className="ayat bg-white px-4 rounded-lg flex flex-col gap-3 py-5 border-2 border-primary" key={index}>
          <div className="relative w-10  flex justify-center items-center">
            <img src="../../public/image/number.png" alt="" className="absolute" />
            <p className="text-sm">{nomor}</p>
          </div>
          <div id="ayat" className="text-end">
            <h3 className="font-arabic text-2xl">{ayat.ar}</h3>
          </div>
          <div className="arti ml-4 ">
            <p>{ayat.idn}</p>
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      <div className="mb-10 mt-5">
        <Link  className="flex items-center gap-3  ml-3 text-primary font-bold" to={`/`}> 
            <AiOutlineArrowLeft className="text-2xl"/>
            <p>Back</p>
        </Link>
        <div className="bg-primary mx-4 text-white mt-4 mb-4 rounded-lg text-center p-10" id="detailSurah">
          <p className="font-arabic font-bold text-3xl">{nama}</p>
          <p>{nama_latin} ( {arti} )</p>
          <p className="flex items-center justify-center">
            {tempat_turun} <BsDot /> {jumlah_ayat}
          </p>
          <img src="/public/image/Vector (2).png" alt="" className="m-auto mt-5 w-56"/>
        </div>
        <div className="flex flex-col gap-2 mx-4 ">
          <>{mapAyat}</>
        </div>
      </div>
    </div>
  );
};

export default DetailSurah;
