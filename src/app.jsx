import React, { Component } from 'react';
import './app.css';
import Navbar from './components/navbar';
import HabitAddForm from './components/habitAddForm';
import Habits from './components/habits';


class App extends Component {
  state = {
    habits: [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Running', count: 0},
      {id: 3, name: 'Coding', count: 0},
    ],
  }

  handleInrement = (habit) => {
    const habits = [...this.state.habits] // spread 함수로 habits 복사해옴! 
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({
      habits // habits : habits 키값과 벨류 값이 같으면 하나 생략 가능 !

    // 이게 왜 안되는지 모르겠음! 왜 안되는지, 왜 objectf를 복제해 와야하는지 정확하게 이해하고 넘어갈 것**
    // const habitCount = habit.count
    // this.setState=({
    //   habitCount : habitCount+1
    // })
    });
  }
  
  handleDecrement = (habit) => {
    const habits = [...this.state.habits] 
    const index = habits.indexOf(habit);
    const count = habits[index].count-1;  //왜 선언문에는 count-- 는 안먹힐까? 
    habits[index].count = count < 0 ? 0 : count 
    this.setState({
      habits 
    });
    };
  
  //삭제하는 함수 로직 마음속에 저장 하십시오...!!! 
  //filter함수 자체가 새로운 배열을 반환하기 떄문에 스프레드 연산자 안씀!
  handleDelete = (habit) => {
    const habits = this.state.habits.filter( item => item.id !== habit.id);  
    this.setState({
      habits
    });
  }

  // handleAddBtn = (e) => {
  //   if (e.target.value !== "")
  //     this.setState({
  //       inputValue : e.target.value
  //     })
  // }

  // handleInputValue = (event) => {
  //   this.setState({
  //     inputValue: event.target.value
  //   })
  //   const name = this.inputRef.current.value
  //   console.log(name)
  //   name && this.props.onAddHabit(name)
  // }

  handleAddHabit = (name) => {
    const habits =  [...this.state.habits, {id:Date.now(), name, count:0}];
    this.setState({habits});
  }

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      habit.count = 0;
      return habit; //return habit을 하는 이유 정확하게 이해하기 
    });
      this.setState({
        habits
      })
    }

  render(){

  return (
    <>
  <Navbar
    totalCount={this.state.habits.filter(item => item.count > 0).length}/>
  <HabitAddForm
    onAddHabit={this.handleAddHabit}
    // onInputValue={this.state.inputValue}
    />
  <Habits
    habits={this.state.habits}
    onIncrement={this.handleInrement}
    onDecrement={this.handleDecrement}
    onDelete={this.handleDelete}
    onReset={this.handleReset} />
    </>
  );
} 
}

export default App;
