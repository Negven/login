import React from 'react'
import Lessons from './Lessons/Lessons'

class LessonsDirty extends React.Component {
    constructor(props){
        super(props)
    }

    stateAdd = null

    openAddLesson = () => {
        this.stateAdd=1
        this.forceUpdate()
    }

    closeAddLesson = () => {
        this.stateAdd=0
        this.forceUpdate()
    }
    

    render(){
        return(
            <div> <Lessons
                    stateFunc={this.props.stateFunc}
                    profession={this.props.profession} 
                    classes={this.props.classes} 
                    stateAdd={this.stateAdd}
                    closeDelete={this.props.closeDelete}
                    openDelete={this.props.openDelete}
                    openAddLesson={this.openAddLesson}
                    state={this.props.state}
                    lesson={this.props.lesson}
                    stateDelete={this.props.stateDelete}
                    openAdd={this.props.openAdd}
                    closeAddLesson={this.closeAddLesson}/>
            </div>
        )
    }
}

export default LessonsDirty