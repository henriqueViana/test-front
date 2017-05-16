import React, { Component } from 'react';
import axios from 'axios';
import './screen.css';

import Header from '../header/header';
import Footer from '../footer/footer';
import Clock from '../clock/clock';
import Week from '../week/week';
import DateApp from '../date/date';

export default class Screen extends Component{

  constructor(props) {
    super(props);

    this.state = {status: 'locked'}
    this.user = ''
    axios.get('https://api.github.com/users/henriqueViana').then(res => this.user = res.data);

    this.unlockedDevice = this.unlockedDevice.bind(this);
    this.lockedDevice = this.lockedDevice.bind(this);
  }


  /**
   * Método responsável por atualizar o estado para "desbloqueado"
   */
  unlockedDevice() {
    this.setState({...this.state, status: 'unlocked'})
    console.log(this.user);
  }


  /**
   * Método responsável por atualizar o estado para "bloqueado"
   */
  lockedDevice() {
    this.setState({...this.state, status: 'locked'});
    
  }
  
  render() {

    return(
      <section className='screen'>
        <Header />

         {/*Tela do bloqueada*/}

        <div className={`screen-locked ${this.state.status}`}>
          <div className='date-clock'>
            <Clock />
            
            <div className='day'>
              <Week />, &#32; <DateApp />
            </div>
          </div>

          <div className='btn'>
            <button className='unlock' onClick={this.unlockedDevice}>clique para desbloquear</button>
          </div>
        </div>


        {/*Tela do usuário*/}

        <div className={`screen-user ${this.state.status}`}>
          
          <div className='back'>
            <button className='btn' onClick={this.lockedDevice}>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
              Voltar
            </button>
          </div>
          
          <div className='data-user'>
            <img src={this.user.avatar_url} className='avatar' alt='avatar'/>
            <h1 className='name'>{this.user.name}</h1>
            <div className='email'>{this.user.email ? this.user.email : `henriquehvisa@gmail.com`}</div>
          </div>
          
        </div>
        <Footer />
      </section>
    );
  }
}