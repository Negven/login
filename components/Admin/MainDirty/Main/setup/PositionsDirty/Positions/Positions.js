import React from 'react'
import Position from './Position/Position'
import Classes from './Positions.module.css'
import plus from './plus.svg'
import AddPositionDirty from './AddPositionDirty/AddPositionDirty';

class Positions extends React.Component {
    constructor(props){
        super(props)
    }


    stateAdd=null;

    render(){
        if(this.props.stateAdd === 1){
            this.stateAdd = <AddPositionDirty profession={this.props.profession} closeAdd={this.props.closeAddPosition} addPosition={this.props.stateFunc.stateFuncChangPosition.addPosition}/>
        } else this.stateAdd = null

        return(
            <div>
                {this.stateAdd}
                <div className={Classes.addTeach}>
                    <div>Учні</div>
                    <div className={Classes.addBtn} onClick={this.props.openAddPosition}><img src={plus}/></div>
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
                            closeDelete={this.props.closeDelete}
                            openDelete={this.props.openDelete}
                            openAdd={this.props.openAdd}
                            stateDelete={this.props.stateDelete}
                            />
                    )
                })}
                
            </div>
        )
    }
}

export default Positions