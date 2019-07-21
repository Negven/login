import React from 'react';
//import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import ServiceAPI from '../../services/serviceAPI.js';

let apiService = new ServiceAPI();
let serverStatus = 0;

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

let textErr = "";

function updateAPI(_login, _password, _props){

  let body = JSON.stringify( {
      'phone':  _login, //'7977',
      'password': _password, //'admin',
  } );

      //apiService.postLoginT( 'https://eschool-ua.com/logiin', body )
    apiService.postLoginT( 'https://eschool-ua.com/login', body )
    .then(
      ( body ) => {

        console.log( body );
        //serverStatus = body;
        //body
      },
      ( err ) => {

        //console.error( "1", err );
        if(err.type === "error") {
          //console.log(err);
          //console.log("Неверный путь или доступ к серверу отсутствует");
          //1
        } else if (err === 404 || err === 403) {
          //console.log(err);
          //console.log("Неверный логин или пароль");
          //2
        }
        
      }
    );
}

function OutlinedTextFields(props) {

  const classes = useStyles();
  const [values, setValues] = React.useState({
    login: '',
    password: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  let body = JSON.stringify( {
    'phone':  values.login, //'7977',
    'password': values.password, //'admin',
  } );

  if( props.stateError === 2 ){
    textErr = "<div>Неверный логин или пароль</div>";
  } else {
    textErr = "";
  }

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-name"
        label="Login"
        name="login"
        className={classes.textField}
        value={values.login}
        onChange={handleChange('login')}
        margin="normal"
        variant="outlined"
        placeholder="Login"
      />

      <TextField
        id="outlined-password-input"
        label="Password"
        name="password"
        className={classes.textField}
        value={values.password}
        onChange={handleChange('password')}
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
        placeholder="Password"
      />
      { textErr }
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={
          () => {

            apiService.postLoginT( 'https://eschool-ua.com/login', body )
            .then(
              ( body ) => {
                 props.stateJournal();
              },
              ( err ) => {
                if(err.type === "error") {
                  props.updateErrorChek(1);
                } else if (err === 404 || err === 403) {
                  props.updateErrorChek(2);
                }
                
              }
            );
            
            props.updateDataAPI({'status': serverStatus});
          }
        }>
        Ввійти
      </Button>
    </form>
  );
}

export default OutlinedTextFields;