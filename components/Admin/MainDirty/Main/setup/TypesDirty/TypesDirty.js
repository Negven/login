import React from 'react'
import Types from './Types/Types'

class TypesDirty extends React.Component {
    constructor(props){
        super(props)
    }

    stateAdd = null

    openAddType = () => {
        this.stateAdd=1
        this.forceUpdate()
    }

    closeAddType = () => {
        this.stateAdd=0
        this.forceUpdate()
    }
    

    render(){
        return(
            <div> <Types
                    stateFunc={this.props.stateFunc}
                    profession={this.props.profession} 
                    classes={this.props.classes} 
                    stateAdd={this.stateAdd}
                    closeDelete={this.props.closeDelete}
                    openDelete={this.props.openDelete}
                    openAddType={this.openAddType}
                    state={this.props.state}
                    type={this.props.type}
                    stateDelete={this.props.stateDelete}
                    openAdd={this.props.openAdd}
                    closeAddType={this.closeAddType}/>
            </div>
        )
    }
}

export default TypesDirty