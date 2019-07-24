import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Classes from './Lesson.module.css';
import TextField from '@material-ui/core/TextField';
import save from './save.svg'
import deleteSvg from './delete.svg'
import { OutlinedInput } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


export default function Lesson(props){

    const classes = useStyles();
    const [values, setValues] = React.useState({
      age: '',
      name: 'hai',
    });

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
  
    function handleChangeDuration(event) {
      setValues(oldValues => ({
        ...oldValues,
        [event.target.name]: event.target.value,
      }));
      props.stateFunc.changeDuration(event.target.value, props.idDay, props.idLesson)
    }

    function handleChangeNumber(event) {
        setValues(oldValues => ({
          ...oldValues,
          [event.target.name]: event.target.value,
        }));
        props.stateFunc.changeNumber(event.target.value, props.idDay, props.idLesson)
    }
    
    function handleChangeTime(event) {
        console.log(event.target)
        setValues(oldValues => ({
          ...oldValues,
        //   [event.target.name]: event.target.value,
        }));
        props.stateFunc.changeTime(event.target.value, props.idDay, props.idLesson)
    }

    function handleChangeLesson(event) {
      setValues(oldValues => ({
        ...oldValues,
        [event.target.name]: event.target.value,
      }));
      props.stateFunc.changeLesson(event.target.value, props.idDay, props.idLesson)
    }
    function handleChangeTeacher(event) {
      setValues(oldValues => ({
        ...oldValues,
        [event.target.name]: event.target.value,
      }));
      props.stateFunc.changeTeacher(event.target.value, props.idDay, props.idLesson)
    }    
    function handleChangeGroup(event) {
      setValues(oldValues => ({
        ...oldValues,
        [event.target.name]: event.target.value,
      }));
      props.stateFunc.changeGroup(event.target.value, props.idDay, props.idLesson)
    }  
    
    return(
        <>
            <div className={Classes.line}>
                <Select
                    value={props.lesson.number}
                    onChange={handleChangeNumber}
                    className={Classes.number}                    
                    input ={ <OutlinedInput />}
                    inputProps={{
                        name: 'age',
                        id: 'age-simple',
                    }}
                >
                    {props.allLessons.map((e, i)=>{
                        return (
                            <MenuItem className={Classes.numberItem} key={"number" + i} value={i + 1}>{i + 1}</MenuItem>
                    )})}
                </Select>
                <div className={Classes.time}>
                <TextField
                    id="time"
                    variant="outlined"
                    type="time"
                    value={props.lesson.time}
                    onChange={handleChangeTime}
                    
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 60,
                    }}
                />
                </div>
                <Select
                    value={props.lesson.duration}
                    onChange={handleChangeDuration}
                    input ={ <OutlinedInput />}
                    className={Classes.durations}
                    inputProps={{
                        name: 'age',
                        id: 'age-simple',
                    }}
                >
                    {props.durations.map((e, i)=>{
                        return (
                            <MenuItem key={"duration" + i} value={e}>{e + ' хв'}</MenuItem>
                    )})}
                </Select>
                <Select
                    value={props.lesson.lessonId}
                    onChange={handleChangeLesson}
                    className={Classes.lessons}
                    input ={ <OutlinedInput />}
                    inputProps={{
                        name: 'age',
                        id: 'age-simple',
                    }}
                >
                    {props.lessons.map((e, i)=>{
                        return (
                            <MenuItem  key={"lesson" + i} value={e.id}>{e.name}</MenuItem>
                    )})}
                </Select>
                <Select
                    value={props.lesson.teacher}
                    onChange={handleChangeTeacher}
                    input ={ <OutlinedInput />}
                    className={Classes.teacher}
                    inputProps={{
                        name: 'age',
                        id: 'age-simple',
                    }}
                >
                    {props.teachers.map((e, i)=>{
                        return (
                            <MenuItem key={"teacher" + i} value={i}>{e.name.secondName + ' ' + e.name.firstName + ' ' + e.name.lastName}</MenuItem>
                    )})}
                </Select>
                <Select
                    value={props.lesson.group}
                    onChange={handleChangeGroup}
                    className={Classes.group}
                    input ={ <OutlinedInput />}
                    inputProps={{
                        name: 'age',
                        id: 'age-simple',
                    }}
                >
                    {props.groups[props.schedule[props.idDay][props.idLesson].lessonId].map((e, i)=>{
                        return (
                            <MenuItem key={"group" + i} value={e.id}>{e.name}</MenuItem>
                    )})}
                </Select>
                <div className={Classes.buttons} variant="outlined" >
                  <div className={Classes.saveBtn}><img src={save} onClick={() => {props.stateFunc.saveLesson(props.idDay, props.idLesson)}}/></div>
                  <div className={Classes.closeBtn}><img src={deleteSvg} onClick={() => {props.stateFunc.deleteLesson(props.idDay, props.idLesson)}} /></div>
                </div>
            </div>
        </>
    )
}












