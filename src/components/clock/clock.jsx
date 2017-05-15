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
   * a cada 1 segundo pelo setInterval, recebendo as horas e os minutos configurados dos métodos configHour()
   * e configMinutes() respectivamente
   */
  configClock() {
    
    setInterval(() => {
      this.hours = this.configHour();
      this.minutes = this.configMinutes();

      this.setState({...this.state, clock: `${this.hours}:${this.minutes} ${this.props.showAMPM ? this.configAMPM() : ''}`})
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


  /**
   * Método responsável por configurar e inserir o zero caso os minutos sejam menores que 10 e
   * retornar os mesmos 
   */
  configMinutes() {
    let minutes = this.currentHour.getMinutes();
    return minutes < 10 ? '0' + minutes : minutes;
  }

  render() {
    return(
      <div className='clock'>{this.state.clock}</div>
    );
  }
}