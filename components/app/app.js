import React, { Component, Fragment } from 'react';
import Classes from './app.module.css';

import Logo from '../logo/logo.js';
import Login from '../login/login.js';
import ErrLogin from '../login/errorLogin/errorLogin.js';
import Admin from '../Admin/Admin';

import { runInThisContext } from 'vm';

export default class App extends Component {
  
  state = {
    stateMain: 0,
    stateToken: 0,
    stateTokenRefresh: 0,
    stateAPI: {},
    stateError: 0,
    stateAdmin: {
      state: {
        classList: [
          { 
            name: '1A',
            id: 0,
          },
          {
            name: '1Б',
            id: 1,
          },
          {
            name: '1В',
            id: 2,
          },
          {
            name: '1Г',
            id: 3,
          },
          {
            name: '1Д',
            id: 4,
          },
      ],
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
                    duration: 1,
                    lessonId: 2,
                    teacher: 1,
                    group: 0,
                    change: 0,
                },
                {
                    number: 2,
                    time: '09:55:00',
                    duration: 1,
                    lessonId: 2,
                    teacher: 1,
                    group: 0,
                    change: 0,
                },
                {
                    number: 3,
                    time: '10:50:00',
                    duration: 1,
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
                    duration: 1,
                    lessonId: 2,
                    teacher: 1,
                    group: 0,
                    change: 0,
                },
                {
                    number: 2,
                    time: '09:55:00',
                    duration: 1,
                    lessonId: 2,
                    teacher: 1,
                    group: 0,
                    change: 0,
                },
                {
                    number: 3,
                    time: '10:50:00',
                    duration: 1,
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
                    duration: 1,
                    lessonId: 2,
                    teacher: 1,
                    group: 0,
                    change: 0,
                },
                {
                    number: 2,
                    time: '09:55:00',
                    duration: 1,
                    lessonId: 2,
                    teacher: 1,
                    group: 0,
                    change: 0,
                },
                {
                    number: 3,
                    time: '10:50:00',
                    duration: 1,
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
                    duration: 1,
                    lessonId: 2,
                    teacher: 1,
                    group: 0,
                    change: 0,
                },
                {
                    number: 2,
                    time: '09:55:00',
                    duration: 1,
                    lessonId: 2,
                    teacher: 1,
                    group: 0,
                    change: 0,
                },
                {
                    number: 3,
                    time: '10:50:00',
                    duration: 1,
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
                    duration: 1,
                    lessonId: 2,
                    teacher: 1,
                    group: 0,
                    change: 0,
                },
                {
                    number: 2,
                    time: '09:55:00',
                    duration: 1,
                    lessonId: 2,
                    teacher: 1,
                    group: 0,
                    change: 0,
                },
                {
                    number: 3,
                    time: '10:50:00',
                    duration: 1,
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
            [
                {
                    name: '1 Группа',
                    id: 0,
                    pupils: [ 0, 1 ],
                },
                {
                    name: '2 Группа',
                    id: 1,
                    pupils: [ 3, 2 ],
                }
            ],
            [
                {
                    name: '1 Группа',
                    id: 0,
                    pupils: [ 0, 1, 2, 3 ],
                },
            ],
            [
                {
                    name: '1 Группа',
                    id: 0,
                    pupils: [ 0, 1 ],
                },
                {
                    name: '2 Группа',
                    id: 1,
                    pupils: [ 3, 2 ],
                }
            ],
            [
                {
                    name: '1 Группа',
                    id: 0,
                    pupils: [ 2, 3 ],
                },
                {
                    name: '2 Группа',
                    id: 1,
                    pupils: [ 1, 0 ],
                }
            ],
        ],
        plan: [],
        stateMainAdmin: 0,
        closeSelect: false,
        id: 0,
        classId: null,
    },


    
    stateFuncToolbar: {
      open: () => {
        let newState = { ...this.state }
        newState.stateAdmin.state.closeSelect = !newState.stateAdmin.state.closeSelect
        console.log(newState.stateAdmin.state.closeSelect)
        this.setState({ state: newState })
      },
      select: (value) => {
          let newState = { ...this.state }
          newState.stateAdmin.state.classId = value;
          newState.stateAdmin.state.closeSelect = !newState.stateAdmin.state.closeSelect
          this.setState({ state: newState })
      },  
      enterSelect: (id) => {
          document.getElementById(id).classList.value = Classes.cellEnter
      },
      leaveSelect: (id) => {
        document.getElementById(id).classList.value = Classes.cell
      }
    },
    stateFuncMenu: {
        changeStateTeacher: () => {
          let newState = { ...this.state }
          newState.stateAdmin.state.stateMain = 1
          this.setState({state: newState}) 
        },
        changeStateParents: () => {
          let newState = { ...this.state }
          newState.stateAdmin.state.stateMain = 2
          this.setState({state: newState})
        },
        changeStateSchoolboys: () => {
          let newState = { ...this.state }
          newState.stateAdmin.state.stateMain = 3
          this.setState({state: newState})        
        },
        changeStateSchedule: () => {
          let newState = { ...this.state }
          newState.stateAdmin.state.stateMain = 4
          this.setState({state: newState})        
        },
        changeStateGroup: () => {
          let newState = { ...this.state }
          newState.stateAdmin.state.stateMain = 5
          this.setState({state: newState})        
        },
        changeStateType: () => {
          let newState = { ...this.state }
          newState.stateAdmin.state.stateMain = 7
          this.setState({state: newState})        
        },
        changeStateLesson: () => {
          let newState = { ...this.state }
          newState.stateAdmin.state.stateMain = 8
          this.setState({state: newState})        
        },
        changeStatePosition: () => {
          let newState = { ...this.state }
          newState.stateAdmin.state.stateMain = 9
          this.setState({state: newState})        
        },
    },

    stateFuncMain: {
        selectLesson: (value, id) => {
            let x = true;
            let newState = { ...this.state }
            for (let i in newState.stateAdmin.state.teachers[id].lessons){
                if(newState.stateAdmin.state.lessons[value].name === newState.stateAdmin.state.teachers[id].lessons[i]){ x = false}
            }
            if(x){
                newState.stateAdmin.state.teachers[id].lessons.push(newState.stateAdmin.state.lessons[value].name) 
            }
            this.setState({state: newState})
        },




        stateFuncChangTeacher: {

            changeSecondName: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.teachers[id].name.secondName = value;
                this.setState({ state: newState })
            },
            changeFirstName: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.teachers[id].name.firstName = value;
                this.setState({ state: newState })
            },
            changeLastName: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.teachers[id].name.lastName = value;
                this.setState({ state: newState })
            },
            changeLogin: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.teachers[id].login = value;
                this.setState({ state: newState })
            },
            changePassword: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.teachers[id].password = value;
                this.setState({ state: newState })
            },
            changeMail: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.teachers[id].mail = value;
                this.setState({ state: newState })
            },
            changePhones: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.teachers[id].phones = value;
                this.setState({ state: newState })
            },
            changeProfession: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.teachers[id].profession = value;
                this.setState({ state: newState })
            },
            changeAccessChats: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.teachers[id].accessChats = value;
                this.setState({ state: newState })
            },
            changeAccessPerChat: (id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.teachers[id].accessPerChat = !this.state.teachers[id].accessPerChat
                this.setState({ state: newState })
            },
        },
        stateFuncChangParent: {

            changeSecondName: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.parents[id].name.secondName = value;
                this.setState({ state: newState })
            },
            changeFirstName: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.parents[id].name.firstName = value;
                this.setState({ state: newState })
            },
            changeLastName: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.parents[id].name.lastName = value;
                this.setState({ state: newState })
            },
            changeLogin: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.parents[id].login = value;
                this.setState({ state: newState })
            },
            changePassword: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.parents[id].password = value;
                this.setState({ state: newState })
            },
            changeMail: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.parents[id].mail = value;
                this.setState({ state: newState })
            },
            changePhones: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.parents[id].phones = value;
                this.setState({ state: newState })
            },
            selectChildren: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.parents[id].children.push(value)
                this.setState({ state: newState })
            }
        },
        stateFuncChangSchoolboy: {

            changeSecondName: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.schoolboys[id].name.secondName = value;
                this.setState({ state: newState })
            },
            changeFirstName: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.schoolboys[id].name.firstName = value;
                this.setState({ state: newState })
            },
            changeLastName: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.schoolboys[id].name.lastName = value;
                this.setState({ state: newState })
            },
            changeLogin: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.schoolboys[id].login = value;
                this.setState({ state: newState })
            },
            changePassword: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.schoolboys[id].password = value;
                this.setState({ state: newState })
            },
            changeMail: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.schoolboys[id].mail = value;
                this.setState({ state: newState })
            },
            changePhones: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.schoolboys[id].phones = value;
                this.setState({ state: newState })
            },
            changeProfession: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.schoolboys[id].profession = value;
                this.setState({ state: newState })
            },
            changeAccessChats: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.schoolboys[id].accessChats = value;
                this.setState({ state: newState })
            },
            changeAccessPerChat: (id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.schoolboys[id].accessPerChat = !newState.stateAdmin.state.schoolboys[id].accessPerChat
                this.setState({ state: newState })
            },
        },
        stateFuncSchedule: {
            changeDuration: (value, idDay, idLesson) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.schedule[idDay][idLesson].duration = value
                newState.stateAdmin.state.schedule[idDay][idLesson].change = 1
                this.setState({ state: newState })
            },
            changeNumber: (value, idDay, idLesson) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.schedule[idDay][idLesson].number = value
                newState.stateAdmin.state.schedule[idDay][idLesson].change = 1
                this.setState({ state: newState })
            },
            changeTime: (value, idDay, idLesson) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.schedule[idDay][idLesson].time = value
                newState.stateAdmin.state.schedule[idDay][idLesson].change = 1
                this.setState({ state: newState })
            },
            changeLesson: (value, idDay, idLesson) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.schedule[idDay][idLesson].lessonId = value
                newState.stateAdmin.state.schedule[idDay][idLesson].change = 1
                this.setState({ state: newState })
            },
            changeTeacher: (value, idDay, idLesson) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.schedule[idDay][idLesson].teacher = value
                newState.stateAdmin.state.schedule[idDay][idLesson].change = 1
                this.setState({ state: newState })
            },
            changeGroup: (value, idDay, idLesson) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.schedule[idDay][idLesson].group = value
                newState.stateAdmin.state.schedule[idDay][idLesson].change = 1
                this.setState({ state: newState })
            },
            saveLesson: (idDay, idLesson) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.schedule[idDay][idLesson].change = 0
                this.setState({ state: newState })
            },

        },
        stateFuncChangType: {
            changeName: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.types[id].name = value;
                this.setState({ state: newState })
            },
            changeShortName: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.types[id].shortName = value;
                this.setState({ state: newState })
            },
        },
        stateFuncChangLesson: {
            changeName: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.lessons[id].name = value;
                this.setState({ state: newState })
            },
            changeShortName: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.lessons[id].shortName = value;
                this.setState({ state: newState })
            },

        },
        stateFuncChangPosition: {


            changeName: (value, id) => {
                let newState = { ...this.state }
                newState.stateAdmin.state.profession[id].name = value;
                this.setState({ state: newState })
            },
        },
        stateFuncChangPosition: {
            changeTeacher: (value) => {
                let newState = { ...this.state }
                
            }
        },
    }
  }
  };

  updateDataAPI = ( value ) => {
    this.setState( { stateAPI: value } );
  };

  updateErrorChek = ( value ) => {
    this.setState( { stateError: value } );
  };
  
  changeStateLogin = () => {
    this.setState( { stateMain: 1 } );
  };

  changeStateJournal = () => {
    this.setState( { stateMain: 2 } );
  };

  changeStateErrorConnecting = () => {
    this.setState( { stateMain: 0 } );
    this.setState( { stateError: 1 } );
  }

  render() {

    let startState = null;
    let connectState = null;
    const { stateMain, stateMenu, stateError, stateReplacement } = this.state;

    if( stateMain === 0 ) {

      startState = <a to="/login"><Logo
        changeStateLogin = { this.changeStateLogin }
        stateTest = { this.state.stateMain } /></a>

    } else if( stateMain === 1 ) {

      startState = <Login
          changeStateJournal = { this.changeStateJournal }
          changeStateMainJournal = { this.changeStateMainJournal }
          stateTest = { this.state.stateMain }
          updateDataAPI = { this.updateDataAPI }
          updateErrorChek = { this.updateErrorChek }
          stateError = { this.state.stateError }/>
      if( stateError === 1 ){
        connectState = <ErrLogin
          textAlert = "Відсутній зв'язок або сервер тимчасово недоступен."
          textAlertTwo = "Спробуйте під'єднатися через деякий час"
          updateErrorChek = { this.updateErrorChek } />
      } else if( stateError === 2 ) {
        connectState = <ErrLogin
          textAlert = "Невірний логін або пароль"
          textAlertTwo = ""
          updateErrorChek = { this.updateErrorChek } />
      }

    } else if( stateMain === 2 ) {

      startState = <Admin state={this.state.stateAdmin} changeStateLogin={this.changeStateLogin}/>

    }

  

    return (

      <Fragment>

        { startState }
        { connectState }

      </Fragment>

    );

  }

}