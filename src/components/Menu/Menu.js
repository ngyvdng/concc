import React, { useState } from "react";
import "./Menu.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function Menu({listMovie,setListMovie}) {
  const [activeCate,setActiveCate] = useState(0)
  const menu = [
    { name: "Theme", id: "theme", index: "q1" },
    { name: "Editing", id: "Editing", index: "q2" },
    { name: `Camera \n Action, Angle`, id: "Angle", index: "q3" },
    { name: "Sound, Beat", id: "Beat", index: "q4" },
    { name: "Graphical", id: "Graphical", index: "q5" },
    { name: "Experimental", id: "Experimental", index: "q6" },
    { name: "Elements", id: "Elements", index: "q7" },
    { name: "Car", id: "Car", index: "q8" },
    { name: "Gun", id: "Gun", index: "q9" },
    { name: "Doll", id: "Doll", index: "q10" },
  ];

  const fetchDataRequire = async (index) => {
    const url = `https://yts.mx/api/v2/list_movies.json?page=${index}&limit=25&quality=2160p`;
    try {
      const response = await fetch(url);
      const json = await response.json();
      setListMovie(json.data.movies);
    } catch (error) {
      alert("API has an error,please wait a minute or come back later");
    }
  };
  return (
    <div className="menu-container">
      <Swiper
        slidesPerView={8.5}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          220: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          420: {
            slidesPerView: 3.5,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 4.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 6.5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 8.5,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {menu.map((sp, id) => {
          return (
            <SwiperSlide key={id}>
              <div
                className={`${activeCate === id ? "open" : "close"} menu-item`}
                onClick={() => {
                  fetchDataRequire(id+1)
                  setActiveCate(id)
                }}
              >
                <span>{sp.name}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
   
    </div>
  );
}

export default Menu;
