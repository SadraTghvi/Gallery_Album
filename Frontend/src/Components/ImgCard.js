import React from 'react'
import "./ImgCard.css"

function ImgCard(props) {
    return (
        <>
            <div className="card myCard">
                <img src={props.src} class="card-img-top" alt="..." />
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">See This Picture</a>
                </div>
            </div>
        </>
    )
}

export default ImgCard
