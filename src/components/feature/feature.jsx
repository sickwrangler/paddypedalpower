import React from 'react'
import './feature.css';

const Feature = ({title, text}) => {
  return (
    <div className='features-container_feature'>
    <div className='features-container_feature-title'>
      <div></div>
      <h1>{title}</h1>
<div className='features-container_feature-text'>{text}</div>
    </div>
    </div>
  )
}

export default Feature;