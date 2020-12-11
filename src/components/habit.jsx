import React, { Component } from 'react';

class Habit extends Component {
  handleInrement = () => {
    this.props.onIncrement(this.props.habit);
    };
  

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit)
    };
  

  handleDelete = () => {
    this.props.onDelete(this.props.habit)
  }

  render() {
    const {name, count} =this.props.habit
    // const {onIncrement, onDecreament, onDelete} = this.props

    return (
      //habit이랑 habits랑 합쳐서 하면 되지 않을까? props를 남발하는 기분 ㅠ
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button 
        className="habit-button habit-increase" 
        onClick={this.handleInrement}>
          <i className="fas fa-plus-square"></i>
        </button >
        <button 
        className="habit-button habit-decrease" 
        onClick={this.handleDecrement}>
          <i className="fas fa-minus-square"></i>
        </button>
        <button 
        className="habit-button habit-delete"
        onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;