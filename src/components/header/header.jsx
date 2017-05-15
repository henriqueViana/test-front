import React, { Component } from 'react';
import './header.css';

import Clock from '../clock/clock';

export default class Header extends Component{

  render() {
    
    return(
      <header className='header'>

        <div className='wi-fi'>
          <div className='bullets'></div>
          <div className='bullets'></div>
          <div className='bullets'></div>
          <div className='bullets'></div>
          <div className='bullets'></div>
          <i className="fa fa-wifi" aria-hidden="true"></i>
        </div>

        <div><Clock /></div>
        
        <i className="fa fa-battery-three-quarters battery" aria-hidden="true"></i>
      </header>
    );
  }
}