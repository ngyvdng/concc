import React from 'react'
import watchicon from "../../assets/images/view-icon@3x.png";
import user from "../../assets/images/upload-my-profile-2@3x.png"
import avatar from "../../assets/images/profile-img-1@3x.png"
import likeIcon from "../../assets/images/like-icon@3x.png"

import img1 from "../../assets/images/ref-img-4@2x.png"
import img2 from "../../assets/images/ref-img-5@3x.png"
import img3 from "../../assets/images/ref-img-6@3x.png"
import img4 from "../../assets/images/ref-img-7@3x.png"
import img8 from "../../assets/images/ref-img-8@3x.png"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
function SlideList() {
    const menuImage = [
        {
            avt: avatar,
            img: img1,
            title: 'Kim Aeyong',
            like: 18,
            view: 18,
        },
        {
            avt: avatar,
            img: img2,
            title: 'Kim Jimin',
            like: 18,
            view: 18,
        },
        {
            avt: avatar,
            img: img3,
            title: 'Im Junghan',
            like: 18,
            view: 18,
        },
        {
            avt: avatar,
            img: img4,
            title: 'Cayley',
            like: 18,
            view: 18,
        },
        {
            avt: avatar,
            img: img8,
            title: 'Hamilton',
            like: 18,
            view: 18,
        },
    ]
    return (
        <div className="popup-slide">
        <div className="popup-slide-title">
            <img src={user} alt="" />
            <span>Kim Aeyong</span>
        </div>
        <div className="slide-list">
        <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          968: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          1328: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {menuImage.map((sp, id) => {
          return (
            <SwiperSlide key={id}>
             <div className="slide-items">
            <img src={sp.img} alt="" />
            <div className="items-detail">
              <div className="items-detail-title">
                  <img src={sp.avt} alt="" />
                  <span>Kim Aeyong</span>
              </div>
              <div className="items-detail-review">
              <div className="like">
                            <img src={likeIcon} alt="" />
                            <span>{sp.like}</span>
                        </div>
                        <div className="watch">
                            <img src={watchicon} alt="" />
                            <span>{sp.view}</span>
                        </div>
              </div>
            </div>
          </div>
       
            </SwiperSlide>
          );
        })}
      </Swiper>
        </div>
      </div>

    )
}

export default SlideList
