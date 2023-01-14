import React, { useEffect } from "react";
import './home.sass';

const Home = () => {

    useEffect(() => {
        document.documentElement.style.scrollBehavior = "smooth";
    }, [])

    return (
        <div className="center">
            <div className="Home">
                <div className="intro">
                    Hi! I'm <span className="name">Vishnu Gupta</span>
                </div>
                <div className="sub-intro">A Front-end Developer</div>
                <div className="resume">Get Resume</div>
            </div>

            <div className="project" id="project">
                <div className="project-heading">Project</div>

                <div className="row">
                    <div className="imgContainer">
                        <div className="img">
                            <img src={require('../../image/review the restaurant.png')} width="300" />
                        </div>
                        <h3>Review the Restaurant</h3>
                        <div>Order the dish and cart fetaure here</div>
                    </div>
                    <div className="imgContainer">
                        <div className="img">
                            <img src={require('../../image/review the restaurant.png')} width="300" />
                        </div>
                        <h3>Review the Restaurant</h3>
                    </div>
                    <div className="imgContainer">
                        <div className="img">
                            <img src={require('../../image/review the restaurant.png')} width="300" />
                        </div>
                        <h3>Review the Restaurant</h3>
                    </div>
                </div>
            </div>


            <div className="about-me" id="aboutMe">
                <div className="project-heading">About me</div>
                <div className="flex-space-between">
                    <div className="flex-item">
                        <img className="profile" src={require('../../image/me.jpg')} alt="aboutMe" />
                    </div>
                    <div className="flex-item">
                        I am Vishnu Gupta. A Sr. front-end developer from Noida.
                        I am Currently working with HCAH Organization.
                        Learning and building projects. Growing myself everyday.
                        Trying to establish myself as a software-engineer in the tech industry.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;