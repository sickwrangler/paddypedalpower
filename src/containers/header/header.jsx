import React from 'react';
import './header.css';
import catcargo from '/Users/jarvp/Github /paddypedalpower/src/img/cargobike-cat.png';

const header = () => {
  return (
    <div className='header section_padding' id='home'>
      <div className='header-content'>
        <h1 className='gradient_text'>Everesting with my shopping, tackling y tumblr.</h1>
        
          <p>"Where I live is too hilly to ride my bike."
             "It takes to long to cycle places."
             "I'm not fit enough to ride a bike."
             "It's too dangerous to ride on the roads."
             Enough excuses, lets show what is possible.
          </p>
          <div className='header-content_input'>
          <input type='email' placeholder='Your email address'></input>
        <button> Learn more</button>
        </div>
        

           
      </div>
      <div className='header-image'>
            <img src={catcargo} alt="cat in cargo bike"/>
           </div>
      </div>
  )
}

export default header;