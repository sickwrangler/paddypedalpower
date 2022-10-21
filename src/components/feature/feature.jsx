import React from 'react'
import './feature.css';

const Feature = ({ title, text }) => {
  return (
    <div className='features-container_feature'>
    <div className='features-container_feature-title'>
      <div></div>
      <h3>{title}</h3>
      </div>
      <p className='features-container_feature-text'>{text}</p>
    </div>
  )
}

export default Feature;