import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Classes from './Lesson.module.css';
import TextField from '@material-ui/core/TextField';
import save from './save.svg'
import { OutlinedInput } from '@material-ui/core';

export default function Plan(props){

    function handleChangeNumber(event) {
        setValues(oldValues => ({
          ...oldValues,
          [event.target.name]: event.target.value,
        }));
        props.stateFunc.changeNumber(event.target.value, props.idDay, props.idLesson)
    }

    return(
        <>
            <div>План занять</div>
            <div>Обрати вчителя</div>
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
        </>
    )
}