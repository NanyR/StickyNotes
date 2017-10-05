import React, {Component} from 'react'
//my components
import Note from './Note'




export default class Board extends Component{

  constructor(props){
    super(props)
    this.state={
      notes:[]
    }
    this.handleClick=this.handleClick.bind(this)
  }




  handleClick=(e)=>{
    const xpos= String(e.clientX)
    const ypos=String(e.clientY)
    console.log("creating new note")
    this.setState({
      notes: [...this.state.notes, <Note initialPos={{x: xpos, y:ypos}} key={this.state.notes.length}  />]
    })
  }



  render(){
    const style={
      width: '100vw',
      height: '100vh',

    }

    return(
      <div onDoubleClick={this.handleClick} style={style}>

          {this.state.notes}

      </div>
    )
  }


}
