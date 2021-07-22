import React from 'react'

import "./CardsHolder.css"
import ImgCard from './ImgCard'

function CardsHolder() {
    return (
        <>
            <div>
                <h1 id="gallery">Gallery Section</h1>
            </div>
            <div className="parent">
                <div className="CardsHolder">
                    <ImgCard src="static/img/img-1.jpg"/>
                    <ImgCard src="static/img/img-2.jpg"/>
                    <ImgCard src="static/img/img-3.jpg"/>
                    <ImgCard src="static/img/img-4.jpg"/>
                    <ImgCard src="static/img/img-5.jpg"/>
                    <ImgCard src="static/img/img-6.jpg"/>
                </div>
            </div>
        </>
    )
}

export default CardsHolder
