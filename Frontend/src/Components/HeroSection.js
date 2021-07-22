import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'

import "./HeroSection.css"
import "../App.css"

function HeroSection() {
    return (
        <div className="hero-container">
            <video src='static/videos/video-1.mp4' autoPlay loop muted />
            <h1>Gallery Album</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button 
                        link="/sign"
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'> 
                        Add Your Own Image
                </Button>
                
            </div>
            
        </div>
    )
}

export default HeroSection
