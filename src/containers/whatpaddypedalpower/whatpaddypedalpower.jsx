import React from 'react';
import { Feature } from '../../components/feature/feature'
import './whatpaddypedalpower.css';


const Whatpaddypedalpower = () => {
  return (
    <div className='whatppp section_margin id="whatppp"'>
      <div className='whatppp_feature'>
        <Feature title="What is the challenge?" />
      </div>
      <div className='whatppp-heading '>
        <h1 className='gradient_text'>Showing the potential alternatives to car transportation</h1>
        <p>Explore the potential</p>
      </div>
      <div className='whatppp-container'></div>
      <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature>
    </div>
  )
}

export default Whatpaddypedalpower;