import React from "react";
import ReactPlayer from "react-player";
import "./popup.scss";
import icon from "../../assets/images/close-white-icon@3x.png";
import iconlike from "../../assets/images/like-button-icon@3x.png";
import iconuser from "../../assets/images/white-follower-button-icon@3x.png";
import iconfolder from "../../assets/images/white-add-button-icon@3x.png";
import user from "../../assets/images/upload-my-profile-1@3x.png";

import uploadIcon from "../../assets/images/go-to-page-icon@3x.png";
import likeIcon from "../../assets/images/like-icon@3x.png";
import addIcon from "../../assets/images/view-icon@3x.png";
import shareIcon from "../../assets/images/share-black-icon@3x.png";
import userBlack from "../../assets/images/follower-icon@3x.png";

import Button from "../Button/Button";
import SlideList from "./SlideList";
import Comment from "./Comment";
const Popup = ({ data, setOpenPopup }) => {
  const { video, detailImg, desc, partners } = data;
  const listSidebar = [
    {
      icon: uploadIcon,
      name: "page",
    },
    {
      icon: likeIcon,
      name: "Like",
    },
    {
      icon: addIcon,
      name: "Add",
    },
    {
      icon: shareIcon,
      name: "share",
    },
  ];
  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-header">
          <div className="btn-close" onClick={() => setOpenPopup(false)}>
            <img src={icon} alt="" />
          </div>
        </div>
        <div className="popup-sidebar">
          {listSidebar.map((sp, index) => {
            return (
              <div
                onClick={() => setOpenPopup(false)}
                key={index}
                className="popup-sidebar-item"
              >
                <img src={sp.icon} alt="" />
                <span>{sp.name}</span>
              </div>
            );
          })}
        </div>

        <div className="popup-contents">
          <div className="popup-label">
            <p className="red-label">
              TZ
              <span className="triangle-down-red"></span>
            </p>
            <p className="blue-label">
              HR
              <span className="triangle-down-blue"></span>
            </p>
          </div>
          <div className="popup-title">
            <div className="popup-title-avatar">
              <img src={user} alt="" />
            </div>
            <div className="popup-title-content">
              <div className="title">{desc}</div>
              <div className="detail">
                <div className="detail-author">Kim Aeyong</div>
                <div className="detail-cate">
                  Design, Music Video, Advertising
                </div>
              </div>
              <div className="list-button">
                <div className="list-button-left">
                  <Button type="light" tit="Like" icon={iconlike} />
                  <Button type="dark" tit="follow" icon={iconuser} />
                  <Button type="dark" tit="Add" icon={iconfolder} />
                </div>
                <div style={{ paddingRight: 20 }} className="list-button-right">
                  <Button type="light" tit="Edit project" />
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-inners">
            {video ? (
              <div className="mainVideo">
                <ReactPlayer
                  width={"100%"}
                  height={"100%"}
                  url={`https://www.youtube.com/watch?v=${video}`}
                />
              </div>
            ) : (
              <div className="mainVideo">
                <ReactPlayer
                  width={"100%"}
                  height={"100%"}
                  url={`https://youtu.be/tMUFOSPpwsU`}
                />
              </div>
            )}
            <div className="detail-infomation">{partners}</div>
            {detailImg ? (
              <div className="mainDesign">
                <img src={detailImg} alt="" />
              </div>
            ) : null}

            <div className="popup-movement">
              <div className="title">{desc}</div>
              <div className="detail">
                <div className="detail-item">
                  <img src={likeIcon} alt="" />
                  <span>1,688</span>
                </div>
                <div className="detail-item">
                  <img src={addIcon} alt="" />
                  <span>18,178</span>
                </div>
                <div className="detail-item">
                  <img src={userBlack} alt="" />
                  <span>332</span>
                </div>
              </div>
              <div className="date">Publishing date : 2020.10.15</div>
              <Button type="light" tit="Like" icon={iconlike} />
              <Button type="dark" tit="Add" icon={iconfolder} />
            </div>
            <SlideList />
            <Comment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
