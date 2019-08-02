import React from 'react'
import Lessons from './Lessons/Lessons'

class LessonsDirty extends React.Component {
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div> <Lessons
                    stateFunc={this.props.stateFunc}
                    profession={this.props.profession} 
                    classes={this.props.classes} 
                    state={this.props.state}
                    lesson={this.props.lesson}
                 />
            </div>
        )
    }
}

export default LessonsDirty