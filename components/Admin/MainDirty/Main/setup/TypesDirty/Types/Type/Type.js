import React from 'react'
import Classes from'./Type.module.css'
import book from './book.svg'
import rewrite from './rewrite.svg'

class Type extends React.Component {
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
    
    enterTypeLine = (id) => {
        // document.getElementById(id).classList.value = Classes.enterTypeLine
    }

    leaveTypeLine = (id) => {
        // document.getElementById(id).classList.value = Classes.typeLine
    }





    

    render(){

        // debugger
        return(
            <div className={Classes.typeLine} onMouseLeave={() => {this.leaveTypeLine("lineType" + this.props.i)}} id={"lineType" + this.props.i} onMouseEnter={() => {this.enterTypeLine("lineTypey" + this.props.i)}}> 
                <div className={Classes.number}>{this.props.i}</div>
                <div className={Classes.id}>{this.props.state.id}</div>
                <div className={Classes.name}>{this.props.state.name}</div>
                <div className={Classes.teachBtn}>{this.props.state.shortName}</div>
                {this.state.popUp}
            </div>
        )
    }
}

export default Type