import React from 'react'
import AddType from './AddType/AddType'

class AddTypeDirty extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        type: {
            id: 300,
            name: '',
            shortName: '',
        }
    }

    stateFunc = {
        changeName: (value) => {
            this.state.type.name = value;
            this.forceUpdate()
        },
        changeShortName: (value) => {
            this.state.type.shortName = value;
            this.forceUpdate()
        },
    }

    render(){
        return(
            <div>
                <AddType
                            closeAdd={this.props.closeAdd} 
                            profession={this.props.profession} 
                            addType={this.props.addType} 
                            stateFunc={this.stateFunc} 
                            type={this.state.type}/>
            </div>
        )
    }
}

export default AddTypeDirty;