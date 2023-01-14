import React from "react";
import './header.sass';

const Header = () => {
    return (
        <div className="header">
            <div className="title">Vishnu Gupta</div>
            <div className="right">
                <div className="menu-item"><a href="#project">Project</a></div>
                <div className="menu-item">Contact</div>
                <div className="menu-item"><a href="#aboutMe">About Me</a></div>
                <div className="menu-item resume">Resume</div>
            </div>
        </div>
    )
}

export default Header;