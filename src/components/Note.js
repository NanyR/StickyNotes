
import React, {Component} from 'react'


//props coordinates where component goes

export default class Note extends Component{
  constructor(props){
    super(props)
    this.state={
      value:'',
      dragging:false,
      pos: this.props.initialPos,
      posRel:null
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleMouseDown=this.handleMouseDown.bind(this)
    this.handleMouseUp=this.handleMouseUp.bind(this)
    this.handleMouseMove=this.handleMouseMove.bind(this)
    
  }

  handleChange=(e)=>{
    this.setState({
      value:e.target.value
    })
  }


  handleMouseDown=(e)=>{
    if(e.button!=0){
      return
    }
    console.log("button down");
    var relX= e.nativeEvent.offsetX;
    var relY=e.nativeEvent.offsetY;
    this.setState({
      posRel:{
        x: relX,
        y: relY
      },
      dragging:true
    })
}







handleMouseMove=(e)=>{
  if(this.state.dragging){
    console.log("we're moving"+ this.state.posRel.x)
    this.setState({
      pos:{
        x: e.pageX-this.state.posRel.x,
        y: e.pageY-this.state.posRel.y
      }
    })
  }
}

handleMouseUp=(e)=>{
  console.log("Mouse up");
  console.log("Position on note: "+ this.state.posRel.x + " "+ this.state.posRel.y);
  this.setState({
    dragging:false
  })
    e.preventDefault()
    e.stopPropagation()
}


  render(){
    const yPos= this.state.pos.y+"px"
    const xPos=this.state.pos.x+'px'
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
      <div style={styleContainer}
      onClick={this.handleClick}
      onMouseDown={this.handleMouseDown}
      onMouseMove={this.handleMouseMove}
      onMouseUp={this.handleMouseUp}>
        <textarea
          value={this.state.value}
          onChange={this.handleChange}
          style={styleText}
          className="note"/>
      </div>
    )
  }

}
