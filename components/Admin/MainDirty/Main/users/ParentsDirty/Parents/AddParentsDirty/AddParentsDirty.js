import React from 'react'
import AddParents from './AddParents/AddParents'

class AddParentDirty extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        parent: {
            id: 300,
            name: {
                firstName: '',
                secondName: '',
                lastName: '',
            },
            mail: '', 
            phones: '',
            login: '',
            password: '',
        }
    }

    stateFunc = {
        changeSecondName: (value) => {
            this.state.parent.name.secondName = value;
            this.forceUpdate()
        },
        changeFirstName: (value) => {
            this.state.parent.name.firstName = value;
            this.forceUpdate()
        },
        changeLastName: (value) => {
            this.state.parent.name.lastName = value;
            this.forceUpdate()
        },
        changeLogin: (value) => {
            this.state.parent.login = value;
            this.forceUpdate()
        },
        changePassword: (value) => {
            this.state.parent.password = value;
            this.forceUpdate()
        },
        changeMail: (value) => {
            this.state.parent.mail = value;
            this.forceUpdate()
        },
        changePhones: (value) => {
            this.state.parent.phones = value;
            this.forceUpdate()
        },
    }

    render(){
        return(
            <div><AddParents 
                            closeAddParent={this.props.closeAddParent} 
                            profession={this.props.profession} 
                            addParent={this.props.addParent} 
                            stateFunc={this.stateFunc} 
                            parent={this.state.parent}/>
            </div>
        )
    }
}

export default AddParentDirty;