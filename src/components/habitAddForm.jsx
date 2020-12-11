import React, { Component } from 'react';

class HabitAddForm extends Component {
  inputRef = React.createRef();

  onInputValue = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value
    name && this.props.onAddHabit(name)
    this.inputRef.current.value="";  // 왜 name = ""; 이건 안될까?
  } 
  render() {
    return (
      <form 
        className="add-form" 
        // onSubmit={this.onInputValue}
        >
        <input 
        ref={this.inputRef}
        // value={this.inputRef.current.value}
        type="text" 
        className="add-input" 
        placeholder="Habit"
        ></input>
        <button 
        className="add-button"
        onClick={this.onInputValue}
        // onClick={this.onInputValue}
        // onClick={this.props.onAddHabit}
        >Add</button>
      </form>
    );
  }
}

export default HabitAddForm;