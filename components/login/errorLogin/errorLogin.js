import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import Clasess from './errorLogin.module.css';

export default class ErrorAlert extends Component {

  onUpdate = () => {
    this.props.updateErrorChek(0);
  }

  render() {

    return (

        <div className={Clasess.errorMain}>
            <div id={Clasess.logoPage} className={Clasess.logoPaige}>
                <div className={Clasess.loginP}>
                  <div className={Clasess.loginBase}>
                    {this.props.textAlert}<br /><br />
                    {this.props.textAlertTwo}
                  </div>
                  <Button
                    variant="contained"
                    color="primary"
                    className={Clasess.buttonTT}
                    onClick={ this.onUpdate }>
                    Ok
                  </Button>
                </div>
            </div>
        </div>

    );

  };

}