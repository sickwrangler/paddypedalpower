import React from 'react';
import { feature } from '../../components/feature/feature'
import './whatpaddypedalpower.css';


const Whatpaddypedalpower = () => {
  return (
    <div className='whatppp section_margin id="whatppp"'>
      <div className='whatppp_feature'>
        <feature />
      </div>
      <div className='whatppp-heading '>
        <h1 className='gradient_text'>Showing the potential alternatives to car transportation</h1>
        <p>Explore the potential</p>
      </div>
      <div className='whatppp-container'></div>
      <feature></feature>
      <feature></feature>
      <feature></feature>
    </div>
  )
}

export default Whatpaddypedalpower;