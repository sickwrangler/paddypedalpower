import React from 'react';
import './features.css';
import Feature from '../../components/feature/Feature';

const features = () => {
  return (
    <div className='features_container section_margin' id='climate_change'>
      <div className='features_container-heading'>
        <h2 className='gradient_text'>Scientific evidence for warming of the climate system is unequivocal.</h2>
        <h3>- Intergovernmental Panel on Climate Change</h3>
      </div>
      <div className='features_container-content'>
      <Feature title="Evidence" text="There is unequivocal evidence that Earth is warming at an unprecedented rate. Human activity is the principal cause."></Feature>
        <Feature title="Causes" text="Human activities are driving the global warming trend observed since the mid-20th century."></Feature>
        <Feature title="Effects" text="The effects of human-caused global warming are happening now, are irreversible on the timescale of people alive today, and will worsen in the decades to come."></Feature>
      </div>
    </div>
  )
}

export default features;