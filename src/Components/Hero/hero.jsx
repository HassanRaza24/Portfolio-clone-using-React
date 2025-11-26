import React from 'react'
import './hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className="hero">
        <img src={profile_img} alt="" />
        <h1><span>I'm Hassan Raza,</span> Frontend Developer based in Lahore</h1>
        <p>I am a frontend Developer From Lahore, Pakistan with 3 month of experience in multiple frontend project like Fikle Flight web, todo app, etc</p>
        <div className="hero-action">
            <div className="hero-connect"> Connect With Me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}
export default Hero