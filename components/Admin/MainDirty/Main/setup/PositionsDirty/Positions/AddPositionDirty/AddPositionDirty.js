import React from 'react'
import AddPosition from './AddPosition/AddPosition'

class AddPositionDirty extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        position: {
            id: 300,
            name: '',
        }
    }

    stateFunc = {
        changeName: (value) => {
            this.state.position.name = value;
            this.forceUpdate()
        },
        changeShortName: (value) => {
            this.state.position.shortName = value;
            this.forceUpdate()
        },
    }

    render(){
        return(
            <div>
                <AddPosition
                            closeAdd={this.props.closeAdd} 
                            profession={this.props.profession} 
                            addPosition={this.props.addPosition} 
                            stateFunc={this.stateFunc} 
                            position={this.state.position}/>
            </div>
        )
    }
}

export default AddPositionDirty;