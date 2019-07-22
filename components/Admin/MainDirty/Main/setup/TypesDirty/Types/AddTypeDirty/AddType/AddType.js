import React from 'react'
import Classes from './AddType.module.css'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({

    textField: {
         width: '100%',
        fontFamily: "apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        color: '#545A89',


    },


    Button: {
      width: '100%',
      height: '50px',
      marginTop: '15px',
      fontFamily: "apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",

  }

  }));

export default function AddType(props) {

    const classes = useStyles();
    const [values, setValues] = React.useState({
    });
    const [labelWidth] = React.useState(0);
    const handleChangeName = name => event => {
        setValues({ ...values, [name]: event.target.value });
        props.stateFunc.changeName(event.target.value)
      };
      const handleChangeShortName = name => event => {
        setValues({ ...values, [name]: event.target.value });
        props.stateFunc.changeShortName(event.target.value)
      };



      


    return(
        <div>
            <div className={Classes.backSide}></div>
            <div className={Classes.popUpEdit}>
                <div className={Classes.blockTeach1}>
                    <div>
                        <div>Назва</div>
                    </div>
                    <div>
                        <TextField
                            id="outlined-name"
                            className={classes.textField}
                            value={props.type.name}
                            onChange={handleChangeName('name')}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <div>Коротка назва</div>
                    </div>
                    <div>
                        <TextField
                            id="outlined-name"
                            className={classes.textField}
                            value={props.type.name.firstName}
                            onChange={handleChangeShortName('name')}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>   
                    <div className={Classes.teachLineBtn}>
                        <div className={Classes.saveBtnTech} onClick={() => {props.addType(props.type); props.closeAdd()}}><div className={Classes.textBtn}>Зберегти</div></div>
                        <div className={Classes.closeBtnTech} onClick={props.closeAdd}><div className={Classes.textBtn} onClick={props.closeDeleteState}>Закрити</div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
