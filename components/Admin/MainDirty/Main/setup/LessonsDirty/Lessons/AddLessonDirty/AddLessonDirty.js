import React from 'react'
import AddLesson from './AddLesson/AddLesson'

class AddLessonDirty extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        lesson: {
            id: 300,
            name: '',
        }
    }

    stateFunc = {
        changeName: (value) => {
            this.state.lesson.name = value;
            this.forceUpdate()
        },
        changeShortName: (value) => {
            this.state.lesson.shortName = value;
            this.forceUpdate()
        },
    }


    render(){
        return(
            <div>
                <AddLesson
                            closeAdd={this.props.closeAdd} 
                            profession={this.props.profession} 
                            addLesson={this.props.addLesson} 
                            stateFunc={this.stateFunc} 
                            lesson={this.state.lesson}/>
            </div>
        )
    }
}

export default AddLessonDirty;