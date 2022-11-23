import React from 'react';
import './card.css';


const Card = ({image, title, attributes}) => {
    return (
      <div className='card'>
        <img className='cardImage' src={image}></img>
        <h2>{title}</h2>
        <div>
            <ul>
                <li>{attributes[0]}</li>
                <li>{attributes[1]}</li>
                <li>{attributes[2]}</li>
            </ul>
        </div>
      </div>
    )
  }

export default Card;