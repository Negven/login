import React from 'react'
import Menu from './Menu/Menu';

class MenuDirty extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="menu">
                <Menu stateFunc={this.props.stateFunc}/>
            </div>
        )
    }

}

export default MenuDirty