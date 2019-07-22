import React from 'react'
import Parents from './Parents/Parents'

class ParentsDirty extends React.Component {
    constructor(props){
        super(props)
    }

    stateAdd = null

    openAddParent = () => {
        this.stateAdd=1
        this.forceUpdate()
    }

    closeAddParent = () => {
        this.stateAdd=0
        this.forceUpdate()
    }

    render(){
        return(
            <div> <Parents
                    closeAddParent={this.closeAddParent}
                    openAddParent={this.openAddParent}
                    stateFunc={this.props.stateFunc}
                    stateAdd={this.stateAdd}
                    addParent={this.props.addParent}
                    openDelete={this.props.openDelete}
                    state={this.props.state}
                    closeAdd={this.closeAdd}
                    openAdd={this.props.openAdd}/>
                    </div>
        )
    }
}

export default ParentsDirty

