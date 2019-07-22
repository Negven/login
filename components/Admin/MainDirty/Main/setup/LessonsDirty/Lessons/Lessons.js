import React from 'react'
import Lesson from './Lesson/Lesson'
import Classes from './Lessons.module.css'
import plus from './plus.svg'
import AddLessonDirty from './AddLessonDirty/AddLessonDirty';

class Lessons extends React.Component {
    constructor(props){
        super(props)
    }


    stateAdd=null;

    render(){
        if(this.props.stateAdd === 1){
            this.stateAdd = <AddLessonDirty 
                                        profession={this.props.profession}
                                        closeAdd={this.props.closeAddLesson}
                                        addLesson={this.props.stateFunc.stateFuncChangLesson.addLesson}/>
        } else this.stateAdd = null

        return(
            <>
                {this.stateAdd}
                <div className={Classes.addTeach}>
                    <div>Учні</div>
                    <div className={Classes.addBtn} onClick={this.props.openAddLesson}><img src={plus}/></div>
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
                            closeDelete={this.props.closeDelete}
                            openDelete={this.props.openDelete}
                            openAdd={this.props.openAdd}
                            stateDelete={this.props.stateDelete}
                            />
                    )
                })}
            </>
        )
    }
}

export default Lessons