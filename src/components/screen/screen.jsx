import React, { Component } from 'react';
import './screen.css';

import Header from '../header/header';

export default class Screen extends Component{
  
  render() {

    return(
      <section className='screen'>
        <Header />
      </section>
    );
  }
}