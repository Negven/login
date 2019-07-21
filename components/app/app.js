import React, { Component, Fragment } from 'react';
import Classes from './app.module.css';

import Logo from '../logo/logo.js';
import Login from '../login/login.js';
import ErrLogin from '../login/errorLogin/errorLogin.js';
import Admin from '../Admin/Admin';

import { runInThisContext } from 'vm';

export default class App extends Component {
  
  state = {
    stateMain: 0,
    stateToken: 0,
    stateTokenRefresh: 0,
    stateAPI: {},
    stateError: 0,
  };

  updateDataAPI = ( value ) => {
    this.setState( { stateAPI: value } );
  };

  updateErrorChek = ( value ) => {
    this.setState( { stateError: value } );
  };
  
  changeStateLogin = () => {
    this.setState( { stateMain: 1 } );
  };

  changeStateJournal = () => {
    this.setState( { stateMain: 2 } );
  };

  changeStateErrorConnecting = () => {
    this.setState( { stateMain: 0 } );
    this.setState( { stateError: 1 } );
  }

  render() {

    let startState = null;
    let connectState = null;
    const { stateMain, stateMenu, stateError, stateReplacement } = this.state;

    if( stateMain === 0 ) {

      startState = <a to="/login"><Logo
        changeStateLogin = { this.changeStateLogin }
        stateTest = { this.state.stateMain } /></a>

    } else if( stateMain === 1 ) {

      startState = <Login
          changeStateJournal = { this.changeStateJournal }
          changeStateMainJournal = { this.changeStateMainJournal }
          stateTest = { this.state.stateMain }
          updateDataAPI = { this.updateDataAPI }
          updateErrorChek = { this.updateErrorChek }
          stateError = { this.state.stateError }/>
      if( stateError === 1 ){
        connectState = <ErrLogin
          textAlert = "Відсутній зв'язок або сервер тимчасово недоступен."
          textAlertTwo = "Спробуйте під'єднатися через деякий час"
          updateErrorChek = { this.updateErrorChek } />
      } else if( stateError === 2 ) {
        connectState = <ErrLogin
          textAlert = "Невірний логін або пароль"
          textAlertTwo = ""
          updateErrorChek = { this.updateErrorChek } />
      }

    } else if( stateMain === 2 ) {

      startState = <Admin changeStateLogin={this.changeStateLogin}/>

    }

    return (

      <Fragment>

        { startState }
        { connectState }

      </Fragment>

    );

  }

}