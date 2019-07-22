import React from 'react'
import AddSchoolboy from './AddSchoolboy/AddSchoolboy'

class AddSchoolboyDirty extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        schoolboy: {
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
            this.state.schoolboy.name.secondName = value;
            this.forceUpdate()
        },
        changeFirstName: (value) => {
            this.state.schoolboy.name.firstName = value;
            this.forceUpdate()
        },
        changeLastName: (value) => {
            this.state.schoolboy.name.lastName = value;
            this.forceUpdate()
        },
        changeLogin: (value) => {
            this.state.schoolboy.login = value;
            this.forceUpdate()
        },
        changePassword: (value) => {
            this.state.schoolboy.password = value;
            this.forceUpdate()
        },
        changeMail: (value) => {
            this.state.schoolboy.mail = value;
            this.forceUpdate()
        },
        changePhones: (value) => {
            this.state.schoolboy.phones = value;
            this.forceUpdate()
        },
        changeProfession: (value) => {
            this.state.schoolboy.profession = value;
            this.forceUpdate()
        },
        changeAccessChats: (value) => {
            this.state.schoolboy.accessChats = value;
            this.forceUpdate()
        },
        changeAccessPerChat: () => {
            this.state.schoolboy.accessPerChat = !this.state.schoolboy.accessPerChat
            this.forceUpdate()
        }
    }

    render(){
        return(
            <div>
                <AddSchoolboy
                            closeAdd={this.props.closeAdd} 
                            profession={this.props.profession} 
                            addSchoolboy={this.props.addSchoolboy} 
                            stateFunc={this.stateFunc} 
                            schoolboy={this.state.schoolboy}/>
            </div>
        )
    }
}

export default AddSchoolboyDirty;