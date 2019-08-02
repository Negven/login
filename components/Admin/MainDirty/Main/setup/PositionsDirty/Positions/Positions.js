import React from 'react'
import Position from './Position/Position'
import Classes from './Positions.module.css'
import plus from './plus.svg'

class Positions extends React.Component {
    constructor(props){
        super(props)
    }



    render(){


        return(
            <div>
                <div className={Classes.addTeach}>
                    <div>Учні</div>
                </div>
                <div className={Classes.positionLine}>
                    <div className={Classes.numberTitle}>№</div>

                </div>
                {this.props.profession.map((e, i) => {
                    return(
                        <Position 
                            state={e}
                            i={i}
                            stateFunc = {this.props.stateFunc}
                            classes = {this.props.classes}
                            positions = {this.props.profession}
                            profession={this.props.profession} 
                            key={"position" + i}
                            />
                    )
                })}
                
            </div>
        )
    }
}

export default Positions