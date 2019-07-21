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
    const handleChangeSecondName = name => event => {
        setValues({ ...values, [name]: event.target.value });
        props.stateFunc.changeSecondName(event.target.value)
      };
      const handleChangeFirstName = name => event => {
        setValues({ ...values, [name]: event.target.value });
        props.stateFunc.changeFirstName(event.target.value)
      };
      const handleChangeLastName = name => event => {
        setValues({ ...values, [name]: event.target.value });
        props.stateFunc.changeLastName(event.target.value)
      };
      const handleChangeLogin = name => event => {
        setValues({ ...values, [name]: event.target.value });
        props.stateFunc.changeLogin(event.target.value)
      };
      const handleChangePassword = name => event => {
        setValues({ ...values, [name]: event.target.value });
        props.stateFunc.changePassword(event.target.value)
      };



      


    return(
        <div>
            <div className={Classes.backSide}></div>
            <div className={Classes.popUpEdit}>
                <div className={Classes.blockTeach1}>
                    <div>
                        <div>Прізвище</div>
                    </div>
                    <div>
                        <TextField
                            id="outlined-name"
                            className={classes.textField}
                            value={props.type.name.secondName}
                            onChange={handleChangeSecondName('name')}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <div>Ім'я</div>
                    </div>
                    <div>
                        <TextField
                            id="outlined-name"
                            className={classes.textField}
                            value={props.type.name.firstName}
                            onChange={handleChangeFirstName('name')}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <div>По батькові</div>
                    </div>
                    <div>
                        <TextField
                            id="outlined-name"
                            className={classes.textField}
                            value={props.type.name.lastName}
                            onChange={handleChangeLastName('name')}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <div>Редагувати логінь</div>
                    </div>
                    <div>
                        <TextField
                            id="outlined-name"
                            className={classes.textField}
                            value={props.type.login}
                            onChange={handleChangeLogin('name')}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <div>Редагувати пароль</div>
                    </div>
                    <div>
                        <TextField
                            id="outlined-name"
                            className={classes.textField}
                            value={props.type.password}
                            onChange={handleChangePassword('name')}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                </div>
                <div className={Classes.blockTeach1}>
                    <div>
                        <div>Редагувати посаду</div>
                    </div>
                    <div>
                    <Select
                        native
                        value={props.type.profession}
                        className={classes.textField}
                        // onChange={handleChangeProfession('profession')}
                    >
                        {/* {props.profession.map(e =>{
                            return(
                              <option key={"prof" + e.id}  value={e.id}>{e}</option>
                            )
                        })} */}
                     </Select>
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
