import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatpaddypedalpower.css';


const Whatpaddypedalpower = () => {
  return (
    <div className='whatppp section_margin' id="whatppp">
      <div className='whatppp_feature'>
        <Feature title="What is the challenge?" text="The challenge is simple. Ride up a single hill enough times, for my total elevation gain to be equal to that of Mount Everest. My chosen hill is Y Tumblr, or Keepers hill if you are a local. I have chosen this hill for its for notorious reputation, one of the longest hill climbs in the UK, and historically a hill which have been used to transport coal and steel down the hill and thus starting our journey to a climate emergency." />
      </div>
      <div className='whatppp-heading'>
        <h2 className='gradient_text'>Showing the potential alternatives to car transportation</h2>
        <p>Explore the potential</p>
      </div>
      <div className='whatppp-container'>
      <Feature title="Cost" text="Cost comparison on an electric bike vs a car."></Feature>
      <Feature title="Health" text="Exercise, headspace, engagement."></Feature>
      <Feature title="Impact" text="The impact on the our world."></Feature>
    </div>
    </div>
  )
}

export default Whatpaddypedalpower;