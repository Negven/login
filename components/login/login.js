import React, { Component } from 'react';
import Clasess from './login.module.css';

import Test from './input-logo.js';

export default class Login extends Component {

    state = {
        stateLogin: 'teacher-demo4',
        statePassword: 'teacher-demo4',
        stateAPI: {},
    };


    changeStateAuth = (data) => {
        this.setState({stateAPI: data});
    };

    render() {

        return (
/*
        <div id="logoPage" className="logoPaige">
            <div className="mainPaige__row">
                <form id="loginForm" className="form__logo">
                    <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputLogin1" placeholder={this.props.stateTest} />
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Пароль" />
                    </div>
                    <div id="btn__logo" className="btn btn-success" onClick={ () => {
                        console.log(11);
                        this.updateAPI();
                    }}>Вхід</div>
                </form>
            </div>
        </div>
*/        
            <div id={Clasess.logoPage} className={Clasess.logoPaige}>
                <div className={Clasess.loginP}>
                    <Test stateJournal={this.props.changeStateJournal} stateLogin={this.state.stateLogin} statePassword={this.state.statePassword} stateAPI={this.state.stateAPI} updateDataAPI={this.props.updateDataAPI} updateErrorChek={this.props.updateErrorChek}/>
                </div>
            </div>
       
        );

    };

}