import React from 'react'
import Classes from'./Schoolboy.module.css'
import book from './book.svg'
import rewrite from './rewrite.svg'

class Schoolboy extends React.Component {
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
    
    enterSchoolboyLine = (id) => {
        document.getElementById(id).classList.value = Classes.enterSchoolboyLine
    }

    leaveSchoolboyLine = (id) => {
        document.getElementById(id).classList.value = Classes.schoolboyLine
    }




    

    render(){

        return(
            <div className={Classes.schoolboyLine} onMouseLeave={() => {this.leaveSchoolboyLine("lineSchoolboy" + this.props.i)}} id={"lineSchoolboy" + this.props.i} onMouseEnter={() => {this.enterSchoolboyLine("lineSchoolboy" + this.props.i)}}> 
                <div className={Classes.number}>{this.props.i}</div>
                <div className={Classes.id}>{this.props.state.id}</div>
                <div className={Classes.name}>{this.props.state.name.secondName} {this.props.state.name.firstName} {this.props.state.name.lastName}</div>
                {this.state.popUp}
            </div>
        )
    }
}

export default Schoolboy