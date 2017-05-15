import React, { Component } from 'react';

export default class DateApp extends Component{

  constructor(props) {
    super(props);

    this.day = new Date().getDate();
    this.month = new Date().getMonth();
    this.lang = navigator.language;
  }


  /**
   * Método responsável por configurar e retornar o mês em português
   */
  getMonthPT() {
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return months[this.month]; 
  }


  /**
   * Método responsável por configurar e retornar o mês em inglês
   */
  getMonthEN() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[this.dayOfWeek]; 
  }
  

  /**
   * Método responsável por verificar qual o idioma do navegador do usuário e retornar a data
   * correta
   */
  getDate() {
    
    if(this.lang === 'pt-BR' || this.lang === 'pt') {

      return `${this.day} de ${this.getMonthPT()}`;
    
    } else if(this.lang === 'en-US' || this.lang === 'en') {
    
      return `${this.getWeekDayEN()} ${this.day}th`;
   
    }
  }

  render() {
    return(
      <div className='date'>{this.getDate()}</div>
    );
  }  
}