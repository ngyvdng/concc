import React from 'react'
import icon from "../../assets/images/enter-comments-icon@3x.png"
import avt1 from "../../assets/images/commant-profile-1@3x.png"
import avt2 from "../../assets/images/commant-profile-2@3x.png"
import avt3 from "../../assets/images/commant-profile-2@3x 2.png"
import user from "../../assets/images/upload-my-profile-1@3x.png"
import iconCancel from "../../assets/images/upload-delete-icon@3x.png"
import iconNotAllow from "../../assets/images/upload-report-icon@3x.png"
import enterIcon from "../../assets/images/enter-comments-icon.png"
import locationIcon from "../../assets/images/location-gray-icon@3x.png"
import watchicon from "../../assets/images/view-icon@3x.png";
import likeIcon from "../../assets/images/like-icon@3x.png"
import messIcon from "../../assets/images/small-comments-icon@3x.png"
import preIcon from "../../assets/images/creative-premiere-icon@3x.png"
import photoshopIcon from "../../assets/images/creative-photoshop-icon@3x.png"
import illuIcon from "../../assets/images/creative-illustrator-icon@3x.png"
import reportIcon from "../../assets/images/report-icon@3x.png"
import ButtonBgRed from '../Button/ButtonBgRed'
function Comment() {
    const listComment = [
        {
            avt: avt1,
            name: 'Kim Aeyong',
            date: '2020. 07. 26',
            content: 'Amazing work you have here. feels like an alternative reality with that much saturation.. love it! Amazing work you have here feels like an alternative reality with that much saturation.. love it!'
        },
        {
            avt: avt2,
            name: 'Kim Jimin',
            date: '2020. 07. 26',
            content: 'Amazing work you have here. feels like an alternative reality with that much saturation.. love it!'
        },
        {
            avt: avt3,
            name: 'Im Junghan',
            date: '2020. 07. 26',
            content: 'Amazing work you have here. feels like an alternative reality with that much saturation.. love it! Amazing work you have here feels like an alternative reality with that much  saturation.. love it!'
        },
        {
            avt: avt2,
            name: 'Cayley',
            date: '2020. 07. 26',
            content: 'Amazing work you have here. feels like an alternative reality with that much saturation.. love it!'
        },
        {
            avt: avt1,
            name: 'Kim Aeyong',
            date: '2020. 07. 26',
            content: 'Amazing work you have here. feels like an alternative reality with that much saturation.. love it! Amazing work you have here feels like an alternative reality with that much saturation.. love it!'
        },
    ]
    return (
        <div className="popup-comment">
            <div className="comment-detail">
                <div className="title">Comments</div>
                <div className="send-button">
                    <input type="text" placeholder="Write a comment now......" />
                    <button>
                        <img src={icon} alt="" />
                    </button>
                </div>
                <div className="list-comment">
                    {listComment.map((sp,index) => {
                        return (
                            <div key={index} className="list-comment-item">
                            <div className="title">
                                <div className="title-avt">
                                    <img src={sp.avt} alt="" />
                                    <div className="name">
                                        <p>{sp.name}</p>
                                        <p className="date">{sp.date}</p>
                                    </div>
                                </div>
                                <div className="title-icon-hidden">
                                   <span> <img src={iconCancel} alt="" /></span>
                                   <span> <img src={iconNotAllow} alt="" /></span>
                                </div>
                            </div>
                            <div className="comment-content">
                           {sp.content}
                            </div>
                        </div>
                    
                        )
                    })}
                   
                </div>
                <div className="button-more">
                    <button>
                        <span>More comments</span>
                        <img src={enterIcon} alt="" />
                    </button>
                </div>
            </div>

            {/* owner  */}
            <div className="comment-owner">
                    <div className="owner-avt">
                        <div className="subtit">Owner</div>
                        <div className="owner-info">
                            <img src={user} alt="" />
                            <div className="owner-info-detail">
                                <div className="name">Kim Aeyong</div>
                                <div className="location">
                                    <img src={locationIcon} alt="" />
                                    <span>Korea, Republic of</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="owner-movement">
                        <div className="tit">The first portfolio movement.</div>
                        <div className="review">
                        <div className="like">
                            <img src={likeIcon} alt="" />
                            <span>18</span>
                        </div>
                        <div style={{paddingLeft: 15}} className="watch">
                            <img src={watchicon} alt="" />
                            <span>18</span>
                        </div>
                        <div style={{paddingLeft: 15}} className="mess">
                            <img src={messIcon} alt="" />
                            <span>18</span>
                        </div>
                        </div>
                        <div className="date-detail">Publishing date : 2020.10.15</div>  
                    </div>

                    <div className="owner-creative">
                        <div className="title-creative">Creative field</div>
                        <div className="creative-list">
                            <div className="creative-items">
                                <img src={preIcon} alt="" />
                            </div>
                            <div className="creative-items">
                                <img src={photoshopIcon} alt="" />
                            </div>
                            <div className="creative-items">
                                <img src={illuIcon} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="owner-list-cate">
                        <ButtonBgRed text="Editing" />
                        <ButtonBgRed style={{marginLeft: 10}} text="Camera action, Angle" />
                        <ButtonBgRed text="Sound, Beat" />
                        <ButtonBgRed text="Graphical " />
                        <ButtonBgRed text="Experimental" />
                        <ButtonBgRed text="Editing" />
                    </div>

                    <div className="owner-report">
                        <button>
                            <img src={reportIcon} alt="" />
                            <span>Report</span>
                        </button>
                    </div>
            </div>
        </div>
    )
}

export default Comment
