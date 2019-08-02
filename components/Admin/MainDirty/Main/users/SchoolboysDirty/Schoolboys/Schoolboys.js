import React from 'react'
import Schoolboy from './Schoolboy/Schoolboy'
import Classes from './Schoolboys.module.css'
import plus from './plus.svg'

class Schoolboys extends React.Component {
    constructor(props){
        super(props)
    }



    render(){

        return(
            <div>
                <div className={Classes.addTeach}>
                    <div>Учні</div>
                </div>
                <div className={Classes.schoolboyLine}>
                    <div className={Classes.numberTitle}>№</div>
                    <div className={Classes.idTitle}>ID</div>
                    <div className={Classes.nameTitle}>ПІБ</div>
                </div>
                {this.props.state.map((e, i) => {
                    return(
                        <Schoolboy 
                            state={e}
                            i={i}
                            stateFunc = {this.props.stateFunc}
                            classes = {this.props.classes}
                            schoolboys = {this.props.state}
                            profession={this.props.profession} 
                            key={"schoolboy" + i}


                            />
                    )
                })}
                
            </div>
        )
    }
}

export default Schoolboys