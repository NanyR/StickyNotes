import React, {Component} from 'react'
import Note from './Note'

//props of onHandleClick which takes 2 parameters: ClientX and ClientY

export default class Board extends Component{

  constructor(props){
    super(props)
    this.state={
      notes:[]
    }
    this.handleClick=this.handleClick.bind(this)
  }

  handleClick=(e)=>{
    const xpos= String(e.clientX)+"px"
    const ypos=String(e.clientY)+'px'
    console.log("creating new note")
    this.setState({
      notes: [...this.state.notes, <Note x={xpos} y={ypos} />]
    })
  }

  render(){
    const style={
      width: '100vw',
      height: '100vh',
    
    }

    return(
      <div onClick={this.handleClick} style={style}>
          {this.state.notes}
      </div>
    )
  }


}
