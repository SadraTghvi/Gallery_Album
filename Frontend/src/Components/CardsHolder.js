import React from 'react';
import './CardsHolder.css';
import ImgCard from './ImgCard';

function CardsHolder() {
  return (
    <div className='cards'>
      <h1>Gallery Album</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ImgCard
              src='static/img/img-1.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <ImgCard
              src='static/img/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <ImgCard
              src='static/img/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <ImgCard
              src='static/img/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <ImgCard
              src='static/img/img-5.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
            <ImgCard
              src='static/img/img-6.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Mystery'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsHolder;
