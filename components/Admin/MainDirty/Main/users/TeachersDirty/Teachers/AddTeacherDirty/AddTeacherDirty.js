import React from 'react'
import AddTeacher from './AddTeacher/AddTeacher'

class AddTeacherDirty extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        teacher: {
            id: 300,
            name: {
                firstName: '',
                secondName: '',
                lastName: '',
            },
            mail: '', 
            phones: '',
            profession: 0,
            lessons: [ ],
            login: '',
            password: '',
            accessChats: '',
            accessPerChat: false,
        }
    }

    stateFunc = {
        changeSecondName: (value) => {
            this.state.teacher.name.secondName = value;
            this.forceUpdate()
        },
        changeFirstName: (value) => {
            this.state.teacher.name.firstName = value;
            this.forceUpdate()
        },
        changeLastName: (value) => {
            this.state.teacher.name.lastName = value;
            this.forceUpdate()
        },
        changeLogin: (value) => {
            this.state.teacher.login = value;
            this.forceUpdate()
        },
        changePassword: (value) => {
            this.state.teacher.password = value;
            this.forceUpdate()
        },
        changeMail: (value) => {
            this.state.teacher.mail = value;
            this.forceUpdate()
        },
        changePhones: (value) => {
            this.state.teacher.phones = value;
            this.forceUpdate()
        },
        changeProfession: (value) => {
            this.state.teacher.profession = value;
            this.forceUpdate()
        },
        changeAccessChats: (value) => {
            this.state.teacher.accessChats = value;
            this.forceUpdate()
        },
        changeAccessPerChat: () => {
            this.state.teacher.accessPerChat = !this.state.teacher.accessPerChat
            this.forceUpdate()
        }
    }

    render(){
        return(
            <div><AddTeacher closeAdd={this.props.closeAdd} profession={this.props.profession} addTeacher={this.props.addTeacher} stateFunc={this.stateFunc} teacher={this.state.teacher}/></div>
        )
    }
}

export default AddTeacherDirty;