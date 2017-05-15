import React, { Component } from 'react';
import './index.css';

import Device from '../../components/device/device';

export default class Index extends Component{

  render() {
    return(
      <section className='wrapper'>
        <Device />
      </section>
    );
  }
}