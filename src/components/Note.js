import React, {Component} from 'react'

//props coordinates where component goes

export default class Note extends Component{
  constructor(props){
    super(props)
    this.state={
      value:''
    }
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange=(e)=>{
    this.setState={
      value:e.target.value
    }
  }


  render(){
    const yPos= this.props.y
    const xPos=this.props.x
    const style={
      width: '100px',
      height:'75px',
      backgroundColor: 'tomato',
      position: 'absolute',
      top:yPos,
      left: xPos,
    }
    return(
      <div style={style}>
        <textarea
          value={this.state.value}
          onChange={this.handleChange}
          className="note"/>
      </div>
    )
  }

}
