import React from 'react'
import './about.css'
import about_profile from '../../assets/about_profile.svg'
import download from '../../assets/download.svg'

const About = () => {
    return (
        <div className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={download} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={about_profile} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experience frontend developer with over a decade of professional experience in this field throughout my carrer i have had the previlige of collaborating with prestigious organization, contributing to their success and growth</p>
                        <p>My passion for frontend development is not only reflected in my extractive experience in my extensive but also in the enthusian and dedication i brings to eachproject</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: '50%' }} /></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{ width: '70%' }} /></div>
                        <div className="about-skill"><p>React.Js</p><hr style={{ width: '60%' }} /></div>
                        <div className="about-skill"><p>Node.Js</p><hr style={{ width: '50%' }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-acheivements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Year of Experience</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>30+</h1>
                    <p>Project Completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>Happy Clients</p>
                </div>
            </div>
        </div>
    )
}

export default About