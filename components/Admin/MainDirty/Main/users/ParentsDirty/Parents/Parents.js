import React from 'react'
import Parent from './Parent/Parent'
import Classes from './Parents.module.css'
import plus from './plus.svg'

class Parents extends React.Component {
    constructor(props){
        super(props)
    }



    render(){


        return(
            <div>
                <div className={Classes.addTeach}>
                    <div>Батьки</div>
                </div>
                <div className={Classes.parentLine}>
                    <div className={Classes.numberTitle}>№</div>
                    <div className={Classes.idTitle}>ID</div>
                    <div className={Classes.nameTitle}>ПІБ</div>
                    <div className={Classes.mailTitle}>Email</div>
                    <div className={Classes.phoneTitle}>Номер телефону</div>
                </div>
                {this.props.state.map((e, i) => {
                    return(
                        <Parent 
                            state={e}
                            i={i}
                            stateFunc = {this.props.stateFunc}
                            lessons = {this.props.lessons}
                            parents = {this.props.state}
                            profession={this.props.profession} 
                            key={"parent" + i}
                            />
                    )
                })}
                
            </div>
        )
    }
}

export default Parents