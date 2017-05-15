import React from 'react';
import './header.css';

import Clock from '../clock/clock';

export default props => (
  
  <header className='header'>
   
    <div className='wi-fi'>
      <div className='bullets'></div>
      <div className='bullets'></div>
      <div className='bullets'></div>
      <div className='bullets'></div>
      <div className='bullets'></div>
      <i className="fa fa-wifi" aria-hidden="true"></i>
    </div>

    <Clock showAMPM='true'/>
    
    <i className="fa fa-battery-three-quarters battery" aria-hidden="true"></i>
  
  </header>
);

