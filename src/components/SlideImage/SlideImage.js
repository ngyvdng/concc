import React from 'react'
import "./SlideImage.scss"
import avatar from "../../assets/images/profile-img-1@3x.png"
import img1 from "../../assets/images/ref-img-4@2x.png"
import img2 from "../../assets/images/ref-img-5@3x.png"
import img3 from "../../assets/images/ref-img-6@3x.png"
import img4 from "../../assets/images/ref-img-7@3x.png"
import img8 from "../../assets/images/ref-img-8@3x.png"
import likeicon from "../../assets/images/like-icon@3x.png";
import watchicon from "../../assets/images/view-icon@3x.png";
function SlideImage() {
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
        <div className="slide-container">
            {menuImage.map((sp,index) => {
                return (
                    <div key={index} className="slide-container-items">
                        <img src={sp.img} alt="" />
                        <div className="items-content">
                            <div className="content-name">
                                <img src={sp.avt} alt="" />
                                <span>{sp.title}</span>
                            </div>
                            <div className="content-review">
                            <div className="like">
                                    <img src={likeicon} alt="" />
                                    <span>{sp.like}</span>
                                </div>
                                <div className="watch">
                                    <img src={watchicon} alt="" />
                                    <span>{sp.view}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SlideImage
