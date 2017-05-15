import React, { Component } from 'react';
import './device.css';

import Screen from '../screen/screen';

export default props => (
  <section className='device'>
  
    <div className='camera'>
      <span className='ball'></span>
    </div>

    <div className='audio'>
      <span className='output'></span>
    </div>

    <Screen />

    <div className='button-home'>
      <span className='ball'></span>
    </div>

  </section>
);

