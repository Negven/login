import React from 'react'
import Classes from './Lessons.module.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import del from './delete.svg'


const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
        width: '300px'
    },
  }));


  export default function Lessons (props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
    });
    const [labelWidth] = React.useState(0);
    


    
    const handleChangeLesson = name => event => {
      setState({
        ...state,
        [name]: event.target.value,
      });
      props.stateFunc.selectLesson(event.target.value, props.id)
    };



    var value 

    return(
        <div>
            <div className={Classes.backSide}>
            </div>
            <div className={Classes.lessonsBlock}>
                <div className={Classes.lessonTitle}>Додати предмет до вчителя</div>
                <div className={Classes.selectLesson}>
                    <Select
                        native
                        value={value}
                        className={classes.textField}
                        onChange={handleChangeLesson('value')}
                        input={
                            <OutlinedInput name="age" labelWidth={labelWidth} id="outlined-age-native-simple" />
                        }
                    >
                        {props.lessons.map(e =>{
                            return(
                              <option key={'profLess' + e.id} value={e.id}>{e.name}</option>
                            )
                        })}
                    </Select>
                </div>
                <div className={Classes.lessonList}>
                        {props.teacher.lessons.map((e, i) => {
                            return(
                                    <div className={Classes.lessonLine}  key={"lesson" + i}>
                                        <div className={Classes.lesson}>{e}</div>
                                        <div className={Classes.deleteBtn} onClick={() => {props.deleteLesson(props.id, i)}}><img src={del} /></div>
                                    </div>
                                )
                        })}
                </div>
                <div className={Classes.closeLesson} onClick={props.closeLessonState}><div className={Classes.textClose}>Закрити</div></div>
            </div>
        </div>
    )
    
}
