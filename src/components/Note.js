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
    this.setState({
      value:e.target.value
    })
  }


  render(){
    const yPos= this.props.y
    const xPos=this.props.x
    const styleContainer={
      width: '200px',
      height:'150px',
      position: 'absolute',
      top:yPos,
      left: xPos,
    }
    const styleText={
      width: '100%',
      height: '100%',
      backgroundColor:"#ccff00"
    }
    return(
      <div style={styleContainer}>
        <textarea
          value={this.state.value}
          onChange={this.handleChange}
          style={styleText}
          className="note"/>
      </div>
    )
  }

}
