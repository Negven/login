import React from 'react'
import Classes from'./Lesson.module.css'
import book from './book.svg'
import del from './delete.svg'
import rewrite from './rewrite.svg'
import EditDirty from './EditDirty/EditDirty';

class Lesson extends React.Component {
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
    
    enterLessonLine = (id) => {
        document.getElementById(id).classList.value = Classes.enterLessonLine
    }

    leaveLessonLine = (id) => {
        document.getElementById(id).classList.value = Classes.lessonLine
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
                                    stateFunc={this.props.stateFunc.stateFuncChangLesson} 
                                    lesson={this.props.lessons[this.props.i]} 
                                    closeDelete={this.closeEditState}
                                    id={this.props.i}/>
        } else this.state.popUp = null;
        // debugger
        return(
            <div className={Classes.lessonLine} onMouseLeave={() => {this.leaveLessonLine("lineLesson" + this.props.i)}} id={"lineLesson" + this.props.i} onMouseEnter={() => {this.enterLessonLine("lineLesson" + this.props.i)}}> 
                <div className={Classes.id}>{this.props.state.id}</div>
                <div className={Classes.name}>{this.props.state.name}</div>
                <div className={Classes.teachBtn} onClick={this.openEditState}><img src={rewrite}/></div>
                <div className={Classes.teachBtn} onClick={() => {console.log(this.props.i); this.props.openDelete(this.props.i)}}><img src={del}/></div>
                {this.state.popUp}
            </div>
        )
    }
}

export default Lesson