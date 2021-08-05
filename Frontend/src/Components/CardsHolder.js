import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './CardsHolder.css';
import ImgCard from './ImgCard';
import { useDispatch, useSelector } from 'react-redux';

import { getPics } from '../actions/getPics';

function CardsHolder() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getPics())
  }, [])
  
  const pics = useSelector(state => state.getPics)

 


  return (
    <div className='cards'>
      <h1 id="gallery_album">Gallery Album</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ImgCard
              src='static/img/img-2.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/'
            />

            <ImgCard
              src='static/img/img-1.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/'
            />
          
                      
          </ul>
          <ul className='cards__items mine' id="mine">
          
          {pics.map((item) =>
            <ImgCard
              key={item.id}
              src={"static"+item.img}
              text={item.description}
              label={item.Title}
              path='/'
            />
          )}
             
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsHolder;
