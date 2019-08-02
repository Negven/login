import React from 'react'
import Type from './Type/Type'
import Classes from './Types.module.css'
import plus from './plus.svg'

class Types extends React.Component {
    constructor(props){
        super(props)
    }



    render(){

        return(
            <div>
                <div className={Classes.addTeach}>
                    <div>Учні</div>
                </div>
                <div className={Classes.typeLine}>
                    <div className={Classes.numberTitle}>№</div>
                    <div className={Classes.idTitle}>ID</div>
                    <div className={Classes.nameTitle}>ПІБ</div>
                </div>
                {this.props.state.map((e, i) => {
                    return(
                        <Type 
                            state={e}
                            i={i}
                            stateFunc = {this.props.stateFunc}
                            classes = {this.props.classes}
                            types = {this.props.state}
                            profession={this.props.profession} 
                            key={"type" + i}


                            />
                    )
                })}
                
            </div>
        )
    }
}

export default Types