import React from "react";
import youtube from "../../assets/images/play-icon@3x.png";
import live from "../../assets/images/live-box@3x.png";
import img1 from "../../assets/images/tutorial-img-2@3x.png";
import img2 from "../../assets/images/tutorial-img-3@3x.png";
import img3 from "../../assets/images/tutorial-img-2-copy-2@3x.png";
import likeicon from "../../assets/images/like-icon@3x.png";
import watchicon from "../../assets/images/view-icon@3x.png";
import "./Tutorial.scss"
function Tutorial() {
  const menuItem = [
    {
      img: img1,
      title: "Tutorial",
      detail: "A tutorial video with Motion Trend. Let's Learn Motion Trends.",
      like: 18,
      watch: 18,
    },
    {
      img: img2,
      title: "Tutorial",
      detail: "A tutorial video with Motion Trend. Let's Learn Motion Trends.",
      like: 18,
      watch: 18,
    },
    {
      img: img3,
      title: "Tutorial",
      detail: "A tutorial video with Motion Trend. Let's Learn Motion Trends.",
      like: 18,
      watch: 18,
    },
  ];
  return (
    <div className="tutorial">
      <div className="tutorial-content">
        <div className="subtit">TUTORIAL</div>
        <div className="title">
          Let's look at 7 ways <br />
          to use motion trend <br />
          more effectively <br />
          in the first tutorial.
        </div>
        <div className="content-button">
          <span>Watch now</span>
        </div>
      </div>
      {/* {video} */}
      <div className="tutorial-video">
        <div className="img-youtube">
          <img onClick={()=> window.open("https://www.youtube.com/watch?v=7wtfhZwyrcc")} src={youtube} alt="" />
        </div>
        <div className="img-live">
          <img src={live} alt="" />
        </div>
        <span className="time">02:33</span>
      </div>
      {/* list video  */}
      <div className="tutorial-list-video">
        {menuItem.map((sp, index) => {
          return (
            <div key={index} className="video-items">
              <div className="video-img">
                <img onClick={()=> window.open("https://www.youtube.com/watch?v=7wtfhZwyrcc")} src={sp.img} alt="" />
              </div>
              <div className="items-content">
                <div className="title">{sp.title}</div>
                <p>{sp.detail}</p>
                <div className="review">
                  <div className="like">
                    <img src={likeicon} alt="" />
                    <span>{sp.like}</span>
                  </div>
                  <div className="watch">
                    <img src={watchicon} alt="" />
                    <span>{sp.watch}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
        
        <div className="tutorial-mobile">
           {/* {video} */}
      <div className="tutorial-video-mobile">
        <div className="img-youtube">
          <img onClick={()=> window.open("https://www.youtube.com/watch?v=7wtfhZwyrcc")} src={youtube} alt="" />
        </div>
        <div className="img-live">
          <img src={live} alt="" />
        </div>
        <span className="time">02:33</span>
      </div>
      {/* list video  */}
      <div className="tutorial-list-video-mobile">
        {menuItem.map((sp, index) => {
          return (
            <div key={index} className="video-items">
              <div className="video-img">
                <img onClick={()=> window.open("https://www.youtube.com/watch?v=7wtfhZwyrcc")} src={sp.img} alt="" />
              </div>
              <div className="items-content">
                <div className="title">{sp.title}</div>
                <p>{sp.detail}</p>
                <div className="review">
                  <div className="like">
                    <img src={likeicon} alt="" />
                    <span>{sp.like}</span>
                  </div>
                  <div className="watch">
                    <img src={watchicon} alt="" />
                    <span>{sp.watch}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
   
        </div>
    </div>
  );
}

export default Tutorial;
