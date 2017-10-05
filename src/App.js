import React, { Component } from 'react';
import './App.css';
import Board from './components/Board'
import Menu from './components/Menu'


//when user clicks on the window a component will show up with a defined size
  //user is able to type on the component (controlled textarea)


class App extends Component {
  constructor(props){
    super(props)

  }




  render() {
    const style={
      width: '100vw',
      height: '100vh'
    }
    return (
      <div className="App" style={style}>
        <Board/>
        <Menu/>
      </div>
    );
  }
}

export default App;
