import React from 'react'
import Teacher from './Teacher/Teacher'
import Classes from './Teachers.module.css'
import plus from './plus.svg'

class Teachers extends React.Component {
    constructor(props){
        super(props)
    }



    render(){

        return(
            <div>
                <div className={Classes.addTeach}>
                    <div>Вчителі</div>
                </div>
                <div className={Classes.teacherLine}>
                    <div className={Classes.numberTitle}>№</div>
                    <div className={Classes.idTitle}>ID</div>
                    <div className={Classes.nameTitle}>ПІБ</div>
                    <div className={Classes.mailTitle}>Email</div>
                    <div className={Classes.phoneTitle}>Номер телефону</div>
                    <div className={Classes.professionTitle}>Посаду</div>
                </div>
                {this.props.state.map((e, i) => {
                    return(
                        <Teacher 
                            state={e}
                            i={i}
                            stateFunc = {this.props.stateFunc}
                            lessons = {this.props.lessons}
                            teachers = {this.props.state}
                            profession={this.props.profession} 
                            key={"teacher" + i}

                            />
                    )
                })}
                
            </div>
        )
    }
}

export default Teachers