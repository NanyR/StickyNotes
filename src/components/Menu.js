import React,{Component} from 'react'


export default class Menu extends Component {

  constructor(props){
    super(props)
  }

  render(){
    const styleMenu={

    }
    return(
        <ul>
          <a><li>Create New Board</li></a>
          <a><li>Boards</li></a>
          <a><li>Profile</li></a>
        </ul>

    )
  }


}
