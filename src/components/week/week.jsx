import React, { Component } from 'react';

export default class Week extends Component{

  constructor(props) {
    super(props);

    this.dayOfWeek = new Date().getDay();
    this.lang = navigator.language;
  }


  /**
   * Método responsável por configurar e retornar o dia da semana em português
   */
  getWeekDayPT() {
    const weekDays = ['Domingo' , 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return weekDays[this.dayOfWeek]; 
  }

  /**
   * Método responsável por configurar e retornar o dia da semana em inglês
   */
  getWeekDayEN() {
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekDays[this.dayOfWeek]; 
  }


  /**
   * Método responsável por verificar qual o idioma do navegador do usuário e retornar o dia da semana
   * correto
   */
  getWeekDayName() {
    
    if(this.lang === 'pt-BR' || this.lang === 'pt') {

      return this.getWeekDayPT();
    
    } else if(this.lang === 'en-US' || this.lang === 'en') {
    
      return this.getWeekDayEN();
   
    }
  }

  render() {
    return(
      <div className='week'>{this.getWeekDayName()}</div>
    )
  }  
}