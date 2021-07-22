import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'

import "./HeroSection.css"
import "../App.css"

function HeroSection() {
    return (
        <div className="hero-container">
            <video src='static/videos/video-1.mp4' autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'> 
                        test2
                        </Button>
                
                <Button className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'>
                        test
                </Button>
            </div>
            
        </div>
    )
}

export default HeroSection
