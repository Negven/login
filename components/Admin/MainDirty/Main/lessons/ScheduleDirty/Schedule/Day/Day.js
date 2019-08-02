import React from 'react'
import Lesson from './Lesson/Lesson';
import Classes from './Day.module.css';


export default function Day (props){

    return (
        <>
            <div className={Classes.line}>
                <div className={Classes.day}>{props.days[props.idDay]}</div>
            </div>
            {props.state.map((lesson, idLesson) => {
                return (
                        <Lesson 
                            key={"lesson" + idLesson}
                            lesson={lesson} 
                            lessons={props.lessons} 
                            allLessons={props.state} 
                            idLesson={idLesson} 
                            durations={props.durations}
                            schedule={props.schedule}
                            teachers={props.teachers}
                            idDay={props.idDay} 
                            groups={props.groups}
                            stateFunc={props.stateFunc} />      
            )})}
        </>
    )
}