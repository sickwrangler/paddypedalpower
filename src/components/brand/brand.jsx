import React from 'react';
import './brand.css';
import { mefus, afal, grawnwin} from './imports';

const brand = () => {
  return (
    <div className='brand section_padding'>
    <div> 
      <img className='fruitIcon' src={mefus} alt="mefus"></img>
      </div>
      <div>
      <img className='fruitIcon' src={afal} alt="afal"></img>
      </div>
      <div>
      <img className='fruitIcon' src={grawnwin} alt="grawnwin"></img>
    </div>
    </div>
  )
}

export default brand;