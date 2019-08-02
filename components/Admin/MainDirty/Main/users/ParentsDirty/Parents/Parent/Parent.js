import React from 'react'
import Classes from'./Parent.module.css'
import book from './book.svg'
import rewrite from './rewrite.svg'

class Parent extends React.Component {
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
    
    enterParentLine = (id) => {
        document.getElementById(id).classList.value = Classes.enterParentLine
    }

    leaveParentLine = (id) => {
        document.getElementById(id).classList.value = Classes.parentLine
    }



  

    render(){

        return(
            <div 
                className={Classes.parentLine}
                onMouseLeave={() => {
                    this.leaveParentLine("lineParent" + this.props.i)}}
                id={"lineParent" + this.props.i} 
                onMouseEnter={() => {this.enterParentLine("lineParent" + this.props.i)}}
            > 
                <div className={Classes.number}>{this.props.i}</div>
                <div className={Classes.id}>{this.props.state.id}</div>
                <div className={Classes.name}>{this.props.state.name.secondName} {this.props.state.name.firstName} {this.props.state.name.lastName}</div>
                <div className={Classes.mail}>{this.props.state.mail}</div>
                <div className={Classes.numberBlock}>{this.props.state.phones}</div>
                {this.state.popUp}
            </div>
        )
    }
}

export default Parent