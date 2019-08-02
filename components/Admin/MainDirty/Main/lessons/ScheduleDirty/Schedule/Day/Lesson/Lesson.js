import React from 'react'
import Classes from './Lesson.module.css';


export default function Lesson(props){

    console.log(props.groups[props.lesson.lessonId])

    return(
        <>
            <div className={Classes.line}>
              <div className={Classes.number}> {props.lesson.number} </div>
              <div className={Classes.time}>{props.lesson.time}</div>
              <div className={Classes.durations}>{props.durations[props.lesson.duration]}</div>
              <div className={Classes.lessons}>{props.lessons[props.lesson.lessonId].name}</div>
              <div className={Classes.teacher}>{`${props.teachers[props.lesson.teacher].name.secondName} ${props.teachers[props.lesson.teacher].name.firstName} ${props.teachers[props.lesson.teacher].name.lastName}`}</div>
              <div className={Classes.group}>{props.groups[props.lesson.lessonId][props.lesson.group].name}</div>
            </div>
        </>
    )
}












