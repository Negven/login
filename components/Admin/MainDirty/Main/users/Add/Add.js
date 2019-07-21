import React from 'react'
import Classes from './Add.module.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import del from './delete.svg'
import plus from './plus.svg'


const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
        width: '300px'
    },
  }));


  export default function Add (props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
    });
    const [labelWidth] = React.useState(0);
    


    
    const handleChangeLesson = name => event => {
      setState({
        ...state,
        [name]: event.target.value,
      });
      props.selectLesson(event.target.value, props.id)
    };

    const handleChangeChildren = name => event => {
        setState({
          ...state,
          [name]: event.target.value,
        });
        state.value = event.target.value
        console.log(state.value)
      };

    let block=null

    if(props.stateMain === 1){
        block = 
            <div>
                <div className={Classes.lessonTitle}>Додати предмет до вчителя</div> 
                <div className={Classes.selectLesson}>
                    <Select
                        native
                        value={props.value}
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
            </div>
    } else if(props.stateMain === 2) {
        block = 
        <div>
            <div className={Classes.lessonTitle}>Прив’язати учня до батьків</div>
            <div className={Classes.selectChildren}>
                <TextField
                    value={state.value}
                    className={classes.textField}
                    onChange={handleChangeChildren('value')}
                >
                </TextField>
                <div className={Classes.plusBtn} onClick={() => {console.log(state.value); props.selectChildren(state.value, props.id) }} >  <img src={plus}/> </div>
            </div>
        </div>
    }

    return(
        <div>
            <div className={Classes.backSide}>
            </div>
            <div className={Classes.lessonsBlock}>
                {block}
                <div className={Classes.lessonList}>
                        { props.list.map((e, i) => {
                            return(
                                    <div className={Classes.lessonLine}  key={"lesson" + i}>
                                        <div className={Classes.lesson}>{e}</div>
                                        <div 
                                            className={Classes.deleteBtn} 
                                            onClick={() => {
                                                if(props.stateMain === 1){
                                                    props.deleteLesson(props.id, i)
                                                } else if (props.stateMain === 2){
                                                    props.deleteChildren(props.id, i)
                                                }
                                            }}
                                                ><img src={del} />
                                            </div>
                                    </div>
                                )
                        })}
                </div>
                <div className={Classes.closeLesson} onClick={props.closeDelete}><div className={Classes.textClose}>Закрити</div></div>
            </div>
        </div>
    )
    
}
