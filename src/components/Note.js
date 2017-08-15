import React, {Component} from 'react'

//props coordinates where component goes

export default class Note extends Component{
  constructor(props){
    super(props)
    this.state={
      value:'',
      dragging:false,
      x:this.props.xPos,
      y:this.props.yPos,
      diffX:null,
      diffY:null
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleDrag=this.handleDrag.bind(this)
    this.handleClick=this.handleClick.bind(this)
  }

  handleChange=(e)=>{
    this.setState({
      value:e.target.value
    })
  }


  onDragStart=(e)=>{
    this.setState({
      diffX:e.clientX-this.props.xCoor,
      diffY:e.clientY- this.props.yCoor
    })
  }

  handleDrag=(e)=>{

  }

  handleDragEnd=(e)=>{
    const newX=e.clientX- this.state.diffX
    const newY= e.clientY-this.state.diffY
    this.setState({
      x:newX,
      y:newY,
      dragging:false
    })
  }

  handleClick=(e)=>{
    console.log(e.clientX, e.clientY)
  }



  render(){
    const yPos= this.state.y
    const xPos=this.state.x
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
      <div style={styleContainer} onClick={this.handleClick} onDrag={this.handleDrag} draggable="true" onDragEnd={this.handleDragEnd}>
        <textarea
          value={this.state.value}
          onChange={this.handleChange}
          style={styleText}
          className="note"/>
      </div>
    )
  }

}
