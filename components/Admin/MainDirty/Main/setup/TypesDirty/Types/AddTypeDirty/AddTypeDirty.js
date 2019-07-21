import React from 'react'
import AddType from './AddType/AddType'

class AddTypeDirty extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        type: {
            id: 300,
            name: {
                firstName: '',
                secondName: '',
                lastName: '',
            },
            mail: '', 
            phones: '',
            profession: 0,
            classes: [ ],
            login: '',
            password: '',
            accessChats: '',
            accessPerChat: false,
        }
    }

    stateFunc = {
        changeSecondName: (value) => {
            this.state.type.name.secondName = value;
            this.forceUpdate()
        },
        changeFirstName: (value) => {
            this.state.type.name.firstName = value;
            this.forceUpdate()
        },
        changeLastName: (value) => {
            this.state.type.name.lastName = value;
            this.forceUpdate()
        },
        changeLogin: (value) => {
            this.state.type.login = value;
            this.forceUpdate()
        },
        changePassword: (value) => {
            this.state.type.password = value;
            this.forceUpdate()
        },
        changeMail: (value) => {
            this.state.type.mail = value;
            this.forceUpdate()
        },
        changePhones: (value) => {
            this.state.type.phones = value;
            this.forceUpdate()
        },
        changeProfession: (value) => {
            this.state.type.profession = value;
            this.forceUpdate()
        },
        changeAccessChats: (value) => {
            this.state.type.accessChats = value;
            this.forceUpdate()
        },
        changeAccessPerChat: () => {
            this.state.type.accessPerChat = !this.state.type.accessPerChat
            this.forceUpdate()
        }
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