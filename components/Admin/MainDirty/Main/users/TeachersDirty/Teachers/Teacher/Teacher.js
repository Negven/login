import React from 'react'
import Classes from'./Teacher.module.css'
import book from './book.svg'
import del from './delete.svg'
import rewrite from './rewrite.svg'
import Lessons from './Lessons/Lessons';
import EditDirty from './EditDirty/EditDirty';

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



    openEditState = () => {
        this.statePopUp = 3
        this.forceUpdate()
    }
    closeEditState = () => {
        this.statePopUp = 0
        this.forceUpdate()
    }



    render(){
        if (this.statePopUp === 3){
            this.state.popUp = < EditDirty 
                                    stateFunc={this.props.stateFunc.stateFuncChangTeacher} 
                                    teacher={this.props.teachers[this.props.i]} 
                                    profession={this.props.profession} 
                                    closeDelete={this.props.stateFunc.closeDelete}
                                    closeEditState={this.closeEditState}
                                    id={this.props.i}/>
        } else this.state.popUp = null;
        return(
            <div className={Classes.teacherLine} onMouseLeave={() => {this.leaveTeacherLine("lineTeacher" + this.props.i)}} id={"lineTeacher" + this.props.i} onMouseEnter={() => {this.enterTeacherLine("lineTeacher" + this.props.i)}}> 
                <div className={Classes.number}>{this.props.i}</div>
                <div className={Classes.id}>{this.props.state.id}</div>
                <div className={Classes.name}>{this.props.state.name.secondName} {this.props.state.name.firstName} {this.props.state.name.lastName}</div>
                <div className={Classes.mail}>{this.props.state.mail}</div>
                <div className={Classes.numberBlock}>{this.props.state.phones}</div>
                <div className={Classes.profession}>{this.props.profession[this.props.state.profession].name}</div>
                <div className={Classes.teachBtn} onClick={this.openEditState}><img src={rewrite}/></div>
                <div className={Classes.teachBtn} onClick={() => {console.log(this.props.i); this.props.openAdd(this.props.i)}}><img src={book}/></div>
                <div className={Classes.teachBtn} onClick={() => {console.log(this.props.i); this.props.openDelete(this.props.i)}}><img src={del}/></div>
                {this.state.popUp}
            </div>
        )
    }
}

export default Teacher