import React, { Component } from 'react';
import './screen.css';

import Header from '../header/header';
import Clock from '../clock/clock';
import Week from '../week/week';

export default class Screen extends Component{
  
  render() {

    return(
      <section className='screen'>
        <Header />
        <div className='date-clock'>
          <Clock />

          <div>aaaaaa</div>
          <Week />
        </div>
        
      </section>
    );
  }
}