import React from 'react'
import "./Button.scss"
function Button({type,tit,icon}) {
    return (
        <div className={`${type === "light" ? "light" : "dark"} button-component`}>
            {icon ? <img src={icon} alt="" /> : null}
            <span>{tit}</span>
        </div>
    )
}

export default Button
