import React from 'react'
import Positions from './Positions/Positions'

class PositionsDirty extends React.Component {
    constructor(props){
        super(props)
    }

    stateAdd = null

    openAddPosition = () => {
        this.stateAdd=1
        this.forceUpdate()
    }

    closeAddPosition = () => {
        this.stateAdd=0
        this.forceUpdate()
    }
    

    render(){
        return(
            <div> <Positions
                    stateFunc={this.props.stateFunc}
                    profession={this.props.profession} 
                    classes={this.props.classes} 
                    stateAdd={this.stateAdd}
                    closeDelete={this.props.closeDelete}
                    openDelete={this.props.openDelete}
                    openAddPosition={this.openAddPosition}
                    state={this.props.state}
                    profession={this.props.profession}
                    stateDelete={this.props.stateDelete}
                    openAdd={this.props.openAdd}
                    closeAddPosition={this.closeAddPosition}/>
            </div>
        )
    }
}

export default PositionsDirty