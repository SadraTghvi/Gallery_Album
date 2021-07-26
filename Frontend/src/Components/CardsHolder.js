import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './CardsHolder.css';
import ImgCard from './ImgCard';

function CardsHolder() {
  const [data,setData] = useState([])

  const getPics = () =>{
    axios.get('api/albums/')
    .then(res => {
      setData(res.data)
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  useEffect(() => {
    getPics();
  }, [])

  // useEffect(() => {
  //   console.log(finalData)
  // }, [finalData])
  
  // for (let i = 0; i < data.length; i++) {
  //   console.log(data[i])
  // }

  return (
    <div className='cards'>
      <h1>Gallery Album</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ImgCard
              src='static/img/img-2.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />

            <ImgCard
              src='static/img/img-1.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
          
                      
          </ul>
          <ul className='cards__items mine'>
          
          {data.map((item) =>
            <ImgCard
              key={item.id}
              src={"static"+item.img}
              text={item.description}
              label={item.Title}
              path='/services'
            />
          )}
             
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsHolder;
