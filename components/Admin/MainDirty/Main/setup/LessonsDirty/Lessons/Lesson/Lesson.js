import React from 'react'
import Classes from'./Lesson.module.css'
import book from './book.svg'
import rewrite from './rewrite.svg'

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



    

    render(){

        // debugger
        return(
            <div className={Classes.lessonLine} onMouseLeave={() => {this.leaveLessonLine("lineLesson" + this.props.i)}} id={"lineLesson" + this.props.i} onMouseEnter={() => {this.enterLessonLine("lineLesson" + this.props.i)}}> 
                <div className={Classes.id}>{this.props.state.id}</div>
                <div className={Classes.name}>{this.props.state.name}</div>
                {this.state.popUp}
            </div>
        )
    }
}

export default Lesson