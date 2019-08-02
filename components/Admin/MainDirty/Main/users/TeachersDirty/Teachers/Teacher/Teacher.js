import React from 'react'
import Classes from'./Teacher.module.css'
import book from './book.svg'
import rewrite from './rewrite.svg'
import Lessons from './Lessons/Lessons';

class Teacher extends React.Component {
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
    
    enterTeacherLine = (id) => {
        document.getElementById(id).classList.value = Classes.enterTeacherLine
    }

    leaveTeacherLine = (id) => {
        document.getElementById(id).classList.value = Classes.teacherLine
    }



  



    render(){

        return(
            <div className={Classes.teacherLine} onMouseLeave={() => {this.leaveTeacherLine("lineTeacher" + this.props.i)}} id={"lineTeacher" + this.props.i} onMouseEnter={() => {this.enterTeacherLine("lineTeacher" + this.props.i)}}> 
                <div className={Classes.number}>{this.props.i}</div>
                <div className={Classes.id}>{this.props.state.id}</div>
                <div className={Classes.name}>{this.props.state.name.secondName} {this.props.state.name.firstName} {this.props.state.name.lastName}</div>
                <div className={Classes.mail}>{this.props.state.mail}</div>
                <div className={Classes.numberBlock}>{this.props.state.phones}</div>
                <div className={Classes.profession}>{this.props.profession[this.props.state.profession].name}</div>
                {this.state.popUp}
            </div>
        )
    }
}

export default Teacher