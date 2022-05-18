import React, { useEffect, useState } from "react";
import "./Thumbnail.scss";
import likeicon from "../../assets/images/like-icon@3x.png";
import Popup from "../Popup/Popup";
function Thumbnail({ listMovie, setListMovie }) {
  const [openPopup, setOpenPopup] = useState(false);
  const [item, setItem] = useState(null);
  const [activeCate, setActiveCate] = useState(1);

  const menuTitle = [
    { name: "Motion trend pick", id: "q1" },
    { name: "Latest", id: "q2" },
    { name: "Recommended", id: "q3" },
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
    <div className="thumbnail">
      <div className="thumbnail-title">
        <div className="thumbnail-title-category">
          {menuTitle.map((sp, index) => {
            return (
              <span
                onClick={() => {
                  fetchDataRequire(index + 1);
                  setActiveCate(index + 1);
                }}
                key={index}
                className={`${
                  activeCate === index + 1 ? "open-thumb" : ""
                } thumbnail-title-item`}
              >
                {sp.name}
              </span>
            );
          })}
        </div>
        <div className="thumbnail-title-criteria">
          <p>Selection criteria</p>
        </div>
      </div>
      <div className="thumbnail-list">
        {listMovie ? (
          listMovie.map((sp, index) => {
            return (
              <div key={index} className="thumbnail-list-items">
                <img
                  onClick={() => {
                    setOpenPopup(true);
                    setItem({
                      video: sp.yt_trailer_code,
                      detailImg: sp.large_cover_image,
                      desc: sp.title,
                      partners: sp.description_full,
                    });
                  }}
                  src={sp.large_cover_image}
                  alt="imge"
                />
                <div className="thumbnail-content">
                  <p className="title">{sp.title}</p>
                  <p className="rating">
                    <img src={likeicon} alt="" />
                    <span>{sp.rating}</span>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div>no search found available results</div>
        )}
      </div>
      {openPopup && <Popup data={item} setOpenPopup={setOpenPopup} />}
    </div>
  );
}

export default Thumbnail;
