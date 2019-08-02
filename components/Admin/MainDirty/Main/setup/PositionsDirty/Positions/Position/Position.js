import React from 'react'
import Classes from'./Position.module.css'
import book from './book.svg'
import rewrite from './rewrite.svg'

class Position extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        statePopUp: null,
        popUp: null,
    }

    phoneFunc = () => {
        if (this.props.state.phones[1] != undefined) {
            return (
                <div>, {this.props.state.phones[1]} </div>
            )
        }
    }
    
    enterPositionLine = (id) => {
        document.getElementById(id).classList.value = Classes.enterPositionLine
    }

    leavePositionLine = (id) => {
        document.getElementById(id).classList.value = Classes.positionLine
    }



  

    

    render(){

        return(
            <div className={Classes.positionLine} onMouseLeave={() => {this.leavePositionLine("linePosition" + this.props.i)}} id={"linePosition" + this.props.i} onMouseEnter={() => {this.enterPositionLine("linePosition" + this.props.i)}}> 
                <div className={Classes.number}>{this.props.i}</div>
                <div className={Classes.id}>{this.props.state.id}</div>
                <div className={Classes.name}>{this.props.state.name}</div>
                <div className={Classes.teachBtn}>{this.props.state.shortName}</div>
                {this.state.popUp}
            </div>
        )
    }
}

export default Position