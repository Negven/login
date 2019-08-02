import React from 'react'
import Lesson from './Lesson/Lesson'
import Classes from './Lessons.module.css'
import plus from './plus.svg'

class Lessons extends React.Component {
    constructor(props){
        super(props)
    }



    render(){


        return(
            <>
                <div className={Classes.addTeach}>
                    <div>Учні</div>
                </div>
                <div className={Classes.LessonLine}>
                    <div className={Classes.numberTitle}>№</div>
                </div>
                {this.props.state.map((e, i) => {
                    return(
                        <Lesson 
                            state={e}
                            i={i}
                            stateFunc = {this.props.stateFunc}
                            classes = {this.props.classes}
                            lessons = {this.props.state}
                            profession={this.props.profession} 
                            key={"lesson" + i}
                            />
                    )
                })}
            </>
        )
    }
}

export default Lessons