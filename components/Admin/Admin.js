import React from 'react'
import Toolbar from './Toolbar/Toolbar';
import MenuDirty from './MenuDirty/MenuDirty';
import MainDirty from './MainDirty/MainDirty'
import Classes from './Admin.module.css';

class Admin extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        lessons: [
            {
                id: 0,
                name: 'test0'
            },
            {
                id: 1,
                name: 'test1'
            },
            {
                id: 2,
                name: 'test2'
            },
            {
                id: 3,
                name: 'test3'
            },
        ],
        classes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        profession: [
            {
                id: 0,
                name: 'Директор',
            },
            {
                id: 1,
                name: 'Вчитель'
            }
        ],
        teachers:[
            {
                id: 293,
                name: {
                    firstName: 'Євгеній',
                    secondName: 'Шевченко',
                    lastName: 'Сергійович',
                },
                mail: 'chtoto@gmail.com', 
                phones: '0983315174',

                profession: 1,
                lessons: [
                    'Ведьмачьи знаки',
                    'Дотка',
                ],
                login: '111',
                password: '222',
                accessChats: 'Вчитель',
                accessPerChat: true,
            },
            {
                id: 294,
                name: {
                    firstName: 'Камілла',
                    secondName: 'Бриль',
                    lastName: 'Сергіївна',
                },
                mail: 'bembem@gmail.com', 
                phones: '0983133151',
                profession: 1,
                lessons: [
                    'Матеша',
                    'Харстоун',
                ],
                login: '111',
                password: '222',
                accessChats: 'Вчитель',
                accessPerChat: true,
            },
            {
                id: 295,
                name: {
                    firstName: 'Марина',
                    secondName: 'Яценко',
                    lastName: 'Олексіївна',
                },
                mail: 'deadinside@gmail.com', 
                phones: '0983315321',
                profession: 1,
                lessons: [
                    'Українська мова',
                ],
                login: '111',
                password: '222',
                accessChats: 'Вчитель',
                accessPerChat: true,
            },
            {
                id: 296,
                name: {
                    firstName: 'Микола',
                    secondName: 'Максай',
                    lastName: 'Олександрович',
                },
                mail: 'backHell@gmail.com', 
                phones: '0985431414',
                profession: 1,
                lessons: [
                    'Фифа',
                    'Харстоун',
                ],
                login: '111',
                password: '222',
                accessChats: 'Вчитель',
                accessPerChat: true,
            },
            {
                id: 297,
                name: {
                    firstName: 'Геральт',
                    secondName: 'Ткаченко',
                    lastName: 'Сергійович',
                },
                mail: 'vedmak777@gmail.com', 
                phones: '0931151783',
                profession: 0,
                lessons: [ ],
                login: '111',
                password: '222',
                accessChats: 'Вчитель',
                accessPerChat: true,
            },
        ], 
        parents:[
            {
                id: 293,
                name: {
                    firstName: 'Євгеній',
                    secondName: 'Шевченко',
                    lastName: 'Сергійович',
                },
                mail: 'chtoto@gmail.com', 
                phones: '0983315174',

                children: [
                    'Саша',
                    'Даня',
                ],
                login: '111',
                password: '222',
            },
            {
                id: 294,
                name: {
                    firstName: 'Камілла',
                    secondName: 'Бриль',
                    lastName: 'Сергіївна',
                },
                mail: 'bembem@gmail.com', 
                phones: '0983133151',
                children: [
                    'Саша',
                    'Даня',
                ],
                login: '111',
                password: '222',
            },
            {
                id: 295,
                name: {
                    firstName: 'Марина',
                    secondName: 'Яценко',
                    lastName: 'Олексіївна',
                },
                mail: 'deadinside@gmail.com', 
                phones: '0983315321',
                children: [
                    'Саша',
                    'Даня',
                ],
                login: '111',
                password: '222',
            },
            {
                id: 296,
                name: {
                    firstName: 'Микола',
                    secondName: 'Максай',
                    lastName: 'Олександрович',
                },
                mail: 'backHell@gmail.com', 
                phones: '0985431414',
                children: [
                    'Саша',
                    'Даня',
                ],
                login: '111',
                password: '222',
            },
            {
                id: 297,
                name: {
                    firstName: 'Геральт',
                    secondName: 'Ткаченко',
                    lastName: 'Сергійович',
                },
                mail: 'vedmak777@gmail.com', 
                phones: '0931151783',
                children: [
                    'Саша',
                    'Даня',
                ],
                login: '111',
                password: '222',
            },
        ], 
        schoolboys:[
            {
                id: 294,
                name: {
                    firstName: 'Камілла',
                    secondName: 'Бриль',
                    lastName: 'Сергіївна',
                },
                class: 9,
                login: '111',
                password: '222',
            },
            {
                id: 295,
                name: {
                    firstName: 'Марина',
                    secondName: 'Яценко',
                    lastName: 'Олексіївна',
                },
                class: 7,
                login: '111',
                password: '222',
            },
            {
                id: 296,
                name: {
                    firstName: 'Микола',
                    secondName: 'Максай',
                    lastName: 'Олександрович',
                },
                class: 9,
                login: '111',
                password: '222',
            },
            {
                id: 297,
                name: {
                    firstName: 'Геральт',
                    secondName: 'Ткаченко',
                    lastName: 'Сергійович',
                },
                login: '111',
                password: '222',
            },
        ], 
        schedule: [
            [
                {
                    number: 1,
                    time: '09:00:00',
                    duration: 45,
                    lessonId: 2,
                    teacher: 1,
                    group: 0,
                    change: 0,
                },
                {
                    number: 2,
                    time: '09:55:00',
                    duration: 45,
                    lessonId: 2,
                    teacher: 1,
                    group: 0,
                    change: 0,
                },
                {
                    number: 3,
                    time: '10:50:00',
                    duration: 45,
                    lessonId: 2,
                    teacher: 1,
                    group: 0,
                    change: 0,
                },
            ],
            [
                {
                    number: 1,
                    time: '09:00:00',
                    duration: 45,
                    lessonId: 2,
                    teacher: 1,
                    group: 0,
                    change: 0,
                },
                {
                    number: 2,
                    time: '09:55:00',
                    duration: 45,
                    lessonId: 2,
                    teacher: 1,
                    group: 0,
                    change: 0,
                },
                {
                    number: 3,
                    time: '10:50:00',
                    duration: 45,
                    lessonId: 2,
                    teacher: 1,
                    group: 0,
                    change: 0,
                },
            ],
            [
                {
                    number: 1,
                    time: '09:00:00',
                    duration: 45,
                    lessonId: 2,
                    teacher: 1,
                    group: 0,
                    change: 0,
                },
                {
                    number: 2,
                    time: '09:55:00',
                    duration: 45,
                    lessonId: 2,
                    teacher: 1,
                    group: 0,
                    change: 0,
                },
                {
                    number: 3,
                    time: '10:50:00',
                    duration: 45,
                    lessonId: 2,
                    teacher: 1,
                    group: 0,
                    change: 0,
                },
            ],
            [
                {
                    number: 1,
                    time: '09:00:00',
                    duration: 45,
                    lessonId: 2,
                    teacher: 1,
                    group: 0,
                    change: 0,
                },
                {
                    number: 2,
                    time: '09:55:00',
                    duration: 45,
                    lessonId: 2,
                    teacher: 1,
                    group: 0,
                    change: 0,
                },
                {
                    number: 3,
                    time: '10:50:00',
                    duration: 45,
                    lessonId: 2,
                    teacher: 1,
                    group: 0,
                    change: 0,
                },
            ],
            [
                {
                    number: 1,
                    time: '09:00:00',
                    duration: 45,
                    lessonId: 2,
                    teacher: 1,
                    group: 0,
                    change: 0,
                },
                {
                    number: 2,
                    time: '09:55:00',
                    duration: 45,
                    lessonId: 2,
                    teacher: 1,
                    group: 0,
                    change: 0,
                },
                {
                    number: 3,
                    time: '10:50:00',
                    duration: 45,
                    lessonId: 2,
                    teacher: 1,
                    group: 0,
                    change: 0,
                },
            ],
            
        ],
        types: [
            {
                name: 'Говоріння',
                id: '299123',
                shortName: 'Г',
            },
            {
                name: 'Аудіювання',
                id: '299123',
                shortName: 'А',
            },
            {
                name: 'Домашнє завдання',
                id: '299123',
                shortName: 'ДЗ',
            },
        ],
        days: ['Понеділок', 'Вівторок', 'Середа', 'Четвер', `П'ятниця`, 'Субота', 'Неділя'],
        durations: ['30', '35', '40', '45', '50', '55', '60'],
        groups: [
            {
                name: '1 Группа',
                id: 0,
            },
            {
                name: '2 Группа',
                id: 1,
            }
        ],
        stateMain: 0,
        stateDelete: 0,
        popUpDelete: null,
        id: 0,
    }


    

    stateFuncMenu = {
        changeStateTeacher: () => {
            this.setState({stateMain: 1}) 
        },
        changeStateParents: () => {
            this.setState({stateMain: 2}) 
        },
        changeStateSchoolboys: () => {
            this.setState({stateMain: 3}) 
        },
        changeStateSchedule: () => {
            this.setState({stateMain: 4}) 
        },
        changeStateType: () => {
            this.setState({stateMain: 7}) 
        },
        changeStateLesson: () => {
            this.setState({stateMain: 8}) 
        },
        changeStatePosition: () => {
            this.setState({stateMain: 9}) 
        },
    }

    stateFuncMain = {
        selectLesson: (value, id) => {
            let x = true;
            let newState = { ...this.state }
            for (let i in this.state.teachers[id].lessons){
                if(newState.lessons[value].name === newState.teachers[id].lessons[i]){ x = false}
            }
            if(x){
                newState.teachers[id].lessons.push(newState.lessons[value].name) 
            }
            this.setState({state: newState})
        },
        deleteLesson: (idTeacher, idLesson) => {
            let newState = { ...this.state }
            newState.teachers[idTeacher].lessons.splice(idLesson, 1);
            this.setState({state: newState})
        },
        addTeacher: (value) => {
            let newState = { ...this.state }
            newState.teachers.push(value)
            this.setState({ state: newState })
        },
        addParent: (value) => {
            let newState = { ...this.state }
            newState.parents.push(value)
            this.setState({ })
        },
        openDelete: (id) => {
            this.setState({id: id})
            this.setState({ stateDelete: 1})
        },
        openAdd: (id) => {
            this.setState({id: id})
            this.setState({ stateDelete: 2})
        },
        closeDelete: () => {
            this.setState({stateDelete: 0})
        },
        stateFuncChangTeacher: {
            stateDeleteTeacher: (value) => {
                this.setState({teachers: value}) 
            },
            changeSecondName: (value, id) => {
                let newState = { ...this.state }
                newState.teachers[id].name.secondName = value;
                this.setState({ state: newState })
            },
            changeFirstName: (value, id) => {
                let newState = { ...this.state }
                newState.teachers[id].name.firstName = value;
                this.setState({ state: newState })
            },
            changeLastName: (value, id) => {
                let newState = { ...this.state }
                newState.teachers[id].name.lastName = value;
                this.setState({ state: newState })
            },
            changeLogin: (value, id) => {
                let newState = { ...this.state }
                newState.teachers[id].login = value;
                this.setState({ state: newState })
            },
            changePassword: (value, id) => {
                let newState = { ...this.state }
                newState.teachers[id].password = value;
                this.setState({ state: newState })
            },
            changeMail: (value, id) => {
                let newState = { ...this.state }
                newState.teachers[id].mail = value;
                this.setState({ state: newState })
            },
            changePhones: (value, id) => {
                let newState = { ...this.state }
                newState.teachers[id].phones = value;
                this.setState({ state: newState })
            },
            changeProfession: (value, id) => {
                let newState = { ...this.state }
                newState.teachers[id].profession = value;
                this.setState({ state: newState })
            },
            changeAccessChats: (value, id) => {
                let newState = { ...this.state }
                newState.teachers[id].accessChats = value;
                this.setState({ state: newState })
            },
            changeAccessPerChat: (id) => {
                let newState = { ...this.state }
                newState.teachers[id].accessPerChat = !this.state.teachers[id].accessPerChat
                this.setState({ state: newState })
            },
        },
        stateFuncChangParent: {
            deleteChildren: (idParent, idChildren) => {
                let newState = { ...this.state }
                newState.parents[idParent].children.splice(idChildren, 1);
                this.setState({ state: newState })
            },
            stateDeleteParent: (value) => {
                this.setState({parents: value}) 
            },
            changeSecondName: (value, id) => {
                let newState = { ...this.state }
                newState.parents[id].name.secondName = value;
                this.setState({ state: newState })
            },
            changeFirstName: (value, id) => {
                let newState = { ...this.state }
                newState.parents[id].name.firstName = value;
                this.setState({ state: newState })
            },
            changeLastName: (value, id) => {
                let newState = { ...this.state }
                newState.parents[id].name.lastName = value;
                this.setState({ state: newState })
            },
            changeLogin: (value, id) => {
                let newState = { ...this.state }
                newState.parents[id].login = value;
                this.setState({ state: newState })
            },
            changePassword: (value, id) => {
                let newState = { ...this.state }
                newState.parents[id].password = value;
                this.setState({ state: newState })
            },
            changeMail: (value, id) => {
                let newState = { ...this.state }
                newState.parents[id].mail = value;
                this.setState({ state: newState })
            },
            changePhones: (value, id) => {
                let newState = { ...this.state }
                newState.parents[id].phones = value;
                this.setState({ state: newState })
            },
            selectChildren: (value, id) => {
                let newState = { ...this.state }
                newState.parents[id].children.push(value)
                this.setState({ state: newState })
            }
        },
        stateFuncChangSchoolboy: {
            stateDeleteSchoolboy: (value) => {
                this.setState({schoolboys: value}) 
            },
            addSchoolboy: (value) => {
                let newState = { ...this.state }
                newState.schoolboys.push(value)
                this.setState({ state: newState })
            },
            changeSecondName: (value, id) => {
                let newState = { ...this.state }
                newState.schoolboys[id].name.secondName = value;
                this.setState({ state: newState })
            },
            changeFirstName: (value, id) => {
                let newState = { ...this.state }
                newState.schoolboys[id].name.firstName = value;
                this.setState({ state: newState })
            },
            changeLastName: (value, id) => {
                let newState = { ...this.state }
                newState.schoolboys[id].name.lastName = value;
                this.setState({ state: newState })
            },
            changeLogin: (value, id) => {
                let newState = { ...this.state }
                newState.schoolboys[id].login = value;
                this.setState({ state: newState })
            },
            changePassword: (value, id) => {
                let newState = { ...this.state }
                newState.schoolboys[id].password = value;
                this.setState({ state: newState })
            },
            changeMail: (value, id) => {
                let newState = { ...this.state }
                newState.schoolboys[id].mail = value;
                this.setState({ state: newState })
            },
            changePhones: (value, id) => {
                let newState = { ...this.state }
                newState.schoolboys[id].phones = value;
                this.setState({ state: newState })
            },
            changeProfession: (value, id) => {
                let newState = { ...this.state }
                newState.schoolboys[id].profession = value;
                this.setState({ state: newState })
            },
            changeAccessChats: (value, id) => {
                let newState = { ...this.state }
                newState.schoolboys[id].accessChats = value;
                this.setState({ state: newState })
            },
            changeAccessPerChat: (id) => {
                let newState = { ...this.state }
                newState.schoolboys[id].accessPerChat = !newState.schoolboys[id].accessPerChat
                this.setState({ state: newState })
            },
        },
        stateFuncSchedule: {
            addLesson: (idDay) => {
                let newState = { ...this.state }
                let lesson = {
                    number: this.state.schedule[idDay].length + 1 ,
                    time: '',
                    duration: null,
                    lessonId: null,
                    teacher: null,
                    group: null,
                    change: 0,
                }
                newState.schedule[idDay].push(lesson)
                this.setState({ state: newState })
            },
            changeDuration: (value, idDay, idLesson) => {
                let newState = { ...this.state }
                newState.schedule[idDay][idLesson].duration = value
                newState.schedule[idDay][idLesson].change = 1
                this.setState({ state: newState })
            },
            changeNumber: (value, idDay, idLesson) => {
                let newState = { ...this.state }
                newState.schedule[idDay][idLesson].number = value
                newState.schedule[idDay][idLesson].change = 1
                this.setState({ state: newState })
            },
            changeTime: (value, idDay, idLesson) => {
                let newState = { ...this.state }
                newState.schedule[idDay][idLesson].time = value
                newState.schedule[idDay][idLesson].change = 1
                this.setState({ state: newState })
            },
            changeLesson: (value, idDay, idLesson) => {
                let newState = { ...this.state }
                newState.schedule[idDay][idLesson].lessonId = value
                newState.schedule[idDay][idLesson].change = 1
                this.setState({ state: newState })
            },
            changeTeacher: (value, idDay, idLesson) => {
                let newState = { ...this.state }
                newState.schedule[idDay][idLesson].teacher = value
                newState.schedule[idDay][idLesson].change = 1
                this.setState({ state: newState })
            },
            changeGroup: (value, idDay, idLesson) => {
                let newState = { ...this.state }
                newState.schedule[idDay][idLesson].group = value
                newState.schedule[idDay][idLesson].change = 1
                this.setState({ state: newState })
            },
            saveLesson: (idDay, idLesson) => {
                let newState = { ...this.state }
                newState.schedule[idDay][idLesson].change = 0
                this.setState({ state: newState })
            },
            deleteLesson: (idDay, idLesson) => {
                let newState = { ...this.state }
                newState.schedule[idDay].splice(idLesson, 1)
                newState.schedule.map((day)=>{
                    day.map((lesson, numLesson) => {
                        lesson.number = numLesson + 1
                    })
                })
                this.setState({ state: newState })
            }
        },
        stateFuncChangType: {
            stateDeleteType: (value) => {
                this.setState({types: value}) 
            },
            addType: (value) => {
                let newState = { ...this.state }
                newState.types.push(value)
                this.setState({ state: newState })
            },
            changeName: (value, id) => {
                let newState = { ...this.state }
                newState.types[id].name = value;
                this.setState({ state: newState })
            },
            changeShortName: (value, id) => {
                let newState = { ...this.state }
                newState.types[id].shortName = value;
                this.setState({ state: newState })
            },
        },
        stateFuncChangLesson: {
            stateDeleteLesson: (value) => {
                this.setState({lessons: value}) 
            },
            addLesson: (value) => {
                let newState = { ...this.state }
                newState.lessons.push(value)
                this.setState({ state: newState })
            },
            changeName: (value, id) => {
                let newState = { ...this.state }
                newState.lessons[id].name = value;
                this.setState({ state: newState })
            },
            changeShortName: (value, id) => {
                let newState = { ...this.state }
                newState.lessons[id].shortName = value;
                this.setState({ state: newState })
            },
        },
        stateFuncChangPosition: {
            stateDeletePosition: (value) => {
                this.setState({positions: value}) 
            },
            addPosition: (value) => {
                let newState = { ...this.state }
                newState.profession.push(value)
                this.setState({ state: newState })
            },
            changeName: (value, id) => {
                let newState = { ...this.state }
                newState.profession[id].name = value;
                this.setState({ state: newState })
            },
        },
    }
    

    render(){
        return(
            <div className={Classes.back}>
                <MenuDirty stateFunc={this.stateFuncMenu}/>
                <MainDirty stateFunc={this.stateFuncMain} stateMain={this.stateMain} state={this.state}/>

                <Toolbar  changeStateLogin={this.props.changeStateLogin}/>

            </div>
        )
    }
}


export default Admin