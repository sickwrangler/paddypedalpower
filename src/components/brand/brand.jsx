import React from 'react';
import './brand.css';
import { google, slack, atlassian, dropbox, shopify} from './imports';

const brand = () => {
  return (
    <div className='brand section_padding'>
    <div>
      <img src={google} alt="google"></img>
      <img src={slack} alt="slack"></img>
      <img src={atlassian} alt="atlassian"></img>
      <img src={dropbox} alt="dropbox"></img>
      <img src={shopify} alt="shopify"></img>
    </div>
    </div>
  )
}

export default brand;