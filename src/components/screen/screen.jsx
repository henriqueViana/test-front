import React, { Component } from 'react';
import './screen.css';

import Header from '../header/header';
import Footer from '../footer/footer';
import Clock from '../clock/clock';
import Week from '../week/week';
import DateApp from '../date/date';

export default class Screen extends Component{
  
  render() {

    return(
      <section className='screen'>
        <Header />
        <div className='date-clock'>
          <Clock />
          
          <div className='day'>
            <Week />, &#32; <DateApp />
          </div>
        </div>

        <Footer />
        
      </section>
    );
  }
}