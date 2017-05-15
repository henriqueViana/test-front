import React, { Component } from 'react';

export default class Clock extends Component{
  
  constructor(props) {
    super(props);
    
    this.state = {clock: ''}

    this.hours = '';
    this.minutes = '';

    this.currentHour = new Date();
    this.configClock();
  }


  /**
   * Método responsável por configurar o relógio da aplicação, atualizando o estado (propriedade clock)
   * a cada 1 segundo pelo setInterval
   */
  configClock() {
    
    setInterval(() => {
      this.hours = this.configHour();
      this.minutes = this.currentHour.getMinutes();

      this.setState({...this.state, clock: `${this.hours}:${this.minutes} ${this.configAMPM()}`})
      , 1000
    });
  }


  /**
   * Método responsável por retornar os valores AM ou PM de acordo com o horário
   */
  configAMPM() {
    return this.currentHour.getHours() > 12 ? 'PM' : 'AM';
  }


  /**
   * Método responsável por configurar a hora para o modelo de 12 horas em AMPM e inserir o zero
   * caso a hora seja menor que 10
   */
  configHour() {
    let hours = this.currentHour.getHours() > 12 ? (this.currentHour.getHours() - 12) : this.currentHour.getHours();
    return hours < 10 ? '0' + hours : hours;  
  }

  render() {
    return(
      <div className='clock'>{this.state.clock}</div>
    );
  }
}