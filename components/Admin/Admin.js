import React from 'react'
import Toolbar from './Toolbar/Toolbar';
import MenuDirty from './MenuDirty/MenuDirty';
import MainDirty from './MainDirty/MainDirty'
import Classes from './Admin.module.css';

class Admin extends React.Component {
    constructor(props){
        super(props)
    }

                
    

    render(){
        return(
            <div className={Classes.back}>
                <MenuDirty stateFunc={this.props.state.stateFuncMenu}/>
                <MainDirty stateFunc={this.props.state.stateFuncMain} stateMain={this.props.state.stateMainAdmin} state={this.props.state.state}/>

                <Toolbar  changeStateLogin={this.props.changeStateLogin}/>

            </div>
        )
    }
}


export default Admin