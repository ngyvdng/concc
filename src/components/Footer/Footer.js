import React from 'react'
import icon1 from "../../assets/images/sns-icon-1@3x.png"
import icon2 from "../../assets/images/sns-icon-2@3x.png"
import icon3 from "../../assets/images/sns-icon-3@3x.png"
import logo from "../../assets/images/black-logo-icon@3x.png"
import "./Footer.scss"
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-contact">
                <div className="contact">
                    <div className="contact-title">
                        Contact
                    </div>
                    <div className="contact-mail">
                    motiontrend@test.com
                    </div>
                </div>
                <div className="social">
                    <div className="social-content">
                        <span>@ Motiontrend. All rights reserved.</span>
                    </div>
                    <div className="social-icon">
                        <a href="#">
                            <img className="insta-img" src={icon1} alt="" />
                        </a>
                        <a href="#">
                            <img className="fb-img" src={icon2} alt="" />
                        </a>
                        <a href="#">
                            <img className="youtube-img" src={icon3} alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-intro">
                <ul className="intro-info">
                    <li>
                        <a href="#">Introduction</a>
                    </li>
                    <li>
                        <a href="#">Terms of Service</a>
                    </li>
                    <li>
                    <select name="choice" style={{border: 'none'}}>
                    <option defaultValue value="first">Language</option>
                    <option value="second" >English</option>
                    <option value="third">Korea</option>
                    </select>
                    </li>
                    <li>
                        <a href="#">Terms of Service</a>
                    </li>
                </ul>
                <div className="intro-logo">
                    <img src={logo} alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer
